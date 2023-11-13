import { Footer } from '@/components/organisms';

export default function HeaderLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
