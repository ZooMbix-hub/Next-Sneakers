'use client';

import { Icon } from '@/src/assets';
import { IconButton } from '../IconButton';
import s from './Pagination.module.css';

export function Pagination() {
  return (
    <div className={s.pagination}>
      <IconButton>
        <Icon.ArrowLeft />
      </IconButton>
      <div>
        
      </div>
      <IconButton>
        <Icon.ArrowRight />
      </IconButton>
    </div>
  );
}