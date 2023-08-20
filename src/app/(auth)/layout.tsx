import { AuthWrapper } from '@/components/organism';
import { AuthProvider } from '@/contexts/AuthContext';

export const metadata = {
  title: 'PBA Authentication',
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <AuthWrapper>{children}</AuthWrapper>
    </AuthProvider>
  );
}
