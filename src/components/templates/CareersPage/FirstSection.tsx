import React, { FC } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

type FirstSectionProps = {};

const FirstSection: FC<FirstSectionProps> = () => {
  return (
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
            lineHeight="22px"
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
          w={{ base: '100%', md: '50%' }}
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
  );
};

export default FirstSection;
