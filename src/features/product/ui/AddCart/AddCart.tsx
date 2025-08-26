'use client';

import { Icon } from '@/src/assets';
import { IconButton } from '@/src/shared/ui/IconButton';
import { addToCart } from '../../api';

export function AddCart({ productId, isActive }: { productId: number, isActive: boolean }) {
  const onClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    await addToCart(productId);
  };

  return (
    <IconButton onClick={onClick} aria-label={'Добавить в корзину'}>
      <Icon.Plus color={'var(--gray1)'} />
    </IconButton>
  );
}