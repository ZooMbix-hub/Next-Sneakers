import { Inter } from 'next/font/google';
import { PublicLayout } from '@/src/app/layouts/PublicLayout/PublicLayout';
import './globals.css';

const inter = Inter({subsets: ['latin']});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PublicLayout>
          {children}
        </PublicLayout>
      </body>
    </html>
  );
}
