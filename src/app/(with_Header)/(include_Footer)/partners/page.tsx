'use client';
import React, { FC } from 'react';
import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import Image from 'next/image';
import { Button } from '@/components/atom';
import { segoe } from '@/constants/fonts';

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
        alignItems="center"
        fontStyle="normal"
        lineHeight="normal">
        <Heading
          fontSize={{ base: '28px', md: '44px' }}
          fontWeight={{ base: 600, md: 700 }}
          color="#222222"
          mb="16px">
          PARTNER WITH PERSONA
        </Heading>
        <Text
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
        <Flex
          as="section"
          gap={{ base: '20px', md: '24px' }}
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
        <Flex
          as="section"
          gap={{ base: '20px', md: '24px' }}
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
        <Flex
          as="section"
          flexDirection="column"
          gap={{ base: '16px', md: '40px' }}
          alignItems="center">
          <Heading
            className={segoe.className}
            fontSize={{ base: '28px', md: '32px' }}
            fontWeight={{ base: 600, md: 700 }}
            color="#222222"
            fontStyle="normal"
            lineHeight="normal">
            Our Partners
          </Heading>

          <Box
            display="flex"
            maxWidth="820px"
            gap="34px"
            alignItems="center"
            flexWrap="wrap"
            justifyContent={{
              base: 'center',
              lg: 'space-between',
            }}>
            <Box width="118px" height="32px">
              <Image
                src="/images/public_available/partners_icon_holding.png"
                alt="Partner Icon"
                width={118}
                height={32}
              />
            </Box>
            <Box width="99px" height="32px">
              <Image
                src="/images/public_available/partners_icon_ware.png"
                alt="Partner Icon"
                width={99}
                height={32}
              />
            </Box>
            <Box width="114px" height="32px">
              <Image
                src="/images/public_available/partners_icon_oki.png"
                alt="Partner Icon"
                width={114}
                height={32}
              />
            </Box>
            <Box width="70px" height="32px">
              <Image
                src="/images/public_available/partners_icon_vilpe.png"
                alt="Partner Icon"
                width={70}
                height={32}
              />
            </Box>
            <Box width="99px" height="32px">
              <Image
                src="/images/public_available/partners_icon_ware.png"
                alt="Partner Icon"
                width={99}
                height={32}
              />
            </Box>
            <Box width="118px" height="32px">
              <Image
                src="/images/public_available/partners_icon_holding.png"
                alt="Partner Icon"
                width={118}
                height={32}
              />
            </Box>
          </Box>
        </Flex>
        <Flex as="section" maxW="685px" flexDirection="column" alignItems="center" margin="0 auto">
          <Heading
            className={segoe.className}
            fontSize={{ base: '28px', md: '32px' }}
            fontWeight={{ base: 600, md: 700 }}
            color="#222222"
            fontStyle="normal"
            lineHeight="normal"
            mb="16px">
            Contact sales
          </Heading>

          <Text
            fontSize="16px"
            fontWeight={400}
            color="#6B7280"
            fontStyle="normal"
            lineHeight="normal"
            mb="16px"
            textAlign="center">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet.
            Sapien tortor lacus arcu.{' '}
          </Text>
          <form style={{ width: '100%' }}>
            <Flex gap="20px" mb="36px" flexDirection={{ base: 'column', md: 'row' }}>
              <FormControl width={{ base: '100%', md: '50%' }}>
                <FormLabel
                  htmlFor="name"
                  mb="4px"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight={600}
                  lineHeight="20px">
                  First name*
                </FormLabel>
                <Input type="text" id="name" placeholder="Enter name" padding="8px 12px" />
              </FormControl>
              <FormControl width={{ base: '100%', md: '50%' }}>
                <FormLabel
                  htmlFor="surname"
                  mb="4px"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight={600}
                  lineHeight="20px">
                  Last name*
                </FormLabel>
                <Input type="text" id="surname" placeholder="Enter last name" padding="8px 12px" />
              </FormControl>
            </Flex>
            <FormControl mb="36px">
              <FormLabel
                htmlFor="email"
                mb="4px"
                fontSize="14px"
                fontStyle="normal"
                fontWeight={600}
                lineHeight="20px">
                Email*
              </FormLabel>
              <Input type="email" id="email" placeholder="you@example.com" padding="8px 12px" />
            </FormControl>
            <Text mb="16px" fontSize="16px" fontStyle="normal" fontWeight={400} lineHeight="normal">
              Select your area(s) of interest:
            </Text>
            <RadioGroup defaultValue="4" mb="36px">
              <Stack spacing="16px" direction="column">
                <Radio colorScheme="blue" value="1">
                  Job opening
                </Radio>
                <Radio colorScheme="blue" value="2">
                  Online course
                </Radio>
                <Radio colorScheme="blue" value="3">
                  Offline course
                </Radio>
                <Radio colorScheme="blue" value="4">
                  Other
                </Radio>
              </Stack>
            </RadioGroup>
            <FormControl mb="36px">
              <FormLabel
                htmlFor="email"
                mb="4px"
                fontSize="14px"
                fontStyle="normal"
                fontWeight={600}
                lineHeight="20px">
                Company
              </FormLabel>
              <Input type="email" id="email" placeholder="you@example.com" padding="8px 12px" />
            </FormControl>
            <Text mb="4px" fontSize="14px" fontStyle="normal" fontWeight={600} lineHeight="20px">
              Message
            </Text>
            <Textarea placeholder="Type here..." padding="9px 13px" />
            <Text
              color="#C0C0C0"
              fontSize="14px"
              fontWeight={400}
              fontStyle="normal"
              lineHeight="20px"
              textAlign="right"
              mb="16px">
              0/10
            </Text>
            <Checkbox
              mb="24px"
              fontSize="16px"
              fontStyle="normal"
              fontWeight={400}
              lineHeight="normal">
              By selecting this, you agree to the Privacy Policy and Cookie Policy.
            </Checkbox>
            <Box>
              <Button style={{ width: '100%' }}>Submit</Button>
            </Box>
          </form>
        </Flex>
      </Flex>
    </>
  );
};
export default Partners;
