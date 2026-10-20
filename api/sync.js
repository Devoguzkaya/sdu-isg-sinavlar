// Vercel Serverless Function — Per-User Cloud KV Persistence
const DEFAULT_KV_BUCKET = 'XDdUb2W7LRjEjWdzcBhfzB';

export default async function handler(req, res) {
  const rawUser = (req.query?.user || 'oguzhan').toString().trim().toLowerCase().replace(/[^a-z0-9_.-]/g, '') || 'oguzhan';
  const KEY = `sdu_isg_vize_state_${rawUser}_v2`;

  const kvUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const kvToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  const fallbackEndpoint = `https://kvdb.io/${DEFAULT_KV_BUCKET}/${KEY}`;

  try {
    if (req.method === 'GET') {
      if (kvUrl && kvToken) {
        const response = await fetch(`${kvUrl}/get/${KEY}`, {
          headers: { Authorization: `Bearer ${kvToken}` }
        });
        const json = await response.json();
        const data = json.result ? JSON.parse(json.result) : null;
        return res.status(200).json({ configured: true, user: rawUser, provider: 'vercel-kv', data });
      }

      const response = await fetch(fallbackEndpoint);
      if (response.status === 404) {
        return res.status(200).json({ configured: true, user: rawUser, provider: 'vercel-cloud-kv', data: null });
      }
      const text = await response.text();
      const data = text ? JSON.parse(text) : null;
      return res.status(200).json({ configured: true, user: rawUser, provider: 'vercel-cloud-kv', data });
    }

    if (req.method === 'POST') {
      const bodyStr = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);

      if (kvUrl && kvToken) {
        await fetch(`${kvUrl}/set/${KEY}`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${kvToken}`,
            'Content-Type': 'application/json'
          },
          body: bodyStr
        });
        return res.status(200).json({ configured: true, user: rawUser, saved: true, updatedAt: new Date().toISOString() });
      }

      await fetch(fallbackEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: bodyStr
      });
      return res.status(200).json({ configured: true, user: rawUser, saved: true, updatedAt: new Date().toISOString() });
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (err) {
    return res.status(500).json({ configured: true, error: err.message });
  }
}
