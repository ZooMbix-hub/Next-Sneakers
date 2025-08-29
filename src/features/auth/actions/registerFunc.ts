'use server';

import { z } from 'zod';
import { AuthError } from 'next-auth';
import { signIn } from '@/app/lib/auth';
import { registerScheme } from '../model';

export async function registerFunc(prevState: string | undefined, formData: FormData) {
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
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log('ZodError:', error.issues);
    };
  }
}