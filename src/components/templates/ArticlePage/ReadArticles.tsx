import React, { FC } from 'react';
import { Box, Flex, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import { segoe } from '@/utils/constants/fonts';

type ReadArticlesProps = {};

const ReadArticles: FC<ReadArticlesProps> = () => {
  return (
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
          <UnorderedList margin="0" listStyleType="none" borderBottom="1px solid #858585" pb="32px">
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
          <UnorderedList margin="0" listStyleType="none" borderBottom="1px solid #858585" pb="32px">
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
          <UnorderedList margin="0" listStyleType="none" borderBottom="1px solid #858585" pb="32px">
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
  );
};

export default ReadArticles;
