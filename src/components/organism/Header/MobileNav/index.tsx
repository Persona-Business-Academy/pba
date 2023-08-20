import { FC } from 'react';
import { Stack, useColorModeValue } from '@chakra-ui/react';
import { NavItem } from '..';
import MobileNavItem from '../MobileNavItem';

interface MobileNavProps {
  navItems: NavItem[];
}
const MobileNav: FC<MobileNavProps> = ({ navItems }) => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {navItems.map((navItem: any) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};
export default MobileNav;
