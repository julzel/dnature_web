'use client';
import { ReactNode, FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { CartProvider } from '@/contexts/CartContext';
import { StoreProvider } from '@/contexts/StoreContext';
import theme from '@/theme';

type ProvidersProps = {
  children: ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <CartProvider>
          <StoreProvider>{children}</StoreProvider>
        </CartProvider>
      </ChakraProvider>
    </>
  );
};

export default Providers;
