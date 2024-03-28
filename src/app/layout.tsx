import { Suspense } from 'react';
import { GoogleTagManager } from '@next/third-parties/google';
import { Metrika } from '@/components/molecules/Metrika';
import { segoe } from '@/utils/constants/fonts';
import Providers from './providers';
import './globals.scss';
import 'swiper/css';
import 'swiper/css/navigation';

export const metadata = {
  title: 'PBA - First Professional Armenian Education Platform',
  'yandex-verification': '2047985b4ea32ecf',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      style={{
        scrollBehavior: 'smooth',
      }}>
      <body className={segoe.className}>
        <Providers>{children}</Providers>
        <GoogleTagManager gtmId="GTM-PW2R4F6W" />
        <Suspense>
          <Metrika />
        </Suspense>
      </body>
    </html>
  );
}
