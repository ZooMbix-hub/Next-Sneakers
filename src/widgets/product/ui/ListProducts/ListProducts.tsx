import { getFromRedis } from '@/app/lib/db';
import { getProducts } from '../../api';
import { Card } from '../Card/Card';
import s from './ListProducts.module.css';

export async function ListProducts({ filter }: { filter: string }) {
  const products = await getProducts({ filter });
  console.log(await getFromRedis('testKey'));

  return (
    <div className={s.listProducts}>
      {
        products.map(({id, name, price, image_urls}) => (
          <Card
            key={id}
            id={id}
            name={name}
            price={price}
            imageURL={image_urls[0]}
          />
        ))
      }
    </div>
  );
}