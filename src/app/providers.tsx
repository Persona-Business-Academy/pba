'use client';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme, LightMode } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { breakpoints, colors, space } from '@/constants/chakra';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors,
  breakpoints,
  space,
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
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
}
