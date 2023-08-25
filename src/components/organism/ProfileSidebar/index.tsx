'use client';

import React from 'react';
import { Box, useColorModeValue, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';
import MobileNavigation from './MobileNavigation';
import SidebarContent from './SidebarContent';
import ProfileIcon from 'public/icons/profile_icon.svg';
import CoursesIcon from 'public/icons/courses_icon.svg';
import AchievementsIcon from 'public/icons/achievements_icon.svg';
import SubscriptionIcon from 'public/icons/subscription_icon.svg';
import WishlistIcon from 'public/icons/wishlist_icon.svg';
import PbaCreditIcon from 'public/icons/pba_credit_icon.svg';
import PaymentsIcon from 'public/icons/payments_icon.svg';
import HelpIcon from 'public/icons/help_icon.svg';
import LogoutIcon from 'public/icons/logout_icon.svg';
import {
  ACHIEVEMENTS_ROUTE,
  COURSES_ROUTE,
  HELP_ROUTE,
  PAYMENTS_ROUTE,
  PBA_CREDIT_ROUTE,
  PROFILE_ROUTE,
  SUBSCRIPTION_ROUTE,
  WISHLIST_ROUTE,
} from '@/constants/routes';

interface LinkItemProps {
  name: string;
  icon: string;
  href?: string;
}
export const LinkItems: Array<LinkItemProps> = [
  { name: 'Profile', icon: ProfileIcon, href: PROFILE_ROUTE },
  { name: 'Courses', icon: CoursesIcon, href: COURSES_ROUTE },
  { name: 'Achievements', icon: AchievementsIcon, href: ACHIEVEMENTS_ROUTE },
  { name: 'Subscription', icon: SubscriptionIcon, href: SUBSCRIPTION_ROUTE },
  { name: 'Wishlist', icon: WishlistIcon, href: WISHLIST_ROUTE },
  { name: 'PBA credit', icon: PbaCreditIcon, href: PBA_CREDIT_ROUTE },
  { name: 'Payments', icon: PaymentsIcon, href: PAYMENTS_ROUTE },
  { name: 'Help', icon: HelpIcon, href: HELP_ROUTE },
  { name: 'Log out', icon: LogoutIcon },
];

export default function SimpleSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100%" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
        width="360px"
        linkItems={LinkItems}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size="lg"
        returnFocusOnClose={false}
        onOverlayClick={onClose}>
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNavigation display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
    </Box>
  );
}
