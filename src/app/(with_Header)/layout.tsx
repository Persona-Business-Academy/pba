import { Fragment } from 'react';
import { getServerSession } from 'next-auth';
import { Header } from '@/components/organism';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function HeaderLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  console.log(session, 'SESSION');
  return (
    <Fragment>
      <Header user={session?.user || null} />
      {children}
    </Fragment>
  );
}
