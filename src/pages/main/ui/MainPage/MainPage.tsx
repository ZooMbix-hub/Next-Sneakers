import { Suspense } from 'react';
import { ListProducts, Skeleton } from '@/src/widgets/product/ui';
import { Header } from '../Header/Header';
import s from './MainPage.module.css';

export function MainPage({ searchValue }: { searchValue: string }) {
  return (
    <div className={s.mainPage}>
      <Header />
      <Suspense key={searchValue} fallback={<Skeleton />}>
        <ListProducts searchValue={searchValue} />
      </Suspense>
    </div>
  );
}