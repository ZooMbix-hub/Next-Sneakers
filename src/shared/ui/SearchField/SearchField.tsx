'use client';

import { Icon } from '@/src/assets';
import { useRef } from 'react';
import s from './SearchField.module.css';

export interface SearchFieldProps {

}

export function SearchField(props: SearchFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={s.searchField} onClick={() => inputRef.current?.focus()}>
      <Icon.Search />
      <input
        className={s.field}
        type={'text'}
        placeholder={'Поиск'}
        ref={inputRef}
      />
    </div>
  );
}