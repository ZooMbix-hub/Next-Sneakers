'use client';

import React, { useRef } from 'react';
import cn from 'classnames';
import s from './TextField.module.css';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  isFullWidth?: boolean;
}

export function TextField(props: TextFieldProps) {
  const {
    name = 'text',
    type,
    onChange,
    required = false,
    defaultValue,
    placeholder,
    inputMode,
    icon,
    isFullWidth = true
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={cn(s.searchField, {[s.fullWidth]: isFullWidth})}
      onClick={() => inputRef.current?.focus()}
    >
      {icon}
      <input
        id={'password'}
        name={name}
        type={type}
        onChange={onChange}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
        inputMode={inputMode}
        className={s.field}
        ref={inputRef}
      />
    </div>
  );
}