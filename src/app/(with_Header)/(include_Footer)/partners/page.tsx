'use client';
import React, { FC } from 'react';
import { Box, Flex, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { segoe } from '@/constants/fonts';
import Icon from '/public/icons/partners_icon.svg';

type Props = {};

const Partners: FC<Props> = () => {
  return (
    <>
      <Flex
        as="section"
        flexDirection="column"
        backgroundColor="#F6FCFF"
        py={{ base: '75.5px', xl: '98px' }}
        textAlign="center"
        alignItems="center">
        <Heading
          fontStyle="normal"
          lineHeight="normal"
          fontSize={{ base: '28px', md: '44px' }}
          fontWeight={{ base: 600, md: 700 }}
          color="#222222"
          mb="16px">
          PARTNER WITH PERSONA
        </Heading>
        <Text
          fontStyle="normal"
          lineHeight="normal"
          fontSize="20px"
          fontWeight={{ base: 600, lg: 400 }}
          color="#222222"
          w={{ base: '343px', md: '100%' }}>
          Let's transform the workforce of tomorrow—together.
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        maxWidth={1200}
        margin="0 auto"
        my={{ base: '36px', md: '80px', xl: '148px' }}
        gap={{ base: '36px', md: '80px', xl: '148px' }}
        px={{ base: '16px', xl: '0' }}>
        {/* 1st---------------------- */}
        <Flex
          as="section"
          gap="24px"
          alignItems="center"
          flexDirection={{ base: 'column', md: 'row' }}>
          <Box
            w={{ base: '100%', md: '50%' }}
            pl={{ base: '0', xl: '24px' }}
            textAlign="center"
            color="#222"
            fontStyle="normal"
            lineHeight="normal">
            <Heading
              className={segoe.className}
              mb="16px"
              fontSize={{ base: '24px', md: '32px' }}
              fontWeight={700}>
              Partner with us and enhance your brand.
            </Heading>
            <Text fontSize="16px" fontWeight={400} textAlign={{ base: 'left', md: 'center' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Text>
          </Box>
          <Box
            maxW={{ base: '576px', md: '50%' }}
            margin="0 auto"
            borderRadius={{ base: '16px', md: '0px 16px 16px 0px' }}
            overflow="hidden">
            <Image
              src="/images/public_available/partners_img.jpg"
              width={576}
              height={402}
              alt="partners image"
            />
          </Box>
        </Flex>
        {/* 2nd------------------------ */}
        <Flex
          as="section"
          gap="24px"
          alignItems="center"
          flexDirection={{ base: 'column-reverse', md: 'row' }}>
          <Box
            maxW={{ base: '576px', md: '50%' }}
            margin="0 auto"
            borderRadius={{ base: '16px', md: '16px 0px 0px 16px' }}
            overflow="hidden">
            <Image
              src="/images/public_available/partners_img.jpg"
              width={576}
              height={402}
              alt="partners image"
            />
          </Box>
          <Box
            w={{ base: '100%', md: '50%' }}
            pr={{ base: '0', xl: '24px' }}
            textAlign="center"
            color="#222"
            fontStyle="normal"
            lineHeight="normal">
            <Heading
              className={segoe.className}
              mb="16px"
              fontSize={{ base: '24px', md: '32px' }}
              fontWeight={700}>
              Partner with us and enhance your brand.
            </Heading>
            <Text fontSize="16px" fontWeight={400} textAlign={{ base: 'left', md: 'center' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Text>
          </Box>
        </Flex>
        {/* our partners icons */}
        <Flex as="section" flexDirection="column" gap="40px" alignItems="center">
          <Heading
            className={segoe.className}
            fontSize={{ base: '28px', md: '32px' }}
            fontWeight={{ base: 600, md: 700 }}
            color="#222222"
            fontStyle="normal"
            lineHeight="normal">
            Our Partners
          </Heading>
          <Flex gap="34px" flexWrap="wrap" alignItems="center" justifyContent="center">
            <Icon />
            <Icon />
            <Icon />
            <Icon />
            <Icon />
            <Icon />
          </Flex>
        </Flex>
        {/* Form--------------------------- */}
        <Flex as="section" maxW="685px" flexDirection="column" alignItems="center" margin="0 auto">
          <Heading
            className={segoe.className}
            fontSize={{ base: '28px', md: '32px' }}
            fontWeight={{ base: 600, md: 700 }}
            color="#222222"
            fontStyle="normal"
            lineHeight="normal">
            Contact sales
          </Heading>
          <Text
            fontSize="16px"
            fontWeight={400}
            color="#6B7280"
            fontStyle="normal"
            lineHeight="normal">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet.
            Sapien tortor lacus arcu.{' '}
          </Text>
          <FormControl>
            <Flex gap="20px">
              <Box width="50%">
                <FormLabel htmlFor="name">First name*</FormLabel>
                <Input id="name"></Input>
              </Box>
              <Box width="50%">
                <FormLabel htmlFor="surname">Last name*</FormLabel>
                <Input id="surname"></Input>
              </Box>
            </Flex>
          </FormControl>
        </Flex>
      </Flex>
    </>
  );
};
export default Partners;
