import { memo } from 'react';
import { Box, Collapse, Flex, IconButton, Stack, useDisclosure } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import BurgerMenuIcon from 'public/icons/menu.svg';
import { Button } from '@/components/atom';
import {
  BLOG_ROUTE,
  HOMEPAGE_ROUTE,
  PRICING_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
} from '@/constants/routes';
import { NavItem } from '@/models/header';
import DesktopNav from './DesktopNavigation';
import MobileNav from './MobileNav';

const NAV_ITEMS: NavItem[] = [
  {
    label: 'For Individuals',
    children: [
      {
        id: 1,
        label: 'Programming',
        subLabels: [
          {
            subLabelName: 'HTML',
            children: [
              {
                subLabelNavItem: 'Get Started',
              },
            ],
          },
          {
            subLabelName: 'CSS',
            children: [
              {
                subLabelNavItem: 'Get Started',
              },
            ],
          },
          {
            subLabelName: 'SCSS',
            children: [
              {
                subLabelNavItem: 'Get Started',
              },
            ],
          },
          {
            subLabelName: 'JS',
            children: [
              {
                subLabelNavItem: 'Get Started',
              },
            ],
          },
          {
            subLabelName: 'React.js',
            children: [
              {
                subLabelNavItem: 'Get Started',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        label: 'Programming',
        subLabels: [
          {
            subLabelName: 'H1',
            children: [
              {
                subLabelNavItem: 'Get Started',
              },
            ],
          },
          {
            subLabelName: 'H2',
            children: [
              {
                subLabelNavItem: 'Get Started',
              },
            ],
          },
          {
            subLabelName: 'H3',
            children: [
              {
                subLabelNavItem: 'Get Started',
              },
            ],
          },
          {
            subLabelName: 'H4',
            children: [
              {
                subLabelNavItem: 'Get Started',
              },
            ],
          },
          {
            subLabelName: 'H5',
            children: [
              {
                subLabelNavItem: 'Get Started',
              },
            ],
          },
        ],
      },
      {
        id: 3,
        label: 'Programming',
        subLabels: [
          {
            subLabelName: 'PM',
            children: [
              {
                subLabelNavItem: 'Get Started',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        label: 'Design',
        subLabels: [
          {
            subLabelName: 'React.js',
            children: [
              {
                subLabelNavItem: 'Get Started',
              },
            ],
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
    children: [],
    featuredItems: [
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
    ],
  },
  {
    label: 'Video Courses',
    children: [],
    featuredItems: [
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
  },
  {
    label: 'Blog',
    href: BLOG_ROUTE,
    children: [],
  },
];

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

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
          <Flex display={{ base: 'flex', md: 'none' }}>
            <IconButton
              width="25px"
              _focus={{
                bg: '#E2E8F0',
              }}
              onClick={onToggle}
              bg="transparent"
              aria-label={'Toggle Navigation'}
              icon={<BurgerMenuIcon />}
            />
          </Flex>
          <Stack flexDirection="row" alignItems="center" display={{ base: 'none', lg: 'flex' }}>
            <Link href={SIGN_IN_ROUTE}>
              <Button
                borderRadius={20}
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
              <Button borderRadius={20} fontSize={14} fontWeight={600} height={38} width={127}>
                Get Started
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={NAV_ITEMS} />
      </Collapse>
    </Box>
  );
};
export default memo(Header);
