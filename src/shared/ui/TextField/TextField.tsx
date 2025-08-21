'use client';

import React, { useRef } from 'react';
import s from './TextField.module.css';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export function TextField({ onChange, defaultValue, icon, placeholder }: TextFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={s.searchField} onClick={() => inputRef.current?.focus()}>
      {icon}
      <input
        onChange={onChange}
        defaultValue={defaultValue}
        className={s.field}
        type={'text'}
        placeholder={placeholder}
        ref={inputRef}
      />
    </div>
  );
}