import { Suspense } from 'react';
import { ListProducts } from '@/src/widgets/product/ui';
import { Header } from '../Header/Header';
import s from './MainPage.module.css';

export function MainPage() {
  return (
    <div className={s.mainPage}>
      <Header />
      <Suspense fallback={'Loading'}>
        <ListProducts />
      </Suspense>
    </div>
  );
}