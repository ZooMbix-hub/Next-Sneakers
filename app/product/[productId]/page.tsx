import type { CardProps } from '@/src/widgets/product/ui/Card/Card';
import MOCK_PRODUCTS from '../../../products.json';
import { ProductPage } from '@/src/pages/product';

interface ProductProps {
  params: {
    productId: string;
  }
}

export async function generateMetadata({ params }: ProductProps) {
  const {productId} = await params;

  const product: CardProps = await new Promise(resolve => setTimeout(() => resolve(
    MOCK_PRODUCTS.find(({id}) => id === Number(productId)) as CardProps
  ), 2000));

  return {
    title: product.name
  };
}

export default function Product({ params }: ProductProps) {
  return <ProductPage />;
}