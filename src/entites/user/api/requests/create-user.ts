import { db } from '@/app/lib/db';
import type { User } from './types';

export async function createUser(email: string, password: string): Promise<User> {
  try {
    const { rows } = await db.query(
      `INSERT INTO users (id, email, password) 
       VALUES (gen_random_uuid(), $1, $2) 
       RETURNING id, email, created_at`,
      [email, password]
    );

    return rows[0];
  } catch (error: unknown) {
    console.error('Error creating user:', error);
    throw error;
  }
}