'use client';
import React, { FC } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import Image from 'next/image';

type Props = {};

const NotFound: FC<Props> = () => {
  return (
    <Container padding="0" maxWidth="1920px">
      <Flex
        width="100%"
        height="100vh"
        justifyContent="center"
        flexWrap={{ base: 'wrap', lg: 'nowrap', xl: 'nowrap' }}>
        <Flex
          flexDirection="column"
          justifyContent={{ base: 'center', lg: 'space-between', xl: 'space-between' }}
          w="960px">
          <Box
            // bg="pink"
            padding={{ base: '0 16px', lg: '0', xl: '0' }}
            margin={{ base: '36px auto', lg: '0 auto', xl: '0 auto' }}
            width={{ base: '343px', lg: '359px', xl: '359px' }}
            height="100%"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignContent="center">
            <Text fontSize="14px" margin="0" paddingBottom="8px" color="#FF6131">
              404 error
            </Text>
            <Heading
              as="h2"
              margin="0"
              size={{ base: '28px', lg: '44px', xl: '44px' }}
              color="#22222"
              fontWeight="700"
              lineHeight={{ base: '34.13px', lg: '53.64px', xl: '53.64px' }}>
              Page not found
            </Heading>
            <Text fontSize="16px" margin="0" paddingBottom="8px" color="#C0C0C0">
              Sorry, we couldnt find the page youre looking for.
            </Text>
            <Link
              href="!#"
              display="flex"
              gap={8}
              color="#ff6131"
              alignItems="center"
              textDecorationLine="none">
              Go back home
              <Image src="/icons/not_found_icon.svg" alt="Icon" width={24} height={24} />
            </Link>
          </Box>

          <Box
            width="100%"
            bg="#E9E8ED"
            padding={{ base: '8px 16px', lg: '64px 32px', xl: '64px 32px' }}
            margin={{ base: '0 0 36px 0', lg: '0', xl: '0' }}>
            <UnorderedList
              margin="0 auto"
              listStyleType="none"
              color="#6B7280"
              display="flex"
              fontSize="14px"
              justifyContent="center">
              <ListItem lineHeight="20px" marginRight="16px" display="flex" alignItems="center">
                <Link href="!#">Contact support</Link>
                <Box width="1px" height="20px" marginLeft="16px" bg="#D1D5DB"></Box>
              </ListItem>

              <ListItem lineHeight="20px" marginRight="16px" display="flex" alignItems="center">
                <Link href="!#">Help center</Link>
                <Box width="1px" height="20px" marginLeft="16px" bg="#D1D5DB" />
              </ListItem>

              <ListItem lineHeight="20px">
                <Link href="!#">Privacy policy</Link>
              </ListItem>
            </UnorderedList>
          </Box>
        </Flex>
        <Box width="960px" height={{ base: '419px', lg: '100vh', xl: '100vh' }}>
          <Box
            minHeight="100%"
            backgroundImage="/images/public_available/not_found_img.jpg"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"></Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default NotFound;
