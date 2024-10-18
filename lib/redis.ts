// lib/redis.js
import Redis from 'ioredis';

const redisUrl = process.env.UPSTASH_REDIS_URL;
const redisToken = process.env.UPSTASH_REDIS_TOKEN

if (!redisUrl) {
  throw new Error('UPSTASH_REDIS_URL is not defined');
}

const redis = new Redis(redisUrl, {
  password: redisToken,
  tls: {
    rejectUnauthorized: false, // Necessary for SSL
  },
});

export default redis;
