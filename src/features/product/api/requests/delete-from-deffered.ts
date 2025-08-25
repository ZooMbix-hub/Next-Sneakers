'use server';

import { auth } from '@/app/lib/auth';
import { clientRedis } from '@/app/lib/db';

export async function deleteFromDeffered(productId: number) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      throw new Error('Not authenticated');
    };

    const userId = session.user.id;

    await clientRedis.sRem(`deffered:${userId}`, `${productId}`);

    return { ok: true };
  } catch (error: unknown) {
    console.error('Error executing query to Redis:', error);
    return { ok: false };
  }
}