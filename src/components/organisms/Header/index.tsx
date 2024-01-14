import { FC, memo, useRef } from 'react';
import {
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
import CloseIcon from 'public/icons/close_icon.svg';
import BurgerMenuIcon from 'public/icons/menu.svg';
import { Button } from '@/components/atoms';
import { OfflineCourseListGroupedModel } from '@/models/offline-course.model';
import { HOMEPAGE_ROUTE, SIGN_IN_ROUTE, SIGN_UP_ROUTE } from '@/utils/constants/routes';
import { getNavigationItems } from '@/utils/helpers/navigation';
import { NavItem } from '@/utils/models/header';
import DesktopNav from './DesktopNavigation';
import MobileNav from './MobileNav';
import ProfileMenu from './ProfileMenu';

type HeaderProps = {
  user: User | null;
  forIndividuals: OfflineCourseListGroupedModel;
};

const Header: FC<HeaderProps> = ({ user, forIndividuals }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { data } = useSession();
  const pathname = usePathname();
  const collapseRef = useRef<HTMLDivElement>(null);

  const navigation: NavItem[] = getNavigationItems(forIndividuals);

  console.log({ navigation });

  useOutsideClick({
    ref: collapseRef,
    handler: () => {
      if (isOpen) {
        onClose();
      }
    },
  });

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
                style={{ objectFit: 'contain' }}
              />
            </Flex>
          </Link>

          <Flex display={{ base: 'none', lg: 'flex' }}>
            <DesktopNav navItems={navigation} />
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
              onClick={onToggle}
              bg="transparent"
              aria-label={'Toggle Navigation'}
              icon={isOpen ? <CloseIcon /> : <BurgerMenuIcon />}
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

      <Collapse in={isOpen} animateOpacity ref={collapseRef}>
        <MobileNav navItems={navigation} user={user || data?.user || null} />
      </Collapse>
    </Box>
  );
};
export default memo(Header);
