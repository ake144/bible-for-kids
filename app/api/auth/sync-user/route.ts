// pages/api/auth/sync-clerk-user.js
import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { connectRedis, redisClient } from '@/lib/redis';  // Import Redis utility


export async function POST(req: Request) {
  const { user } = await req.json(); 

  // Check if user is defined and has the necessary properties
  if (!user || !user.id || !user.emailAddresses || user.emailAddresses.length === 0) {
    return NextResponse.json({ error: 'Invalid user data' }, { status: 400 });
  }

  console.log(user.id, user.emailAddresses[0].emailAddress, `${user.firstName} ${user.lastName}`);

  try {

    await connectRedis();

    const updatedUser = await prisma.user.upsert({
      where: { clerkId: user.id },
      update: {
        email: user.emailAddresses[0].emailAddress,
        name: `${user.firstName} ${user.lastName}`,
      },
      create: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        name: `${user.firstName} ${user.lastName}`,
      },
    });

     // Cache user info in Redis with a key like 'user:{clerkId}'
     const cacheKey = `user:${user.id}`;
     await redisClient.set(cacheKey, JSON.stringify(updatedUser), {
       EX: 48000, 
     });

    return NextResponse.json({ updatedUser }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to sync user' }, { status: 500 });
  }
}
