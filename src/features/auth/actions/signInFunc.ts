'use server';

import { AuthError } from 'next-auth';
import { signIn } from '@/app/lib/auth';

export async function signInFunc(prevState: string | undefined, formData: FormData) {
  try {
    const email = formData.get('email');
    const password = formData.get('password');

    await signIn('credentials', {
      email,
      password,
      redirect: false
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
      case 'CredentialsSignin':
        return 'Invalid credentials.';
      default:
        return 'Something went wrong.';
      }
    }

    throw error;
  }
}