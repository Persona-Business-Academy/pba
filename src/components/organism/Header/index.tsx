'use client';

import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/atom/Button';
import DesktopNav from './DesktopNavigation';
import MobileNav from './MobileNav';

export interface SubLabel {
  subLabelName: string;
}

export interface FeaturedItem {
  categoryName: string;
  imgPath: string;
}
export interface SubLabels {
  label: string;
  subLabels: SubLabel[];
}

export interface NavItem {
  label: string;
  children?: SubLabels[];
  featuredItems?: FeaturedItem[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'For Individuals',
    children: [
      {
        label: 'Design',
        subLabels: [
          { subLabelName: 'HTML' },
          { subLabelName: 'CSS' },
          { subLabelName: 'SCSS' },
          { subLabelName: 'JS' },
          { subLabelName: 'React.js' },
        ],
      },
      {
        label: 'Design',
        subLabels: [
          { subLabelName: 'HTML' },
          { subLabelName: 'CSS' },
          { subLabelName: 'SCSS' },
          { subLabelName: 'JS' },
          { subLabelName: 'React.js' },
        ],
      },
      {
        label: 'Design',
        subLabels: [
          { subLabelName: 'HTML' },
          { subLabelName: 'CSS' },
          { subLabelName: 'SCSS' },
          { subLabelName: 'JS' },
          { subLabelName: 'React.js' },
        ],
      },
      {
        label: 'Design',
        subLabels: [
          { subLabelName: 'HTML' },
          { subLabelName: 'CSS' },
          { subLabelName: 'SCSS' },
          { subLabelName: 'JS' },
          { subLabelName: 'React.js' },
        ],
      },
      {
        label: 'Design',
        subLabels: [
          { subLabelName: 'HTML' },
          { subLabelName: 'CSS' },
          { subLabelName: 'SCSS' },
          { subLabelName: 'JS' },
          { subLabelName: 'React.js' },
        ],
      },
    ],
    featuredItems: [
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/others/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/others/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/others/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/others/featured_example.jpg',
      },
    ],
  },
  {
    label: 'For Kids',
    children: [],
    featuredItems: [
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/others/featured_example.jpg',
      },
    ],
  },
  {
    label: 'Video Courses',
    children: [],
    featuredItems: [
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/others/featured_example.jpg',
      },
    ],
  },
  {
    label: 'Pricing',
    children: [],
    featuredItems: [
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/others/featured_example.jpg',
      },
    ],
  },
  {
    label: 'Blog',
    children: [],
    featuredItems: [
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/others/featured_example.jpg',
      },
    ],
  },
];

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        maxWidth={1200}
        margin="0 auto"
        px={{ base: 4 }}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton onClick={onToggle} variant={'ghost'} aria-label={'Toggle Navigation'} />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} gap={165}>
          <Image
            src="/icons/persona_logo.png"
            width={135}
            height={27}
            alt="persona_logo"
            priority
            style={{
              objectFit: 'contain',
            }}
          />

          <Flex display={{ base: 'none', md: 'flex' }}>
            <DesktopNav navItems={NAV_ITEMS} />
          </Flex>
          <Stack flexDirection="row" alignItems="center">
            <Link href="/">
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

            <Link href="/">
              <Button
                borderRadius={20}
                fontSize={14}
                fontWeight={600}
                height={38}
                width={127}
                _hover={{
                  bg: '#fff',
                  color: '#3CB4E7',
                  border: '1px solid #3CB4E7',
                }}>
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
export default Header;
