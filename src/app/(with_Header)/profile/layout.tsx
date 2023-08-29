import { Fragment } from 'react';
import { Flex } from '@chakra-ui/react';
import { SimpleSidebar } from '@/components/organism';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <SimpleSidebar />
      <Flex marginLeft="360px">{children}</Flex>
    </Fragment>
  );
}
