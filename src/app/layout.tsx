import { GoogleTagManager } from '@next/third-parties/google';
import { segoe } from '@/utils/constants/fonts';
import Providers from './providers';
import './globals.scss';
import 'swiper/css';
import 'swiper/css/navigation';

export const metadata = {
  title: 'PBA - First Professional Armenian Education Platform',
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
      </body>
    </html>
  );
}
