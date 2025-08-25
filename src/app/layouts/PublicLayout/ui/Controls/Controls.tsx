'use client';

import { useSession } from 'next-auth/react';
import { Navigation } from '../Navigation';
import { Authorization } from '@/src/features/auth/ui';

export function Controls() {
  const { status } = useSession();

  const isAuth = 'authenticated' === status;

  return isAuth ? <Navigation /> : <Authorization />;
}