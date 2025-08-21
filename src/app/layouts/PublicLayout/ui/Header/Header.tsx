import Link from 'next/link';
import Image from 'next/image';
import { Typography } from '@/src/shared/ui/Typography';
import { ROUTES } from '@/src/shared/routes';
import { Controls } from '../Controls';
import s from './Header.module.css';

export function Header() {
  return (
    <header className={s.headerWrapper}>
      <Link href={ROUTES.main} className={s.company}>
        <Image
          src={'/companyLogo.webp'}
          width={40}
          height={40}
          alt={'company logo'}
        />
        <div className={s.info}>
          <Typography variant={'h4'} weight={'bold'}>
            {'NEXT SNEAKERS'}
          </Typography>
          <Typography color={'gray2'}>
            {'Магазин лучших кроссовок'}
          </Typography>
        </div>
      </Link>
      <Controls />
    </header>
  );
}