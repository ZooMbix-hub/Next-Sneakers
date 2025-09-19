'use client';

import React, { useState } from 'react';
import { Icon } from '@/src/assets';
import { TextField } from '../TextField';
import s from './PasswordField.module.css';

interface PasswordFieldProps {
  name: string;
  placeholder: string;
  isDanger: boolean;
}

export function PasswordField({ name, placeholder, isDanger }: PasswordFieldProps) {
  const [showPass, setShowPass] = useState(false);

  const onClickButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setShowPass((prev) => !prev);
  };

  return (
    <TextField
      name={name}
      placeholder={placeholder}
      isDanger={isDanger}
      type={showPass ? 'text' : 'password'}
      required={true}
      prefixNode={<Icon.Key />}
      postfixNode={
        (
          <button onClick={onClickButton} className={s.passShowButton}>
            {showPass ? <Icon.EyeSlash /> : <Icon.Eye />}
          </button>
        )
      }
    />
  );
}
