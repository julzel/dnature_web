import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Box, Flex } from '@chakra-ui/react';
import Providers from '@/providers';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import "@fontsource/montserrat/400.css"; // Weight 400.
import "@fontsource/montserrat/700.css"; // Weight 700.
import "@fontsource/oswald/400.css";  // Weight 400
import "@fontsource/oswald/700.css";  // Weight 700
import '../globals.css';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <Flex as='body' flexDirection='column' minH='100dvh'>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header />
            <Box as='main' flex={1}>{children}</Box>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </Flex>
    </html>
  );
}
