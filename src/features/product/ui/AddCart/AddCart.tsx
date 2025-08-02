'use client';

import { Icon } from '@/src/assets';
import { IconButton } from '@/src/shared/ui/IconButton';

export function AddCart() {
  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    console.log('first');
  };

  return (
    <IconButton onClick={onClick}>
      <Icon.Plus color={'var(--gray1)'} />
    </IconButton>
  );
}