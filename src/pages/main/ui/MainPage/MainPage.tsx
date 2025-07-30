import { ListProducts } from '@/src/widgets/product/ui';
import { Header } from '../Header/Header';
import s from './MainPage.module.css';

export function MainPage() {
  return (
    <div className={s.mainPage}>
      <Header />
      <ListProducts />
    </div>
  );
}