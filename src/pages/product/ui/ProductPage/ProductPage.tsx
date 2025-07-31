import type { CardProps } from '@/src/widgets/product/ui/Card/Card';
import { Typography } from '@/src/shared/ui/Typography';
import s from './ProductPage.module.css';
import { IconButton } from '@/src/shared/ui/IconButton';
import { Icon } from '@/src/assets';

interface ProductPageProps {
  product: CardProps;
}

export function ProductPage({product}: ProductPageProps) {
  return (
    <div className={s.productPage}>
      <div className={s.header}>
        <IconButton>
          <Icon.ChevronLeft />
        </IconButton>
        <Typography variant={'h1'} weight={'bold'}>
          {product.name}
        </Typography>
      </div>
      <div>

      </div>
    </div>
  );
}