'use client';

import React from 'react';
import { Box, Container, Flex, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import { Button } from '@/components/atom';

const GraphicDesignCourse = () => {
  return (
    <Box
      borderRadius="0 0 72px 72px"
      bg="#F6FCFF"
      padding={{
        base: '0 16px ',
        sm: '0 16px ',
        md: '0 16px ',
        lg: ' 0',
        xl: ' 0',
      }}>
      <Container maxW="1200px" padding="0 0 82px 0">
        <Flex
          gap={{
            base: '24px',
            sm: '24px',
            md: '24px',
            lg: '122px',
            xl: '122px',
          }}
          justifyContent="center"
          alignItems="center"
          padding="24px 0"
          flexWrap={{
            base: 'wrap-reverse',
            sm: 'wrap-reverse',
            md: 'wrap-reverse',
            lg: 'nowrap',
            xl: 'nowrap',
          }}>
          <Box maxW="488px" color="#222222" textAlign="center">
            <Heading
              margin="0  0 8px 0"
              as="h2"
              color="#1F1646"
              lineHeight={{
                base: '34.13px',
                sm: '34.13px',
                md: ' 34.13px',
                lg: '53.64px',
                xl: '53.64px',
              }}
              fontSize={{ base: '28px', sm: '28px', md: ' 28px', lg: '44px', xl: '44px' }}>
              Graphic Design
            </Heading>
            <Flex justifyContent="center" gap="13px" mb="16px">
              <Flex alignItems="center" gap="6px">
                <Image src="/icons/hollow_star.svg" alt="Rating Star" width={16.5} height={15.8} />
                <Image src="/icons/hollow_star.svg" alt="Rating Star" width={16.5} height={15.8} />
                <Image src="/icons/hollow_star.svg" alt="Rating Star" width={16.5} height={15.8} />
                <Image src="/icons/hollow_star.svg" alt="Rating Star" width={16.5} height={15.8} />
                <Image src="/icons/hollow_star.svg" alt="Rating Star" width={16.5} height={15.8} />
              </Flex>

              <Text as="span" margin="0" lineHeight="18.75px" fontSize="16px">
                4.8
              </Text>
            </Flex>

            <Box lineHeight="18.75px" fontSize="16px" mb="24px">
              <Text as="p" margin="0" lineHeight="18.75px" fontSize="16px">
                Master the basics of Photoshop and Illustrator and gain invaluable insights in this
                introductory level course from Jake Bartlett.
              </Text>
            </Box>

            <Flex gap="16px" alignItems="center" justifyContent="center" flexWrap="wrap">
              <Button
                padding="16px 32px"
                height="53px"
                width="236px"
                fontWeight="700"
                lineHeight="21.28px"
                fontSize="16px">
                Apply now
              </Button>
              <Button
                height="53px"
                padding="16px 0"
                fontWeight="400"
                lineHeight="21.28px"
                fontSize="16px"
                bg="transparent"
                color="#1F1646">
                View programm
              </Button>
            </Flex>
          </Box>

          {/*  */}
          <Box maxW="590px">
            <Box width="100%">
              <Image
                src="/images/public_available/graphic_design_bg.png"
                alt="Graphic Design"
                width={590}
                height={334}
              />
            </Box>
          </Box>
        </Flex>

        <Box>
          <Flex gap="16px">
            <UnorderedList
              paddingRight="16px"
              listStyleType="none"
              margin="0"
              display="flex"
              flexDirection="column"
              gap="8px"
              borderRight="1px solid #C0C0C0">
              <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
                Language
              </ListItem>
              <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700" color="#222222">
                Armenian
              </ListItem>
            </UnorderedList>

            <UnorderedList
              listStyleType="none"
              margin="0"
              display="flex"
              paddingRight="16px"
              flexDirection="column"
              gap="8px"
              borderRight="1px solid #C0C0C0">
              <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
                Age
              </ListItem>
              <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700" color="#222222">
                10-18
              </ListItem>
            </UnorderedList>

            <UnorderedList
              listStyleType="none"
              margin="0"
              display="flex"
              paddingRight="16px"
              flexDirection="column"
              gap="8px"
              borderRight="1px solid #C0C0C0">
              <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
                Duration
              </ListItem>
              <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700" color="#222222">
                17 weeks
              </ListItem>
            </UnorderedList>

            <UnorderedList
              listStyleType="none"
              margin="0"
              display="flex"
              flexDirection="column"
              paddingRight="16px"
              gap="8px"
              borderRight="1px solid #C0C0C0">
              <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
                Total
              </ListItem>
              <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700" color="#222222">
                128 hours
              </ListItem>
            </UnorderedList>

            <UnorderedList
              listStyleType="none"
              margin="0"
              paddingRight="16px"
              display="flex"
              flexDirection="column"
              gap="8px"
              borderRight="1px solid #C0C0C0">
              <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
                Level
              </ListItem>
              <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700" color="#222222">
                Advance
              </ListItem>
            </UnorderedList>

            <UnorderedList
              listStyleType="none"
              paddingRight="16px"
              margin="0"
              display="flex"
              flexDirection="column"
              gap="8px"
              borderRight="1px solid #C0C0C0">
              <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
                Certificate
              </ListItem>
              <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700" color="#222222">
                By level
              </ListItem>
            </UnorderedList>

            <UnorderedList
              listStyleType="none"
              margin="0"
              display="flex"
              flexDirection="column"
              gap="8px">
              <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
                Course ended
              </ListItem>
              <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700" color="#222222">
                120 students
              </ListItem>
            </UnorderedList>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default GraphicDesignCourse;
