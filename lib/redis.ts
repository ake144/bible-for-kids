import { createClient } from 'redis';

const redisClient = createClient({
  url: process.env.REDIS_URL, // This can be 'redis://localhost:6379' for local Redis
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

async function connectRedis() {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
}

export { redisClient, connectRedis };
