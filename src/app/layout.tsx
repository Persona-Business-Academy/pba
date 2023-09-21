import localFont from 'next/font/local';
import { Providers } from './providers';

export const metadata = {
  title: 'PBA Website',
};

const myFont = localFont({
  src: '../../public/fonts/SegoeUI.woff2',
  display: 'swap',
  variable: '--font-segoe',
});

// const montserrat = Montserrat({
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   subsets: ['latin'],
//   display: 'swap',
// });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
