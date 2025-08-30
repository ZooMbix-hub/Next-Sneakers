'use server';

import { ZodError } from 'zod';
import { AuthError } from 'next-auth';
import { signIn } from '@/app/lib/auth';
import { registerScheme } from '../model';
import { getErrors, type StatusResponse } from '../helpers';

type ErrorKey = 'email' | 'password' | 'repeatPassword';

interface RegisterResult {
  status: StatusResponse;
  errors?: {
    email?: string[];
    password?: string[];
    repeatPassword?: string[];
  };
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