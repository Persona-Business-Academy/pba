import { FC, memo } from 'react';
import { Accordion, Stack } from '@chakra-ui/react';
import { NavItem } from '@/models/header';
import MobileNavItem from '../MobileNavItem';

interface MobileNavProps {
  navItems: NavItem[];
}
const MobileNav: FC<MobileNavProps> = ({ navItems }) => {
  return (
    <Stack p={4} display={{ md: 'none' }}>
      <Accordion allowToggle>
        {navItems.map((navItem: NavItem, i: number) => (
          <MobileNavItem key={i} {...navItem} />
        ))}
      </Accordion>
    </Stack>
  );
};
export default memo(MobileNav);
