'use client';

import React, { useRef } from 'react';
import cn from 'classnames';
import s from './TextField.module.css';

type InputPropsDefault = 'name' | 'type' | 'onChange' | 'required' | 'defaultValue' | 'placeholder' | 'inputMode';

interface TextFieldProps extends Pick<React.InputHTMLAttributes<HTMLInputElement>, InputPropsDefault> {
  isFullWidth?: boolean;
  isDanger?: boolean;
  prefixNode?: React.ReactNode;
  postfixNode?: React.ReactNode;
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
    prefixNode,
    postfixNode,
    isFullWidth = true,
    isDanger
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={cn(s.searchField, {
        [s.fullWidth]: isFullWidth,
        [s.danger]: isDanger
      })}
      onClick={() => inputRef.current?.focus()}
    >
      {prefixNode}
      <input
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
      {postfixNode}
    </div>
  );
}