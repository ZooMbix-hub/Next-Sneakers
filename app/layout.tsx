import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import { PublicLayout } from '@/src/app/layouts/PublicLayout/PublicLayout';
import { auth } from './lib/auth';
import './globals.css';

const inter = Inter({subsets: ['latin']});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <PublicLayout>
            {children}
          </PublicLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
