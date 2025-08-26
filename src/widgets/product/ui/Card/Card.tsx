import Link from 'next/link';
import Image from 'next/image';
import { AddCart, AddDeferred } from '@/src/features/product';
import { Typography } from '@/src/shared/ui/Typography';
import { ROUTES } from '@/src/shared/routes';
import s from './Card.module.css';

export interface CardProps {
  id: number;
  name: string;
  price: number;
  imageURL: string;
  inDeffered: boolean;
  inCart: boolean;
}

export function Card({id, name, price, imageURL, inDeffered, inCart}: CardProps) {
  return (
    <Link href={ROUTES.product(id)} className={s.card} aria-label={'Перейти на страницу товара'}>
      <AddDeferred productId={id} isActive={inDeffered} />
      <Image
        src={`/productImages/${imageURL}`}
        alt={'product image'}
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
        <AddCart productId={id} isActive={inCart} />
      </div>
    </Link>
  );
}