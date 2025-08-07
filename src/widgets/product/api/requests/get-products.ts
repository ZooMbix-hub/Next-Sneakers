import { db } from '@/app/lib/db';
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

interface Product2 {
  id: number;
  name: string;
  price: number;
  brand: string;
  color: string;
  sizes: string[];
  gender: 'men' | 'women' | 'unisex' | 'kids';
  category: 'running' | 'basketball' | 'lifestyle' | 'football' | 'skateboarding' | 'tennis' | 'training' | 'walking';
  material: 'combination' |  'nubuck' | 'synthetic' | 'suede' |  'rubber';
  discount: number;
  image_urls: string[];
}

export async function getProducts2(params: string): Promise<Product2[]> {
  try {
    const { rows } = await db.query<Product2>('SELECT * FROM products');

    return rows;
  } catch (error: unknown) {
    console.error('Error executing query:', error);

    return [];
  }
}