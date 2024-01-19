import { Box } from '@chakra-ui/react';
import { OfflineCourseService } from '@/api/services/OfflineCourseService';
import { Header } from '@/components/organisms';
import { serverSession } from '@/pages/api/auth/[...nextauth]';

export default async function HeaderLayout({ children }: { children: React.ReactNode }) {
  const session = await serverSession();
  const forIndividuals = await OfflineCourseService.getOfflineCourseGroupedList();

  return (
    <>
      <Header user={session?.user || null} forIndividuals={forIndividuals} />
      <Box pt="60px">{children}</Box>
    </>
  );
}
