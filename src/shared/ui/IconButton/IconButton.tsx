import cn from 'classnames';
import s from './IconButton.module.css';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function IconButton({children, className}: IconButtonProps) {
  return (
    <button className={cn(s.iconButton, className)}>
      {children}
    </button>
  );
}