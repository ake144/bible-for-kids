import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { createUser } from '@/lib/users';
import { User } from '@prisma/client';

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      'Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local'
    );
  }

  // Extract headers required for Svix verification
  const headerPayload = headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // Ensure required headers are present
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Missing Svix headers', {
      status: 400,
    });
  }

  // Extract the webhook payload
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create Svix webhook instance with your secret
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  // Verify the webhook signature
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Webhook verification failed', {
      status: 400,
    });
  }

  // Handle user creation from webhook
  const eventType = evt.type;

  if (eventType === 'user.created') {
    const { id, email_addresses, first_name, last_name, image_url } = evt.data;

    if (!id || !email_addresses) {
      return new Response('Missing required data', {
        status: 400,
      });
    }

    const userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'> = {
      clerkId: id,
      email: email_addresses[0].email_address,
      name: `${first_name || ''} ${last_name || ''}`.trim(),
    };

    // Create user in the database
    const { error } = await createUser(userData);

    if (error) {
      console.error('Error creating user:', error);
      return new Response('Error creating user in the database', {
        status: 500,
      });
    }
  }

  return new Response('', { status: 200 });
}
