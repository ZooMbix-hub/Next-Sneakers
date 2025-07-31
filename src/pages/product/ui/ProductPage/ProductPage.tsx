import type { CardProps } from '@/src/widgets/product/ui/Card/Card';
import s from './ProductPage.module.css';

interface ProductPageProps {
  product: CardProps;
}

export function ProductPage({product}: ProductPageProps) {
  return (
    <div>
      ProductPage
    </div>
  );
}