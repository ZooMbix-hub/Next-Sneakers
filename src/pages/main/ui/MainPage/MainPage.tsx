import { Suspense } from 'react';
import { ListProducts, ListProductsSkeleton } from '@/src/widgets/product/ui';
import { Header } from '../Header/Header';
import s from './MainPage.module.css';
import { Pagination } from '@/src/shared/ui/Pagination';

export function MainPage({ filter, page }: { filter: string, page: number }) {
  return (
    <div className={s.mainPage}>
      <Header />
      <Suspense key={filter + page} fallback={<ListProductsSkeleton />}>
        <ListProducts filter={filter} page={page} />
      </Suspense>
      <Pagination />
    </div>
  );
}