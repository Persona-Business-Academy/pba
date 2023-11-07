import { Box } from '@chakra-ui/react';
import { Header } from '@/components/organisms';
import { serverSession } from '@/pages/api/auth/[...nextauth]';

export default async function HeaderLayout({ children }: { children: React.ReactNode }) {
  const session = await serverSession();
  return (
    <>
      <Header user={session?.user || null} />
      <Box pt="60px">{children}</Box>
    </>
  );
}
