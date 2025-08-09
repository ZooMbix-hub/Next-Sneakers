import { Suspense } from 'react';
import { ListProducts, Skeleton } from '@/src/widgets/product/ui';
import { Header } from '../Header/Header';
import s from './MainPage.module.css';
import { Pagination } from '@/src/shared/ui/Pagination';

export function MainPage({ filter }: { filter: string }) {
  return (
    <div className={s.mainPage}>
      <Header />
      <Suspense key={filter} fallback={<Skeleton />}>
        <ListProducts filter={filter} />
      </Suspense>
      <Pagination />
    </div>
  );
}