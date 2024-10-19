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

export async function getUserById(userId: string) {
  try {
    // Pass userId as a query parameter
    const response = await fetch(`/api/auth/get-user/?userId=${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // If the response is not OK, throw an error
    if (!response.ok) {
      throw new Error(`User not found: ${response.statusText}`);
    }

    // Parse the JSON data
    const user = await response.json();

    console.log('User data fetched: in usersss', user);

    // Return the user data
    return user; // Return just the user object

  } catch (error) {
    console.error('Error fetching user:', error);
    return null; // Return null in case of error
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



