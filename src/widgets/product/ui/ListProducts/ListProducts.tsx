import MOCK_PRODUCTS from '../../../../../products.json';
import { Card } from '../Card/Card';
import s from './ListProducts.module.css';

interface Product {
  id: number;
  name: string;
  price: number;
  imageURL: string;
}

async function getMockData(name: string): Promise<Product[]> {
  const products: Product[] = await new Promise(resolve => setTimeout(() => resolve(MOCK_PRODUCTS), 2000));
  return products.filter((product) => product.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
}

export async function ListProducts({ searchValue }: { searchValue: string }) {
  const products = await getMockData(searchValue);

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