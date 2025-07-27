import Image from 'next/image';
import { Typography } from '@/src/shared/ui/Typography';
import { Navigation } from '../Navigation';
import s from './Header.module.css';

export function Header() {
  return (
    <header className={s.headerWrapper}>
      <div className={s.company}>
        <Image
          src={'/companyLogo.webp'}
          width={40}
          height={40}
          alt={'company logo'}
        />
        <div className={s.info}>
          <Typography variant={'h4'} weight={'bold'}>
            {'REACT SNEAKERS'}
          </Typography>
          <Typography color={'gray2'}>
            {'Магазин лучших кроссовок'}
          </Typography>
        </div>
      </div>
      <Navigation />
    </header>
  );
}