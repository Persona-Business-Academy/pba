import { FC, memo } from 'react';
import { Box, Collapse, Flex, IconButton, Stack, useDisclosure } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User } from 'next-auth';
import { useSession } from 'next-auth/react';
import CloseIcon from 'public/icons/close_icon.svg';
import BurgerMenuIcon from 'public/icons/menu.svg';
import { Button } from '@/components/atoms';
import {
  ARTICLES_ROUTE,
  FOR_KIDS_ROUTE,
  HOMEPAGE_ROUTE,
  INDIVIDUALS_ROUTE,
  PRICING_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
  VIDEO_COURSES_ROUTE,
} from '@/constants/routes';
import { NavItem } from '@/models/header';
import DesktopNav from './DesktopNavigation';
import MobileNav from './MobileNav';
import ProfileMenu from './ProfileMenu';

const NAV_ITEMS: NavItem[] = [
  {
    label: 'For Individuals',
    href: INDIVIDUALS_ROUTE,
    children: [
      {
        id: 1,
        label: 'Development',
        subLabels: [
          {
            subLabelName: 'HTML & CSS',
            children: [],
          },
          {
            subLabelName: 'JS',
            children: [],
          },
          {
            subLabelName: 'React.js',
            children: [],
          },
          {
            subLabelName: 'Node.js',
            children: [],
          },
        ],
      },
      {
        id: 2,
        label: 'Design',
        subLabels: [
          {
            subLabelName: 'UI/UX Design',
            children: [],
          },
          {
            subLabelName: 'Graphic Design',
            children: [],
          },
          {
            subLabelName: 'Motion Design',
            children: [],
          },
        ],
      },
      {
        id: 3,
        label: 'Marketing',
        subLabels: [
          {
            subLabelName: 'Social Media Marketing',
            children: [],
          },
          {
            subLabelName: 'Digital Marketing',
            children: [],
          },
          {
            subLabelName: 'Email Marketing',
            children: [],
          },
          {
            subLabelName: 'Google Marketing',
            children: [],
          },
          {
            subLabelName: 'Web Masters',
            children: [],
          },
        ],
      },
      {
        id: 4,
        label: 'Management',
        subLabels: [
          {
            subLabelName: 'HRM',
            children: [],
          },
          {
            subLabelName: 'Project Management',
            children: [],
          },
        ],
      },
      {
        id: 5,
        label: 'Other',
        subLabels: [
          {
            subLabelName: 'Quality Assurance',
            children: [],
          },
        ],
      },
    ],
    featuredItems: [
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
    ],
  },
  {
    label: 'For Kids',
    href: FOR_KIDS_ROUTE,
    children: [
      {
        id: 1,
        label: 'Development',
        subLabels: [
          {
            subLabelName: 'HTML',
            children: [],
          },
          {
            subLabelName: 'CSS',
            children: [],
          },
          {
            subLabelName: 'JS',
            children: [],
          },
        ],
      },
      {
        id: 2,
        label: 'Design',
        subLabels: [
          {
            subLabelName: 'UI/UX Design',
            children: [],
          },
          {
            subLabelName: 'Graphic Design',
            children: [],
          },
        ],
      },
      {
        id: 3,
        label: 'Robotics',
        subLabels: [],
      },
    ],
    featuredItems: [
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
    ],
  },
  {
    label: 'Video Courses',
    href: '' && VIDEO_COURSES_ROUTE,
    children: [
      {
        id: 1,
        label: 'Marketing',
        subLabels: [
          {
            subLabelName: ' Social Media Marketing',
            children: [],
          },
          {
            subLabelName: 'Digital Marketing',
            children: [],
          },
          {
            subLabelName: 'Google Marketing',
            children: [],
          },
          {
            subLabelName: 'Google Ads',
            children: [],
          },
          {
            subLabelName: 'Google Analytics',
            children: [],
          },
          {
            subLabelName: 'GTM',
            children: [],
          },
          {
            subLabelName: 'Google AdSense',
            children: [],
          },
          {
            subLabelName: 'Email Marketing',
            children: [],
          },
          {
            subLabelName: 'Email Marketing',
            children: [],
          },
          {
            subLabelName: 'Mailchimp Marketing',
            children: [],
          },
        ],
      },
      {
        id: 2,
        label: 'Programming',
        subLabels: [
          {
            subLabelName: 'Front End Development',
            children: [],
          },
          {
            subLabelName: 'Html & CSS',
            children: [],
          },
          {
            subLabelName: 'JavaScript',
            children: [],
          },
          {
            subLabelName: 'React JS',
            children: [],
          },
          {
            subLabelName: 'Node JS',
            children: [],
          },
        ],
      },
      {
        id: 3,
        label: 'Human Resource Management',
        subLabels: [],
      },
      {
        id: 3,
        label: 'Business Law',
        subLabels: [],
      },
    ],
    featuredItems: [
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
    ],
  },
  {
    label: 'Pricing',
    href: PRICING_ROUTE,
    children: [],
    featuredItems: [],
  },
  {
    label: 'Articles',
    href: ARTICLES_ROUTE,
    children: [],
    featuredItems: [],
  },
];

type HeaderProps = {
  user: User | null;
};

const Header: FC<HeaderProps> = ({ user }) => {
  const { isOpen, onToggle } = useDisclosure();
  const { data } = useSession();
  const pathname = usePathname();

  return (
    <Box borderBottom={1} borderStyle={'solid'} borderColor="#F9FAFB">
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
            <DesktopNav navItems={NAV_ITEMS} />
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

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={NAV_ITEMS} />
      </Collapse>
    </Box>
  );
};
export default memo(Header);
