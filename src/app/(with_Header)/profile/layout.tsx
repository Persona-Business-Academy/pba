'use client';
import { Flex } from '@chakra-ui/react';
import { SimpleSidebar } from '@/components/organisms';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SimpleSidebar />
      <Flex marginLeft="360px">{children}</Flex>
    </>
  );
}
