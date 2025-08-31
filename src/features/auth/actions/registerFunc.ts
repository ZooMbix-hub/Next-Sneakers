'use server';

import { AuthError } from 'next-auth';
import { ZodError } from 'zod';
import bcrypt from 'bcrypt';
import { signIn } from '@/app/lib/auth';
import { registerScheme } from '../model';
import { getErrors, type StatusResponse } from '../helpers';
import { db } from '@/app/lib/db';

type ErrorKey = 'email' | 'password' | 'repeatPassword';

interface RegisterResult {
  status: StatusResponse;
  errors?: {
    email?: string[];
    password?: string[];
    repeatPassword?: string[];
  };
}

export async function getUser(email: string) {
  try {
    const { rows } = await db.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    return rows[0];
  } catch (error: unknown) {
    console.error('Error executing query:', error);
    return null;
  }
}

export async function createUser(email: string, password: string) {
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

export async function registerFunc(
  prevState: RegisterResult | undefined,
  formData: FormData
): Promise<RegisterResult> {
  try {
    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');

    registerScheme.parse({
      email,
      password,
      repeatPassword
    });

    /* TODO: поправить типизацию */
    const hasUser = await getUser(email as string);

    if (hasUser) {
      throw new AuthError('Пользователь с таким email уже существует');
    }

    const hashedPassword = await bcrypt.hash(password as string, 10);

    await createUser(email as string, hashedPassword as string);

    await signIn('credentials', {
      email,
      password,
      redirect: false
    });

    return { status: 'success' };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        status: 'validation error',
        errors: getErrors<ErrorKey>(error.issues)
      };
    };

    if (error instanceof AuthError) {
      return { status: 'auth error' };
    }

    return { status: 'unknown error' };
  }
}