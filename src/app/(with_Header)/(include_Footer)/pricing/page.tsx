'use client';
import React, { FC } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
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
import { Button as ChakraButton } from '@chakra-ui/react';
import Image from 'next/image';
import PlusIcon from 'public/icons/plus_pricing_icon.svg';
import AddIcon from 'public/icons/xmark_pricing_icon.svg';

type Props = {};

const Pricing: FC<Props> = () => {
  return (
    <>
      <Box
        margin={{
          base: '36px 0 0 0',
          sm: '36px 0 0 0',
          md: '36px 0 0 0',
          lg: '64px 0 0 0',
          xl: '64px 0 0 0',
        }}
        padding={{ base: '0 16px', sm: '0 16px', md: '0 16px', lg: '0 16px', xl: '0' }}>
        <Box maxW="688px" margin="0 auto" textAlign="center">
          <Heading
            margin="0 0 16px 0"
            color="#1F1646"
            as="h1"
            lineHeight={{
              base: '34.13px',
              sm: '34.13px',
              md: '34.13px',
              lg: '53.64px',
              xl: '53.64px',
            }}
            fontSize={{ base: '28px', sm: '28px', md: '28px', lg: '44px', xl: '44px' }}
            fontWeight="700">
            Lets find the right <span style={{ color: '#3CB3E5' }}> plan </span>for you
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
            lineHeight="18.75px"
            fontSize="16px"
            fontWeight="400">
            Whether youre just starting a community or ready to scale your course or membership
            business, theres a Mighty Network for you.
          </Text>
        </Box>

        <Box maxW="964px" margin="0 auto">
          <Tabs
            width="100%"
            margin={{
              base: '36px 0 20px',
              sm: '36px 0 20px',
              md: '36px 0 20px',
              lg: '36px 0 36px',
              xl: '36px 0 36px',
            }}
            variant="soft-rounded"
            id="pay_monthly_yearly"
            padding="0">
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
                _selected={{ color: '#0000000', bg: '#fff', lineHeight: '21.28px' }}
                fontWeight="400"
                borderRadius="33px"
                lineHeight="18.75px"
                fontSize="16px"
                color="#0000000">
                Pay monthly
              </Tab>
              <Tab
                padding="9px 16px"
                _selected={{ color: '#0000000', bg: '#fff', lineHeight: '21.28px' }}
                fontWeight="400"
                borderRadius="33px"
                lineHeight="18.75px"
                fontSize="16px"
                color="#000000">
                Pay yearly
              </Tab>
            </TabList>

            <TabPanels width="100%">
              <TabPanel padding="0">
                <Box mb="40px">
                  <Box
                    display="flex"
                    flexWrap="wrap"
                    gap="20px"
                    justifyContent="center"
                    margin="40px auto 0">
                    <Box
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
                    </Box>

                    <Box
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
                    </Box>

                    <Box
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
                    </Box>
                  </Box>
                </Box>
              </TabPanel>

              <TabPanel padding="0">
                <Box>
                  <Box
                    margin="40px auto 0"
                    display="flex"
                    flexWrap="wrap"
                    gap="20px"
                    justifyContent="center">
                    <Box
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
                    </Box>

                    <Box
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
                    </Box>

                    <Box
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
                    </Box>
                  </Box>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <Box
          maxW="722px"
          margin={{
            base: '0 auto 36px',
            sm: '0 auto 36px',
            md: '0 auto 36px',
            lg: '0 auto 148px',
            xl: '0 auto 148px',
          }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb="28.5px"
            color="#000000"
            flexWrap="wrap">
            <UnorderedList
              listStyleType="none"
              display="flex"
              alignItems="center"
              margin={{
                base: '0',
                sm: '0',
                md: '0',
                lg: '0 36px 0 0',
                xl: '0 36px 0 0',
              }}>
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
              <ListItem fontSize="16" fontWeight="400" lineHeight="18.75px">
                PayPal or any credit card
              </ListItem>
            </UnorderedList>

            <UnorderedList listStyleType="none" display="flex" alignItems="center" margin="0">
              <ListItem marginRight="8px" width="24px" height="24px">
                <Image src="/icons/lock_pricing.svg" width={24} height={24} alt="lock" />
              </ListItem>
              <ListItem fontSize="16" fontWeight="400" lineHeight="18.75px">
                Transactions are encrypted and secured
              </ListItem>
            </UnorderedList>
          </Box>

          <Text
            textAlign="center"
            lineHeight="18.75px"
            fontSize="14px"
            fontWeight="400"
            color="#BABABA">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
            graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
            century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum
            for use in a type specimen book. It usually begins with:
          </Text>
        </Box>

        <Box
          maxW="1200px"
          margin={{
            base: '0 auto 36px',
            sm: '0 auto 36px',
            md: '0 auto 36px',
            lg: '0 auto 148px',
            xl: '0 auto 148px',
          }}>
          <Heading
            as="h2"
            margin="0 0 40px 0"
            lineHeight="38.4px"
            fontWeight="700"
            fontSize="32px"
            color="#222222">
            Frequently Asked Questions
          </Heading>

          <Accordion allowMultiple display="flex" flexDirection="column" gap="16px">
            {Array.from({ length: 4 }, (_, index) => index).map((_, i) => (
              <AccordionItem border="none" key={i} id={i.toString()}>
                {({ isExpanded }) => (
                  <>
                    <Box>
                      <AccordionButton
                        alignItems="flex-start"
                        padding="0"
                        _hover={{ backgroundColor: 'transparent' }}>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="700"
                          lineHeight="21.28px"
                          fontSize={{
                            base: '16px',
                            sm: '16px',
                            md: '16px',
                            lg: '18px',
                            xl: '18px',
                          }}
                          color="#222222">
                          How many children will be there in one batch?
                        </Box>
                        {isExpanded ? <AddIcon fontSize="12px" /> : <PlusIcon fontSize="12px" />}
                      </AccordionButton>
                    </Box>
                    <AccordionPanel
                      padding="0"
                      mt="8px"
                      maxW="1020px"
                      fontSize="16px"
                      lineHeight="22.4px"
                      fontWeight="400"
                      color="#5B5B5B">
                      All our mentors are experienced and accomplished professionals with a passion
                      for teaching. Theyve been working in their respective fields for a minimum of
                      5+ years.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Box>

      <Box
        bg="#1F1646"
        padding={{ base: '0 16px', sm: '0 16px', md: '0 16px', lg: '0 16px', xl: '0' }}>
        <Box
          padding={{
            base: '55px 0 ',
            sm: '55px 0 ',
            md: '55px 0 ',
            lg: '77.5px 0 69.5px',
            xl: '77.5px 0 69.5px',
          }}
          maxW="732px"
          margin=" 0 auto"
          textAlign="center"
          color="#fff">
          <Heading
            margin="0 0 16px 0"
            lineHeight={{
              base: '37.24px ',
              sm: '37.24px ',
              md: '37.24px ',
              lg: '53.64px ',
              xl: '53.64px ',
            }}
            fontWeight="700"
            fontSize={{
              base: '28px ',
              sm: '28px ',
              md: '28px ',
              lg: '44px ',
              xl: '44px ',
            }}
            as="h3">
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
    </>
  );
};

export default Pricing;
