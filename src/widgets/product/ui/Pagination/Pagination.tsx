'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { Icon } from '@/src/assets';
import { PaginationButton } from './PaginationButton';
import s from './Pagination.module.css';

export function Pagination({ totalPage }: { totalPage: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams?.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams || '');
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  /* TODO: реализовать отображение номеров страниц */
  const getPages = () => {
    return Array.from({length: totalPage}, (_, i) => ++i);
  };

  return (
    <div className={s.pagination}>
      <PaginationButton
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage === 1}
      >
        <Icon.ArrowLeft />
      </PaginationButton>
      <div className={s.paginationsPages}>
        {
          getPages().map((item, i) => (
            <PaginationButton
              key={i}
              href={createPageURL(item)}
              isActive={currentPage === item}
            >
              {item}
            </PaginationButton>
          ))
        }
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