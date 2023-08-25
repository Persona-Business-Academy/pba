import { Box, BoxProps, CloseButton, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import NavItem from '../NavItem';

interface SidebarProps extends BoxProps {
  onClose: () => void;
  linkItems?: any[];
}

const SidebarContent = ({ onClose, linkItems, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
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

export default SidebarContent;
