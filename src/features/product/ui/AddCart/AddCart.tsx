'use client';

import { Icon } from '@/src/assets';
import { IconButton } from '@/src/shared/ui/IconButton';

export function AddCart({ productId }: { productId: number }) {
  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
  };

  return (
    <IconButton onClick={onClick} aria-label={'Добавить в корзину'}>
      <Icon.Plus color={'var(--gray1)'} />
    </IconButton>
  );
}