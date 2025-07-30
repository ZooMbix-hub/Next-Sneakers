import Image from 'next/image';
import { AddCart, AddDeferred } from '@/src/features/product';
import { Typography } from '@/src/shared/ui/Typography';
import s from './Card.module.css';

export function Card() {
  return (
    <div className={s.card}>
      <AddDeferred />
      <Image
        src={'/productImages/7a39d50a050a17cefa03e810a5372958c37209e7.webp'}
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
            {'ЦЕНА:'}
          </Typography>
          <Typography weight={'bold'}>
            {'12 999 руб.'}
          </Typography>
        </div>
        <AddCart />
      </div>
    </div>
  );
}