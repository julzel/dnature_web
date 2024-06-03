'use client';
import { ReactNode, FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { CartProvider } from '@/contexts/CartContext';
import { StoreProvider } from '@/contexts/StoreContext';
import { ApolloProvider } from '@apollo/client';
import client from './lib/apollo-client';
import theme from '@/theme';

type ProvidersProps = {
  children: ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          <CartProvider>
            <StoreProvider>{children}</StoreProvider>
          </CartProvider>
        </ChakraProvider>
      </ApolloProvider>
    </>
  );
};

export default Providers;
