import React, { ReactNode } from 'react';
import Providers from '@/providers';
import Header from '@/components/Header';
import '../globals.css';

interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  return (
    <html lang={locale}>
      <body>
        <Providers>
          <Header />
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
