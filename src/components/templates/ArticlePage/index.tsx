'use client';

import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import Image from 'next/image';
import { Button } from '@/components/atoms';
import { segoe } from '@/constants/fonts';

const ArticlePage = () => {
  return (
    <>
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
      <Container
        display="flex"
        flexDirection="column"
        maxWidth={1320}
        px={{ base: '16px', xl: '0' }}
        gap={{ base: '36px', md: '80px', xl: '148px' }}>
        <Box as="section" maxWidth="793px" margin={{ base: '36px auto 36px', md: '64px auto 0' }}>
          <Text
            _firstLetter={{ fontSize: '44px', fontWeight: '700' }}
            color="#222222"
            fontSize="16px"
            fontWeight={400}
            lineHeight="normal"
            fontStyle="normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was in the 1960s with the release of sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like
            release of sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like PageMaker including versions of Lorem Ipsum.
          </Text>

          <Flex
            justifyContent="center"
            alignItems="center"
            margin={{ base: '20px auto 36px', md: '40px 0 64px' }}
            textAlign="center"
            color="#222222"
            fontWeight={400}
            lineHeight="normal"
            fontStyle="normal"
            fontSize="16px"
            gap="8px">
            <Text>Already have an account?</Text>
            <Button
              width="auto"
              color="#3CB4E7"
              bg="white"
              variant="link"
              _hover={{ bg: '#white' }}
              _active={{
                bg: '#white',
              }}
              _focus={{
                bg: '#white',
              }}>
              Log in
            </Button>
          </Flex>

          <Heading
            className={segoe.className}
            fontWeight={700}
            margin="0 auto"
            fontSize={{ base: '24px', md: '32px' }}
            lineHeight="42.56px"
            fontStyle="normal"
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
              padding="16px 32px">
              View subscription options
            </Button>
          </Box>
        </Box>

        <Box as="section" maxWidth="1200px" margin="0 auto">
          <Heading
            mb={{ base: '16px', md: '40px' }}
            textAlign="center"
            lineHeight="37.24px"
            fontWeight={{ base: 600, md: 700 }}
            fontSize="28px"
            color="#000000">
            About the author(s)
          </Heading>
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            height="auto"
            p={{ base: '16px', sm: '0' }}>
            <Box
              borderRadius={{ base: '16px', md: '36px' }}
              overflow="hidden"
              position="relative"
              width={{ base: '94px', sm: '487px' }}
              height={{ base: '94px', sm: '406px' }}>
              <Image
                src="/images/public_available/articles_user_img.jpg"
                alt="Author image"
                fill
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </Box>
            <Box
              backgroundColor="#F9FAFB"
              borderRadius={{ base: '0', sm: '10px 70px 10px 10px' }}
              flexBasis={{ base: 'auto', md: 713 }}
              height="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              fontSize="16px"
              lineHeight="normal"
              fontStyle="normal"
              padding={{ base: '16px', md: '44px 105px 38px 21px' }}
              gap={{ base: '8px', sm: '16px' }}>
              <Text color="#222222" fontWeight={700}>
                Name Surname
              </Text>

              <Text color="#5B5B5B" fontWeight={400} textAlign={{ base: 'left', md: 'center' }}>
                Lorem ipsum dolor sit consectetur sed do eiuNext, apply this class to your
                component:Lorem ipsum dolor sit consectetur sed do Lorem ipsum dolor sit consectetur
                sed do Lorem ipsum dolor sit , consectetur sed do Lorem ipsum dolor sit ,
                consectetur sed do Lorem ipsum dolor sit consectetur sed do Lorem ipsum dolor sit
                consectetur sed do Lorem ipsum dolor sit consectetur sed do dolor sit , consectetur
                sed do Lorem ipsum dolor sit consectetur sed do Lorem ipsum dolor sit consectetur
                sed do Lorem ipsum dolor sit consectetur sed do
              </Text>

              <Button
                display={{ base: 'block', sm: 'none' }}
                width="auto"
                color="#222222"
                bg="white"
                variant="link"
                _hover={{ bg: '#white' }}
                _active={{
                  bg: '#white',
                }}
                _focus={{
                  bg: '#white',
                }}>
                Read more
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box as="section" maxWidth="1320px" margin="0 auto">
          <Heading
            className={segoe.className}
            textAlign="center"
            color="#000000"
            fontWeight={700}
            fontSize="32px"
            lineHeight="normal"
            fontStyle="normal"
            mb={{ base: '16px', md: '40px' }}>
            Read Next
          </Heading>

          <Flex
            display="flex"
            gap={{ base: '16px', md: '20px' }}
            justifyContent="center"
            flexDirection={{ base: 'column', md: 'row' }}>
            <Box maxW="387px" border="1px solid #F3F4F6" borderRadius="8px" padding="24px">
              <UnorderedList
                margin="0"
                listStyleType="none"
                borderBottom="1px solid #858585"
                pb="32px">
                <ListItem
                  fontWeight={700}
                  fontSize="16px"
                  lineHeight="normal"
                  fontStyle="normal"
                  mb="8px"
                  color="#222222"
                  _hover={{ color: '#3CB3E5' }}>
                  How to Build a Design System if your...
                </ListItem>
                <ListItem
                  fontSize="16px"
                  lineHeight="normal"
                  fontStyle="normal"
                  fontWeight="400"
                  color="#5B5B5B">
                  Its always hard to be the only person in a company who is responsible for product
                  design. Your day can be insanely...
                </ListItem>
              </UnorderedList>

              <UnorderedList
                margin="16px 0 0 0"
                listStyleType="none"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                lineHeight="normal"
                fontStyle="normal"
                fontWeight={400}
                color="#5B5B5B"
                fontSize="16px">
                <ListItem>March 01, 2021</ListItem>

                <ListItem display="flex" alignItems="center" gap="8px">
                  <span>
                    <Image src="/icons/eye_icon.svg" alt="Eye" width={16} height={11.3} />
                  </span>
                  440
                </ListItem>
              </UnorderedList>
            </Box>

            <Box maxW="387px" border="1px solid #F3F4F6" borderRadius="8px" padding="24px">
              <UnorderedList
                margin="0"
                listStyleType="none"
                borderBottom="1px solid #858585"
                pb="32px">
                <ListItem
                  fontWeight={700}
                  fontSize="16px"
                  lineHeight="normal"
                  fontStyle="normal"
                  mb="8px"
                  color="#222222"
                  _hover={{ color: '#3CB3E5' }}>
                  How to Build a Design System if your...
                </ListItem>
                <ListItem
                  fontSize="16px"
                  lineHeight="normal"
                  fontStyle="normal"
                  fontWeight="400"
                  color="#5B5B5B">
                  Its always hard to be the only person in a company who is responsible for product
                  design. Your day can be insanely...
                </ListItem>
              </UnorderedList>

              <UnorderedList
                margin="16px 0 0 0"
                listStyleType="none"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                lineHeight="normal"
                fontStyle="normal"
                fontWeight={400}
                color="#5B5B5B"
                fontSize="16px">
                <ListItem>March 01, 2021</ListItem>

                <ListItem display="flex" alignItems="center" gap="8px">
                  <span>
                    <Image src="/icons/eye_icon.svg" alt="Eye" width={16} height={11.3} />
                  </span>
                  440
                </ListItem>
              </UnorderedList>
            </Box>

            <Box maxW="387px" border="1px solid #F3F4F6" borderRadius="8px" padding="24px">
              <UnorderedList
                margin="0"
                listStyleType="none"
                borderBottom="1px solid #858585"
                pb="32px">
                <ListItem
                  fontWeight={700}
                  fontSize="16px"
                  lineHeight="normal"
                  fontStyle="normal"
                  mb="8px"
                  color="#222222"
                  _hover={{ color: '#3CB3E5' }}>
                  How to Build a Design System if your...
                </ListItem>
                <ListItem
                  fontSize="16px"
                  lineHeight="normal"
                  fontStyle="normal"
                  fontWeight="400"
                  color="#5B5B5B">
                  Its always hard to be the only person in a company who is responsible for product
                  design. Your day can be insanely...
                </ListItem>
              </UnorderedList>

              <UnorderedList
                margin="16px 0 0 0"
                listStyleType="none"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                lineHeight="normal"
                fontStyle="normal"
                fontWeight={400}
                color="#5B5B5B"
                fontSize="16px">
                <ListItem>March 01, 2021</ListItem>

                <ListItem display="flex" alignItems="center" gap="8px">
                  <span>
                    <Image src="/icons/eye_icon.svg" alt="Eye" width={16} height={11.3} />
                  </span>
                  440
                </ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </Box>
        <Flex
          as="section"
          flexDirection="column"
          maxW="506px"
          margin="0 auto"
          mb={{ base: '36px', md: '80px', xl: '148px' }}>
          <Heading
            className={segoe.className}
            mb={{ base: '16px', md: '32px' }}
            lineHeight="normal"
            fontStyle="normal"
            color="#222222"
            fontSize={{ base: '28px', sm: '32px' }}
            fontWeight={700}
            textAlign="center">
            Subscribe to get our Newsletter
          </Heading>
          <InputGroup
            width="100%"
            height="46px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            border="1px solid #C0C0C0"
            padding="4px 4px 4px 16px"
            borderRadius="12px"
            outline="none">
            <Input
              height="100%"
              border="none"
              outline="none"
              _focusVisible={{ border: 'none' }}
              lineHeight="normal"
              fontSize="16px"
              fontWeight={400}
              placeholder="Your Email"
              _placeholder={{ color: '#DEDEDE' }}
            />

            <Button
              borderRadius="6px"
              p="12px 24px"
              lineHeight="14px"
              fontSize="14px"
              fontWeight={600}>
              Subscribe
            </Button>
          </InputGroup>
        </Flex>
      </Container>
    </>
  );
};

export default ArticlePage;
