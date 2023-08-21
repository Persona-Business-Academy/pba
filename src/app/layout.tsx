import Header from '@/components/organism/Header';
import { Providers } from './providers';
import './globals.css';

export const metadata = {
  title: 'PBA Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
