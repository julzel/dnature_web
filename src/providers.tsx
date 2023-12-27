'use client';
import { ReactNode, FC } from 'react';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';

type ProvidersProps = {
  children: ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
};

export default Providers;
