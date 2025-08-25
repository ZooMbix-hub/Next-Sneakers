'use client';

import { useState } from 'react';
import cn from 'classnames';
import { Icon } from '@/src/assets';
import { IconButton } from '@/src/shared/ui/IconButton';
import { addToDeffered, deleteFromDeffered } from '../../api';
import s from './AddDeferred.module.css';

export function AddDeferred({ productId }: { productId: number }) {
  const [isActive, setIsActive] = useState(false);

  const onClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    if (isActive) {
      await deleteFromDeffered(productId);
    } else {
      await addToDeffered(productId);
    }

    setIsActive((prev) => !prev);
  };

  return (
    <IconButton
      onClick={onClick}
      className={cn(s.addDeferred, {[s.active]: isActive})}
      aria-label={'Добавить в отложенные'}
    >
      {
        isActive ? <Icon.HeartFill /> : <Icon.Heart />
      }
    </IconButton>
  );
}