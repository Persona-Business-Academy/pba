import React, { FC } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
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

type Props = {};

const Wishlist: FC<Props> = () => {
  return (
    <Container maxWidth={1198} height={1000} p={{ base: '0 16px', lg: '0' }}>
      <Heading
        m={{ base: '36px 0 0 0', md: '64px 0 0 0' }}
        fontSize={{ base: '28px', md: '44px' }}
        fontStyle="normal"
        lineHeight="normal"
        fontWeight={{ base: 600, md: 700 }}
        color="#000"
        textAlign="center">
        Wishlist
      </Heading>
      <Tabs width="100%" position="relative" variant="unstyled">
        <TabList
          width="343px"
          display="flex"
          justifyContent="center"
          gap="32px"
          m={{ base: '16px auto 36px auto ', md: '40px auto 40px auto' }}>
          <Tab
            color="#5B5B5B"
            fontSize="14px"
            fontStyle="normal"
            lineHeight="20px"
            fontWeight={600}
            p="0 0 8px 0"
            _selected={{ color: '#3CB4E7', borderBottom: '2px solid #3CB4E7' }}>
            Courses
          </Tab>
          <Tab
            color="#5B5B5B"
            fontSize="14px"
            fontStyle="normal"
            lineHeight="20px"
            fontWeight={600}
            p="0 0 8px 0"
            _selected={{ color: '#3CB4E7', borderBottom: '2px solid #3CB4E7' }}>
            Videocourses
          </Tab>
          <Tab
            color="#5B5B5B"
            fontSize="14px"
            fontStyle="normal"
            lineHeight="20px"
            fontWeight={600}
            p="0 0 8px 0"
            _selected={{ color: '#3CB4E7', borderBottom: '2px solid #3CB4E7' }}>
            Blog
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel p="0" maxWidth="895px" margin="0 auto">
            <Flex flexDirection="column" gap={{ base: '16px', md: '40px' }}>
              <Flex
                flexDirection={{ base: 'column', xl: 'row' }}
                justifyContent="center"
                alignItems="center"
                padding="16px"
                gap="15px"
                borderRadius="12px"
                border="1px solid #F3F4F6"
                backgroundColor="#FFFFFF">
                <Box borderRadius="6px" overflow="hidden">
                  <Image
                    src="/images/public_available/offline_courses.jpg"
                    alt="Courses image"
                    width={240}
                    height={139}
                  />
                </Box>

                <Box maxWidth="607px" color="#222222" fontStyle="normal" lineHeight="normal">
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    fontWeight={700}
                    marginBottom="8px">
                    <Text fontSize="24px" fontWeight={700}>
                      Interior design
                    </Text>
                    <Text as="span" fontSize="16px" fontWeight={700}>
                      100$/month
                    </Text>
                  </Flex>
                  <Text
                    fontWeight={400}
                    fontSize="16px"
                    m={{ base: '0 0 8px 0', sm: ' 0 0 16px 0' }}>
                    This professional interior designing course will help you gain practical
                    knowledge on how to create and manage your own design projects right through to
                    running your own interior design business.This professional interior designing
                    course will....
                  </Text>
                  <Flex
                    justifyContent={{ base: 'flex-start', sm: 'space-between' }}
                    flexWrap="wrap"
                    alignItems="flex-end">
                    <Flex
                      maxW="332px"
                      gap="12px"
                      justifyContent={{ base: 'flex-start', sm: 'space-between' }}
                      alignItems="flex-end"
                      flexWrap="wrap">
                      <Flex gap="8px">
                        <Image width={24} height={24} alt="Time icon" src="/icons/time_icon.svg" />
                        <Text>3 month</Text>
                      </Flex>
                      <Flex gap="8px">
                        <Image
                          width={24}
                          height={24}
                          alt="Level icon"
                          src="/icons/level_icon.svg"
                        />
                        <Text>Open level</Text>
                      </Flex>
                      <Flex gap="8px">
                        <Image
                          width={24}
                          height={24}
                          alt="Lessons icon"
                          src="/icons/book_icon.svg"
                        />
                        <Text>50 lessons</Text>
                      </Flex>
                    </Flex>
                    <Flex ml="auto">
                      <Image
                        width={24}
                        height={24}
                        alt="Heart Favorite icon"
                        src="/icons/heart_red.svg"
                      />
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
              <Flex
                flexDirection={{ base: 'column', xl: 'row' }}
                justifyContent="center"
                alignItems="center"
                padding="16px"
                gap="15px"
                borderRadius="12px"
                border="1px solid #F3F4F6"
                backgroundColor="#FFFFFF">
                <Box borderRadius="6px" overflow="hidden">
                  <Image
                    src="/images/public_available/offline_courses.jpg"
                    alt="Courses image"
                    width={240}
                    height={139}
                  />
                </Box>

                <Box maxWidth="607px" color="#222222" fontStyle="normal" lineHeight="normal">
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    fontWeight={700}
                    marginBottom="8px">
                    <Text fontSize="24px" fontWeight={700}>
                      Interior design
                    </Text>
                    <Text as="span" fontSize="16px" fontWeight={700}>
                      100$/month
                    </Text>
                  </Flex>
                  <Text
                    fontWeight={400}
                    fontSize="16px"
                    m={{ base: '0 0 8px 0', sm: ' 0 0 16px 0' }}>
                    This professional interior designing course will help you gain practical
                    knowledge on how to create and manage your own design projects right through to
                    running your own interior design business.This professional interior designing
                    course will....
                  </Text>
                  <Flex
                    justifyContent={{ base: 'flex-start', sm: 'space-between' }}
                    flexWrap="wrap"
                    alignItems="flex-end">
                    <Flex
                      maxW="332px"
                      gap="12px"
                      justifyContent={{ base: 'flex-start', sm: 'space-between' }}
                      alignItems="flex-end"
                      flexWrap="wrap">
                      <Flex gap="8px">
                        <Image width={24} height={24} alt="Time icon" src="/icons/time_icon.svg" />
                        <Text>3 month</Text>
                      </Flex>
                      <Flex gap="8px">
                        <Image
                          width={24}
                          height={24}
                          alt="Level icon"
                          src="/icons/level_icon.svg"
                        />
                        <Text>Open level</Text>
                      </Flex>
                      <Flex gap="8px">
                        <Image
                          width={24}
                          height={24}
                          alt="Lessons icon"
                          src="/icons/book_icon.svg"
                        />
                        <Text>50 lessons</Text>
                      </Flex>
                    </Flex>
                    <Flex ml="auto">
                      <Image
                        width={24}
                        height={24}
                        alt="Heart Favorite icon"
                        src="/icons/heart_red.svg"
                      />
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
              <Flex
                flexDirection={{ base: 'column', xl: 'row' }}
                justifyContent="center"
                alignItems="center"
                padding="16px"
                gap="15px"
                borderRadius="12px"
                border="1px solid #F3F4F6"
                backgroundColor="#FFFFFF">
                <Box borderRadius="6px" overflow="hidden">
                  <Image
                    src="/images/public_available/offline_courses.jpg"
                    alt="Courses image"
                    width={240}
                    height={139}
                  />
                </Box>

                <Box maxWidth="607px" color="#222222" fontStyle="normal" lineHeight="normal">
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    fontWeight={700}
                    marginBottom="8px">
                    <Text fontSize="24px" fontWeight={700}>
                      Interior design
                    </Text>
                    <Text as="span" fontSize="16px" fontWeight={700}>
                      100$/month
                    </Text>
                  </Flex>
                  <Text
                    fontWeight={400}
                    fontSize="16px"
                    m={{ base: '0 0 8px 0', sm: ' 0 0 16px 0' }}>
                    This professional interior designing course will help you gain practical
                    knowledge on how to create and manage your own design projects right through to
                    running your own interior design business.This professional interior designing
                    course will....
                  </Text>
                  <Flex
                    justifyContent={{ base: 'flex-start', sm: 'space-between' }}
                    flexWrap="wrap"
                    alignItems="flex-end">
                    <Flex
                      maxW="332px"
                      gap="12px"
                      justifyContent={{ base: 'flex-start', sm: 'space-between' }}
                      alignItems="flex-end"
                      flexWrap="wrap">
                      <Flex gap="8px">
                        <Image width={24} height={24} alt="Time icon" src="/icons/time_icon.svg" />
                        <Text>3 month</Text>
                      </Flex>
                      <Flex gap="8px">
                        <Image
                          width={24}
                          height={24}
                          alt="Level icon"
                          src="/icons/level_icon.svg"
                        />
                        <Text>Open level</Text>
                      </Flex>
                      <Flex gap="8px">
                        <Image
                          width={24}
                          height={24}
                          alt="Lessons icon"
                          src="/icons/book_icon.svg"
                        />
                        <Text>50 lessons</Text>
                      </Flex>
                    </Flex>
                    <Flex ml="auto">
                      <Image
                        width={24}
                        height={24}
                        alt="Heart Favorite icon"
                        src="/icons/heart_red.svg"
                      />
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </TabPanel>

          <TabPanel p="0" maxWidth="877px" margin="0 auto">
            <Flex flexDirection="column" gap={{ base: '16px', md: '40px' }}>
              <Flex
                flexDirection={{ base: 'column', xl: 'row' }}
                justifyContent="center"
                alignItems="center"
                padding="16px"
                gap="16px"
                borderRadius="12px"
                border="1px solid #F3F4F6"
                backgroundColor="#FFFFFF"
                boxShadow="0px 15px 20px 0px rgba(0, 0, 0, 0.05)">
                <Box
                  borderRadius="6px"
                  overflow="hidden"
                  width="240px"
                  height="180px"
                  position="relative">
                  <Image
                    src="/images/public_available/offline_courses.jpg"
                    alt="Video Courses image"
                    fill
                  />
                </Box>

                <Box maxWidth="583px" color="#000" fontStyle="normal" lineHeight="normal">
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    fontWeight={700}
                    m={{ base: ' 0 0 11px 0', sm: ' 0 0 16px 0' }}>
                    <Text fontSize="16px" fontWeight={700}>
                      Interior design
                    </Text>
                    <Box>
                      <Image
                        width={24}
                        height={24}
                        alt="Heart Favorite icon"
                        src="/icons/heart_red.svg"
                      />
                    </Box>
                  </Flex>
                  <Text fontWeight={400} fontSize="16px" m="0 0 8px 0">
                    This professional interior designing course will help you gain practical
                    knowledge on how to create and manage your own design projects right through to
                    running your own interior design business.This professional interior designing
                    course will....
                  </Text>

                  <Flex gap="16px" m={{ base: '0 0 16px 0', sm: '0 0 8px 0' }}>
                    <Flex gap="8px">
                      <Image width={24} height={24} alt="Eye icon" src="/icons/eye_icon.svg" />
                      <Text as="span" fontSize="16px" fontWeight={700}>
                        120
                      </Text>
                    </Flex>
                    <Flex gap="8px">
                      <Image width={24} height={24} alt="Star icon" src="/icons/star_icon.svg" />
                      <Text as="span" fontSize="16px" fontWeight={700}>
                        4.8
                      </Text>
                    </Flex>
                  </Flex>
                  <Box display="flex" justifyContent={{ base: 'flex-start', sm: 'center' }}>
                    <Button
                      width="162px"
                      p="0"
                      color="#1F1646"
                      backgroundColor="#fff"
                      _hover={{
                        bg: '#fff',
                        color: '#1F1646',
                      }}
                      _active={{
                        bg: '#fff',
                        color: '#1F1646',
                      }}
                      _focus={{
                        bg: '#fff',
                        color: '#1F1646',
                      }}
                      _focusVisible={{
                        bg: '#fff',
                        color: '#1F1646',
                      }}>
                      Get your subscription
                    </Button>
                  </Box>
                </Box>
              </Flex>
              <Flex
                flexDirection={{ base: 'column', xl: 'row' }}
                justifyContent="center"
                alignItems="center"
                padding="16px"
                gap="16px"
                borderRadius="12px"
                border="1px solid #F3F4F6"
                backgroundColor="#FFFFFF"
                boxShadow="0px 15px 20px 0px rgba(0, 0, 0, 0.05)">
                <Box
                  borderRadius="6px"
                  overflow="hidden"
                  width="240px"
                  height="180px"
                  position="relative">
                  <Image
                    src="/images/public_available/offline_courses.jpg"
                    alt="Video Courses image"
                    fill
                  />
                </Box>

                <Box maxWidth="583px" color="#000" fontStyle="normal" lineHeight="normal">
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    fontWeight={700}
                    m={{ base: ' 0 0 11px 0', sm: ' 0 0 16px 0' }}>
                    <Text fontSize="16px" fontWeight={700}>
                      Interior design
                    </Text>
                    <Box>
                      <Image
                        width={24}
                        height={24}
                        alt="Heart Favorite icon"
                        src="/icons/heart_red.svg"
                      />
                    </Box>
                  </Flex>
                  <Text fontWeight={400} fontSize="16px" m="0 0 8px 0">
                    This professional interior designing course will help you gain practical
                    knowledge on how to create and manage your own design projects right through to
                    running your own interior design business.This professional interior designing
                    course will....
                  </Text>

                  <Flex gap="16px" m={{ base: '0 0 16px 0', sm: '0 0 8px 0' }}>
                    <Flex gap="8px">
                      <Image width={24} height={24} alt="Eye icon" src="/icons/eye_icon.svg" />
                      <Text as="span" fontSize="16px" fontWeight={700}>
                        120
                      </Text>
                    </Flex>
                    <Flex gap="8px">
                      <Image width={24} height={24} alt="Star icon" src="/icons/star_icon.svg" />
                      <Text as="span" fontSize="16px" fontWeight={700}>
                        4.8
                      </Text>
                    </Flex>
                  </Flex>
                  <Box display="flex" justifyContent={{ base: 'flex-start', sm: 'center' }}>
                    <Button
                      width="162px"
                      p="0"
                      color="#1F1646"
                      backgroundColor="#fff"
                      _hover={{
                        bg: '#fff',
                        color: '#1F1646',
                      }}
                      _active={{
                        bg: '#fff',
                        color: '#1F1646',
                      }}
                      _focus={{
                        bg: '#fff',
                        color: '#1F1646',
                      }}
                      _focusVisible={{
                        bg: '#fff',
                        color: '#1F1646',
                      }}>
                      Get your subscription
                    </Button>
                  </Box>
                </Box>
              </Flex>
              <Flex
                flexDirection={{ base: 'column', xl: 'row' }}
                justifyContent="center"
                alignItems="center"
                padding="16px"
                gap="16px"
                borderRadius="12px"
                border="1px solid #F3F4F6"
                backgroundColor="#FFFFFF"
                boxShadow="0px 15px 20px 0px rgba(0, 0, 0, 0.05)">
                <Box
                  borderRadius="6px"
                  overflow="hidden"
                  width="240px"
                  height="180px"
                  position="relative">
                  <Image
                    src="/images/public_available/offline_courses.jpg"
                    alt="Video Courses image"
                    fill
                  />
                </Box>
                <Box maxWidth="583px" color="#000" fontStyle="normal" lineHeight="normal">
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    fontWeight={700}
                    m={{ base: ' 0 0 11px 0', sm: ' 0 0 16px 0' }}>
                    <Text fontSize="16px" fontWeight={700}>
                      Interior design
                    </Text>
                    <Box>
                      <Image
                        width={24}
                        height={24}
                        alt="Heart Favorite icon"
                        src="/icons/heart_red.svg"
                      />
                    </Box>
                  </Flex>
                  <Text fontWeight={400} fontSize="16px" m="0 0 8px 0">
                    This professional interior designing course will help you gain practical
                    knowledge on how to create and manage your own design projects right through to
                    running your own interior design business.This professional interior designing
                    course will....
                  </Text>

                  <Flex gap="16px" m={{ base: '0 0 16px 0', sm: '0 0 8px 0' }}>
                    <Flex gap="8px">
                      <Image width={24} height={24} alt="Eye icon" src="/icons/eye_icon.svg" />
                      <Text as="span" fontSize="16px" fontWeight={700}>
                        120
                      </Text>
                    </Flex>
                    <Flex gap="8px">
                      <Image width={24} height={24} alt="Star icon" src="/icons/star_icon.svg" />
                      <Text as="span" fontSize="16px" fontWeight={700}>
                        4.8
                      </Text>
                    </Flex>
                  </Flex>
                  <Box display="flex" justifyContent={{ base: 'flex-start', sm: 'center' }}>
                    <Button
                      width="162px"
                      p="0"
                      color="#1F1646"
                      backgroundColor="#fff"
                      _hover={{
                        bg: '#fff',
                        color: '#1F1646',
                      }}
                      _active={{
                        bg: '#fff',
                        color: '#1F1646',
                      }}
                      _focus={{
                        bg: '#fff',
                        color: '#1F1646',
                      }}
                      _focusVisible={{
                        bg: '#fff',
                        color: '#1F1646',
                      }}>
                      Get your subscription
                    </Button>
                  </Box>
                </Box>
              </Flex>
            </Flex>
          </TabPanel>

          <TabPanel p="0">
            <Flex
              flexDirection={{ base: 'column', xl: 'row' }}
              gap={{ base: '0', sm: '20px' }}
              justifyContent="center"
              alignItems="center">
              <Box maxW="386px" borderRadius="6px" overflow="hidden">
                <Image
                  width={386}
                  height={316}
                  src="/images/public_available/wishlist_blog_img.jpg"
                  alt="Wishlist blog image"
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
                    lineHeight="normal"
                    fontSize="16px"
                    fontWeight={700}
                    mb="8px"
                    color="#222">
                    How to teach in every subject...
                  </ListItem>
                  <ListItem
                    mb="16px"
                    lineHeight="22px"
                    fontSize="16px"
                    fontWeight="400"
                    color="#5B5B5B">
                    Did you know that there are apps already on your iPad that will enable all
                    students to better engage with and develop their literacy skills?
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
                  src="/images/public_available/wishlist_blog_img.jpg"
                  alt="Wishlist blog image"
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
                    lineHeight="normal"
                    fontSize="16px"
                    fontWeight={700}
                    mb="8px"
                    color="#222">
                    How to teach in every subject...
                  </ListItem>
                  <ListItem
                    mb="16px"
                    lineHeight="22px"
                    fontSize="16px"
                    fontWeight="400"
                    color="#5B5B5B">
                    Did you know that there are apps already on your iPad that will enable all
                    students to better engage with and develop their literacy skills?
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
                  src="/images/public_available/wishlist_blog_img.jpg"
                  alt="Wishlist blog image"
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
                    lineHeight="normal"
                    fontSize="16px"
                    fontWeight={700}
                    mb="8px"
                    color="#222">
                    How to teach in every subject...
                  </ListItem>
                  <ListItem
                    mb="16px"
                    lineHeight="22px"
                    fontSize="16px"
                    fontWeight="400"
                    color="#5B5B5B">
                    Did you know that there are apps already on your iPad that will enable all
                    students to better engage with and develop their literacy skills?
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
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Wishlist;
