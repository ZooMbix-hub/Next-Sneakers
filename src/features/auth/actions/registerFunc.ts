'use server';

import { z } from 'zod';
import { AuthError } from 'next-auth';
import { signIn } from '@/app/lib/auth';
import { registerScheme } from '../model';
import { getErrors } from '../helpers';

interface Errors {
  email?: string[];
  password?: string[];
  repeatPassword?: string[];
}

interface RegisterResult {
  status: 'success' | 'validation error' | 'auth error' | 'unknown error';
  errors?: Errors;
}

export async function registerFunc(prevState: string | undefined, formData: FormData): Promise<RegisterResult> {
  try {
    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');

    registerScheme.parse({
      email,
      password,
      repeatPassword
    });

    /* await signIn('credentials', {
      email,
      password,
      redirect: false
    }); */

    return { status: 'success' };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return getErrors(error.issues);
    };

    if (error instanceof AuthError) {
      return { status: 'auth error' };
    }

    return { status: 'unknown error' };
  }
}