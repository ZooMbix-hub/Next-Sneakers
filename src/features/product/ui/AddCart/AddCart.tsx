'use client';

import { useState } from 'react';
import cn from 'classnames';
import { Icon } from '@/src/assets';
import { IconButton } from '@/src/shared/ui/IconButton';
import { addToCart, deleteFromCart } from '../../api';
import s from './AddCart.module.css';

export function AddCart({ productId, isActive: isActiveProps }: { productId: number, isActive: boolean }) {
  const [isActive, setIsActive] = useState(isActiveProps);

  const onClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    if (isActive) {
      await deleteFromCart(productId);
    } else {
      await addToCart(productId);
    }

    setIsActive((prev) => !prev);
  };

  return (
    <IconButton
      onClick={onClick}
      className={cn({[s.active]: isActive})}
      aria-label={'Добавить в корзину'}
    >
      {
        isActive ? <Icon.Check /> : <Icon.Plus color={'var(--gray1)'} />
      }
    </IconButton>
  );
}