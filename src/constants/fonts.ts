import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

const montserrat = Montserrat({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const segoe = localFont({
  src: '../../public/fonts/SegoeUI.woff2',
  display: 'swap',
  variable: '--font-segoe',
});

export { montserrat, segoe };
