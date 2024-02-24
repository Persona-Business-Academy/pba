import React, { FC } from 'react';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { segoe } from '@/utils/constants/fonts';

type WelcomeAboutPageProps = {};

const WelcomeAboutPage: FC<WelcomeAboutPageProps> = () => {
  return (
    <Stack
      backgroundImage="/images/about/about-bg.png"
      backgroundPosition="bottom"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="486px"
      width="100%"
      display="flex"
      justifyContent="center"
      position="relative"
      alignItems="center">
      <Box
        position="absolute"
        top={0}
        left={0}
        bottom={0}
        right={0}
        backgroundImage="/images/about/manukyan.png"
        backgroundPosition="bottom"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      />
      <Heading
        className={segoe.className}
        boxSizing="border-box"
        color="#000"
        textAlign={{ base: 'center', md: 'center', xl: 'left' }}
        maxWidth="668px"
        fontWeight="600"
        lineHeight={{ base: '26.6px', xl: '42.56px' }}
        fontSize={{ base: '20px', md: '26px', xl: '32px' }}>
        <Text
          as="span"
          fontSize={{ base: '28px', xl: '44px' }}
          fontWeight="700"
          lineHeight={{ md: '37.4px', xl: '56.64px' }}>
          Hi, we are Persona
          <br />
        </Text>
        And were changing the way people think and feel about training.
      </Heading>
    </Stack>
  );
};

export default WelcomeAboutPage;
