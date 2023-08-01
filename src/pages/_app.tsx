import '@/styles/globals.css';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, LightMode } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <LightMode>
          <Component {...pageProps} />
        </LightMode>
      </ChakraProvider>
    </CacheProvider>
  );
}
