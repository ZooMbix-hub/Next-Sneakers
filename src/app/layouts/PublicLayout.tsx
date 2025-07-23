import { Inter } from 'next/font/google';
import cn from 'classnames';

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
});

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn(interSans.variable)}>
      <header>
        Header
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}
