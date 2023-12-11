import React, { FC } from 'react';
import { Heading, Stack, Text } from '@chakra-ui/react';
import { segoe } from '@/utils/constants/fonts';

type WelcomeAboutPageProps = {};

const WelcomeAboutPage: FC<WelcomeAboutPageProps> = () => {
  return (
    <Stack
      backgroundImage="/icons/welcome_about_bg.svg"
      padding={{ base: '68px 16px 67px 16px', md: '68px 0 67px 0', xl: '179px 0 124px 0' }}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover">
      <Heading
        className={segoe.className}
        boxSizing="border-box"
        color="#000"
        textAlign={{ base: 'center', md: 'center', xl: 'left' }}
        margin={{ md: '0px auto', xl: '0px 0px 0px 366px' }}
        maxWidth="668px"
        fontWeight="600"
        lineHeight={{ bsdr: '26.6px', md: '26.6px', xl: '42.56px' }}
        fontSize={{ base: '20px', md: '26px', xl: '32px' }}>
        <Text
          as="span"
          fontSize={{ base: '28px', xl: '44px' }}
          fontWeight="700"
          lineHeight={{ md: '37.4px', xl: '56.64px' }}>
          Hi, were Persona
          <br />
        </Text>
        And were changing the way people think and feel about training.
      </Heading>
    </Stack>
  );
};

export default WelcomeAboutPage;
