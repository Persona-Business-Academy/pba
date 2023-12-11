import { segoe } from '@/utils/constants/fonts';
import Providers from './providers';
import './globals.scss';

export const metadata = {
  title: 'Persona Business Academy',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={segoe.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
