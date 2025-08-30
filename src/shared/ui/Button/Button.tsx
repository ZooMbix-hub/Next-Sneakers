'use client';

import cn from 'classnames';
import { Typography } from '../Typography';
import s from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({ children, leftIcon, rightIcon, disabled, ...props }: ButtonProps) {
  return (
    <button className={cn(s.button, {[s.isDisabled]: disabled})} {...props} >
      {leftIcon}
      <Typography variant={'bodyLarge'} color={'white'}>
        {children}
      </Typography>
      {rightIcon}
    </button>
  );
}