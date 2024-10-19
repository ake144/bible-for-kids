import prisma from "@/lib/db";
import { connectRedis, redisClient } from '@/lib/redis';
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId'); // Extract userId from query parameters
  
  console.log(   `in the get ${userId}`);
  try {


    if(!userId) {
        return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
        }
        
    // Connect to Redis
    await connectRedis();

    // Check Redis cache first
    const cacheKey = `user:${userId}`;
    const cachedUser = await redisClient.get(cacheKey);


    if (cachedUser) {
      console.log('User data fetched from cache');
      return NextResponse.json(JSON.parse(cachedUser), { status: 200 });
    }



    // Fallback to database if not found in Redis
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

  console.log('User data fetched from redis', user);

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Cache the user data for future requests
    await redisClient.set(cacheKey, JSON.stringify(user), {
      EX: 48000, 
    });

    return NextResponse.json(user, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
  }
}
