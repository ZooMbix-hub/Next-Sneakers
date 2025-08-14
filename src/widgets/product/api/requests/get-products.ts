import { db } from '@/app/lib/db';
import type { Product } from './types';

interface Params {
  filter?: string;
  page: number;
}

const ITEMS_PER_PAGE = 10;

export async function getProducts({ filter, page }: Params): Promise<Product[]> {
  try {
    let queryString = 'SELECT * FROM products';

    if (filter) {
      queryString = `
        SELECT * FROM products 
        WHERE LOWER(name) LIKE LOWER('%${filter}%')
      `;
    }

    if (page !== 1) {
      const offset = (page - 1) * ITEMS_PER_PAGE;
      queryString = `
        SELECT * FROM products
        ORDER BY id
        LIMIT ${page} OFFSET ${offset}
      `;
    }

    const { rows } = await db.query<Product>(queryString);

    return rows;
  } catch (error: unknown) {
    console.error('Error executing query:', error);

    return [];
  }
}