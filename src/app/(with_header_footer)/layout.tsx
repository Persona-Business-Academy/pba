import { Fragment } from 'react';
import { Footer, Header } from '@/components/organism';

export default function HeaderLayout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}
