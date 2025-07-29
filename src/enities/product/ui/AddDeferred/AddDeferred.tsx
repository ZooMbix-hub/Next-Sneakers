'use client';

import { useState } from 'react';
import cn from 'classnames';
import { Icon } from '@/src/assets';
import s from './AddDeferred.module.css';

export function AddDeferred() {
  const [isActive, setIsActive] = useState(true);

  return (
    <button className={cn(s.addDeferred, {[s.active]: isActive})}>
      {
        isActive ? <Icon.HeartFill /> : <Icon.Heart />
      }
    </button>
  );
}