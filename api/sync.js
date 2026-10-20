// Vercel Serverless Function — Native Vercel KV / Redis REST API Support (Zero external dependency)
export default async function handler(req, res) {
  const kvUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const kvToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  const KEY = 'sdu_isg_vize_state_oguzhan_v2';

  if (!kvUrl || !kvToken) {
    return res.status(200).json({
      configured: false,
      message: 'Vercel Storage (KV / Redis) henüz bağlanmadı. Vercel Dashboard -> Storage sekmesinden KV ekleyin.'
    });
  }

  try {
    if (req.method === 'GET') {
      const response = await fetch(`${kvUrl}/get/${KEY}`, {
        headers: { Authorization: `Bearer ${kvToken}` }
      });
      const json = await response.json();
      const data = json.result ? JSON.parse(json.result) : null;
      return res.status(200).json({ configured: true, data });
    }

    if (req.method === 'POST') {
      const bodyStr = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
      await fetch(`${kvUrl}/set/${KEY}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${kvToken}`,
          'Content-Type': 'application/json'
        },
        body: bodyStr
      });
      return res.status(200).json({ configured: true, saved: true, updatedAt: new Date().toISOString() });
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (err) {
    return res.status(500).json({ configured: true, error: err.message });
  }
}
