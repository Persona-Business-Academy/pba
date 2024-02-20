import { redirect } from 'next/navigation';
import { AuthWrapper } from '@/components/organisms';
import { AuthProvider } from '@/contexts/AuthContext';
import { serverSession } from '@/pages/api/auth/[...nextauth]';

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const session = await serverSession();
  if (session) return redirect('/');

  return (
    <AuthProvider>
      <AuthWrapper>{children}</AuthWrapper>
    </AuthProvider>
  );
}
