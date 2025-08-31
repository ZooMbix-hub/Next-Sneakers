'use server';

import { AuthError } from 'next-auth';
import { ZodError } from 'zod';
import { signIn } from '@/app/lib/auth';
import { signInSchema } from '../model';
import { getErrors } from '../helpers';
import type { StatusResponse } from './types';

type ErrorKey = 'email' | 'password';

interface SignInResult {
  status: StatusResponse;
  errors?: {
    email?: string[];
    password?: string[];
  };
}

export async function signInFunc(
  prevState: SignInResult | undefined,
  formData: FormData
): Promise<SignInResult> {
  try {
    const email = formData.get('email');
    const password = formData.get('password');

    signInSchema.parse({
      email,
      password
    });

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