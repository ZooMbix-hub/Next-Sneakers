'use client';

import { useState } from 'react';
import cn from 'classnames';
import { Icon } from '@/src/assets';
import { IconButton } from '@/src/shared/ui/IconButton';
import s from './AddDeferred.module.css';

export function AddDeferred() {
  const [isActive, setIsActive] = useState(true);

  return (
    <IconButton className={cn(s.addDeferred, {[s.active]: isActive})}>
      {
        isActive ? <Icon.HeartFill /> : <Icon.Heart />
      }
    </IconButton>
  );
}