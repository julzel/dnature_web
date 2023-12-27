'use client';
import { ReactNode, FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';

type ProvidersProps = {
  children: ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
};

export default Providers;
