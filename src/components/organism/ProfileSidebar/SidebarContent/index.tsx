import { memo } from 'react';
import { Box, BoxProps, Flex, useColorModeValue } from '@chakra-ui/react';
import NavItem from '../NavItem';

interface SidebarProps extends BoxProps {
  linkItems?: any[];
}

const SidebarContent = ({ linkItems, ...rest }: SidebarProps) => {
  return (
    <Box
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex padding="64px 46px" flexDirection="column">
        {linkItems &&
          linkItems.map(link => (
            <NavItem key={link.name} icon={link.icon} href={link.href}>
              {link.name}
            </NavItem>
          ))}
      </Flex>
    </Box>
  );
};

export default memo(SidebarContent);
