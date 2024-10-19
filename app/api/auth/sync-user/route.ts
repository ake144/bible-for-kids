// pages/api/auth/sync-clerk-user.js

import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export  async function Post(req:Request) {
  const { user } = await req.json(); 

  try {
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

    return NextResponse.json({ updatedUser }, {status:200});

  } catch (error) {
    console.error(error);
  return NextResponse.json({error},{status:500})
  }
}
