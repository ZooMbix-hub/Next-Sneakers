'use server';

import { signOut } from './auth';

export async function signOutFunc() {
  await signOut({ redirect: false });
}