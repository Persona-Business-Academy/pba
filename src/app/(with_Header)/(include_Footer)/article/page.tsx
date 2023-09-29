'use client';

import React from 'react';
import { Box, Container, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import { Button } from '@/components/atom';

const page = () => {
  return (
    <Box>
      <Box bg="#F6FCFF" padding="70px 0 76px ">
        <Container maxWidth="1200px" margin="0 auto">
          <Box maxW="742px" textAlign="center" margin="0 auto" pb="148px">
            <Text
              fontWeight="400"
              fontSize="16px"
              lineHeight="21.28px"
              color="#5B5B5B"
              margin="0 0 20px 0">
              By Name Surname
            </Text>
            <Heading
              color="#222222"
              margin="0"
              fontSize="44px"
              fontWeight="700"
              lineHeight="53.64px">
              How to teach with technology in every subject
            </Heading>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems=" center"
            fontWeight="400"
            fontSize="16px"
            color="#222222">
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

      <Box>
        <Box maxWidth="793px" margin="64px auto 148px">
          <Text
            margin="0"
            padding="0"
            _firstLetter={{ fontSize: '44px', fontWeight: '700', color: '#222222' }}
            fontWeight="400"
            lineHeight="21.28px">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
          </Text>

          <Box
            margin="40px 0 64px"
            textAlign="center"
            color="#222222"
            fontWeight="400"
            lineHeight="21.28px">
            <Text>
              Already have an account? <span style={{ color: '#3CB4E7' }}>Log in</span>
            </Text>
          </Box>

          <Heading
            as="h2"
            fontWeight="700"
            margin="0 auto"
            fontSize="32px"
            lineHeight="42.56px"
            textAlign="center">
            Get to the end of the story Understand the worlds biggest issues—free for a month.
          </Heading>

          <Box display="flex" justifyContent="center" mt="24px">
            <Button
              width="235px"
              lineHeight="21.28px"
              fontSize="16px"
              fontWeight="700"
              height="53px"
              color="#fff"
              padding="16px 32px">
              View subscrption options
            </Button>
          </Box>
        </Box>
      </Box>

      <Box maxWidth="1200px" margin="0 auto">
        <Heading
          margin="0 0 40px 0"
          as="h5"
          textAlign="center"
          lineHeight="37.24px"
          fontWeight="700"
          fontSize="28px">
          About the author(s)
        </Heading>
        <Box display="flex" justifyContent="center" gap="21px" alignItems="center">
          <Box>
            <Image
              src="/images/public_available/articles_user_img.jpg"
              alt="Img"
              width={487}
              height={406}
            />
          </Box>
          <Box
            maxW="587px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            fontSize="16px"
            lineHeight="21.28px">
            <Text as="span"mb='16px' fontWeight="700">
              Name Surname
            </Text>
            <Text as="span" fontWeight="400">
              Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem
              ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum
              dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor
              sit amet, consectetur adipising elit, sed do eiusmod temporLorem ipsum dolor sit amet,
              consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet,
              consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet,
              consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet,
              consectetur adipising elit, sed do eiusmod tempor
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default page;
