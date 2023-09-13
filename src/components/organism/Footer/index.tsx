import React, { FC, memo } from 'react';
import { Box, Container, Flex, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const Footer: FC<Props> = () => {
  return (
    <Stack bg="#FFF9F8" height={714}>
      <Container
        maxWidth={1200}
        margin="0 auto"
        padding={0}
        marginTop={66}
        marginBottom={66.14}
        fontSize="16px"
        fontWeight={400}
        fontStyle="normal"
        lineHeight="normal">
        <Grid
          templateColumns="repeat(auto-fit,minmax(109.7px, 1fr))"
          columnGap="72px"
          rowGap="72px"
          paddingBottom={40}
          borderBottom="1px solid #F3F4F6">
          <GridItem>
            <Flex flexDirection="column" gap="15px">
              <Text color="#222"> Our Expertise </Text>
              <Text as={Link} href="" color="#5B5B5B">
                For kids
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                For individuals
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex flexDirection="column" gap="15px">
              <Text color="#222"> Information </Text>
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
            <Flex flexDirection="column" gap="15px">
              <Text color="#222">Company</Text>
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
            <Flex flexDirection="column" gap="15px">
              <Text color="#222">Company</Text>
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
            <Flex flexDirection="column" gap="15px">
              <Text color="#222">Need some help?</Text>
              <Text as={Link} href="" color="#5B5B5B">
                Help Centre
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Contact
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex flexDirection="column" gap="15px">
              <Text color="#222">Need some help?</Text>
              <Text as={Link} href="" color="#5B5B5B">
                Help Centre
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                Contact
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex flexDirection="column" gap="15px">
              <Text color="#222"> Information </Text>
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
            <Flex flexDirection="column" gap="15px">
              <Text color="#222">Company</Text>
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
            <Flex flexDirection="column" gap="15px">
              <Text color="#222"> Our Expertise </Text>
              <Text as={Link} href="" color="#5B5B5B">
                For kids
              </Text>
              <Text as={Link} href="" color="#5B5B5B">
                For individuals
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex flexDirection="column" gap="15px">
              <Text color="#222"> Information </Text>
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
            <Flex flexDirection="column" gap="15px">
              <Text color="#222">Information</Text>
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
            <Flex flexDirection="column" gap="15px">
              <Text color="#222">Information</Text>
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
        <Flex justifyContent="space-between" pt={40}>
          <Flex flexDirection="column" gap="24px">
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
          <Flex flexDirection="column" gap="24px" alignItems="flex-end">
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
