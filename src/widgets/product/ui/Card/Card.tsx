import Image from 'next/image';
import { AddCart, AddDeferred } from '@/src/features/product';
import { Typography } from '@/src/shared/ui/Typography';
import s from './Card.module.css';

export interface CardProps {
  id: number;
  name: string;
  price: number;
  imageURL: string;
}

export function Card({id, name, price, imageURL}: CardProps) {
  return (
    <div className={s.card}>
      <AddDeferred />
      <Image
        src={`/productImages/${imageURL}`}
        alt={'123'}
        width={135}
        height={135}
        className={s.image}
      />
      <Typography>
        {name}
      </Typography>
      <div className={s.footer}>
        <div className={s.price}>
          <Typography variant={'caption'} color={'gray1'}>
            {'ЦЕНА:'}
          </Typography>
          <Typography weight={'bold'}>
            {`${price} руб.`}
          </Typography>
        </div>
        <AddCart />
      </div>
    </div>
  );
}