'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { Icon } from '@/src/assets';
import { PaginationButton } from './PaginationButton';
import s from './Pagination.module.css';

const ITEMS_PER_PAGE = 10;

export function Pagination({ countProducts }: { countProducts: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams?.get('page')) || 1;
  const totalPage = Math.ceil(countProducts / ITEMS_PER_PAGE);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams || '');
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className={s.pagination}>
      <PaginationButton
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage === 1}
      >
        <Icon.ArrowLeft />
      </PaginationButton>
      <div>

      </div>
      <PaginationButton
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage === totalPage}
      >
        <Icon.ArrowRight />
      </PaginationButton>
    </div>
  );
}