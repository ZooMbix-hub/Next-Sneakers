import type { CardProps } from '@/src/widgets/product/ui/Card/Card';
import s from './ProductPage.module.css';
import { Typography } from '@/src/shared/ui/Typography';

interface ProductPageProps {
  product: CardProps;
}

export function ProductPage({product}: ProductPageProps) {
  return (
    <div className={s.productPage}>
      <Typography variant={'h1'} weight={'bold'}>
        {product.name}
      </Typography>
      <div>

      </div>
    </div>
  );
}