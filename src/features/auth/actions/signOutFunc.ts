'use server';

import { signOut } from '@/app/lib/auth';

export async function signOutFunc() {
  await signOut({ redirect: false });
}