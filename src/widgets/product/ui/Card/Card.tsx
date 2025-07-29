import Image from 'next/image';
import { Typography } from '@/src/shared/ui/Typography';
import s from './Card.module.css';

export function Card() {
  return (
    <div className={s.card}>
      <Image
        src={'https://boringapi.com/api/v1/static/photos/300.jpeg'}
        alt={'123'}
        width={135}
        height={115}
        className={s.image}
      />
      <Typography>
        {'Мужские Кроссовки Nike Blazer Mid Suede'}
      </Typography>
      <div className={s.footer}>
        <div className={s.price}>
          <Typography variant={'caption'} color={'gray1'}>
            <></>
            {'ЦЕНА:'}
          </Typography>
          <Typography weight={'bold'}>
            {'12 999 руб.'}
          </Typography>
        </div>
      </div>
    </div>
  );
}