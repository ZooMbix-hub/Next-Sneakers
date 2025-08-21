'use client';

import { useSession } from 'next-auth/react';
import { Navigation } from '../Navigation';

export function Controls() {
  const {status} = useSession();

  const isAuth = 'authenticated' === status;

  console.log(status, isAuth);

  return isAuth ? <Navigation /> : 11;
}