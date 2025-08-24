'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import { Icon } from '@/src/assets';
import { ROUTES } from '@/src/shared/routes';
import { Typography } from '@/src/shared/ui/Typography';
import s from './Navigation.module.css';
import { useActionState } from 'react';
import { signOutFunc } from '@/app/lib/actions';
import { signInFunc } from '@/src/features/auth/actions';

export function Navigation() {
  const pathname = usePathname();
  const [errorMessage, formAction, isPending] = useActionState(
    signInFunc,
    undefined,
  );

  return (
    <nav>
      <form action={formAction}>
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email address"
          required
        />
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          id="password"
          type="password"
          name="password"
          placeholder="Enter password"
          required
          minLength={6}
        />
        <button className="mt-4 w-full" aria-disabled={isPending}>
          Зарегестрироваться
        </button>
      </form>
      <form action={signOutFunc}>
        <button>
         Sign Out
        </button>
      </form>
      <ul className={s.linkContainer}>
        <li>
          <Link className={cn(s.link, {[s.active]: pathname === ROUTES.basket})} href={ROUTES.basket}>
            <Icon.Basket />
            <Typography weight={'bold'}>
              {'0 руб.'}
            </Typography>
          </Link>
        </li>
        <li>
          <Link className={cn(s.link, {[s.active]: pathname === ROUTES.deferred})} href={ROUTES.deferred}>
            <Icon.Heart />
            <Typography color={'gray3'}>
              {'Отложенные'}
            </Typography>
          </Link>
        </li>
        <li>
          <Link className={cn(s.link, {[s.active]: pathname === ROUTES.profile})} href={ROUTES.profile}>
            <Icon.Profile />
            <Typography color={'gray3'}>
              {'Профиль'}
            </Typography>
          </Link>
        </li>
      </ul>
    </nav>
  );
}