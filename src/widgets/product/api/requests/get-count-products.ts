import { db } from '@/app/lib/db';

export async function getCountProducts({ filter }: { filter: string }) {
  try {
    let queryString = 'SELECT COUNT(*) FROM products';

    if (filter) {
      queryString = `
        SELECT COUNT(*) FROM products 
        WHERE LOWER(name) LIKE LOWER('%${filter}%')
      `;
    }

    const { rows } = await db.query<{ count: string }>(queryString);
    const [{ count }] = rows;

    return Number(count);
  } catch (error: unknown) {
    console.error('Error executing query:', error);

    return 0;
  }
}