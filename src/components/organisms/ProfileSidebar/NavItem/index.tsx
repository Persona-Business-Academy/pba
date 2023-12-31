import { memo, useCallback } from 'react';
import { Box, Flex, FlexProps } from '@chakra-ui/react';
import Link from 'next/link';

interface NavItemProps extends FlexProps {
  icon: string;
  children: React.ReactNode;
  href: string | undefined;
}
const NavItem = ({ href, icon: Icon, children, ...rest }: NavItemProps) => {
  const logoutHandler = useCallback(() => {}, []);
  return (
    <Box
      as={Link}
      href={href || ''}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      paddingLeft={24}
      marginBottom="10px"
      borderRadius="9px"
      _hover={{
        bg: '#F3F4F6',
        color: '#222',
      }}
      height="52px"
      {...(href ? {} : { onClick: logoutHandler })}>
      <Flex
        align="center"
        p="4"
        mx="4"
        height="100%"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        display="flex"
        gap="10px"
        {...rest}>
        <Icon />
        {children}
      </Flex>
    </Box>
  );
};

export default memo(NavItem);
