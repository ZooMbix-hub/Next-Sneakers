import { Typography } from '../Typography';
import s from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  leftIcon?: React.ReactNode;
  rightIcon ?: React.ReactNode;
}

export function Button({ children, onClick, leftIcon, rightIcon }: ButtonProps) {
  return (
    <button className={s.button} onClick={onClick}>
      {leftIcon}
      <Typography variant={'bodyLarge'} color={'white'}>
        {children}
      </Typography>
      {rightIcon}
    </button>
  );
}