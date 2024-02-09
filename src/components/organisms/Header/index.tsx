import { FC, memo, MouseEvent, useCallback, useRef } from 'react';
import {
  Accordion,
  Avatar,
  Box,
  Collapse,
  Flex,
  IconButton,
  Stack,
  useDisclosure,
  useOutsideClick,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User } from 'next-auth';
import { useSession } from 'next-auth/react';
import CloseIcon from '/public/icons/close_icon.svg';
import BurgerMenuIcon from '/public/icons/menu.svg';
import { Button } from '@/components/atoms';
import { OfflineCourseListGroupedModel } from '@/models/offline-course.model';
import { HOMEPAGE_ROUTE, SIGN_IN_ROUTE, SIGN_UP_ROUTE } from '@/utils/constants/routes';
import { generateAWSUrl } from '@/utils/helpers/common';
import { getNavigationItems } from '@/utils/helpers/navigation';
import { NavItem } from '@/utils/models/header';
import DesktopNav from './DesktopNavigation';
import MobileNav from './MobileNav';
import ProfileMenu from './ProfileMenu';
import ProfileNavItem from './ProfileNavItem';

type HeaderProps = {
  user: User | null;
  forIndividuals: OfflineCourseListGroupedModel;
  forKids: OfflineCourseListGroupedModel;
};

const Header: FC<HeaderProps> = ({ user, forIndividuals, forKids }) => {
  const { isOpen: isMenuOpen, onToggle: toggleMenuDropdown, onClose: closeMenu } = useDisclosure();
  const {
    isOpen: isUserProfileOpen,
    onToggle: toggleUserDropdown,
    onClose: closeUserProfile,
  } = useDisclosure();
  const { data } = useSession();
  const pathname = usePathname();
  const collapseRef = useRef<HTMLDivElement>(null);
  const userCollapseRef = useRef<HTMLDivElement>(null);

  const navigation: NavItem[] = getNavigationItems(forIndividuals, forKids);

  useOutsideClick({
    ref: collapseRef,
    handler: () => {
      if (isMenuOpen) {
        closeMenu();
      }
    },
  });

  // useOutsideClick({
  //   ref: userCollapseRef,
  //   handler: () => {
  //     console.log({ isUserProfileOpen });
  //     if (isUserProfileOpen) {
  //       closeUserProfile();
  //     }
  //   },
  // });

  const toggleUserProfile = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      toggleUserDropdown();
    },
    [toggleUserDropdown],
  );

  const toggleMenu = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      toggleMenuDropdown();
    },
    [toggleMenuDropdown],
  );

  return (
    <Box
      borderBottom={1}
      borderStyle={'solid'}
      borderColor="#F9FAFB"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="#FFF"
      zIndex={1000}>
      <Flex
        minH={'60px'}
        py={{ base: 2 }}
        maxWidth={1200}
        margin="0 auto"
        px={{ base: 4 }}
        align={'center'}>
        <Flex flex={{ base: 1 }} justifyContent="space-between" px={{ base: '10px' }}>
          <Link href={HOMEPAGE_ROUTE}>
            <Flex alignItems="center" height="100%">
              <Image
                src="/icons/persona_logo.png"
                width={135}
                height={27}
                alt="persona_logo"
                priority
                style={{ objectFit: 'contain', zIndex: 1000 }}
              />
            </Flex>
          </Link>

          <Flex display={{ base: 'none', lg: 'flex' }}>
            <DesktopNav navItems={navigation} onClose={closeMenu} />
          </Flex>

          <Flex
            display={{ base: 'block', lg: 'none' }}
            marginLeft="auto"
            mr="16px"
            alignItems="center"
            justifyContent="center"
            alignSelf="center">
            {user && (
              <Avatar
                name={`${user?.firstName} ${user?.lastName}`}
                src={user?.avatar ? generateAWSUrl(user.avatar) : ''}
                bg="#F3F4F6"
                color="#C0C0C0"
                cursor="pointer"
                size="sm"
                display="flex"
                justifyContent="center"
                alignItems="center"
                onClick={toggleUserProfile}
              />
            )}
          </Flex>
          <Flex display={{ base: 'flex', lg: 'none' }}>
            <IconButton
              width="25px"
              _focus={{
                bg: 'transparent',
              }}
              _hover={{
                bg: 'transparent',
              }}
              onClick={toggleMenu}
              bg="transparent"
              aria-label={'Toggle Navigation'}
              icon={isMenuOpen || isUserProfileOpen ? <CloseIcon /> : <BurgerMenuIcon />}
            />
          </Flex>
          {user || data?.user ? (
            <Box display={{ base: 'none', lg: 'flex' }}>
              <ProfileMenu user={user} />
            </Box>
          ) : (
            <Stack flexDirection="row" alignItems="center" display={{ base: 'none', lg: 'flex' }}>
              <Link href={`${SIGN_IN_ROUTE}?callback_url=${pathname}`}>
                <Button
                  borderRadius={6}
                  fontSize={14}
                  width={90}
                  height={38}
                  fontWeight={600}
                  bg="#fff"
                  color="#3CB4E7"
                  border="1px solid #3CB4E7">
                  Log In
                </Button>
              </Link>
              <Link href={SIGN_UP_ROUTE}>
                <Button borderRadius={6} fontSize={14} fontWeight={600} height={38} width={127}>
                  Get Started
                </Button>
              </Link>
            </Stack>
          )}
        </Flex>
      </Flex>

      <Collapse in={isMenuOpen} animateOpacity ref={collapseRef}>
        <MobileNav navItems={navigation} user={user || data?.user || null} onClose={closeMenu} />
      </Collapse>

      <Collapse in={isUserProfileOpen} animateOpacity ref={userCollapseRef}>
        <Accordion allowToggle defaultIndex={0} id="user-dropdown">
          <ProfileNavItem user={user || data?.user || null} onClose={closeUserProfile} />
        </Accordion>
      </Collapse>
    </Box>
  );
};
export default memo(Header);
