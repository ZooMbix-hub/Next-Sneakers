import Link from 'next/link';
import { ROUTES } from '@/src/shared/routes';
import { Typography } from '@/src/shared/ui/Typography';
import s from './Navigation.module.css';

export function Navigation() {
  return (
    <nav>
      <ul className={s.linkContainer}>
        <li>
          <Link href={ROUTES.basket}></Link>
        </li>
        <li>
          <Link href={ROUTES.deferred}>
            <Typography color={'gray3'}>
              {'Закладки'}
            </Typography>
          </Link>
        </li>
        <li>
          <Link href={ROUTES.profile}>
            <Typography color={'gray3'}>
              {'Профиль'}
            </Typography>
          </Link>
        </li>
      </ul>
    </nav>
  );
}