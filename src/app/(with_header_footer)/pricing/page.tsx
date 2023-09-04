'use client';
import React, { FC, useState } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import Image from 'next/image';
import PlusIcon from 'public/icons/plus_pricing_icon.svg';
import AddIcon from 'public/icons/xmark_pricing_icon.svg';
import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react';

type Props = {};

const Pricing: FC<Props> = () => {
  const [activeButton, setActiveButton] = useState(null);

  // const handleButtonClick = (buttonNumber: number) => {
  //   setActiveButton(buttonNumber === activeButton ? null : buttonNumber);
  // };

  return (
    <Box mt="64px">
      <Box maxW="688px" margin="0 auto" textAlign="center">
        <Heading
          margin="0 0 16px 0"
          color="#1F1646"
          as="h1"
          lineHeight="53.64px"
          fontSize="44px"
          fontWeight="700">
          Let's find the right <span style={{ color: '#3CB3E5' }}> plan </span>for you
        </Heading>
        <Text
          color="#222222"
          margin="0 0 8px 0"
          lineHeight="21.28px"
          fontSize="16px"
          fontWeight="700">
          For only online videocourses and articles
        </Text>
        <Text
          maxW="487px"
          color="#222222"
          margin="0 auto"
          lineHeight="21.28px"
          fontSize="16px"
          fontWeight="400">
          Whether you're just starting a community or ready to scale your course or membership
          business, there's a Mighty Network for you.
        </Text>
      </Box>

      <Box maxW="964px" margin="0 auto">
        <Tabs width="100%" mt="32px" variant="soft-rounded">
          <TabList
            display="flex"
            padding="3px"
            justifyContent="space-between"
            width="252px"
            margin="0 auto"
            bg="#ECF7FC"
            borderRadius="33px">
            <Tab
              padding="9px 16px"
              _selected={{ color: '#0000000', bg: '#fff' }}
              fontWeight="400"
              borderRadius="33px"
              lineHeight="21.28px"
              fontSize="16px"
              color="#0000000">
              Pay monthly
            </Tab>
            <Tab
              padding="9px 16px"
              _selected={{ color: '#0000000', bg: '#fff' }}
              fontWeight="400"
              borderRadius="33px"
              lineHeight="21.28px"
              fontSize="16px"
              color="#000000">
              Pay yearly
            </Tab>
          </TabList>

          <TabPanels width="100%">
            <TabPanel>
              <Box mb="40px">
                <Grid
                  templateColumns="repeat(3, 1fr)"
                  gap="20px"
                  margin="40px auto 0"
                  css={{
                    '@media (max-width: 1120px)': {
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                    },
                  }}>
                  <GridItem
                    padding="32px"
                    width="308px"
                    bg="#FFFFFF"
                    color="#222222"
                    borderRadius="12px 12px 80px 12px"
                    boxShadow="0px 15px 20px 0px rgba(0, 0, 0, 0.05)">
                    <Heading
                      textAlign="center"
                      margin="0 0 8px 0"
                      fontSize="32px"
                      fontWeight="700"
                      lineHeight="42.56px"
                      as="h2">
                      Standart
                    </Heading>
                    <Text
                      textAlign="center"
                      margin="0 0 8px 0"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight="21.28px">
                      7 days free trial
                    </Text>

                    <UnorderedList
                      listStyleType="none"
                      margin="0 0 16px 0"
                      display="flex"
                      justifyContent="center"
                      gap={7}
                      alignItems="flex-end">
                      <ListItem fontSize="32px" fontWeight="700" lineHeight="42.56px">
                        <span
                          style={{
                            verticalAlign: 'super',
                            fontSize: '16px',
                            lineHeight: '21.28px',
                            fontWeight: '400',
                          }}>
                          $
                        </span>{' '}
                        150
                      </ListItem>
                      <ListItem
                        lineHeight="21.28px"
                        fontSize="16px"
                        fontWeight="400"
                        color="#081E4A80">
                        /per month
                      </ListItem>
                    </UnorderedList>

                    <ChakraButton
                      bg="#3CB4E7"
                      color="#FFFFFF"
                      _hover={{
                        bg: 'blue.400',
                        color: '#FFFFFF',
                      }}
                      _focus={{
                        bg: 'blue.500',
                        color: '#FFFFFF',
                      }}
                      _focusVisible={{
                        bg: 'blue.500',
                        color: '#FFFFFF',
                      }}
                      _disabled={{
                        bg: 'grey.50',
                        color: 'grey.200',
                        cursor: 'not-allowed',
                      }}
                      height="37px"
                      width="100%"
                      padding="8px 14px"
                      fontWeight="400"
                      fontSize="16px"
                      lineHeight="21.28px"
                      borderRadius="6px">
                      Get Started
                    </ChakraButton>

                    <UnorderedList margin=" 16px 0 0 0" listStyleType="none">
                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Up to 50 blog
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        3 topics
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Website with Unlimited Pages
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Lorem Ispum
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Lorem Ispum
                      </ListItem>
                    </UnorderedList>
                  </GridItem>

                  <GridItem
                    padding="32px"
                    width="308px"
                    bg="#FFFFFF"
                    color="#222222"
                    borderRadius="12px 12px 80px 12px"
                    boxShadow="0px 15px 20px 0px rgba(0, 0, 0, 0.05)">
                    <Heading
                      textAlign="center"
                      margin="0 0 8px 0"
                      fontSize="32px"
                      fontWeight="700"
                      lineHeight="42.56px"
                      as="h2">
                      Standart
                    </Heading>
                    <Text
                      textAlign="center"
                      margin="0 0 8px 0"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight="21.28px">
                      7 days free trial
                    </Text>

                    <UnorderedList
                      listStyleType="none"
                      margin="0 0 16px 0"
                      display="flex"
                      justifyContent="center"
                      gap="7px"
                      alignItems="flex-end">
                      <ListItem fontSize="32px" fontWeight="700" lineHeight="42.56px">
                        <span
                          style={{
                            verticalAlign: 'super',
                            fontSize: '16px',
                            lineHeight: '21.28px',
                            fontWeight: '400',
                          }}>
                          &#36;
                        </span>
                        150
                      </ListItem>
                      <ListItem
                        lineHeight="21.28px"
                        fontSize="16px"
                        fontWeight="400"
                        color="#081E4A80">
                        /per month
                      </ListItem>
                    </UnorderedList>

                    <ChakraButton
                      bg="#3CB4E7"
                      color="#FFFFFF"
                      _hover={{
                        bg: 'blue.400',
                        color: '#FFFFFF',
                      }}
                      _focus={{
                        bg: 'blue.500',
                        color: '#FFFFFF',
                      }}
                      _focusVisible={{
                        bg: 'blue.500',
                        color: '#FFFFFF',
                      }}
                      _disabled={{
                        bg: 'grey.50',
                        color: 'grey.200',
                        cursor: 'not-allowed',
                      }}
                      height="37px"
                      width="100%"
                      padding="8px 14px"
                      fontWeight="400"
                      fontSize="16px"
                      lineHeight="21.28px"
                      borderRadius="6px">
                      Get Started
                    </ChakraButton>

                    <UnorderedList margin=" 16px 0 0 0" listStyleType="none">
                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Up to 50 blog
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        3 topics
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Website with Unlimited Pages
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Lorem Ispum
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Lorem Ispum
                      </ListItem>
                    </UnorderedList>
                  </GridItem>

                  <GridItem
                    padding="32px"
                    width="308px"
                    bg="#FFFFFF"
                    color="#222222"
                    borderRadius="12px 12px 80px 12px"
                    boxShadow="0px 15px 20px 0px rgba(0, 0, 0, 0.05)">
                    <Heading
                      textAlign="center"
                      margin="0 0 8px 0"
                      fontSize="32px"
                      fontWeight="700"
                      lineHeight="42.56px"
                      as="h2">
                      Standart
                    </Heading>
                    <Text
                      textAlign="center"
                      margin="0 0 8px 0"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight="21.28px">
                      7 days free trial
                    </Text>

                    <UnorderedList
                      listStyleType="none"
                      margin="0 0 16px 0"
                      display="flex"
                      justifyContent="center"
                      gap="7px"
                      alignItems="flex-end">
                      <ListItem fontSize="32px" fontWeight="700" lineHeight="42.56px">
                        <span
                          style={{
                            verticalAlign: 'super',
                            fontSize: '16px',
                            lineHeight: '21.28px',
                            fontWeight: '400',
                          }}>
                          &#36;
                        </span>{' '}
                        150
                      </ListItem>
                      <ListItem
                        lineHeight="21.28px"
                        fontSize="16px"
                        fontWeight="400"
                        color="#081E4A80">
                        /per month
                      </ListItem>
                    </UnorderedList>

                    <ChakraButton
                      bg="#3CB4E7"
                      color="#FFFFFF"
                      _hover={{
                        bg: 'blue.400',
                        color: '#FFFFFF',
                      }}
                      _focus={{
                        bg: 'blue.500',
                        color: '#FFFFFF',
                      }}
                      _focusVisible={{
                        bg: 'blue.500',
                        color: '#FFFFFF',
                      }}
                      _disabled={{
                        bg: 'grey.50',
                        color: 'grey.200',
                        cursor: 'not-allowed',
                      }}
                      height="37px"
                      width="100%"
                      padding="8px 14px"
                      fontWeight="400"
                      fontSize="16px"
                      lineHeight="21.28px"
                      borderRadius="6px">
                      Get Started
                    </ChakraButton>

                    <UnorderedList margin=" 16px 0 0 0" listStyleType="none">
                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Up to 50 blog
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        3 topics
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Website with Unlimited Pages
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Lorem Ispum
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Lorem Ispum
                      </ListItem>
                    </UnorderedList>
                  </GridItem>
                </Grid>
              </Box>
            </TabPanel>

            <TabPanel>
              <Box mb="40px">
                <Grid
                  templateColumns="repeat(3, 1fr)"
                  gap="20px"
                  margin="40px auto 0"
                  css={{
                    '@media (max-width: 1120px)': {
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                    },
                  }}>
                  <GridItem
                    padding="32px"
                    width="308px"
                    bg="#FFFFFF"
                    color="#222222"
                    borderRadius="12px 12px 80px 12px"
                    boxShadow="0px 15px 20px 0px rgba(0, 0, 0, 0.05)">
                    <Heading
                      textAlign="center"
                      margin="0 0 8px 0"
                      fontSize="32px"
                      fontWeight="700"
                      lineHeight="42.56px"
                      as="h2">
                      Standart
                    </Heading>
                    <Text
                      textAlign="center"
                      margin="0 0 8px 0"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight="21.28px">
                      7 days free trial
                    </Text>

                    <UnorderedList
                      listStyleType="none"
                      margin="0 0 16px 0"
                      display="flex"
                      justifyContent="center"
                      gap="7px"
                      alignItems="flex-end">
                      <ListItem fontSize="32px" fontWeight="700" lineHeight="42.56px">
                        <span
                          style={{
                            verticalAlign: 'super',
                            fontSize: '16px',
                            lineHeight: '21.28px',
                            fontWeight: '400',
                          }}>
                          $
                        </span>{' '}
                        150
                      </ListItem>
                      <ListItem
                        lineHeight="21.28px"
                        fontSize="16px"
                        fontWeight="400"
                        color="#081E4A80">
                        /per month
                      </ListItem>
                    </UnorderedList>

                    <ChakraButton
                      bg="#3CB4E7"
                      color="#FFFFFF"
                      _hover={{
                        bg: 'blue.400',
                        color: '#FFFFFF',
                      }}
                      _focus={{
                        bg: 'blue.500',
                        color: '#FFFFFF',
                      }}
                      _focusVisible={{
                        bg: 'blue.500',
                        color: '#FFFFFF',
                      }}
                      _disabled={{
                        bg: 'grey.50',
                        color: 'grey.200',
                        cursor: 'not-allowed',
                      }}
                      height="37px"
                      width="100%"
                      padding="8px 14px"
                      fontWeight="400"
                      fontSize="16px"
                      lineHeight="21.28px"
                      borderRadius="6px">
                      Get Started
                    </ChakraButton>

                    <UnorderedList margin=" 16px 0 0 0" listStyleType="none">
                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Up to 50 blog
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        3 topics
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Website with Unlimited Pages
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Lorem Ispum
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Lorem Ispum
                      </ListItem>
                    </UnorderedList>
                  </GridItem>

                  <GridItem
                    padding="32px"
                    width="308px"
                    bg="#FFFFFF"
                    color="#222222"
                    borderRadius="12px 12px 80px 12px"
                    boxShadow="0px 15px 20px 0px rgba(0, 0, 0, 0.05)">
                    <Heading
                      textAlign="center"
                      margin="0 0 8px 0"
                      fontSize="32px"
                      fontWeight="700"
                      lineHeight="42.56px"
                      as="h2">
                      Premium
                    </Heading>
                    <Text
                      textAlign="center"
                      margin="0 0 8px 0"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight="21.28px">
                      7 days free trial
                    </Text>

                    <UnorderedList
                      listStyleType="none"
                      margin="0 0 16px 0"
                      display="flex"
                      justifyContent="center"
                      gap={7}
                      alignItems="flex-end">
                      <ListItem fontSize="32px" fontWeight="700" lineHeight="42.56px">
                        <span
                          style={{
                            verticalAlign: 'super',
                            fontSize: '16px',
                            lineHeight: '21.28px',
                            fontWeight: '400',
                          }}>
                          &#36;
                        </span>
                        150
                      </ListItem>
                      <ListItem
                        lineHeight="21.28px"
                        fontSize="16px"
                        fontWeight="400"
                        color="#081E4A80">
                        /per month
                      </ListItem>
                    </UnorderedList>

                    <ChakraButton
                      bg="#3CB4E7"
                      color="#FFFFFF"
                      _hover={{
                        bg: 'blue.400',
                        color: '#FFFFFF',
                      }}
                      _focus={{
                        bg: 'blue.500',
                        color: '#FFFFFF',
                      }}
                      _focusVisible={{
                        bg: 'blue.500',
                        color: '#FFFFFF',
                      }}
                      _disabled={{
                        bg: 'grey.50',
                        color: 'grey.200',
                        cursor: 'not-allowed',
                      }}
                      height="37px"
                      width="100%"
                      padding="8px 14px"
                      fontWeight="400"
                      fontSize="16px"
                      lineHeight="21.28px"
                      borderRadius="6px">
                      Get Started
                    </ChakraButton>

                    <UnorderedList margin=" 16px 0 0 0" listStyleType="none">
                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Up to 50 blog
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        3 topics
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Website with Unlimited Pages
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Lorem Ispum
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Lorem Ispum
                      </ListItem>
                    </UnorderedList>
                  </GridItem>

                  <GridItem
                    padding="32px"
                    width="308px"
                    bg="#FFFFFF"
                    color="#222222"
                    borderRadius="12px 12px 80px 12px"
                    boxShadow="0px 15px 20px 0px rgba(0, 0, 0, 0.05)">
                    <Heading
                      textAlign="center"
                      margin="0 0 8px 0"
                      fontSize="32px"
                      fontWeight="700"
                      lineHeight="42.56px"
                      as="h2">
                      Premium Plus
                    </Heading>
                    <Text
                      textAlign="center"
                      margin="0 0 8px 0"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight="21.28px">
                      7 days free trial
                    </Text>

                    <UnorderedList
                      listStyleType="none"
                      margin="0 0 16px 0"
                      display="flex"
                      justifyContent="center"
                      gap={7}
                      alignItems="flex-end">
                      <ListItem fontSize="32px" fontWeight="700" lineHeight="42.56px">
                        <span
                          style={{
                            verticalAlign: 'super',
                            fontSize: '16px',
                            lineHeight: '21.28px',
                            fontWeight: '400',
                          }}>
                          &#36;
                        </span>{' '}
                        150
                      </ListItem>
                      <ListItem
                        lineHeight="21.28px"
                        fontSize="16px"
                        fontWeight="400"
                        color="#081E4A80">
                        /per month
                      </ListItem>
                    </UnorderedList>

                    <ChakraButton
                      bg="#3CB4E7"
                      color="#FFFFFF"
                      _hover={{
                        bg: 'blue.400',
                        color: '#FFFFFF',
                      }}
                      _focus={{
                        bg: 'blue.500',
                        color: '#FFFFFF',
                      }}
                      _focusVisible={{
                        bg: 'blue.500',
                        color: '#FFFFFF',
                      }}
                      _disabled={{
                        bg: 'grey.50',
                        color: 'grey.200',
                        cursor: 'not-allowed',
                      }}
                      height="37px"
                      width="100%"
                      padding="8px 14px"
                      fontWeight="400"
                      fontSize="16px"
                      lineHeight="21.28px"
                      borderRadius="6px">
                      Get Started
                    </ChakraButton>

                    <UnorderedList margin=" 16px 0 0 0" listStyleType="none">
                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Up to 50 blog
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        3 topics
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Website with Unlimited Pages
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Lorem Ispum
                      </ListItem>

                      <ListItem mb="16px" display="flex" alignItems="center" gap={8}>
                        <span>
                          <Image
                            width={18}
                            height={18}
                            src="/icons/pricing_icon.svg"
                            alt="Select"
                          />
                        </span>
                        Lorem Ispum
                      </ListItem>
                    </UnorderedList>
                  </GridItem>
                </Grid>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      <Box maxW="722px" margin="0 auto 148px">
        <Box display="flex" alignItems="center" justifyContent="center" mb="28.5px" color="#000000">
          <UnorderedList
            listStyleType="none"
            display="flex"
            alignItems="center"
            margin=" 0 36px 0 0">
            <ListItem marginRight="8px" width="42.5px" height="30px">
              <Image width={42.5} height={30} src="/images/pricing/Visa_pricing.png" alt="Visa" />
            </ListItem>
            <ListItem marginRight="8px" width="42.5px" height="30px">
              <Image
                src="/images/pricing/Discover_pricing.png"
                width={42.5}
                height={30}
                alt="Discover"
              />
            </ListItem>
            <ListItem marginRight="8px" width="42.5px" height="30px">
              <Image
                src="/images/pricing/MasterCard_pricing.png"
                width={42.5}
                height={30}
                alt="MasterCard"
              />
            </ListItem>
            <ListItem marginRight="8px" width="42.5px" height="30px">
              <Image
                src="/images/pricing/PayPal_pricing.png"
                width={42.5}
                height={30}
                alt="PayPal"
              />
            </ListItem>
            <ListItem fontSize="16" fontWeight="400" lineHeight="21.28px">
              PayPal or any credit card
            </ListItem>
          </UnorderedList>

          <UnorderedList listStyleType="none" display="flex" alignItems="center" margin="0">
            <ListItem marginRight="8px" width="24px" height="24px">
              <Image src="/icons/lock_pricing.svg" width={24} height={24} alt="lock" />
            </ListItem>
            <ListItem fontSize="16" fontWeight="400" lineHeight="21.28px">
              Transactions are encrypted and secured
            </ListItem>
          </UnorderedList>
        </Box>

        <Text
          textAlign="center"
          lineHeight="18.62px"
          fontSize="14px"
          fontWeight="400"
          color="#BABABA">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
          graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
          century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
          for use in a type specimen book. It usually begins with:
        </Text>
      </Box>

      <Box maxW="1200px" margin="0 auto 148px">
        <Heading
          as="h2"
          margin="0 0 40px 0"
          lineHeight="38.4px"
          fontWeight="700"
          fontSize="32px"
          color="#222222">
          Frequently Asked Questions
        </Heading>

        <Accordion allowMultiple>
          <AccordionItem border="none">
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _hover={{ backgroundColor: 'transparent' }}>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight="700"
                      lineHeight="21.6px"
                      fontSize="18px"
                      color="#222222">
                      How many children will be there in one batch?
                    </Box>
                    {isExpanded ? <AddIcon fontSize="12px" /> : <PlusIcon fontSize="12px" />}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  maxW="1020px"
                  fontSize="16px"
                  lineHeight="22.4px"
                  fontWeight="400"
                  color="#5B5B5B">
                  All our mentors are experienced and accomplished professionals with a passion for
                  teaching. They've been working in their respective fields for a minimum of 5+
                  years.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem border="none">
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _hover={{ backgroundColor: 'transparent' }}>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight="700"
                      lineHeight="21.6px"
                      fontSize="18px"
                      color="#222222">
                      How many children will be there in one batch?
                    </Box>
                    {isExpanded ? <AddIcon fontSize="12px" /> : <PlusIcon fontSize="12px" />}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  maxW="1020px"
                  fontSize="16px"
                  lineHeight="22.4px"
                  fontWeight="400"
                  color="#5B5B5B">
                  All our mentors are experienced and accomplished professionals with a passion for
                  teaching. They've been working in their respective fields for a minimum of 5+
                  years.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem border="none">
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _hover={{ backgroundColor: 'transparent' }}>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight="700"
                      lineHeight="21.6px"
                      fontSize="18px"
                      color="#222222">
                      How many children will be there in one batch?
                    </Box>
                    {isExpanded ? <AddIcon fontSize="12px" /> : <PlusIcon fontSize="12px" />}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  maxW="1020px"
                  fontSize="16px"
                  lineHeight="22.4px"
                  fontWeight="400"
                  color="#5B5B5B">
                  All our mentors are experienced and accomplished professionals with a passion for
                  teaching. They've been working in their respective fields for a minimum of 5+
                  years.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem border="none">
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _hover={{ backgroundColor: 'transparent' }}>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight="700"
                      lineHeight="21.6px"
                      fontSize="18px"
                      color="#222222">
                      Who are the mentors?
                    </Box>
                    {isExpanded ? <AddIcon fontSize="12px" /> : <PlusIcon fontSize="12px" />}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  maxW="1020px"
                  fontSize="16px"
                  lineHeight="22.4px"
                  fontWeight="400"
                  color="#5B5B5B">
                  All our mentors are experienced and accomplished professionals with a passion for
                  teaching. They've been working in their respective fields for a minimum of 5+
                  years.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem border="none">
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _hover={{ backgroundColor: 'transparent' }}>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight="700"
                      lineHeight="21.6px"
                      fontSize="18px"
                      color="#222222">
                      How many children will be there in one batch?
                    </Box>
                    {isExpanded ? <AddIcon fontSize="12px" /> : <PlusIcon fontSize="12px" />}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  maxW="1020px"
                  fontSize="16px"
                  lineHeight="22.4px"
                  fontWeight="400"
                  color="#5B5B5B">
                  All our mentors are experienced and accomplished professionals with a passion for
                  teaching. They've been working in their respective fields for a minimum of 5+
                  years.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>

      <Box bg="#1F1646">
        <Box
          padding="77.5px 0 69.5px"
          maxW="732px"
          margin=" 0 auto"
          textAlign="center"
          color="#fff">
          <Heading margin="0 0 8px 0" lineHeight="53.64px" fontWeight="700" fontSize="44" as="h3">
            Find the right course for you
          </Heading>
          <Text margin="0 0 16px 0" lineHeight="21.28px" fontSize="16px" fontWeight="400">
            See your personalised recommendations based on your interests and goals.
          </Text>
          <Button
            _hover={{ backgroundColor: '#949494', color: '#2F2F2F' }}
            size="lg"
            height="53px"
            padding="16px 32px"
            lineHeight="21.28px"
            fontSize="16px"
            fontWeight="400"
            color="#1F1646">
            Explore courses
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Pricing;
