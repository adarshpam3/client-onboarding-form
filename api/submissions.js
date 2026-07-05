const { Redis } = require('@upstash/redis');

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN,
});

const INDEX_KEY = 'submissions_index';

module.exports = async (req, res) => {
  if (req.method === 'POST') return handleSubmit(req, res);
  if (req.method === 'GET') return handleList(req, res);
  res.setHeader('Allow', 'GET, POST');
  return res.status(405).json({ error: 'Method not allowed' });
};

async function handleSubmit(req, res) {
  try {
    const { answers } = req.body || {};
    if (!answers || typeof answers !== 'object') {
      return res.status(400).json({ error: 'Missing answers' });
    }
    const timestamp = Date.now();
    const safeName = (answers.name || 'client').toString().replace(/[^a-zA-Z0-9]/g, '_');
    const key = `submission:${timestamp}-${safeName}`;
    const record = { answers, submittedAt: new Date(timestamp).toISOString() };
    await redis.set(key, JSON.stringify(record));
    await redis.zadd(INDEX_KEY, { score: timestamp, member: key });
    return res.status(200).json({ success: true });
  } catch (e) {
    return res.status(500).json({ error: 'Failed to save submission' });
  }
}

async function handleList(req, res) {
  const passcode = req.headers['x-coach-passcode'];
  if (!passcode || passcode !== process.env.COACH_PASSCODE) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const keys = await redis.zrange(INDEX_KEY, 0, -1, { rev: true });
    if (!keys || keys.length === 0) {
      return res.status(200).json({ submissions: [] });
    }
    const values = await redis.mget(...keys);
    const submissions = keys
      .map((key, i) => {
        const raw = values[i];
        let data = null;
        try {
          data = typeof raw === 'string' ? JSON.parse(raw) : raw;
        } catch (e) {
          data = null;
        }
        return { key, data };
      })
      .filter((s) => s.data);
    return res.status(200).json({ submissions });
  } catch (e) {
    return res.status(500).json({ error: 'Failed to load submissions' });
  }
}
