'use client';
import { Fragment } from 'react';
import SimpleSidebar from '@/components/organism/ProfileSidebar';
import { Container, Flex } from '@chakra-ui/react';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <SimpleSidebar />
      <Flex marginLeft="360px">{children}</Flex>
    </Fragment>
  );
}
