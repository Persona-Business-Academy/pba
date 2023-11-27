import React, { FC } from 'react';
import {
  Box,
  Flex,
  Heading,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  UnorderedList,
} from '@chakra-ui/react';
import Image from 'next/image';
import { segoe } from '@/utils/constants/fonts';

type FindArticlesSectionProps = {};

const FindArticlesSection: FC<FindArticlesSectionProps> = () => {
  return (
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
                            padding=" 24px"
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
                              Did you know that there are apps already on your iPad that will enable
                              all students to better engage with and develop their literacy skills?
                            </ListItem>
                            <ListItem
                              display="flex"
                              alignItems="center"
                              gap="20px"
                              textDecoration="underline">
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
                            padding="24px"
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
                              Did you know that there are apps already on your iPad that will enable
                              all students to better engage with and develop their literacy skills?
                            </ListItem>
                            <ListItem
                              display="flex"
                              alignItems="center"
                              gap="20px"
                              textDecoration="underline">
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
                            padding="24px"
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
                              Did you know that there are apps already on your iPad that will enable
                              all students to better engage with and develop their literacy skills?
                            </ListItem>
                            <ListItem
                              display="flex"
                              alignItems="center"
                              gap="20px"
                              textDecoration="underline">
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
                            padding=" 24px"
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
                              Did you know that there are apps already on your iPad that will enable
                              all students to better engage with and develop their literacy skills?
                            </ListItem>
                            <ListItem
                              display="flex"
                              alignItems="center"
                              gap="20px"
                              textDecoration="underline">
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
                            padding=" 24px"
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
                              Did you know that there are apps already on your iPad that will enable
                              all students to better engage with and develop their literacy skills?
                            </ListItem>
                            <ListItem
                              display="flex"
                              alignItems="center"
                              gap="20px"
                              textDecoration="underline">
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
                            padding="24px"
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
                              Did you know that there are apps already on your iPad that will enable
                              all students to better engage with and develop their literacy skills?
                            </ListItem>
                            <ListItem
                              display="flex"
                              alignItems="center"
                              gap="20px"
                              textDecoration="underline">
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
  );
};

export default FindArticlesSection;
