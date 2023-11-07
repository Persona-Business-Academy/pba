'use client';
import { FC, memo, useEffect } from 'react';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme, LightMode, ThemeConfig } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { colors, components, space } from '@/constants/chakra';
import { montserrat } from '@/constants/fonts';

type Props = {
  children: React.ReactNode;
};

const theme: ThemeConfig = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors,
  components,
  space,
  fonts: { heading: montserrat.style.fontFamily },
});

const queryClient = new QueryClient();

const Providers: FC<Props> = ({ children }) => {
  useEffect(() => {
    if (localStorage.getItem('chakra-ui-color-mode')) {
      localStorage.removeItem('chakra-ui-color-mode');
    }
  }, []);

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <CacheProvider>
          <ChakraProvider
            theme={theme}
            toastOptions={{ defaultOptions: { position: 'bottom-right', isClosable: true } }}>
            <LightMode>{children}</LightMode>
          </ChakraProvider>
        </CacheProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default memo(Providers);
