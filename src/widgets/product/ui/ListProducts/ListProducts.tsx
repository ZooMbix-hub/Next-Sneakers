import MOCK_PRODUCTS from '../../../../../products.json';
import { Card } from '../Card/Card';
import s from './ListProducts.module.css';

interface Product {
  id: number;
  name: string;
  price: number;
  imageURL: string;
}

export async function ListProducts() {
  const products:Product[] = await new Promise(resolve => setTimeout(() => resolve(MOCK_PRODUCTS), 5000));

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