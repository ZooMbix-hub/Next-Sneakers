'use client';

import { useSession } from 'next-auth/react';
import { Navigation } from '../Navigation';
import { Authorization, Registration } from '@/src/features/auth/ui';

export function Controls() {
  const { status } = useSession();

  const isAuth = 'authenticated' === status;

  return isAuth ? <Navigation /> : <div style={{display: 'flex', gap: '8px'}}><Authorization /><Registration/></div>;
}