// Vercel Serverless Function — Per-User Cloud Persistence
const SYNC_OBJECT_ID = 'ff808181a09d98f701a15a6d46e83287';
const SYNC_URL = `https://api.restful-api.dev/objects/${SYNC_OBJECT_ID}`;

async function getSyncStates() {
  try {
    const res = await fetch(SYNC_URL, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return {};
    const json = await res.json();
    return json?.data?.states || {};
  } catch {
    return {};
  }
}

async function saveSyncStates(states) {
  try {
    await fetch(SYNC_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'sdu_isg_sync_db',
        data: { states }
      }),
      signal: AbortSignal.timeout(5000)
    });
  } catch (e) {
    console.error('Failed to save sync state to cloud:', e);
  }
}

export default async function handler(req, res) {
  const rawUser = (req.query?.user || 'default').toString().trim().toLowerCase().replace(/[^a-z0-9_.-]/g, '') || 'default';

  try {
    if (req.method === 'GET') {
      const states = await getSyncStates();
      const userData = states[rawUser] || null;
      return res.status(200).json({ configured: true, user: rawUser, data: userData });
    }

    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const states = await getSyncStates();
      states[rawUser] = body;
      await saveSyncStates(states);
      return res.status(200).json({ configured: true, user: rawUser, saved: true, updatedAt: new Date().toISOString() });
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (err) {
    return res.status(500).json({ configured: true, error: err.message });
  }
}
