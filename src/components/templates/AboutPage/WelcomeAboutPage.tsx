import React, { FC } from 'react';
import { Heading, Stack, Text } from '@chakra-ui/react';
import { segoe } from '@/utils/constants/fonts';

type WelcomeAboutPageProps = {};

const WelcomeAboutPage: FC<WelcomeAboutPageProps> = () => {
  return (
    <Stack
      backgroundImage="/images/about/manukyan.png"
      backgroundPosition="bottom"
      height="486px"
      width="100%"
      backgroundRepeat="no-repeat"
      backgroundSize={{ base: 'contain', lg: 'cover' }}
      display="flex"
      justifyContent="center"
      alignItems="center">
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
