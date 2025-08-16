import { Pagination } from '@/src/shared/ui/Pagination';
import { getCountProducts, getProducts } from '../../api';
import { Card } from '../Card/Card';
import s from './ListProducts.module.css';

export async function ListProducts({ filter, page }: { filter: string, page: number }) {
  const products = await getProducts({ filter, page });
  const count = await getCountProducts({ filter });

  return (
    <div className={s.listProducts}>
      <div className={s.cardContainer}>
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
      <div className={s.pagginationWrapper}>
        <Pagination totalPages={count}/>
      </div>
    </div>
  );
}