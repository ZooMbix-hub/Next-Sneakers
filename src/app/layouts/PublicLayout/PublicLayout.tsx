import { Header } from './ui/Header';
import s from './PublicLayout.module.css';

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={s.layoutWrapper}>
      <Header />
      <main className={s.contentWrapper}>
        {children}
      </main>
    </div>
  );
}
