import { Providers } from './providers';
import './globals.scss';

export const metadata = {
  title: 'PBA Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
