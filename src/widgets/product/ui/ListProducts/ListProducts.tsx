import { getCountProducts, getProducts } from '../../api';
import { Card } from '../Card/Card';
import { Pagination } from '../Pagination';
import s from './ListProducts.module.css';

const ITEMS_PER_PAGE = 10;

export async function ListProducts({ filter, page }: { filter: string, page: number }) {
  const products = await getProducts({ filter, page });
  const countProducts = await getCountProducts({ filter });
  const totalPage = Math.ceil(countProducts / ITEMS_PER_PAGE);

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
        <Pagination totalPage={totalPage}/>
      </div>
    </div>
  );
}