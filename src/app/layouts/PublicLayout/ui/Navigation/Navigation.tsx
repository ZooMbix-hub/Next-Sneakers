import Link from 'next/link';
import { Icon } from '@/src/assets';
import { ROUTES } from '@/src/shared/routes';
import { Typography } from '@/src/shared/ui/Typography';
import s from './Navigation.module.css';

export function Navigation() {
  return (
    <nav>
      <ul className={s.linkContainer}>
        <li>
          <Link className={s.link} href={ROUTES.basket}>
            <Icon.Basket />
          </Link>
        </li>
        <li>
          <Link className={s.link} href={ROUTES.deferred}>
            <Icon.Defferred />
            <Typography color={'gray3'}>
              {'Закладки'}
            </Typography>
          </Link>
        </li>
        <li>
          <Link className={s.link} href={ROUTES.profile}>
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