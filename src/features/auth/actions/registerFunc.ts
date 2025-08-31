'use server';

import { AuthError } from 'next-auth';
import { ZodError } from 'zod';
import bcrypt from 'bcrypt';
import { signIn } from '@/app/lib/auth';
import { createUser, getUser } from '@/src/entites/user/api';
import { registerScheme } from '../model';
import { getErrors } from '../helpers';
import type { StatusResponse } from './types';

type ErrorKey = 'email' | 'password' | 'repeatPassword';

interface RegisterResult {
  status: StatusResponse;
  errors?: {
    email?: string[];
    password?: string[];
    repeatPassword?: string[];
  };
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

    /* TODO: поправить типизацию */
    const hashedPassword = await bcrypt.hash(password as string, 10);

    /* TODO: поправить типизацию */
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