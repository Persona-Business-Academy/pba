import React, { memo } from 'react';
import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';
import MobileNavigation from './MobileNavigation';
import SidebarContent from './SidebarContent';

const SimpleSidebar = () => {
  const { isOpen, onOpen } = useDisclosure();
  return (
    <Box minH="100%">
      <SidebarContent display={{ base: 'none', md: 'block' }} width="360px" />
      <Drawer
        isOpen={isOpen}
        placement="left"
        size="lg"
        returnFocusOnClose={false}
        onClose={() => {}}>
        <DrawerContent>
          <SidebarContent />
        </DrawerContent>
      </Drawer>
      <MobileNavigation display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
    </Box>
  );
};

export default memo(SimpleSidebar);
