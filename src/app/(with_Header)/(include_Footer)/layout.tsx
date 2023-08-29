import { Fragment } from 'react';
import { Footer } from '@/components/organism';

export default function HeaderLayout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      {children}
      <Footer />
    </Fragment>
  );
}
