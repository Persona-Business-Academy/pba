import React, { FC, memo } from 'react';
import { Box, Container, Flex, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const Footer: FC<Props> = () => {
  return (
    <Stack bg="#F9FAFB" minHeight={714} width="100%">
      <Container
        maxWidth={1200}
        margin="0 auto"
        marginTop={{ base: '10px', md: '66px' }}
        marginBottom={66.14}
        fontSize={{ base: '12px', sm: '16px' }}
        fontWeight={400}
        px={{ base: '16px', xl: '0px' }}
        fontStyle="normal"
        lineHeight="normal">
        <Grid
          templateColumns="repeat(auto-fit,minmax(109.7px, 1fr))"
          columnGap="72px"
          rowGap={{ base: '20px', md: '72px' }}
          paddingBottom={{ base: '20px', md: '40px' }}
          borderBottom={{ base: '1px solid #C0C0C0', md: '1px solid #DDDCE3' }}>
          <GridItem>
            <Flex
              flexDirection="column"
              alignItems={{ base: 'center', sm: 'flex-start' }}
              gap={{ base: '0px', md: '15px' }}>
              <Text color="#222" marginBottom={{ base: '4px', md: '0px' }}>
                Our Expertise
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                For kids
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                For individuals
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              flexDirection="column"
              alignItems={{ base: 'center', sm: 'flex-start' }}
              gap={{ base: '0px', md: '15px' }}>
              <Text color="#222" marginBottom={{ base: '4px', md: '0px' }}>
                Information
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                FAQ
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Blog
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Support
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              flexDirection="column"
              alignItems={{ base: 'center', sm: 'flex-start' }}
              gap={{ base: '0px', md: '15px' }}>
              <Text color="#222" marginBottom={{ base: '4px', md: '0px' }}>
                Company
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                About us
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Careers
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Contact us
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                PBA leadership
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              flexDirection="column"
              alignItems={{ base: 'center', sm: 'flex-start' }}
              gap={{ base: '0px', md: '15px' }}>
              <Text color="#222" marginBottom={{ base: '4px', md: '0px' }}>
                Company
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                About us
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Careers
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Contact us
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                PBA leadership
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              flexDirection="column"
              alignItems={{ base: 'center', sm: 'flex-start' }}
              gap={{ base: '0px', md: '15px' }}>
              <Text color="#222" marginBottom={{ base: '4px', md: '0px' }}>
                Need some help?
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Help Centre
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Contact
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              flexDirection="column"
              alignItems={{ base: 'center', sm: 'flex-start' }}
              gap={{ base: '0px', md: '15px' }}>
              <Text color="#222" marginBottom={{ base: '4px', md: '0px' }}>
                Need some help?
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Help Centre
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Contact
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              flexDirection="column"
              alignItems={{ base: 'center', sm: 'flex-start' }}
              gap={{ base: '0px', md: '15px' }}>
              <Text color="#222" marginBottom={{ base: '4px', md: '0px' }}>
                Information
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                FAQ
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Blog
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Support
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              flexDirection="column"
              alignItems={{ base: 'center', sm: 'flex-start' }}
              gap={{ base: '0px', md: '15px' }}>
              <Text color="#222" marginBottom={{ base: '4px', md: '0px' }}>
                Company
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                About us
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Careers
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Contact us
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                PBA leadership
              </Text>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex
              flexDirection="column"
              alignItems={{ base: 'center', sm: 'flex-start' }}
              gap={{ base: '0px', md: '15px' }}>
              <Text color="#222" marginBottom={{ base: '4px', md: '0px' }}>
                Our Expertise
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                For kids
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                For individuals
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              flexDirection="column"
              alignItems={{ base: 'center', sm: 'flex-start' }}
              gap={{ base: '0px', md: '15px' }}>
              <Text color="#222" marginBottom={{ base: '4px', md: '0px' }}>
                Information
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                FAQ
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Blog
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Support
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              flexDirection="column"
              alignItems={{ base: 'center', sm: 'flex-start' }}
              gap={{ base: '0px', md: '15px' }}>
              <Text color="#222" marginBottom={{ base: '4px', md: '0px' }}>
                Information
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Terms
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Privacy
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Cookies
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              flexDirection="column"
              alignItems={{ base: 'center', sm: 'flex-start' }}
              gap={{ base: '0px', md: '15px' }}>
              <Text color="#222" marginBottom={{ base: '4px', md: '0px' }}>
                Information
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Terms
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Privacy
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Cookies
              </Text>
            </Flex>
          </GridItem>
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
              <Text>© Persona, Inc. 2022. All rights reserved.</Text>
            </Box>
          </Flex>
          <Flex flexDirection="column" gap="24px" alignItems={{ base: 'center', md: 'flex-end' }}>
            <Box>
              <Flex gap={24}>
                <a href="#" target="blank">
                  <Image src="/icons/facebook_icon.svg" width={32} height={32} alt="facebook" />
                </a>
                <a href="#" target="blank">
                  <Image src="/icons/instagram_icon.svg" width={32} height={32} alt="instagram" />
                </a>
                <a href="#" target="blank">
                  <Image src="/icons/linkedin_icon.svg" width={32} height={32} alt="instagram" />
                </a>
              </Flex>
            </Box>
            <Box>
              <Flex gap={8}>
                <Text>Terms & Conditions</Text>
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
