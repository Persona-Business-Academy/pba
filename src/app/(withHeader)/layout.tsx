import { Fragment } from 'react';
import Header from '@/components/organism/Header';

export default function HeaderLayout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}
