
import { User } from '@prisma/client';
import prisma from './db';

// Create User in Neon DB via Prisma
export async function createUser(data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) {
  try {
    const user = await prisma.user.create({ data });
    return { user };
  } catch (error) {
    return { error };
  }
}

// Retrieve User by ID or Clerk ID
export async function getUserById({
  id,
  clerkId
}: {
  id?: string
  clerkId?: string
}) {
  try {
    if (!id && !clerkId) {
      throw new Error('id or clerkId is required');
    }

    const query = id ? { id: parseInt(id) } : { clerkId };

    const user = await prisma.user.findUnique({
      where: query,
    });
    return { user };
  } catch (error) {
    return { error };
  }
}

// Update User data
export async function updateUser(id: number, data: Partial<User>) {
  try {
    const user = await prisma.user.update({
      where: { id },
      data,
    });
    return { user };
  } catch (error) {
    return { error };
  }
}
