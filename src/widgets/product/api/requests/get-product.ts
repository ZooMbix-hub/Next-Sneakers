import { db } from '@/app/lib/db';
import type { Product } from './types';

export async function getProduct(id: number) {
  try {
    const { rows } = await db.query(`SELECT * FROM products WHERE id = ${id}`);

    return rows[0] || null;

  } catch (error: unknown) {
    console.error('Error executing query:', error);

    return null;
  }
}