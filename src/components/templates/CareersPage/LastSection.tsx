import React, { FC } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { segoe } from '@/utils/constants/fonts';

type LastSectionProps = {};

const LastSection: FC<LastSectionProps> = () => {
  return (
    <Flex as="section" flexDirection="column">
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
          w={{ base: '100%', md: '50%' }}
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
            lineHeight="36px"
            fontStyle="normal"
            mb="16px">
            Change the way the world learns
          </Heading>
          <Text
            color="#222222"
            fontSize="16px"
            fontWeight={400}
            lineHeight="22px"
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
  );
};

export default LastSection;
