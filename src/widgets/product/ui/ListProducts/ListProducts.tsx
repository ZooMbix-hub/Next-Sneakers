import { getProducts } from '../../api';
import { Card } from '../Card/Card';
import s from './ListProducts.module.css';

export async function ListProducts({ searchValue }: { searchValue: string }) {
  const products = await getProducts(searchValue);

  return (
    <div className={s.listProducts}>
      {
        products.map(({id, name, price, imageURL}) => (
          <Card
            key={id}
            id={id}
            name={name}
            price={price}
            imageURL={imageURL}
          />
        ))
      }
    </div>
  );
}