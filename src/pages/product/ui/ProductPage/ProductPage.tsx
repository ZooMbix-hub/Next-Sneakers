import type { CardProps } from '@/src/widgets/product/ui/Card/Card';
import { Header } from '../Header/Header';
import s from './ProductPage.module.css';

interface ProductPageProps {
  product: CardProps;
}

export function ProductPage({product}: ProductPageProps) {
  return (
    <div className={s.productPage}>
      <Header title={product.name} />
      <div>

      </div>
    </div>
  );
}