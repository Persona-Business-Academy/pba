'use client';
import React, { FC } from 'react';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Button } from '@/components/atoms';
import ButtonArrowRight from '/public/icons/arrow_right_careers.svg';
import { segoe } from '@/constants/fonts';

type Props = {};

const CareersPage: FC<Props> = () => {
  return (
    <Container
      maxWidth={1200}
      margin="0 auto"
      my={{ base: '36px', md: '80px', xl: '148px' }}
      px={{ base: '16px', xl: '0' }}>
      <Flex as="section" flexDirection="column" gap={{ base: '20px', xl: '40px' }}>
        <Heading
          textAlign="center"
          lineHeight="normal"
          fontStyle="normal"
          color="#222222"
          fontSize={{ base: '28px', sm: '44px' }}
          fontWeight={{ base: 600, xl: 700 }}>
          Careers
        </Heading>
        <Flex gap={24} flexDirection={{ base: 'column', md: 'row' }} alignItems="center">
          <Box w={{ base: '100%', md: '50%' }} ml={{ base: '0', xl: '24px' }} textAlign="center">
            <Text
              lineHeight="normal"
              fontStyle="normal"
              fontSize={24}
              fontWeight={700}
              color="#222222"
              marginBottom={16}>
              Persona careers
            </Text>
            <Text
              lineHeight="normal"
              fontStyle="normal"
              fontSize={16}
              color="#222222"
              fontWeight={400}
              textAlign={{ base: 'left', md: 'center' }}>
              If you are mission-focused, passionate about your career path, and above all else,
              looking for a deeper meaning in your work then look no further! We continuously strive
              to be BETTER by fostering a collaborative learning environment, providing support and
              guidance for development, seeking out and embracing change, and being employee-centric
              all while fulfilling our mission of making the workplace safer and smarter.
            </Text>
          </Box>
          <Box
            maxW={{ base: '576px', md: '50%' }}
            margin="0 auto"
            borderRadius={{ base: '16px', md: '0px 16px 16px 0px' }}
            overflow="hidden">
            <Image
              src="/images/public_available/courses_img.jpg"
              width={576}
              height={402}
              alt="courses_image"
            />
          </Box>
        </Flex>
      </Flex>
      <Flex as="section" flexDirection="column" mt={{ base: '36px', md: '80px', xl: '148px' }}>
        <Flex
          flexDirection="column"
          maxWidth={794}
          textAlign="center"
          m="0 auto"
          gap={{ base: '16px', md: '20px' }}>
          <Heading
            className={segoe.className}
            fontSize={{ base: '28px', sm: '32px' }}
            fontWeight={{ base: 600, xl: 700 }}
            color="#222"
            lineHeight="normal"
            fontStyle="normal">
            Open Positions
          </Heading>
          <Text
            fontSize={16}
            fontWeight={400}
            color="#5B5B5B"
            lineHeight="normal"
            fontStyle="normal"
            textAlign={{ base: 'left', md: 'center' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </Text>
        </Flex>

        <Flex
          rowGap={{ base: '0', md: '24px' }}
          flexDirection="column"
          mt={{ base: '20px', md: '40px' }}>
          <Flex columnGap="20px" flexWrap={{ base: 'wrap', md: 'nowrap' }}>
            <Flex
              justifyContent="space-between"
              flexBasis="590px"
              pb="22px"
              borderBottom="1px solid #CDCBCF">
              <Flex flexDirection="column" gap={{ base: '8px', md: '16px' }}>
                <Heading
                  fontSize={{ base: '24px', md: '28px' }}
                  fontWeight={700}
                  color="#222"
                  lineHeight="normal"
                  fontStyle="normal">
                  Product Manager
                </Heading>
                <Text
                  fontSize="16px"
                  lineHeight="normal"
                  fontStyle="normal"
                  fontWeight={400}
                  color="#5B5B5B">
                  San Francisco / Full Time
                </Text>
              </Flex>
              <Button
                bg="#FFFFFF"
                display={{ base: 'block', sm: 'none' }}
                _hover={{ bg: '#fff' }}
                _focus={{ bg: '#fff' }}>
                <ButtonArrowRight />
              </Button>
              <Button
                alignSelf="center"
                width="127px"
                height="53px"
                padding="16px 32px"
                display={{ base: 'none', sm: 'block' }}>
                Join now
              </Button>
            </Flex>
            <Flex
              pt={{ base: '24px', md: '0' }}
              justifyContent="space-between"
              flexBasis="590px"
              paddingBottom="24px"
              borderBottom="1px solid #CDCBCF">
              <Flex flexDirection="column" gap={{ base: '8px', md: '16px' }}>
                <Heading
                  fontSize={{ base: '24px', md: '28px' }}
                  fontWeight={700}
                  color="#222"
                  lineHeight="normal"
                  fontStyle="normal">
                  Product Manager
                </Heading>
                <Text
                  fontSize="16px"
                  lineHeight="normal"
                  fontStyle="normal"
                  fontWeight={400}
                  color="#5B5B5B">
                  San Francisco / Full Time
                </Text>
              </Flex>
              <Button
                bg="#FFFFFF"
                display={{ base: 'block', sm: 'none' }}
                _hover={{ bg: '#fff' }}
                _focus={{ bg: '#fff' }}>
                <ButtonArrowRight />
              </Button>
              <Button
                alignSelf="center"
                width="127px"
                height="53px"
                padding="16px 32px"
                display={{ base: 'none', sm: 'block' }}>
                Join now
              </Button>
            </Flex>
          </Flex>
          <Flex columnGap="20px" flexWrap={{ base: 'wrap', md: 'nowrap' }}>
            <Flex
              pt={{ base: '24px', md: '0' }}
              justifyContent="space-between"
              flexBasis="590px"
              paddingBottom="24px"
              borderBottom="1px solid #CDCBCF">
              <Flex flexDirection="column" gap={{ base: '8px', md: '16px' }}>
                <Heading
                  fontSize={{ base: '24px', md: '28px' }}
                  fontWeight={700}
                  color="#222"
                  lineHeight="normal"
                  fontStyle="normal">
                  Product Manager
                </Heading>
                <Text
                  fontSize="16px"
                  lineHeight="normal"
                  fontStyle="normal"
                  fontWeight={400}
                  color="#5B5B5B">
                  San Francisco / Full Time
                </Text>
              </Flex>
              <Button
                bg="#FFFFFF"
                display={{ base: 'block', sm: 'none' }}
                _hover={{ bg: '#fff' }}
                _focus={{ bg: '#fff' }}>
                <ButtonArrowRight />
              </Button>
              <Button
                alignSelf="center"
                width="127px"
                height="53px"
                padding="16px 32px"
                display={{ base: 'none', sm: 'block' }}>
                Join now
              </Button>
            </Flex>
            <Flex
              pt={{ base: '24px', md: '0' }}
              justifyContent="space-between"
              flexBasis="590px"
              paddingBottom="24px"
              borderBottom="1px solid #CDCBCF">
              <Flex flexDirection="column" gap={{ base: '8px', md: '16px' }}>
                <Heading
                  fontSize={{ base: '24px', md: '28px' }}
                  fontWeight={700}
                  color="#222"
                  lineHeight="normal"
                  fontStyle="normal">
                  Product Manager
                </Heading>
                <Text
                  fontSize="16px"
                  lineHeight="normal"
                  fontStyle="normal"
                  fontWeight={400}
                  color="#5B5B5B">
                  San Francisco / Full Time
                </Text>
              </Flex>
              <Button
                bg="#FFFFFF"
                display={{ base: 'block', sm: 'none' }}
                _hover={{ bg: '#fff' }}
                _focus={{ bg: '#fff' }}>
                <ButtonArrowRight />
              </Button>
              <Button
                alignSelf="center"
                width="127px"
                height="53px"
                padding="16px 32px"
                display={{ base: 'none', sm: 'block' }}>
                Join now
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Button
          bg="#fff"
          color="#1F1646"
          _hover={{ bg: '#fff' }}
          _focus={{ bg: '#fff' }}
          borderRadius="6px"
          border="1px solid #F3F4F6"
          padding="16px 32px"
          height="53px"
          margin="0 auto"
          mt={{ base: '20px', md: '64px' }}>
          View more
        </Button>
      </Flex>

      <Flex as="section" flexDirection="column" mt={{ base: '36px', md: '80px', xl: '148px' }}>
        <Heading
          className={segoe.className}
          textAlign="center"
          fontSize={{ base: '24px', sm: '28px' }}
          fontWeight={700}
          color="#222222"
          lineHeight="normal"
          fontStyle="normal"
          mb={{ base: '36px', md: '40px' }}>
          Do you have a question?
        </Heading>
        <Flex gap={24} alignItems="center" flexDirection={{ base: 'column', md: 'row' }}>
          <Box
            maxW={{ base: '576px', md: '50%' }}
            display={{ base: 'none', sm: 'block' }}
            overflow="hidden"
            borderRadius={{ base: '16px', md: '16px 0px 0px 16px' }}>
            <Image
              src="/images/public_available/courses_img.jpg"
              width={576}
              height={402}
              alt="courses_image"
            />
          </Box>
          <Box w={{ base: '100%', md: '50%' }} mr={{ base: '0', md: '24px' }}>
            <Heading
              className={segoe.className}
              fontSize="28px"
              fontWeight={{ base: 600, md: 700 }}
              color="#222222"
              textAlign="center"
              lineHeight="normal"
              fontStyle="normal"
              mb={16}>
              Change the way the world learns
            </Heading>
            <Text
              color="#222222"
              fontSize="16px"
              fontWeight={400}
              lineHeight="normal"
              fontStyle="normal"
              textAlign={{ base: 'left', md: 'center' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default CareersPage;
