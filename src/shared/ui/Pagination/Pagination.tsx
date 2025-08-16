'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { Icon } from '@/src/assets';
import s from './Pagination.module.css';
import Link from 'next/link';

export function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams?.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams || '');
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className={s.pagination}>
      <Link href={createPageURL(currentPage - 1)}>
        <Icon.ArrowLeft />
      </Link>
      <div>

      </div>
      <Link href={createPageURL(currentPage + 1)}>
        <Icon.ArrowRight />
      </Link>
    </div>
  );
}