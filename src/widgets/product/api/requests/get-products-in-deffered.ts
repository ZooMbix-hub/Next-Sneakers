'use server';

import { auth } from '@/app/lib/auth';
import { clientRedis } from '@/app/lib/db';

export async function getProductsInDeffered() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return new Set([]);
    };

    const userId = session.user.id;

    const defferedProducts = await clientRedis.SMEMBERS(`deffered:${userId}`);

    return new Set(defferedProducts);
  } catch (error: unknown) {
    console.error('Error executing query to Redis:', error);
    return new Set([]);
  }
}