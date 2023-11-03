'use client';
import React, { FC } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
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
import { Button } from '@/components/atoms';
import { segoe } from '@/constants/fonts';

type Props = {};

const ArticlesPage: FC<Props> = () => {
  return (
    <>
      <Flex
        as="section"
        backgroundColor="#F6FCFF"
        pt={{ base: '36px', md: '80px', xl: '151.95px' }}
        pb={{ base: '36px', md: '80px', xl: '126.26px' }}>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          gap={{ base: '16px', md: '20px' }}
          maxWidth={1200}
          margin="0 auto"
          px={{ base: '16px', xl: '0' }}
          alignItems="center">
          <Box maxW={{ base: '100%', md: '50%' }}>
            <Heading
              mb="16px"
              lineHeight="normal"
              fontStyle="normal"
              color="#222222"
              fontSize={{ base: '28px', sm: '44px' }}
              fontWeight={{ base: 600, xl: 700 }}
              textAlign="center">
              Insights that drive innovation
            </Heading>
            <Text
              fontStyle="normal"
              lineHeight="normal"
              fontSize="16px"
              fontWeight={400}
              color="#747474">
              Lorem ipsum, or  as it is sometimes known, is dummy text used in laying out
              print, graphic or web designs. The passage is attributed to an unknown typesetter in
            </Text>
            <Box>
              <InputGroup
                mt="24px"
                mb="16px"
                width="100%"
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
                  lineHeight="21.28px"
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

              <Box
                ml="auto"
                maxW="459px"
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                border="1px solid #059669"
                borderRadius="6px"
                padding="16px 28px">
                <Image width={24} height={24} src="./icons/check_circle_icon.svg" alt="Image" />
                <Text
                  margin="0 0 0 10px"
                  color="#059669"
                  fontSize="16px"
                  fontWeight="500"
                  lineHeight="24px">
                  Thank you for your message. It has been sent.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            maxW={{ base: '100%', md: '50%' }}
            height={{ base: 'auto', md: '388.7px' }}
            borderRadius="16px"
            overflow="hidden">
            <Image
              width={590}
              height={388.7}
              src="/images/public_available/article_img.jpg"
              alt="Article Image"
            />
          </Box>
        </Flex>
      </Flex>

      <Container maxWidth={1200} margin="0 auto" px={{ base: '16px', xl: '0' }}>
        <Flex flexDirection="column">
          <Heading
            className={segoe.className}
            fontSize="28px"
            fontWeight={700}
            fontStyle="normal"
            lineHeight="normal"
            color="#222222"
            mt={{ base: '36px', lg: '21.74px' }}
            mb="24px"
            textAlign="center">
            Find the right article for you
          </Heading>
          <Tabs>
            <TabList
              display="flex"
              marginBottom="51.26px"
              justifyContent="space-evenly"
              flexWrap="wrap"
              border="none"
              gap="16px">
              <Tab
                lineHeight="21.28px"
                fontSize="16px"
                fontWeight="400"
                border="1px solid"
                borderColor="#E5EEFF"
                borderRadius="50px"
                height="41px"
                padding="10px 32px"
                color="#5B5B5B"
                _selected={{ color: '#222222', bg: '#F6FCFF', borderColor: '#3CB4E7' }}>
                Design
              </Tab>

              <Tab
                lineHeight="21.28px"
                fontSize="16px"
                fontWeight="400"
                border="1px solid"
                borderColor="#E5EEFF"
                borderRadius="50px"
                height="41px"
                padding="10px 32px"
                color="#5B5B5B"
                _selected={{ color: '#222222', bg: '#F6FCFF', borderColor: '#3CB4E7' }}>
                SMM
              </Tab>

              <Tab
                lineHeight="21.28px"
                fontSize="16px"
                fontWeight="400"
                border="1px solid"
                borderColor="#E5EEFF"
                borderRadius="50px"
                height="41px"
                padding="10px 32px"
                color="#5B5B5B"
                _selected={{ color: '#222222', bg: '#F6FCFF', borderColor: '#3CB4E7' }}>
                Marketing
              </Tab>

              <Tab
                lineHeight="21.28px"
                fontSize="16px"
                fontWeight="400"
                border="1px solid"
                borderColor="#E5EEFF"
                borderRadius="50px"
                height="41px"
                padding="10px 32px"
                color="#5B5B5B"
                _selected={{ color: '#222222', bg: '#F6FCFF', borderColor: '#3CB4E7' }}>
                SMM
              </Tab>

              <Tab
                lineHeight="21.28px"
                fontSize="16px"
                fontWeight="400"
                border="1px solid"
                borderColor="#E5EEFF"
                borderRadius="50px"
                height="41px"
                padding="10px 32px"
                color="#5B5B5B"
                _selected={{ color: '#222222', bg: '#F6FCFF', borderColor: '#3CB4E7' }}>
                Marketing
              </Tab>

              <Tab
                lineHeight="21.28px"
                fontSize="16px"
                fontWeight="400"
                border="1px solid"
                borderColor="#E5EEFF"
                borderRadius="50px"
                height="41px"
                padding="10px 32px"
                color="#5B5B5B"
                _selected={{ color: '#222222', bg: '#F6FCFF', borderColor: '#3CB4E7' }}>
                SMM
              </Tab>

              <Tab
                lineHeight="21.28px"
                fontSize="16px"
                fontWeight="400"
                border="1px solid"
                borderColor="#E5EEFF"
                borderRadius="50px"
                height="41px"
                padding="10px 32px"
                color="#5B5B5B"
                _selected={{ color: '#222222', bg: '#F6FCFF', borderColor: '#3CB4E7' }}>
                Marketing
              </Tab>

              <Tab
                lineHeight="21.28px"
                fontSize="16px"
                fontWeight="400"
                border="1px solid"
                borderColor="#E5EEFF"
                borderRadius="50px"
                height="41px"
                padding="10px 32px"
                color="#5B5B5B"
                _selected={{ color: '#222222', bg: '#F6FCFF', borderColor: '#3CB4E7' }}>
                SMM
              </Tab>

              <Tab
                lineHeight="21.28px"
                fontSize="16px"
                fontWeight="400"
                border="1px solid"
                borderColor="#E5EEFF"
                borderRadius="50px"
                height="41px"
                padding="10px 32px"
                color="#5B5B5B"
                _selected={{ color: '#222222', bg: '#F6FCFF', borderColor: '#3CB4E7' }}>
                Marketing
              </Tab>

              <Tab
                lineHeight="21.28px"
                fontSize="16px"
                fontWeight="400"
                border="1px solid"
                borderColor="#E5EEFF"
                borderRadius="50px"
                height="41px"
                padding="10px 32px"
                color="#5B5B5B"
                _selected={{ color: '#222222', bg: '#F6FCFF', borderColor: '#3CB4E7' }}>
                SMM
              </Tab>

              <Tab
                lineHeight="21.28px"
                fontSize="16px"
                fontWeight="400"
                border="1px solid"
                borderColor="#E5EEFF"
                borderRadius="50px"
                height="41px"
                padding="10px 32px"
                color="#5B5B5B"
                _selected={{ color: '#222222', bg: '#F6FCFF', borderColor: '#3CB4E7' }}>
                Marketing
              </Tab>

              <Tab
                lineHeight="21.28px"
                fontSize="16px"
                fontWeight="400"
                border="1px solid"
                borderColor="#E5EEFF"
                borderRadius="50px"
                height="41px"
                padding="10px 32px"
                color="#5B5B5B"
                _selected={{ color: '#222222', bg: '#F6FCFF', borderColor: '#3CB4E7' }}>
                SMM
              </Tab>

              <Tab
                lineHeight="21.28px"
                fontSize="16px"
                fontWeight="400"
                border="1px solid"
                borderColor="#E5EEFF"
                borderRadius="50px"
                height="41px"
                padding="10px 32px"
                color="#5B5B5B"
                _selected={{ color: '#222222', bg: '#F6FCFF', borderColor: '#3CB4E7' }}>
                Marketing
              </Tab>

              <Tab
                lineHeight="21.28px"
                fontSize="16px"
                fontWeight="400"
                border="1px solid"
                borderColor="#E5EEFF"
                borderRadius="50px"
                height="41px"
                padding="10px 32px"
                color="#5B5B5B"
                _selected={{ color: '#222222', bg: '#F6FCFF', borderColor: '#3CB4E7' }}>
                SMM
              </Tab>

              <Tab
                lineHeight="21.28px"
                fontSize="16px"
                fontWeight="400"
                border="1px solid"
                borderColor="#E5EEFF"
                borderRadius="50px"
                height="41px"
                padding="10px 32px"
                color="#5B5B5B"
                _selected={{ color: '#222222', bg: '#F6FCFF', borderColor: '#3CB4E7' }}>
                Marketing
              </Tab>
            </TabList>
            <TabPanels mb={{ base: '36px', md: '80px', xl: '148px' }}>
              <TabPanel padding="0">
                <Box>
                  <Tabs>
                    <TabList padding="0" border="none" display="flex" justifyContent="flex-end">
                      <Tab>All</Tab>
                      <Tab isDisabled>Free</Tab>
                      <Tab isDisabled>Paid</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel padding="0">
                        <Flex
                          flexDirection="column"
                          gap={{ base: '16px', md: '20px' }}
                          mb={{ base: '20px', md: '64px' }}>
                          <Flex
                            flexWrap={{ base: 'wrap', md: 'nowrap' }}
                            gap="20px"
                            justifyContent="center">
                            <Box maxW="386px" borderRadius="6px" overflow="hidden">
                              <Image
                                width={386}
                                height={316}
                                src="/images/public_available/article_image_tab.jpg"
                                alt="Article image"
                              />
                              <UnorderedList
                                boxShadow="lg"
                                color="#222222"
                                borderRadius="6px"
                                bg="#fff"
                                dropShadow="30px 10px 4px #4444dd"
                                listStyleType="none"
                                position="relative"
                                zIndex="2"
                                margin="-51px 17px 13px 17px"
                                padding=" 16px 24px"
                                maxW="351.9px">
                                <ListItem
                                  lineHeight="21.28px"
                                  fontSize="16px"
                                  fontWeight="700"
                                  mb="8px">
                                  How to teach in every subject...
                                </ListItem>
                                <ListItem
                                  mb="16px"
                                  lineHeight="21.28px"
                                  fontSize="16px"
                                  fontWeight="400">
                                  Did you know that there are apps already on your iPad that will
                                  enable all students to better engage with and develop their
                                  literacy skills?
                                </ListItem>
                                <ListItem display="flex" alignItems="center" gap="20px">
                                  <Image
                                    width={24}
                                    height={24}
                                    alt="Heart Favorite icon"
                                    src="/icons/heart_icon_article.svg"
                                  />
                                  Read full article
                                </ListItem>
                              </UnorderedList>
                            </Box>
                            <Box maxW="386px" borderRadius="6px" overflow="hidden">
                              <Image
                                width={386}
                                height={316}
                                src="/images/public_available/article_image_tab.jpg"
                                alt="Article image"
                              />
                              <UnorderedList
                                boxShadow="lg"
                                color="#222222"
                                borderRadius="6px"
                                bg="#fff"
                                dropShadow="30px 10px 4px #4444dd"
                                listStyleType="none"
                                position="relative"
                                zIndex="2"
                                margin="-51px 17px 13px 17px"
                                padding=" 16px 24px"
                                maxW="351.9px">
                                <ListItem
                                  lineHeight="21.28px"
                                  fontSize="16px"
                                  fontWeight="700"
                                  mb="8px">
                                  How to teach in every subject...
                                </ListItem>
                                <ListItem
                                  mb="16px"
                                  lineHeight="21.28px"
                                  fontSize="16px"
                                  fontWeight="400">
                                  Did you know that there are apps already on your iPad that will
                                  enable all students to better engage with and develop their
                                  literacy skills?
                                </ListItem>
                                <ListItem display="flex" alignItems="center" gap="20px">
                                  <Image
                                    width={24}
                                    height={24}
                                    alt="Heart Favorite icon"
                                    src="/icons/heart_icon_article.svg"
                                  />
                                  Read full article
                                </ListItem>
                              </UnorderedList>
                            </Box>
                            <Box maxW="386px" borderRadius="6px" overflow="hidden">
                              <Image
                                width={386}
                                height={316}
                                src="/images/public_available/article_image_tab.jpg"
                                alt="Article image"
                              />
                              <UnorderedList
                                boxShadow="lg"
                                color="#222222"
                                borderRadius="6px"
                                bg="#fff"
                                dropShadow="30px 10px 4px #4444dd"
                                listStyleType="none"
                                position="relative"
                                zIndex="2"
                                margin="-51px 17px 13px 17px"
                                padding=" 16px 24px"
                                maxW="351.9px">
                                <ListItem
                                  lineHeight="21.28px"
                                  fontSize="16px"
                                  fontWeight="700"
                                  mb="8px">
                                  How to teach in every subject...
                                </ListItem>
                                <ListItem
                                  mb="16px"
                                  lineHeight="21.28px"
                                  fontSize="16px"
                                  fontWeight="400">
                                  Did you know that there are apps already on your iPad that will
                                  enable all students to better engage with and develop their
                                  literacy skills?
                                </ListItem>
                                <ListItem display="flex" alignItems="center" gap="20px">
                                  <Image
                                    width={24}
                                    height={24}
                                    alt="Heart Favorite icon"
                                    src="/icons/heart_icon_article.svg"
                                  />
                                  Read full article
                                </ListItem>
                              </UnorderedList>
                            </Box>
                          </Flex>
                          <Flex
                            flexWrap={{ base: 'wrap', md: 'nowrap' }}
                            gap="20px"
                            justifyContent="center">
                            <Box maxW="386px" borderRadius="6px" overflow="hidden">
                              <Image
                                width={386}
                                height={316}
                                src="/images/public_available/article_image_tab.jpg"
                                alt="Article image"
                              />
                              <UnorderedList
                                boxShadow="lg"
                                color="#222222"
                                borderRadius="6px"
                                bg="#fff"
                                dropShadow="30px 10px 4px #4444dd"
                                listStyleType="none"
                                position="relative"
                                zIndex="2"
                                margin="-51px 17px 13px 17px"
                                padding=" 16px 24px"
                                maxW="351.9px">
                                <ListItem
                                  lineHeight="21.28px"
                                  fontSize="16px"
                                  fontWeight="700"
                                  mb="8px">
                                  How to teach in every subject...
                                </ListItem>
                                <ListItem
                                  mb="16px"
                                  lineHeight="21.28px"
                                  fontSize="16px"
                                  fontWeight="400">
                                  Did you know that there are apps already on your iPad that will
                                  enable all students to better engage with and develop their
                                  literacy skills?
                                </ListItem>
                                <ListItem display="flex" alignItems="center" gap="20px">
                                  <Image
                                    width={24}
                                    height={24}
                                    alt="Heart Favorite icon"
                                    src="/icons/heart_icon_article.svg"
                                  />
                                  Read full article
                                </ListItem>
                              </UnorderedList>
                            </Box>
                            <Box maxW="386px" borderRadius="6px" overflow="hidden">
                              <Image
                                width={386}
                                height={316}
                                src="/images/public_available/article_image_tab.jpg"
                                alt="Article image"
                              />
                              <UnorderedList
                                boxShadow="lg"
                                color="#222222"
                                borderRadius="6px"
                                bg="#fff"
                                dropShadow="30px 10px 4px #4444dd"
                                listStyleType="none"
                                position="relative"
                                zIndex="2"
                                margin="-51px 17px 13px 17px"
                                padding=" 16px 24px"
                                maxW="351.9px">
                                <ListItem
                                  lineHeight="21.28px"
                                  fontSize="16px"
                                  fontWeight="700"
                                  mb="8px">
                                  How to teach in every subject...
                                </ListItem>
                                <ListItem
                                  mb="16px"
                                  lineHeight="21.28px"
                                  fontSize="16px"
                                  fontWeight="400">
                                  Did you know that there are apps already on your iPad that will
                                  enable all students to better engage with and develop their
                                  literacy skills?
                                </ListItem>
                                <ListItem display="flex" alignItems="center" gap="20px">
                                  <Image
                                    width={24}
                                    height={24}
                                    alt="Heart Favorite icon"
                                    src="/icons/heart_icon_article.svg"
                                  />
                                  Read full article
                                </ListItem>
                              </UnorderedList>
                            </Box>
                            <Box maxW="386px" borderRadius="6px" overflow="hidden">
                              <Image
                                width={386}
                                height={316}
                                src="/images/public_available/article_image_tab.jpg"
                                alt="Article image"
                              />
                              <UnorderedList
                                boxShadow="lg"
                                color="#222222"
                                borderRadius="6px"
                                bg="#fff"
                                dropShadow="30px 10px 4px #4444dd"
                                listStyleType="none"
                                position="relative"
                                zIndex="2"
                                margin="-51px 17px 13px 17px"
                                padding=" 16px 24px"
                                maxW="351.9px">
                                <ListItem
                                  lineHeight="21.28px"
                                  fontSize="16px"
                                  fontWeight="700"
                                  mb="8px">
                                  How to teach in every subject...
                                </ListItem>
                                <ListItem
                                  mb="16px"
                                  lineHeight="21.28px"
                                  fontSize="16px"
                                  fontWeight="400">
                                  Did you know that there are apps already on your iPad that will
                                  enable all students to better engage with and develop their
                                  literacy skills?
                                </ListItem>
                                <ListItem display="flex" alignItems="center" gap="20px">
                                  <Image
                                    width={24}
                                    height={24}
                                    alt="Heart Favorite icon"
                                    src="/icons/heart_icon_article.svg"
                                  />
                                  Read full article
                                </ListItem>
                              </UnorderedList>
                            </Box>
                          </Flex>
                        </Flex>

                        <Box display="flex" justifyContent="center">
                          <Image
                            src="/icons/article_arrow_left.svg"
                            width={24}
                            height={24}
                            alt="arrow"
                          />

                          <UnorderedList
                            display="flex"
                            alignItems="center"
                            margin="0"
                            listStyleType="none">
                            <ListItem padding="8px 16px">1</ListItem>
                            <ListItem padding="8px 16px">2</ListItem>
                            <ListItem padding="8px 16px">3</ListItem>
                            <ListItem padding="8px 16px">4</ListItem>
                            <ListItem padding="8px 16px">5</ListItem>
                            <ListItem padding="8px 16px">6</ListItem>
                            <ListItem padding="8px 16px">7</ListItem>
                            <ListItem padding="8px 16px">8</ListItem>
                            <ListItem padding="8px 16px">9</ListItem>
                          </UnorderedList>
                          <Image
                            src="/icons/article_arrow_right.svg"
                            width={24}
                            height={24}
                            alt="arrow"
                          />
                        </Box>
                      </TabPanel>
                      <TabPanel>2</TabPanel>
                      <TabPanel>3</TabPanel>
                    </TabPanels>
                  </Tabs>
                </Box>
              </TabPanel>

              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>

        <Flex as="section" flexDirection="column" gap={{ base: '16px', md: '40px' }}>
          <Heading
            className={segoe.className}
            textAlign="center"
            fontSize={{ base: '28px', sm: '32px' }}
            lineHeight="normal"
            fontStyle="normal"
            fontWeight={700}
            color="#222222">
            More Like This
          </Heading>

          <Flex flexDirection="column" rowGap={{ base: '16px', lg: '20px' }}>
            <Flex
              columnGap="20px"
              rowGap={{ base: '16px', lg: '0' }}
              flexWrap={{ base: 'wrap', lg: 'nowrap' }}
              justifyContent="center">
              <Flex
                flexWrap={{ base: 'wrap', md: 'nowrap' }}
                border="1px solid #5B5B5B54"
                borderRadius="8px"
                maxWidth={{ base: '100%', lg: '590px' }}>
                <Box
                  borderRadius="4px 0px 0px 4px"
                  minW={{ base: '100%', md: '240px' }}
                  display="flex"
                  justifyContent="center">
                  <Image
                    src="/images/public_available/article_more_img.jpg"
                    width={240}
                    height={176}
                    alt="Card Image"
                  />
                </Box>

                <UnorderedList padding="16px 20px 16px 20px" listStyleType="none" margin="0">
                  <ListItem
                    mb="8px"
                    color="#222222"
                    lineHeight="21.28px"
                    fontSize="16px"
                    fontWeight="700">
                    9 Figma design system tips
                  </ListItem>
                  <ListItem
                    pb="16px"
                    borderBottom="1px solid #5B5B5B"
                    color="#5B5B5B"
                    lineHeight="21.28px"
                    fontSize="16px"
                    fontWeight="400">
                    Most of these suggestions are ideal for when you're dealing with design systems
                    or huge design files, but they're also...
                  </ListItem>
                  <ListItem
                    display="flex"
                    justifyContent="space-between"
                    mt="16px"
                    color="#5B5B5B"
                    lineHeight="18.62px"
                    fontSize="14px"
                    fontWeight="400">
                    March 01, 2021
                    <span
                      style={{
                        color: '#5B5B5B',
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'center',
                      }}>
                      <Image
                        src="/icons/article_view.svg"
                        width={11.6}
                        height={9.3}
                        alt="Card Image"
                      />
                      111
                    </span>
                  </ListItem>
                </UnorderedList>
              </Flex>
              <Flex
                flexWrap={{ base: 'wrap', md: 'nowrap' }}
                border="1px solid #5B5B5B54"
                borderRadius="8px"
                maxWidth={{ base: '100%', lg: '590px' }}>
                <Box
                  borderRadius="4px 0px 0px 4px"
                  minW={{ base: '100%', md: '240px' }}
                  display="flex"
                  justifyContent="center">
                  <Image
                    src="/images/public_available/article_more_img.jpg"
                    width={240}
                    height={176}
                    alt="Card Image"
                  />
                </Box>

                <UnorderedList padding="16px 20px 16px 20px" listStyleType="none" margin="0">
                  <ListItem
                    mb="8px"
                    color="#222222"
                    lineHeight="21.28px"
                    fontSize="16px"
                    fontWeight="700">
                    9 Figma design system tips
                  </ListItem>
                  <ListItem
                    pb="16px"
                    borderBottom="1px solid #5B5B5B"
                    color="#5B5B5B"
                    lineHeight="21.28px"
                    fontSize="16px"
                    fontWeight="400">
                    Most of these suggestions are ideal for when you're dealing with design systems
                    or huge design files, but they're also...
                  </ListItem>
                  <ListItem
                    display="flex"
                    justifyContent="space-between"
                    mt="16px"
                    color="#5B5B5B"
                    lineHeight="18.62px"
                    fontSize="14px"
                    fontWeight="400">
                    March 01, 2021
                    <span
                      style={{
                        color: '#5B5B5B',
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'center',
                      }}>
                      <Image
                        src="/icons/article_view.svg"
                        width={11.6}
                        height={9.3}
                        alt="Card Image"
                      />
                      111
                    </span>
                  </ListItem>
                </UnorderedList>
              </Flex>
            </Flex>
            <Flex
              columnGap="20px"
              rowGap={{ base: '16px', lg: '0' }}
              flexWrap={{ base: 'wrap', lg: 'nowrap' }}>
              <Flex
                flexWrap={{ base: 'wrap', md: 'nowrap' }}
                border="1px solid #5B5B5B54"
                borderRadius="8px"
                maxWidth={{ base: '100%', lg: '590px' }}>
                <Box
                  borderRadius="4px 0px 0px 4px"
                  minW={{ base: '100%', md: '240px' }}
                  display="flex"
                  justifyContent="center">
                  <Image
                    src="/images/public_available/article_more_img.jpg"
                    width={240}
                    height={176}
                    alt="Card Image"
                  />
                </Box>

                <UnorderedList padding="16px 20px 16px 20px" listStyleType="none" margin="0">
                  <ListItem
                    mb="8px"
                    color="#222222"
                    lineHeight="21.28px"
                    fontSize="16px"
                    fontWeight="700">
                    9 Figma design system tips
                  </ListItem>
                  <ListItem
                    pb="16px"
                    borderBottom="1px solid #5B5B5B"
                    color="#5B5B5B"
                    lineHeight="21.28px"
                    fontSize="16px"
                    fontWeight="400">
                    Most of these suggestions are ideal for when you're dealing with design systems
                    or huge design files, but they're also...
                  </ListItem>
                  <ListItem
                    display="flex"
                    justifyContent="space-between"
                    mt="16px"
                    color="#5B5B5B"
                    lineHeight="18.62px"
                    fontSize="14px"
                    fontWeight="400">
                    March 01, 2021
                    <span
                      style={{
                        color: '#5B5B5B',
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'center',
                      }}>
                      <Image
                        src="/icons/article_view.svg"
                        width={11.6}
                        height={9.3}
                        alt="Card Image"
                      />
                      111
                    </span>
                  </ListItem>
                </UnorderedList>
              </Flex>
              <Flex
                flexWrap={{ base: 'wrap', md: 'nowrap' }}
                border="1px solid #5B5B5B54"
                borderRadius="8px"
                maxWidth={{ base: '100%', lg: '590px' }}>
                <Box
                  borderRadius="4px 0px 0px 4px"
                  minW={{ base: '100%', md: '240px' }}
                  display="flex"
                  justifyContent="center">
                  <Image
                    src="/images/public_available/article_more_img.jpg"
                    width={240}
                    height={176}
                    alt="Card Image"
                  />
                </Box>

                <UnorderedList padding="16px 20px 16px 20px" listStyleType="none" margin="0">
                  <ListItem
                    mb="8px"
                    color="#222222"
                    lineHeight="21.28px"
                    fontSize="16px"
                    fontWeight="700">
                    9 Figma design system tips
                  </ListItem>
                  <ListItem
                    pb="16px"
                    borderBottom="1px solid #5B5B5B"
                    color="#5B5B5B"
                    lineHeight="21.28px"
                    fontSize="16px"
                    fontWeight="400">
                    Most of these suggestions are ideal for when you're dealing with design systems
                    or huge design files, but they're also...
                  </ListItem>
                  <ListItem
                    display="flex"
                    justifyContent="space-between"
                    mt="16px"
                    color="#5B5B5B"
                    lineHeight="18.62px"
                    fontSize="14px"
                    fontWeight="400">
                    March 01, 2021
                    <span
                      style={{
                        color: '#5B5B5B',
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'center',
                      }}>
                      <Image
                        src="/icons/article_view.svg"
                        width={11.6}
                        height={9.3}
                        alt="Card Image"
                      />
                      111
                    </span>
                  </ListItem>
                </UnorderedList>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          flexDirection="column"
          maxW="506px"
          margin="0 auto"
          my={{ base: '36px', md: '80px', xl: '148px' }}>
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

export default ArticlesPage;
