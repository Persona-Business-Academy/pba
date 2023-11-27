import React, { FC } from 'react';
import { Box, Container, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';

type WelcomeSectionProps = {};

const WelcomeSection: FC<WelcomeSectionProps> = () => {
  return (
    <Box
      as="section"
      bg="#F6FCFF"
      py={{ base: '36px', md: '64px' }}
      borderRadius={{ base: '0px 0px 16px 16px', md: '0px 0px 72px 72px' }}>
      <Container maxWidth={1200} margin="0 auto" px={{ base: '16px', xl: '0' }}>
        <Box maxW="794px" textAlign="center" margin="0 auto" pb={{ base: '16px', md: '32px' }}>
          <Text
            fontWeight={400}
            fontSize="16px"
            lineHeight="normal"
            fontStyle="normal"
            color="#222222"
            mb={{ base: '8px', md: '16px' }}>
            By Name Surname
          </Text>
          <Heading
            color="#222222"
            fontSize={{ base: '28px', sm: '44px' }}
            fontWeight={{ base: 600, md: 700 }}
            lineHeight="normal"
            fontStyle="normal">
            How to teach with technology in every subject
          </Heading>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={{ base: 'column', sm: 'row' }}
          alignItems=" center"
          fontWeight={400}
          fontSize="16px"
          lineHeight="normal"
          fontStyle="normal"
          color="#222222"
          gap={{ base: '16px', sm: '0' }}>
          <UnorderedList
            margin="0"
            listStyleType="none"
            display="flex"
            alignItems="center"
            gap="20px">
            <ListItem>February 22, 2023</ListItem>
            <ListItem display="flex" alignItems="center" gap="8px">
              <Image src="./icons/eye_icon.svg" alt="Icon" width={16} height={11.3} />
              444
            </ListItem>
          </UnorderedList>

          <UnorderedList
            margin="0"
            listStyleType="none"
            display="flex"
            alignItems="center"
            gap="20px">
            <ListItem display="flex" alignItems="center" gap="8px">
              <Image src="./icons/heart_icon.svg" alt="Icon" width={18} height={15} />
              Save
            </ListItem>

            <ListItem display="flex" alignItems="center" gap="8px">
              <Image src="./icons/share_icon.svg" alt="Icon" width={18} height={15} />
              Share
            </ListItem>
          </UnorderedList>
        </Box>
      </Container>
    </Box>
  );
};

export default WelcomeSection;
