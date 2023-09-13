'use client';
import {
  Box,
  Container,
  Grid,
  GridItem,
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
import { Button } from '@/components/atom';

const page = () => {
  return (
    <Box mt="151px">
      <Container maxW="1202px" margin="0 auto">
        <div>
          <Grid templateColumns="repeat(1, 1fr)" gap={4}>
            <GridItem mb="148px">
              <Box display="flex" gap="20px" alignItems="center">
                <Box maxW="590px">
                  <Heading
                    as="h2"
                    margin="0 0 16px 0"
                    lineHeight="53.64px"
                    color="#222222"
                    fontSize="44px"
                    fontWeight="700"
                    textAlign="center">
                    Insights that drive innovation
                  </Heading>
                  <Text lineHeight="24px" fontSize="16px" fontWeight="400" color="#747474">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying
                    out print, graphic or web designs. The passage is attributed to an unknown
                    typesetter in
                  </Text>
                  <Box>
                    <InputGroup
                      bg="#fff"
                      width="100%"
                      height="46px"
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      border="1px solid"
                      padding="4px 4px 4px 16px"
                      borderRadius="50px"
                      outline="none"
                      borderColor="#DEDEDE">
                      <Input
                        height="100%"
                        width="440px"
                        borderRadius="50px"
                        border="none"
                        outline="none"
                        _focusVisible={{ border: 'none' }}
                        lineHeight="21.28px"
                        fontSize="16px"
                        fontWeight="400"
                        mr="10px"
                        placeholder="Your Email"
                        _placeholder={{ color: '#DEDEDE' }}
                      />

                      <Button
                        borderRadius="50px"
                        height="38px"
                        width="117px"
                        lineHeight="14px"
                        fontSize="14px"
                        fontWeight="600"
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
                        }}>
                        Subscribe
                      </Button>
                    </InputGroup>

                    <Box
                      marginTop="16px"
                      ml="auto"
                      width="459px"
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-end"
                      border="1px solid"
                      borderColor="#059669"
                      borderRadius="6px"
                      padding="16px 28px">
                      <Image
                        width={24}
                        height={24}
                        src="./icons/check_circle_icon.svg"
                        alt="Image"
                      />
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
                <Box width="590px" height="388.7px">
                  <Image
                    width={590}
                    height={388.7}
                    src="/images/public_available/article_img.jpg"
                    alt="Aricle Image"
                  />
                </Box>
              </Box>
            </GridItem>

            <GridItem>
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
                <TabPanels mb="64px">
                  <TabPanel padding="0">
                    <div>
                      <Box>
                        <Tabs>
                          <TabList
                            padding="0"
                            border="none"
                            display="flex"
                            justifyContent="flex-end">
                            <Tab>All</Tab>
                            <Tab isDisabled>Free</Tab>
                            <Tab isDisabled>Paid</Tab>
                          </TabList>
                          <TabPanels>
                            <TabPanel padding="0">
                              <div
                                style={{
                                  display: 'flex',
                                  flexWrap: 'wrap',
                                  gap: '20px',
                                  marginBottom: '64px',
                                }}>
                                <Box maxW="386px">
                                  <Image
                                    width={386}
                                    height={340}
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
                                    margin="-51px auto 0 "
                                    padding="24px"
                                    maxW="351.9px">
                                    <ListItem
                                      lineHeight="21.28px"
                                      fontSize="16px"
                                      fontWeight="700"
                                      margin="20px 0 8px 0">
                                      How to teach in every subject...
                                    </ListItem>
                                    <ListItem
                                      mb="16px"
                                      lineHeight="21.28px"
                                      fontSize="16px"
                                      fontWeight="400">
                                      Did you know that there are apps already on your iPad that
                                      will enable all students to better engage with and develop
                                      their literacy skills?
                                    </ListItem>
                                    <ListItem
                                      marginBottom="20px"
                                      display="flex"
                                      alignItems="center"
                                      gap="20px">
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
                                <Box maxW="386px">
                                  <Image
                                    width={386}
                                    height={340}
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
                                    margin="-51px auto 0 "
                                    padding="24px"
                                    maxW="351.9px">
                                    <ListItem
                                      lineHeight="21.28px"
                                      fontSize="16px"
                                      fontWeight="700"
                                      margin="20px 0 8px 0">
                                      How to teach in every subject...
                                    </ListItem>
                                    <ListItem
                                      mb="16px"
                                      lineHeight="21.28px"
                                      fontSize="16px"
                                      fontWeight="400">
                                      Did you know that there are apps already on your iPad that
                                      will enable all students to better engage with and develop
                                      their literacy skills?
                                    </ListItem>
                                    <ListItem
                                      marginBottom="20px"
                                      display="flex"
                                      alignItems="center"
                                      gap="20px">
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
                                <Box maxW="386px">
                                  <Image
                                    width={386}
                                    height={340}
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
                                    margin="-51px auto 0 "
                                    padding="24px"
                                    maxW="351.9px">
                                    <ListItem
                                      lineHeight="21.28px"
                                      fontSize="16px"
                                      fontWeight="700"
                                      margin="20px 0 8px 0">
                                      How to teach in every subject...
                                    </ListItem>
                                    <ListItem
                                      mb="16px"
                                      lineHeight="21.28px"
                                      fontSize="16px"
                                      fontWeight="400">
                                      Did you know that there are apps already on your iPad that
                                      will enable all students to better engage with and develop
                                      their literacy skills?
                                    </ListItem>
                                    <ListItem
                                      marginBottom="20px"
                                      display="flex"
                                      alignItems="center"
                                      gap="20px">
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
                                <Box maxW="386px">
                                  <Image
                                    width={386}
                                    height={340}
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
                                    margin="-51px auto 0 "
                                    padding="24px"
                                    maxW="351.9px">
                                    <ListItem
                                      lineHeight="21.28px"
                                      fontSize="16px"
                                      fontWeight="700"
                                      margin="20px 0 8px 0">
                                      How to teach in every subject...
                                    </ListItem>
                                    <ListItem
                                      mb="16px"
                                      lineHeight="21.28px"
                                      fontSize="16px"
                                      fontWeight="400">
                                      Did you know that there are apps already on your iPad that
                                      will enable all students to better engage with and develop
                                      their literacy skills?
                                    </ListItem>
                                    <ListItem
                                      marginBottom="20px"
                                      display="flex"
                                      alignItems="center"
                                      gap="20px">
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
                                <Box maxW="386px">
                                  <Image
                                    width={386}
                                    height={340}
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
                                    margin="-51px auto 0 "
                                    padding="24px"
                                    maxW="351.9px">
                                    <ListItem
                                      lineHeight="21.28px"
                                      fontSize="16px"
                                      fontWeight="700"
                                      margin="20px 0 8px 0">
                                      How to teach in every subject...
                                    </ListItem>
                                    <ListItem
                                      mb="16px"
                                      lineHeight="21.28px"
                                      fontSize="16px"
                                      fontWeight="400">
                                      Did you know that there are apps already on your iPad that
                                      will enable all students to better engage with and develop
                                      their literacy skills?
                                    </ListItem>
                                    <ListItem
                                      marginBottom="20px"
                                      display="flex"
                                      alignItems="center"
                                      gap="20px">
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
                                <Box maxW="386px">
                                  <Image
                                    width={386}
                                    height={340}
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
                                    margin="-51px auto 0 "
                                    padding="24px"
                                    maxW="351.9px">
                                    <ListItem
                                      lineHeight="21.28px"
                                      fontSize="16px"
                                      fontWeight="700"
                                      margin="20px 0 8px 0">
                                      How to teach in every subject...
                                    </ListItem>
                                    <ListItem
                                      mb="16px"
                                      lineHeight="21.28px"
                                      fontSize="16px"
                                      fontWeight="400">
                                      Did you know that there are apps already on your iPad that
                                      will enable all students to better engage with and develop
                                      their literacy skills?
                                    </ListItem>
                                    <ListItem
                                      marginBottom="20px"
                                      display="flex"
                                      alignItems="center"
                                      gap="20px">
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
                              </div>

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
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </GridItem>

            <GridItem>
              <Box>
                <Heading
                  as="h2"
                  margin="0 0 40px 0"
                  textAlign="center"
                  fontSize="32px"
                  lineHeight="42.56px"
                  fontWeight="700">
                  More Like This
                </Heading>

                <Box display="flex" flexWrap="wrap" gap=" 18px">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      border: '1px solid #5B5B5B54',
                      borderRadius: '8px',
                      maxWidth: '590px',
                    }}>
                    <Image
                      src="/images/public_available/article_more_img.jpg"
                      width={240}
                      height={176}
                      alt="Card Image"
                      style={{ borderRadius: '8px' }}
                    />

                    <UnorderedList padding="16px 20px" listStyleType="none" margin="0">
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
                        Most of these suggestions are ideal for when you’re dealing with design
                        systems or huge design files, but they’re also...
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
                  </div>
                  <div
                    style={{
                      border: '1px solid #5b5b5b54',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      maxWidth: '590px',
                      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    }}>
                    <Image
                      src="/images/public_available/article_more_img.jpg"
                      width={240}
                      height={176}
                      alt="Card Image"
                      style={{ borderRadius: '8px' }}
                    />

                    <UnorderedList padding="16px 20px" listStyleType="none" margin="0">
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
                        Most of these suggestions are ideal for when you’re dealing with design
                        systems or huge design files, but they’re also...
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
                  </div>
                  <div
                    style={{
                      border: '1px solid #5b5b5b54',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      maxWidth: '590px',
                      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    }}>
                    <Image
                      src="/images/public_available/article_more_img.jpg"
                      width={240}
                      height={176}
                      alt="Card Image"
                      style={{ borderRadius: '8px' }}
                    />

                    <UnorderedList padding="16px 20px" listStyleType="none" margin="0">
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
                        Most of these suggestions are ideal for when you’re dealing with design
                        systems or huge design files, but they’re also...
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
                  </div>
                  <div
                    style={{
                      border: '1px solid #5b5b5b54',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      maxWidth: '590px',
                    }}>
                    <Image
                      src="/images/public_available/article_more_img.jpg"
                      width={240}
                      height={176}
                      alt="Card Image"
                      style={{ borderRadius: '8px' }}
                    />

                    <UnorderedList padding="16px 20px" listStyleType="none" margin="0">
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
                        Most of these suggestions are ideal for when you’re dealing with design
                        systems or huge design files, but they’re also...
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
                  </div>
                </Box>
              </Box>
            </GridItem>

            <GridItem maxW="506px" margin="148px  auto">
              <div
                style={{
                  margin: '0 0 32px 0',
                  fontSize: '32px',
                  lineHeight: '42.56px',
                  fontWeight: '700',
                  textAlign: 'center',
                }}>
                <h2>Subscribe to get our Newsletter</h2>
              </div>
              <InputGroup
                bg="#fff"
                width="100%"
                height="46px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                border="1px solid"
                padding="4px 4px 4px 16px"
                borderRadius="50px"
                outline="none"
                borderColor="#DEDEDE">
                <Input
                  height="100%"
                  width="440px"
                  borderRadius="50px"
                  border="none"
                  outline="none"
                  _focusVisible={{ border: 'none' }}
                  lineHeight="21.28px"
                  fontSize="16px"
                  fontWeight="400"
                  mr="10px"
                  placeholder="Your Email"
                  _placeholder={{ color: '#DEDEDE' }}
                />

                <Button
                  borderRadius="50px"
                  height="38px"
                  width="117px"
                  lineHeight="14px"
                  fontSize="14px"
                  fontWeight="600"
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
                  }}>
                  Subscribe
                </Button>
              </InputGroup>
            </GridItem>
          </Grid>
        </div>
      </Container>
    </Box>
  );
};

export default page;
