// Vercel Serverless Function — Login & Signup with Cloud KV
import crypto from 'crypto';

const DEFAULT_KV_BUCKET = 'XDdUb2W7LRjEjWdzcBhfzB';
const USERS_KEY = 'sdu_isg_users_v2';

function hashPassword(pw) {
  return crypto.createHash('sha256').update(pw + '_sdu_isg_salt').digest('hex');
}

async function getUsers() {
  const url = `https://kvdb.io/${DEFAULT_KV_BUCKET}/${USERS_KEY}`;
  const res = await fetch(url);
  if (res.status === 404) return {};
  const text = await res.text();
  return text ? JSON.parse(text) : {};
}

async function saveUsers(users) {
  const url = `https://kvdb.io/${DEFAULT_KV_BUCKET}/${USERS_KEY}`;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(users)
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { action, username, password, fullName } = body || {};

    const cleanUser = (username || '').trim().toLowerCase().replace(/[^a-z0-9_.-]/g, '');
    if (!cleanUser || cleanUser.length < 3) {
      return res.status(400).json({ error: 'Kullanıcı adı en az 3 karakter olmalıdır (harf/rakam).' });
    }
    if (!password || password.length < 4) {
      return res.status(400).json({ error: 'Şifre en az 4 karakter olmalıdır.' });
    }

    const users = await getUsers();
    const passHash = hashPassword(password);

    if (action === 'signup') {
      if (users[cleanUser]) {
        return res.status(409).json({ error: 'Bu kullanıcı adı zaten alınmış kanka, giriş yapabilirsin.' });
      }
      const userObj = {
        username: cleanUser,
        fullName: (fullName || cleanUser).trim(),
        passHash,
        createdAt: new Date().toISOString()
      };
      users[cleanUser] = userObj;
      await saveUsers(users);
      return res.status(200).json({
        ok: true,
        user: { username: userObj.username, fullName: userObj.fullName }
      });
    }

    if (action === 'login') {
      const existing = users[cleanUser];
      if (!existing || existing.passHash !== passHash) {
        return res.status(401).json({ error: 'Kullanıcı adı veya şifre hatalı!' });
      }
      return res.status(200).json({
        ok: true,
        user: { username: existing.username, fullName: existing.fullName }
      });
    }

    return res.status(400).json({ error: 'Geçersiz işlem.' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
