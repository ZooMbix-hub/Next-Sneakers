import { db } from '@/app/lib/db';
import type { Product } from './types';

interface Params {
  filter?: string;
  limit?: number;
  offset?: number;
}

export async function getProducts({ filter, limit, offset }: Params): Promise<Product[]> {
  try {
    let queryString = 'SELECT * FROM products';

    if (filter) {
      queryString = `
        SELECT * FROM products 
        WHERE LOWER(name) LIKE LOWER('%${filter}%')
      `;
    }

    if (limit || offset) {
      queryString = `
        SELECT * FROM products 
        ORDER BY id
        LIMIT ${limit} OFFSET ${offset}
      `;
    }

    const { rows } = await db.query<Product>(queryString);

    return rows;
  } catch (error: unknown) {
    console.error('Error executing query:', error);

    return [];
  }
}