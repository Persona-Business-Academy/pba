import { FC, memo } from 'react';
import { Accordion, Stack } from '@chakra-ui/react';
import { User } from 'next-auth';
import { NavItem } from '@/models/header';
import MobileNavItem from '../MobileNavItem';
import ProfileNavItem from '../ProfileNavItem';

interface MobileNavProps {
  navItems: NavItem[];
  user: User | null;
}
const MobileNav: FC<MobileNavProps> = ({ navItems, user }) => {
  return (
    <Stack px="16px" display={{ md: 'none' }}>
      <Accordion allowToggle>
        {user && <ProfileNavItem user={user} />}
        {navItems.map((navItem: NavItem, i: number) => (
          <MobileNavItem key={i} {...navItem} />
        ))}
      </Accordion>
    </Stack>
  );
};
export default memo(MobileNav);
