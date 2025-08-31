import { db } from '@/app/lib/db';
import type { User } from './types';

export async function getUser(email: string): Promise<User> {
  try {
    const { rows } = await db.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    return rows[0];
  } catch (error: unknown) {
    console.error('Error executing query:', error);
    throw error;
  }
}