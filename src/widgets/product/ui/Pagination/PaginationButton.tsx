import Link from 'next/link';
import cn from 'classnames';
import s from './Pagination.module.css';

interface PaginationButtonProps {
  children: string | React.ReactNode;
  href: string;
  isDisabled?: boolean;
  isActive?: boolean;
}

export function PaginationButton({ children, href, isDisabled, isActive }: PaginationButtonProps) {
  if (isActive) {
    return (
      <div className={cn(s.paginationButton, s.active)}>
        {children}
      </div>
    );
  }

  if (isDisabled) {
    return (
      <div className={cn(s.paginationButton, s.disabled)}>
        {children}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={s.paginationButton}
    >
      {children}
    </Link>
  );
}