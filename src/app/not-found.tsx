'use client';
import React, { FC } from 'react';
import { Link } from '@chakra-ui/next-js';
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

type Props = {};

const NotFound: FC<Props> = () => {
  return (
    <Container height="100vh" maxWidth="100%">
      <Grid templateColumns="1fr 1fr" height="100%" width="100%">
        <GridItem
          display="flex"
          flexDirection="column"
          position="relative"
          justifyContent="center"
          height="100vh">
          <Box paddingLeft="103px" margin="0">
            <Text fontSize="14px" margin="0" paddingBottom="8px" color="#FF6131">
              404 error
            </Text>
            <Heading
              as="h2"
              margin="0"
              size="44px"
              color="#22222"
              fontWeight="700"
              lineHeight="53.64px">
              {' '}
              Page not found
            </Heading>
            <Text fontSize="16px" margin="0" paddingBottom="8px" color="#C0C0C0">
              Sorry, we couldn’t find the page you’re looking for.
            </Text>

            <Link href="!#" display="flex" color="#ff6131" alignItems="center">
              Go back home
              <Image
                marginLeft="8px"
                width="24px"
                height="24px"
                objectFit="cover"
                src="/icons/not_found_icon.svg"
                alt="Arrow Icon"
              />
            </Link>
          </Box>

          <UnorderedList
            padding="64px 0 64px 103px"
            margin="0"
            width="100%"
            listStyleType="none"
            bg="#D1D5DB"
            display="flex"
            fontSize="14px"
            position="absolute"
            bottom="0">
            <ListItem lineHeight="20px" marginRight="16px" display="flex" alignItems="center">
              <Link href="!#" color="#6B7280">
                Contact support
              </Link>
              <Box width="1px" height="20px" marginLeft="16px" bg="black"></Box>
            </ListItem>

            <ListItem
              lineHeight="20px"
              marginRight="16px"
              color="#6B7280"
              display="flex"
              alignItems="center">
              <Link href="!#">Contact support</Link>
              <Box width="1px" height="20px" marginLeft="16px" bg="black"></Box>
            </ListItem>
            <ListItem lineHeight="20px" color="#6B7280">
              <Link href="!#">Contact support</Link>
            </ListItem>
          </UnorderedList>
        </GridItem>
        {/* 2 */}
        <GridItem>
          <Box width="100%" height="100vh">
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              src="/not_found_img.jpg"
              alt="Dan Abramov"
            />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default NotFound;
