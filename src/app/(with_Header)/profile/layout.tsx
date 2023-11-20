import { Flex } from '@chakra-ui/react';
import { SimpleSidebar } from '@/components/organisms';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SimpleSidebar />
      <Flex marginLeft={{ base: 0, md: '360px' }}>{children}</Flex>
    </>
  );
}
