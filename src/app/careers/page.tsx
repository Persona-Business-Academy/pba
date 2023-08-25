'use client';
import { Button } from '@/components/atom';
import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

type Props = {};

const Careers = (props: Props) => {
  return (
    <Container
      maxWidth={1200}
      margin="0 auto"
      lineHeight="normal"
      fontStyle="normal"
      p={0}
      marginTop="148px">
      <Flex flexDirection="column">
        <Heading textAlign="center" fontSize="44px" fontWeight={700} marginBottom={40}>
          Careers
        </Heading>
        <Flex gap={24}>
          <Box maxWidth={586} paddingLeft={24}>
            <Heading
              fontSize={24}
              fontWeight={700}
              color="#222222"
              textAlign="center"
              marginBottom={16}>
              Persona careers
            </Heading>
            <Text fontSize={16} fontWeight={400} textAlign="center">
              If you are mission-focused, passionate about your career path, and above all else,
              looking for a deeper meaning in your work then look no further! We continuously strive
              to be BETTER by fostering a collaborative learning environment, providing support and
              guidance for development, seeking out and embracing change, and being employee-centric
              all while fulfilling our mission of making the workplace safer and smarter.
            </Text>
          </Box>
          <Box width={590} height={402} borderRadius="0px 16px 16px 0px">
            <Image src="/courses_img.jpg"></Image>
          </Box>
        </Flex>
      </Flex>
      <Flex flexDirection="column" marginTop={148}>
        <Flex flexDirection="column" maxWidth={794} textAlign="center" margin="0 auto" gap="20px">
          <Heading fontSize={32} fontWeight={700} color="#010101">
            Open Positions
          </Heading>
          <Text fontSize={16} fontWeight={400} color="#6F6D71">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </Text>
        </Flex>
        <Flex gap="20px" flexWrap="wrap" marginTop="40px">
          <Flex
            justifyContent="space-between"
            flexBasis="590px"
            paddingBottom="66px"
            borderBottom="1px solid #CDCBCF">
            <Flex flexDirection="column" gap="16px">
              <Heading fontSize="28px" fontWeight={700} color="#010101">
                Product Manager
              </Heading>
              <Text fontSize="16px" fontWeight={400} color="#6F6D71">
                San Francisco / Full Time
              </Text>
            </Flex>
            <Button alignSelf="center" width="127px" height="53px" padding="16px 32px">
              Join now
            </Button>
          </Flex>
          <Flex
            justifyContent="space-between"
            flexBasis="590px"
            paddingBottom="66px"
            borderBottom="1px solid #CDCBCF">
            <Flex flexDirection="column" gap="16px">
              <Heading fontSize="28px" fontWeight={700} color="#010101">
                Product Manager
              </Heading>
              <Text fontSize="16px" fontWeight={400} color="#6F6D71">
                San Francisco / Full Time
              </Text>
            </Flex>
            <Button alignSelf="center" width="127px" height="53px" padding="16px 32px">
              Join now
            </Button>
          </Flex>
          <Flex justifyContent="space-between" flexBasis="590px" paddingTop="66px">
            <Flex flexDirection="column" gap="16px">
              <Heading fontSize="28px" fontWeight={700} color="#010101">
                Product Manager
              </Heading>
              <Text fontSize="16px" fontWeight={400} color="#6F6D71">
                San Francisco / Full Time
              </Text>
            </Flex>
            <Button alignSelf="center" width="127px" height="53px" padding="16px 32px">
              Join now
            </Button>
          </Flex>
          <Flex justifyContent="space-between" flexBasis="590px" paddingTop="66px">
            <Flex flexDirection="column" gap="16px">
              <Heading fontSize="28px" fontWeight={700} color="#010101">
                Product Manager
              </Heading>
              <Text fontSize="16px" fontWeight={400} color="#6F6D71">
                San Francisco / Full Time
              </Text>
            </Flex>
            <Button alignSelf="center" width="127px" height="53px" padding="16px 32px">
              Join now
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection="column" marginTop="148px" marginBottom="148px">
        <Heading textAlign="center" fontSize="28px" fontWeight={700} marginBottom={40}>
          Do you have a question?
        </Heading>
        <Flex gap={24} alignItems="center">
          <Box width="590px" height="402px" borderRadius="16px">
            <Image src="/courses_img.jpg"></Image>
          </Box>
          <Box maxWidth={586} paddingRight={24}>
            <Heading
              fontSize="28px"
              fontWeight={700}
              color="#222222"
              textAlign="center"
              marginBottom={16}>
              Change the way the world learns
            </Heading>
            <Text fontSize="16px" fontWeight={400} textAlign="center">
              We create learning experiences that enhance human potential. Our diverse teams work
              across technology, design, content, marketing and more to bring intuitive and
              impactful programs to learners across the world.Explore your passion at BYJU'S. Learn,
              lead and revolutionize education with us.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Careers;
