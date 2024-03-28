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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PW2R4F6W"
            height="0"
            width="0"
            style={{
              display: 'none',
              visibility: 'hidden',
            }}></iframe>
        </noscript>
      </body>
    </html>
  );
}
