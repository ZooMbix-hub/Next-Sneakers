import { Typography } from '@/src/shared/ui/Typography';
import s from './MainPage.module.css';

export function Header() {
  return (
    <div className={s.header}>
      <Typography variant={'h1'} weight={'bold'}>
        {'Все кроссовки'}
      </Typography>
    </div>
  );
}