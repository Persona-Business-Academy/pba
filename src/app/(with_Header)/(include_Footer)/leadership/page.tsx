'use client';
import React, { FC } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { segoe } from '@/constants/fonts';

type Props = {};

const Leadership: FC<Props> = () => {
  return (
    <>
      <Container maxWidth={1201} margin="0 auto" px={{ base: '16px', xl: '0px' }}>
        <Box
          maxWidth={996}
          margin="0 auto"
          textAlign="center"
          fontStyle="normal"
          lineHeight="normal"
          marginTop={{ base: '36px', md: '50px', lg: '96px' }}>
          <Heading
            className={segoe.className}
            fontSize={{ base: '24px', sm: '32px' }}
            color={{ base: '#222222', sm: '#000' }}
            fontWeight={700}>
            WE ARE PERSONA
          </Heading>
          <Heading
            fontSize={{ base: '32px', sm: '44px' }}
            color={{ base: '#222222', sm: '#000' }}
            fontWeight={700}
            marginBottom={{ base: '16px', sm: '20px' }}>
            We power better training experiences
          </Heading>
          <Text
            fontSize="16px"
            color="#222222"
            fontWeight={400}
            marginBottom={{ base: '20px', sm: '40px' }}>
            Lorem ipsum, or ipsum as it is sometimes known, is dummy text used in laying out print,
            graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
            century who is thought to have scrambled parts of Ciceros De bus
          </Text>
        </Box>
        <Box>
          <Image
            src="/images/public_available/leadership_main.jpg"
            width={1201}
            height={591}
            alt="Leadership_image"
          />
        </Box>
        <Flex
          alignItems="center"
          flexDirection="column"
          fontStyle="normal"
          lineHeight="normal"
          marginY={{ base: '36px', md: '80px', xl: '148px' }}>
          <Heading
            className={segoe.className}
            color="#000"
            fontWeight={700}
            fontSize="32px"
            marginBottom="20px">
            Meet our Team
          </Heading>
          <Tabs variant="unstyled">
            <TabList display="flex" justifyContent="center" gap="32px" marginBottom="40px">
              <Tab
                padding="8px 12px"
                borderRadius="6px"
                color="#5B5B5B"
                fontSize="14px"
                fontStyle="normal"
                lineHeight="20px"
                fontWeight={600}
                _selected={{ color: '#4338CA', bg: '#E0E7FF' }}>
                Ex leadership
              </Tab>
              <Tab
                padding="8px 12px"
                borderRadius="6px"
                color="#5B5B5B"
                fontSize="14px"
                fontStyle="normal"
                lineHeight="20px"
                fontWeight={600}
                _selected={{ color: '#4338CA', bg: '#E0E7FF' }}>
                Teachers
              </Tab>
              <Tab
                padding="8px 12px"
                borderRadius="6px"
                color="#5B5B5B"
                fontSize="14px"
                fontStyle="normal"
                lineHeight="20px"
                fontWeight={600}
                _selected={{ color: '#4338CA', bg: '#E0E7FF' }}>
                Team
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel padding={0}>
                <Grid
                  display="grid"
                  gridTemplateColumns="repeat(auto-fit, minmax(387px, 1fr))"
                  gridGap="20px">
                  <GridItem padding="30px">
                    <Box
                      overflow="hidden"
                      marginBottom="16px"
                      borderRadius="10.556px 10.556px 70.374px 10.556px"
                      height="331px">
                      <Image
                        src="/images/public_available/nature.jpg"
                        width={327}
                        height={331}
                        alt="Leadership members"
                      />
                    </Box>
                    <Flex
                      flexDirection="column"
                      gap="8px"
                      textAlign="center"
                      fontStyle="normal"
                      lineHeight="normal"
                      fontSize="16px">
                      <Text color="#000" fontWeight={700}>
                        Name Surname
                      </Text>
                      <Text color="#5B5B5B" fontWeight={400}>
                        Co-founder of Persona
                      </Text>
                      <Text color="#000" fontWeight={400}>
                        Beach lover, keeping life simple
                      </Text>
                    </Flex>
                  </GridItem>
                  <GridItem padding="30px">
                    <Box
                      overflow="hidden"
                      marginBottom="16px"
                      borderRadius="10.556px 10.556px 70.374px 10.556px"
                      height="331px">
                      <Image
                        src="/images/public_available/nature.jpg"
                        width={327}
                        height={331}
                        alt="Leadership members"
                      />
                    </Box>
                    <Flex
                      flexDirection="column"
                      gap="8px"
                      textAlign="center"
                      fontStyle="normal"
                      lineHeight="normal"
                      fontSize="16px">
                      <Text color="#000" fontWeight={700}>
                        Name Surname
                      </Text>
                      <Text color="#5B5B5B" fontWeight={400}>
                        Co-founder of Persona
                      </Text>
                      <Text color="#000" fontWeight={400}>
                        Beach lover, keeping life simple
                      </Text>
                    </Flex>
                  </GridItem>
                  <GridItem padding="30px">
                    <Box
                      overflow="hidden"
                      marginBottom="16px"
                      borderRadius="10.556px 10.556px 70.374px 10.556px"
                      height="331px">
                      <Image
                        src="/images/public_available/nature.jpg"
                        width={327}
                        height={331}
                        alt="Leadership members"
                      />
                    </Box>
                    <Flex
                      flexDirection="column"
                      gap="8px"
                      textAlign="center"
                      fontStyle="normal"
                      lineHeight="normal"
                      fontSize="16px">
                      <Text color="#000" fontWeight={700}>
                        Name Surname
                      </Text>
                      <Text color="#5B5B5B" fontWeight={400}>
                        Co-founder of Persona
                      </Text>
                      <Text color="#000" fontWeight={400}>
                        Beach lover, keeping life simple
                      </Text>
                    </Flex>
                  </GridItem>
                  <GridItem padding="30px">
                    <Box
                      overflow="hidden"
                      marginBottom="16px"
                      borderRadius="10.556px 10.556px 70.374px 10.556px"
                      height="331px">
                      <Image
                        src="/images/public_available/nature.jpg"
                        width={327}
                        height={331}
                        alt="Leadership members"
                      />
                    </Box>
                    <Flex
                      flexDirection="column"
                      gap="8px"
                      textAlign="center"
                      fontStyle="normal"
                      lineHeight="normal"
                      fontSize="16px">
                      <Text color="#000" fontWeight={700}>
                        Name Surname
                      </Text>
                      <Text color="#5B5B5B" fontWeight={400}>
                        Co-founder of Persona
                      </Text>
                      <Text color="#000" fontWeight={400}>
                        Beach lover, keeping life simple
                      </Text>
                    </Flex>
                  </GridItem>
                  <GridItem padding="30px">
                    <Box
                      overflow="hidden"
                      marginBottom="16px"
                      borderRadius="10.556px 10.556px 70.374px 10.556px"
                      height="331px">
                      <Image
                        src="/images/public_available/nature.jpg"
                        width={327}
                        height={331}
                        alt="Leadership members"
                      />
                    </Box>
                    <Flex
                      flexDirection="column"
                      gap="8px"
                      textAlign="center"
                      fontStyle="normal"
                      lineHeight="normal"
                      fontSize="16px">
                      <Text color="#000" fontWeight={700}>
                        Name Surname
                      </Text>
                      <Text color="#5B5B5B" fontWeight={400}>
                        Co-founder of Persona
                      </Text>
                      <Text color="#000" fontWeight={400}>
                        Beach lover, keeping life simple
                      </Text>
                    </Flex>
                  </GridItem>
                  <GridItem padding="30px">
                    <Box
                      overflow="hidden"
                      marginBottom="16px"
                      borderRadius="10.556px 10.556px 70.374px 10.556px"
                      height="331px">
                      <Image
                        src="/images/public_available/nature.jpg"
                        width={327}
                        height={331}
                        alt="Leadership members"
                      />
                    </Box>
                    <Flex
                      flexDirection="column"
                      gap="8px"
                      textAlign="center"
                      fontStyle="normal"
                      lineHeight="normal"
                      fontSize="16px">
                      <Text color="#000" fontWeight={700}>
                        Name Surname
                      </Text>
                      <Text color="#5B5B5B" fontWeight={400}>
                        Co-founder of Persona
                      </Text>
                      <Text color="#000" fontWeight={400}>
                        Beach lover, keeping life simple
                      </Text>
                    </Flex>
                  </GridItem>
                </Grid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Container>
      <Flex
        px={{ base: '10px', xl: '0px' }}
        backgroundColor="#1f1646"
        borderRadius="73px 73px 0px 0px"
        height="299px"
        flexShrink={0}>
        <Flex
          alignItems="center"
          flexDirection="column"
          width="732px"
          margin="0 auto"
          color="#ffffff"
          lineHeight="normal"
          fontStyle="normal"
          paddingTop={{ base: '46px', md: '59.19px' }}>
          <Text fontSize={{ base: '32px', sm: '44px' }} fontWeight={700}>
            Join Our Team
          </Text>
          <Text fontSize="16px" fontWeight={400} textAlign="center" marginTop="16px">
            We are always on the lookout for great talent. Want to join us on our mission to help
            great teams grow? Check out our openings to see where you fit in.
          </Text>
          <Button
            backgroundColor="#fff"
            color="#1f1646"
            padding="16px 32px"
            borderRadius="6px"
            marginTop="24px">
            Apply now
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Leadership;
