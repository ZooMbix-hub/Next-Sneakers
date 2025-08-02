import MOCK_PRODUCTS from '../../../../../products.json';

interface Product {
  id: number;
  name: string;
  price: number;
  imageURL: string;
}

export async function getProducts(searchValue: string): Promise<Product[]> {
  const products: Product[] = await new Promise(resolve => setTimeout(() => resolve(MOCK_PRODUCTS), 2000));
  return products.filter((product) => product.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
}