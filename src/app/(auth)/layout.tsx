import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { AuthWrapper } from '@/components/organism';
import { AuthProvider } from '@/contexts/AuthContext';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export const metadata = {
  title: 'PBA Authentication',
};

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  if (session) return redirect('/');

  return (
    <AuthProvider>
      <AuthWrapper>{children}</AuthWrapper>
    </AuthProvider>
  );
}
