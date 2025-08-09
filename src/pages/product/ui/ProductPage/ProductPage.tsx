import Image from 'next/image';
import type { Product } from '@/src/widgets/product/api';
import { Typography } from '@/src/shared/ui/Typography';
import { Header } from '../Header/Header';
import s from './ProductPage.module.css';

interface ProductPageProps {
  product: Product;
}

export function ProductPage({product}: ProductPageProps) {
  const {
    price,
    brand,
    color,
    gender,
    category,
    material,
    image_urls
  } = product;

  return (
    <div className={s.productPage}>
      <Header title={product.name} />
      <div className={s.content}>
        <div className={s.info}>
          <Typography variant={'h3'} weight={'medium'}>{'О товаре'}</Typography>
          <div className={s.desc}>
            <div className={s.itemDesc}>
              <Typography color={'gray3'}>{'Стоимость:'}</Typography>
              <Typography weight={'bold'}>{`${price} ₽`}</Typography>
            </div>
            <div className={s.itemDesc}>
              <Typography color={'gray3'}>{'Бренд:'}</Typography>
              <Typography weight={'bold'}>{brand}</Typography>
            </div>
            <div className={s.itemDesc}>
              <Typography color={'gray3'}>{'Цвет:'}</Typography>
              <Typography weight={'bold'}>{color}</Typography>
            </div>
            <div className={s.itemDesc}>
              <Typography color={'gray3'}>{'Пол:'}</Typography>
              <Typography weight={'bold'}>{gender}</Typography>
            </div>
            <div className={s.itemDesc}>
              <Typography color={'gray3'}>{'Категория:'}</Typography>
              <Typography weight={'bold'}>{category}</Typography>
            </div>
            <div className={s.itemDesc}>
              <Typography color={'gray3'}>{'Материал:'}</Typography>
              <Typography weight={'bold'}>{material}</Typography>
            </div>
          </div>
        </div>
        <div className={s.media}>
          <Image
            src={`/productImages/${image_urls[0]}`}
            alt={product.name}
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}