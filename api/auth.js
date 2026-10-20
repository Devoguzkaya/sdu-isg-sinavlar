// Vercel Serverless Function — Login, Signup, Plan Management & Admin API
import crypto from 'crypto';

const DB_OBJECT_ID = 'ff808181a09d98f701a15a6cccf13285';
const DB_URL = `https://api.restful-api.dev/objects/${DB_OBJECT_ID}`;
const ADMIN_USERS = ['oguzhan', 'admin', 'devoguzkaya'];

function hashPassword(pw) {
  return crypto.createHash('sha256').update(pw + '_sdu_isg_salt').digest('hex');
}

function isAdminUsername(username) {
  return ADMIN_USERS.includes((username || '').trim().toLowerCase());
}

function formatPublicUser(u) {
  const isAdm = isAdminUsername(u.username) || u.role === 'admin';
  return {
    username: u.username,
    fullName: u.fullName || u.username,
    role: isAdm ? 'admin' : 'user',
    plan: isAdm ? 'pro' : u.plan || 'free',
    createdAt: u.createdAt || null
  };
}

async function getUsers() {
  try {
    const res = await fetch(DB_URL, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return {};
    const json = await res.json();
    return json?.data?.users || {};
  } catch {
    return {};
  }
}

async function saveUsers(users) {
  try {
    await fetch(DB_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'sdu_isg_users_db',
        data: { users }
      }),
      signal: AbortSignal.timeout(5000)
    });
  } catch (e) {
    console.error('Failed to persist users to cloud:', e);
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { action, username, password, fullName, adminUsername, targetUsername, newPlan } = body || {};

    const users = await getUsers();

    // 1. Refresh current user's live plan/role from Cloud DB
    if (action === 'me') {
      const cleanUser = (username || '').trim().toLowerCase();
      const existing = users[cleanUser];
      if (!existing) {
        if (isAdminUsername(cleanUser)) {
          return res.status(200).json({
            ok: true,
            user: { username: cleanUser, fullName: 'Oğuzhan Kaya', role: 'admin', plan: 'pro' }
          });
        }
        return res.status(404).json({ error: 'Kullanıcı bulunamadı.' });
      }
      if (isAdminUsername(cleanUser) && (existing.role !== 'admin' || existing.plan !== 'pro')) {
        existing.role = 'admin';
        existing.plan = 'pro';
        await saveUsers(users);
      }
      return res.status(200).json({ ok: true, user: formatPublicUser(existing) });
    }

    // 2. Admin: List all registered users
    if (action === 'admin_list_users') {
      const cleanAdmin = (adminUsername || '').trim().toLowerCase();
      const adminObj = users[cleanAdmin];
      if (!isAdminUsername(cleanAdmin) && adminObj?.role !== 'admin') {
        return res.status(403).json({ error: 'Bu işlem için Admin yetkisi gereklidir.' });
      }
      const list = Object.values(users)
        .map(formatPublicUser)
        .sort((a, b) => (a.role === 'admin' ? -1 : b.role === 'admin' ? 1 : (b.createdAt || '').localeCompare(a.createdAt || '')));
      return res.status(200).json({ ok: true, users: list });
    }

    // 3. Admin: Change a user's plan ('free' | 'pro')
    if (action === 'admin_set_plan') {
      const cleanAdmin = (adminUsername || '').trim().toLowerCase();
      const adminObj = users[cleanAdmin];
      if (!isAdminUsername(cleanAdmin) && adminObj?.role !== 'admin') {
        return res.status(403).json({ error: 'Bu işlem için Admin yetkisi gereklidir.' });
      }
      const cleanTarget = (targetUsername || '').trim().toLowerCase();
      if (!users[cleanTarget]) {
        return res.status(404).json({ error: 'Hedef kullanıcı bulunamadı.' });
      }
      users[cleanTarget].plan = newPlan === 'pro' ? 'pro' : 'free';
      await saveUsers(users);

      const list = Object.values(users)
        .map(formatPublicUser)
        .sort((a, b) => (a.role === 'admin' ? -1 : b.role === 'admin' ? 1 : (b.createdAt || '').localeCompare(a.createdAt || '')));
      return res.status(200).json({ ok: true, users: list });
    }

    // 4. Admin: Delete a user
    if (action === 'admin_delete_user') {
      const cleanAdmin = (adminUsername || '').trim().toLowerCase();
      const adminObj = users[cleanAdmin];
      if (!isAdminUsername(cleanAdmin) && adminObj?.role !== 'admin') {
        return res.status(403).json({ error: 'Bu işlem için Admin yetkisi gereklidir.' });
      }
      const cleanTarget = (targetUsername || '').trim().toLowerCase();
      if (isAdminUsername(cleanTarget)) {
        return res.status(400).json({ error: 'Ana Admin hesabı silinemez.' });
      }
      delete users[cleanTarget];
      await saveUsers(users);

      const list = Object.values(users)
        .map(formatPublicUser)
        .sort((a, b) => (a.role === 'admin' ? -1 : b.role === 'admin' ? 1 : (b.createdAt || '').localeCompare(a.createdAt || '')));
      return res.status(200).json({ ok: true, users: list });
    }

    // 5. Standard Login / Signup
    const cleanUser = (username || '').trim().toLowerCase().replace(/[^a-z0-9_.-]/g, '');
    if (!cleanUser || cleanUser.length < 3) {
      return res.status(400).json({ error: 'Kullanıcı adı en az 3 karakter olmalıdır (harf/rakam).' });
    }
    if (!password || password.length < 4) {
      return res.status(400).json({ error: 'Şifre en az 4 karakter olmalıdır.' });
    }

    const passHash = hashPassword(password);
    // Any user created when database is empty becomes ADMIN, or if username is in ADMIN_USERS
    const isFirstUser = Object.keys(users).length === 0;
    const isAdm = isFirstUser || isAdminUsername(cleanUser);

    if (action === 'signup') {
      if (users[cleanUser] && !isAdminUsername(cleanUser)) {
        return res.status(409).json({ error: 'Bu kullanıcı adı zaten alınmış, giriş yapabilirsin.' });
      }
      const userObj = {
        username: cleanUser,
        fullName: (fullName || cleanUser).trim(),
        passHash,
        role: isAdm ? 'admin' : 'user',
        plan: isAdm ? 'pro' : 'free',
        createdAt: users[cleanUser]?.createdAt || new Date().toISOString()
      };
      users[cleanUser] = userObj;
      await saveUsers(users);
      return res.status(200).json({
        ok: true,
        user: formatPublicUser(userObj)
      });
    }

    if (action === 'login') {
      const existing = users[cleanUser];
      if (!existing || existing.passHash !== passHash) {
        return res.status(401).json({ error: 'Kullanıcı adı veya şifre hatalı! Henüz hesap açmadıysan lütfen "Kayıt Ol" sekmesinden hesabını oluştur.' });
      }
      if (isAdm && (existing.role !== 'admin' || existing.plan !== 'pro')) {
        existing.role = 'admin';
        existing.plan = 'pro';
        await saveUsers(users);
      }
      return res.status(200).json({
        ok: true,
        user: formatPublicUser(existing)
      });
    }

    return res.status(400).json({ error: 'Geçersiz işlem.' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
