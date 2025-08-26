'use server';

import { auth } from '@/app/lib/auth';
import { clientRedis } from '@/app/lib/db';

export async function getProductsInDeffered() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return [];
    };

    const userId = session.user.id;

    console.log(`deffer:${userId}`)

    const defferedProducts = await clientRedis.SMEMBERS(`deffered:${userId}`);

    return defferedProducts;
  } catch (error: unknown) {
    console.error('Error executing query to Redis:', error);
    return [];
  }
}