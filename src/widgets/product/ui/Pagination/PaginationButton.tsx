import Link from 'next/link';
import cn from 'classnames';
import s from './Pagination.module.css';

interface PaginationButtonProps {
  children: string | React.ReactNode;
  href: string;
  isDisabled: boolean;
}

export function PaginationButton({ children, href, isDisabled }: PaginationButtonProps) {
  return isDisabled ? (
    <div className={cn(s.paginationButton, s.disabled)}>
      {children}
    </div>
  ) : (
    <Link
      href={href}
      className={s.paginationButton}
    >
      {children}
    </Link>
  );
}