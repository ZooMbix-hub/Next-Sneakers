import { ProductPage } from '@/src/pages/product';
import type { CardProps } from '@/src/widgets/product/ui/Card/Card';
import { getProduct } from '@/src/widgets/product/api';

interface ProductProps {
  params: {
    productId: string;
  }
}

export async function generateMetadata({ params }: ProductProps) {
  const {productId} = await params;

  const product: CardProps = await getProduct(Number(productId));

  return {
    title: product.name
  };
}

export default async function Product({ params }: ProductProps) {
  const {productId} = await params;

  const product: CardProps = await getProduct(Number(productId));

  return <ProductPage product={product} />;
}