import { Fragment } from 'react';
import { getServerSession } from 'next-auth';
import { Header } from '@/components/organisms';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function HeaderLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  return (
    <Fragment>
      <Header user={session?.user || null} />
      {children}
    </Fragment>
  );
}
