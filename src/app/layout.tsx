import { segoe } from '@/utils/constants/fonts';
import Providers from './providers';
import './globals.scss';
import 'swiper/css';
import 'swiper/css/navigation';

export const metadata = {
  title: 'Persona Business Academy',
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
      </body>
    </html>
  );
}
