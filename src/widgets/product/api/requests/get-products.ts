import { db } from '@/app/lib/db';
import type { Product } from './types';

interface Params {
  filter: string;
  page: number;
}

const ITEMS_PER_PAGE = 10;

export async function getProducts({ filter, page }: Params): Promise<Product[]> {
  try {
    const offset = page > 1 ? (page - 1) * ITEMS_PER_PAGE : 0;

    let queryString = `
      SELECT * FROM products
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    if (filter) {
      queryString = `
        SELECT * FROM products 
        WHERE LOWER(name) LIKE LOWER('%${filter}%')
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;
    }

    const { rows } = await db.query<Product>(queryString);

    return rows;
  } catch (error: unknown) {
    console.error('Error executing query:', error);

    return [];
  }
}