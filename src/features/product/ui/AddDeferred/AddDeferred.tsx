'use client';

import { useState } from 'react';
import cn from 'classnames';
import { Icon } from '@/src/assets';
import { IconButton } from '@/src/shared/ui/IconButton';
import s from './AddDeferred.module.css';

export function AddDeferred() {
  const [isActive, setIsActive] = useState(false);

  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
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