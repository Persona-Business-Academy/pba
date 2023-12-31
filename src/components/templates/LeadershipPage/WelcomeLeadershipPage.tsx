import React, { FC } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { segoe } from '@/utils/constants/fonts';

type WelcomeLeadershipPageProps = {};

const WelcomeLeadershipPage: FC<WelcomeLeadershipPageProps> = () => {
  return (
    <>
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
    </>
  );
};

export default WelcomeLeadershipPage;
