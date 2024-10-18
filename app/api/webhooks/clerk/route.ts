// pages/api/webhooks/clerk.ts

import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    const { id, fullName, emailAddresses } =  await req.json()

    // Create or update user in your DB
    const user = await prisma.user.upsert({
      where: { clerkId: id },
      update: {
        name: fullName,
        email: emailAddresses[0]?.emailAddress,
      },
      create: {
        clerkId: id,
        name: fullName,
        email: emailAddresses[0]?.emailAddress,
      },
    });

  if (!user) {
    return NextResponse.json({ message: "Failed to create/update user" }, { status: 500 });
  }
  
 return NextResponse.json({ message: "User created/updated successfully" }, { status: 200 });

}