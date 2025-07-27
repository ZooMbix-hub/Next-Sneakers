'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import { Icon } from '@/src/assets';
import { ROUTES } from '@/src/shared/routes';
import { Typography } from '@/src/shared/ui/Typography';
import s from './Navigation.module.css';

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
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
            <Icon.Defferred />
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