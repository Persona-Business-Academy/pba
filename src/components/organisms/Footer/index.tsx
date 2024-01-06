import React, { FC, memo, useMemo } from 'react';
import { Box, Container, Flex, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ABOUT_ROUTE,
  ARTICLES_ROUTE,
  CAREERS_ROUTE,
  CONTACT_US_ROUTE,
  FOR_KIDS_ROUTE,
  INDIVIDUALS_ROUTE,
  LEADERSHIP_ROUTE,
  TERMS_AND_CONDITIONS_ROUTE,
} from '@/utils/constants/routes';

type Props = {};

const footerData = [
  {
    rowTitle: 'Company',
    subNavigation: [
      {
        name: 'About Us',
        href: ABOUT_ROUTE,
      },
      {
        name: 'Contact Us',
        href: CONTACT_US_ROUTE,
      },
      {
        name: 'Leadership',
        href: LEADERSHIP_ROUTE,
      },
      {
        name: 'Careers',
        href: CAREERS_ROUTE,
      },
    ],
  },
  {
    rowTitle: 'Categories',
    subNavigation: [
      {
        name: 'For Individuals',
        href: INDIVIDUALS_ROUTE,
      },
      {
        name: 'For Kids',
        href: FOR_KIDS_ROUTE,
      },
      // {
      //   name: 'Video Courses',
      //   href: VIDEO_COURSES_ROUTE,
      // },
      {
        name: 'Articles',
        href: ARTICLES_ROUTE,
      },
    ],
  },

  {
    rowTitle: 'Offline Courses',
    subNavigation: [
      {
        name: 'Digital Marketing',
        href: ABOUT_ROUTE,
      },
      {
        name: 'Social Media Marketing ',
        href: CONTACT_US_ROUTE,
      },
      {
        name: ' Front End Development',
        href: TERMS_AND_CONDITIONS_ROUTE,
      },
      {
        name: 'Back End Development',
        href: TERMS_AND_CONDITIONS_ROUTE,
      },
      {
        name: 'HRM',
        href: TERMS_AND_CONDITIONS_ROUTE,
      },
      {
        name: 'Project Management',
        href: TERMS_AND_CONDITIONS_ROUTE,
      },
      {
        name: 'Business Law',
        href: TERMS_AND_CONDITIONS_ROUTE,
      },
    ],
  },
  // {
  //   rowTitle: 'Online Courses',
  //   subNavigation: [
  //     {
  //       name: 'Email Marketing',
  //       href: ABOUT_ROUTE,
  //     },
  //     {
  //       name: 'Google Ads',
  //       href: CONTACT_US_ROUTE,
  //     },
  //     {
  //       name: 'Google Analytics',
  //       href: TERMS_AND_CONDITIONS_ROUTE,
  //     },
  //     {
  //       name: 'SEO',
  //       href: TERMS_AND_CONDITIONS_ROUTE,
  //     },
  //     {
  //       name: 'Search Engine Mattering',
  //       href: TERMS_AND_CONDITIONS_ROUTE,
  //     },
  //     {
  //       name: 'Html & CSS',
  //       href: TERMS_AND_CONDITIONS_ROUTE,
  //     },
  //     {
  //       name: 'JavaScript',
  //       href: TERMS_AND_CONDITIONS_ROUTE,
  //     },
  //     {
  //       name: 'React Js',
  //       href: TERMS_AND_CONDITIONS_ROUTE,
  //     },
  //     {
  //       name: 'Node Js',
  //       href: TERMS_AND_CONDITIONS_ROUTE,
  //     },
  //   ],
  // },
  {
    rowTitle: 'Community',
    subNavigation: [
      {
        name: 'Partners',
        href: ABOUT_ROUTE,
      },
      {
        name: 'Become a Teacher',
        href: TERMS_AND_CONDITIONS_ROUTE,
      },
      {
        name: 'Job Position',
        href: TERMS_AND_CONDITIONS_ROUTE,
      },
    ],
  },
];

const Footer: FC<Props> = () => {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <Stack bg="#F9FAFB" width="100%" minHeight="auto">
      <Container
        maxWidth={1200}
        margin="0 auto"
        marginTop={{ base: '10px', md: '66px' }}
        marginBottom={66.14}
        fontSize={{ base: '14px', sm: '16px' }}
        fontWeight={400}
        px={{ base: '16px', xl: '0px' }}
        fontStyle="normal"
        lineHeight="20px">
        <Grid
          templateColumns="repeat(auto-fit,minmax(130px, 1fr))"
          columnGap="72px"
          rowGap={{ base: '20px', md: '72px' }}
          paddingBottom={{ base: '20px', md: '40px' }}
          borderBottom={{ base: '1px solid #C0C0C0', md: '1px solid #DDDCE3' }}>
          {footerData.map((footerItem, i: number) => (
            <GridItem key={i}>
              <Flex
                flexDirection="column"
                alignItems={{ base: 'center', sm: 'flex-start' }}
                gap={{ base: '0px', md: '15px' }}>
                <Text color="#222" marginBottom={{ base: '4px', md: '0px' }} fontWeight={600}>
                  {footerItem.rowTitle}
                </Text>
                {footerItem.subNavigation.map((subNav, i: number) => (
                  <Text as={Link} href={subNav.href} color="#5B5B5B" key={i} lineHeight="20px">
                    {subNav.name}
                  </Text>
                ))}
              </Flex>
            </GridItem>
          ))}
        </Grid>
        <Flex
          justifyContent={{ md: 'space-between' }}
          alignItems={{ base: 'center', md: 'flex-start' }}
          paddingTop={{ base: '20px', md: '40px' }}
          flexDirection={{ base: 'column-reverse', md: 'row' }}
          gap={{ base: '24px', md: '0px' }}>
          <Flex flexDirection="column" gap="24px" alignItems={{ base: 'center', md: 'flex-start' }}>
            <Box>
              <Text>
                <Image
                  src="/icons/persona_logo.svg"
                  width={135}
                  height={27}
                  alt="persona_grey_logo"
                />
              </Text>
            </Box>
            <Box>
              <Text>© Persona, Inc. {year}. All rights reserved.</Text>
            </Box>
          </Flex>
          <Flex flexDirection="column" gap="24px" alignItems={{ base: 'center', md: 'flex-end' }}>
            <Box>
              <Flex gap={24}>
                <a href="https://www.facebook.com/personabusinessacademy" target="blank">
                  <Image src="/icons/facebook_icon.svg" width={32} height={32} alt="facebook" />
                </a>
                <a href="https://www.instagram.com/persona_business_academy" target="blank">
                  <Image src="/icons/instagram_icon.svg" width={32} height={32} alt="instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/school/persona-business-academy/?originalSubdomain=am"
                  target="blank">
                  <Image src="/icons/linkedin_icon.svg" width={32} height={32} alt="instagram" />
                </a>
              </Flex>
            </Box>
            <Box>
              <Flex gap={8}>
                <Text as={Link} href={TERMS_AND_CONDITIONS_ROUTE}>
                  Terms & Conditions
                </Text>
                <Text>|</Text>
                <Text>Privacy</Text>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Stack>
  );
};

export default memo(Footer);
