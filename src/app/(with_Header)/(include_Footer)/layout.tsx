import { Fragment } from 'react';
import { Footer } from '@/components/organisms';

export default function HeaderLayout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      {children}
      <Footer />
    </Fragment>
  );
}
