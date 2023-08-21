'use client';
import { Box, Container, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

type Props = {};

const NotFound = (props: Props) => {
  return (
    <Container height="100vh" maxWidth="100%">
      <Grid templateColumns="1fr 1fr" height="100%" width="100%">
        <GridItem
          bg="red.200"
          display="flex"
          paddingLeft="103px"
          flexDirection="column"
          justifyContent="center">
          <Text fontSize="14px" margin="0" paddingBottom="8px" color="#FF6131">
            404 error
          </Text>

          <Heading as="h2" margin="0" size="44px" color="red" fontWeight="700" lineHeight="53.64px">
            {' '}
            Page not found
          </Heading>
          <Text fontSize="16px" margin="0" paddingBottom="8px" color="#C0C0C0">
            Sorry, we couldn’t find the page you’re looking for.
          </Text>
        </GridItem>
        <GridItem>
          <Box width="100%" height="100%">
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
