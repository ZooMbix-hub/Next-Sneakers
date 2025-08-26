'use server';

import { auth } from '@/app/lib/auth';
import { clientRedis } from '@/app/lib/db';

export async function getProductsInCart() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return [];
    };

    const userId = session.user.id;

    const cartProducts = await clientRedis.SMEMBERS(`cart:${userId}`);

    return cartProducts;
  } catch (error: unknown) {
    console.error('Error executing query to Redis:', error);
    return [];
  }
}