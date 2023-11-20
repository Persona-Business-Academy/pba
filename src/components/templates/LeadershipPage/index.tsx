'use client';
import React, { FC } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import TeamCard from '@/components/molecules/TeamCard';
import { segoe } from '@/utils/constants/fonts';

type Props = {};

const LeadershipPage: FC<Props> = () => {
  return (
    <>
      <Container maxWidth={1201} margin="0 auto" px={{ base: '16px', xl: '0px' }}>
        <Box
          textAlign="center"
          fontStyle="normal"
          lineHeight="normal"
          marginTop={{ base: '36px', md: '50px', lg: '96px' }}>
          <Heading
            className={segoe.className}
            fontSize={{ base: '24px', sm: '32px' }}
            color="#222222"
            fontWeight={700}>
            WE ARE PERSONA
          </Heading>
          <Heading
            fontSize={{ base: '32px', sm: '44px' }}
            color="#222222"
            fontWeight={700}
            marginBottom={{ base: '16px', sm: '20px' }}>
            We power better training experiences
          </Heading>
          <Text
            fontSize="16px"
            color="#222222"
            fontWeight={400}
            lineHeight="22px"
            marginBottom={{ base: '20px', sm: '40px' }}>
            Lorem ipsum, or ipsum as it is sometimes known, is dummy text used in laying out print,
            graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
            century who is thought to have scrambled parts of Ciceros De bus
          </Text>
        </Box>
        <Box borderRadius="16px" overflow="hidden">
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
            lineHeight={{ base: '36px', md: 'normal' }}
            fontSize={{ base: '28px', md: '32px' }}
            marginBottom={{ base: '16px', md: '20px' }}>
            Meet our Team
          </Heading>
          <Tabs width="100%" position="relative" variant="unstyled">
            <TabList
              width="343px"
              margin="0 auto"
              display="flex"
              justifyContent="center"
              gap="32px"
              marginBottom={{ base: '16px', md: '40px' }}>
              <Tab
                color="#5B5B5B"
                fontSize="14px"
                fontStyle="normal"
                lineHeight="20px"
                fontWeight={600}
                _selected={{ color: '#3CB4E7', borderBottom: '2px solid #3CB4E7' }}>
                Ex leadership
              </Tab>
              <Tab
                color="#5B5B5B"
                fontSize="14px"
                fontStyle="normal"
                lineHeight="20px"
                fontWeight={600}
                _selected={{ color: '#3CB4E7', borderBottom: '2px solid #3CB4E7' }}>
                Teachers
              </Tab>
              <Tab
                color="#5B5B5B"
                fontSize="14px"
                fontStyle="normal"
                lineHeight="20px"
                fontWeight={600}
                _selected={{ color: '#3CB4E7', borderBottom: '2px solid #3CB4E7' }}>
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
                  templateColumns={{
                    base: 'repeat(auto-fit, minmax(283px, 1fr))',
                    md: 'repeat(auto-fit, minmax(350px, 1fr))',
                  }}
                  gridGap={{ base: '16px', sm: '20px' }}>
                  {Array.from({ length: 6 }, () => ({
                    firstName: 'First Name',
                    lastName: 'Last Name',
                    hobby: 'Dog Lover',
                    position: 'Web Developer',
                  })).map((teamMember, i: number) => (
                    <TeamCard {...teamMember} key={i} />
                  ))}
                </Grid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Container>
      <Flex px={{ base: '10px', xl: '0px' }} backgroundColor="#1f1646" py="40px" flexShrink={0}>
        <Flex
          alignItems="center"
          flexDirection="column"
          width="732px"
          margin="0 auto"
          color="#ffffff"
          fontStyle="normal">
          <Text fontSize={{ base: '24px', sm: '28px' }} fontWeight={700} lineHeight="36px">
            Join Our Team
          </Text>
          <Text
            fontSize="16px"
            fontWeight={400}
            textAlign="center"
            lineHeight="22px"
            margin="16px 0 24px 0">
            We are always on the lookout for great talent. Want to join us on our mission to help
            great teams grow? Check out our openings to see where you fit in.
          </Text>
          <Button
            backgroundColor="#fff"
            color="#1f1646"
            padding="16px 32px"
            borderRadius="6px"
            _hover={{ bg: '#F3F4F6', color: '#1f1646' }}
            _focus={{ bg: '#E9E9E9', color: '#1f1646' }}>
            Apply now
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default LeadershipPage;
