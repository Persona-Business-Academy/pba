import { PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';
import { KidsCourseService } from '@/api/services/KidsCourseService';
import { OfflineCourseService } from '@/api/services/OfflineCourseService';
import { Header } from '@/components/organisms';
import { serverSession } from '@/pages/api/auth/[...nextauth]';

export default async function HeaderLayout({ children }: PropsWithChildren) {
  const [session, forIndividuals, forKids] = await Promise.all([
    serverSession(),
    OfflineCourseService.getOfflineCourseGroupedList(),
    KidsCourseService.getOfflineCourseGroupedList(),
  ]);

  if (!forIndividuals || !forKids) {
    return null;
  }

  return (
    <>
      <Header user={session?.user || null} forIndividuals={forIndividuals} forKids={forKids} />
      <Box pt="60px">{children}</Box>
    </>
  );
}
