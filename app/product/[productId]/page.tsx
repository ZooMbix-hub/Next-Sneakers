import { ProductPage } from '@/src/pages/product';
import type { Product } from '@/src/widgets/product/api';
import { getProduct } from '@/src/widgets/product/api';

interface ProductProps {
  params: {
    productId: string;
  }
}

export async function generateMetadata({ params }: ProductProps) {
  const {productId} = await params;

  const product: Product = await getProduct(Number(productId));

  return {
    title: product.name
  };
}

export default async function Product({ params }: ProductProps) {
  const {productId} = await params;

  const product: Product = await getProduct(Number(productId));

  return <ProductPage product={product} />;
}