import { segoe } from '@/constants/fonts';
import { Providers } from './providers';

export const metadata = {
  title: 'PBA Website',
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
