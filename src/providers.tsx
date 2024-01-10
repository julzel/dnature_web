'use client';
import { ReactNode, FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { CartProvider } from '@/contexts/CartContext';
import theme from '@/theme';

type ProvidersProps = {
  children: ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <CartProvider>{children}</CartProvider>
      </ChakraProvider>
    </>
  );
};

export default Providers;
