'use client';

import { useRef } from 'react';
import { Icon } from '@/src/assets';
import s from './SearchField.module.css';

export function SearchField({ onChange, defaultValue }: React.InputHTMLAttributes<HTMLInputElement>) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={s.searchField} onClick={() => inputRef.current?.focus()}>
      <Icon.Search />
      <input
        onChange={onChange}
        defaultValue={defaultValue}
        className={s.field}
        type={'text'}
        placeholder={'Поиск'}
        ref={inputRef}
      />
    </div>
  );
}