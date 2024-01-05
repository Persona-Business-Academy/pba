'use client';
import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  FormControl,
  Heading,
  Input,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
  UnorderedList,
} from '@chakra-ui/react';
import Image from 'next/image';
import { Button, FormInput, PhoneNumberInput } from '@/components/atoms';
import Checkbox from '@/components/atoms/Checkbox';

const OnlineVideoCourse = () => {
  return (
    <>
      <Flex maxW="1920px" margin="0 auto">
        <Box width="442px" display={{ base: 'none', '2xl': 'block' }}>
          <Box pt="40px">
            <Box>
              <Heading
                textAlign="center"
                as="h4"
                margin="0"
                lineHeight="31.92px"
                fontSize="24px"
                fontWeight={700}>
                Beginner
              </Heading>
            </Box>
            <Accordion allowMultiple>
              <AccordionItem border="none">
                <h2>
                  <AccordionButton padding="8px 16px" _hover={{ background: 'transparent' }}>
                    <Box
                      as="span"
                      flex="1"
                      gap="10px"
                      textAlign="left"
                      fontSize="16px"
                      display="flex"
                      alignItems="center">
                      <Image
                        src="/images/public_available/beginner_img_first.jpg"
                        width={52}
                        height={52}
                        alt="Course IMG"
                      />
                      Introduction
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  display="flex"
                  gap="8px"
                  padding="16px"
                  alignItems="flex-start"
                  bg="#F9FAFB"
                  lineHeight="22px"
                  fontSize="16px"
                  fontWeight="400">
                  <Image src="icons/lock_icon.svg" width={16} height={20} alt="Icon Lesson" />
                  <Text as="span"> Lesson 01 : The biggest difference in Figma versus...</Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border="none">
                <h2>
                  <AccordionButton padding="8px 16px" _hover={{ background: 'transparent' }}>
                    <Box
                      as="span"
                      flex="1"
                      gap="10px"
                      textAlign="left"
                      fontSize="16px"
                      display="flex"
                      alignItems="center">
                      <Image
                        src="/images/public_available/beginner_img_first.jpg"
                        width={52}
                        height={52}
                        alt="Course IMG"
                      />
                      Discover the most importan things about Figma
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  display="flex"
                  gap="8px"
                  padding="16px"
                  alignItems="flex-start"
                  bg="#F9FAFB"
                  lineHeight="22px"
                  fontSize="16px"
                  fontWeight="400">
                  <Image src="icons/lock_icon.svg" width={16} height={20} alt="Icon Lesson" />
                  <Text as="span"> Lesson 01 : The biggest difference in Figma versus...</Text>
                </AccordionPanel>
                <AccordionPanel
                  display="flex"
                  gap="8px"
                  padding="16px"
                  alignItems="flex-start"
                  bg="#F9FAFB"
                  lineHeight="22px"
                  fontSize="16px"
                  fontWeight="400">
                  <Image src="icons/lock_icon.svg" width={16} height={20} alt="Icon Lesson" />
                  <Text as="span"> Lesson 02 : The biggest difference in Figma versus...</Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border="none">
                <h2>
                  <AccordionButton padding="8px 16px" _hover={{ background: 'transparent' }}>
                    <Box
                      as="span"
                      flex="1"
                      gap="10px"
                      fontSize="16px"
                      textAlign="left"
                      display="flex"
                      alignItems="center">
                      <Image
                        src="/images/public_available/beginner_img_first.jpg"
                        width={52}
                        height={52}
                        alt="Course IMG"
                      />
                      Introduction to Advanced Layers and Shapes
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  display="flex"
                  gap="8px"
                  padding="16px"
                  alignItems="flex-start"
                  bg="#F9FAFB"
                  lineHeight="22px"
                  fontSize="16px"
                  fontWeight="400">
                  <Image src="icons/lock_icon.svg" width={16} height={20} alt="Icon Lesson" />
                  <Text as="span"> Lesson 01 : The biggest difference in Figma versus...</Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>

        <Box width="1500px" bg="#E9E8ED">
          <Box
            mb="20px"
            backgroundImage="/images/public_available/video_courses_bg.jpg"
            maxWidth="100%"
            backgroundPosition="center"
            height="500px"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"></Box>

          <Box>
            <Tabs maxWidth="100%">
              <TabList
                width={{ base: '370px', lg: '817px' }}
                overflowX={{ base: 'scroll', md: 'auto' }}
                border="none"
                margin="0 auto"
                fontSize="16px"
                color="#222222"
                lineHeight="22px"
                fontWeight={400}
                gap={{ base: '16px', md: '60px' }}
                alignItems="center">
                <Tab
                  fontSize="16px"
                  color="#222222"
                  lineHeight="22px"
                  fontWeight={400}
                  padding="0"
                  display="flex"
                  gap="8px"
                  alignItems="center">
                  <Box
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="center"
                    width="24px"
                    height="24px">
                    <Image
                      src="/icons/overview_courses.svg"
                      alt="Tabs icon"
                      width={24}
                      height={20}
                    />
                  </Box>
                  <Text as="span">Overview</Text>
                </Tab>

                <Tab
                  fontSize="16px"
                  color="#222222"
                  lineHeight="22px"
                  fontWeight={400}
                  gap="8px"
                  padding="0"
                  alignItems="center">
                  <Box
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="center"
                    width="24px"
                    height="24px">
                    <Image
                      src="/icons/homework_courses.svg"
                      alt="Tabs icon"
                      width={24}
                      height={20}
                    />
                  </Box>
                  <Text as="span">Homework</Text>
                </Tab>

                <Tab
                  fontSize="16px"
                  color="#222222"
                  lineHeight="22px"
                  fontWeight={400}
                  gap="8px"
                  padding="0"
                  alignItems="center">
                  <Box
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="center"
                    width="24px"
                    height="24px">
                    <Image
                      src="/icons/notebook_courses.svg"
                      alt="Tabs icon"
                      width={24}
                      height={20}
                    />
                  </Box>
                  <Text as="span">Notebook</Text>
                </Tab>

                <Tab
                  fontSize="16px"
                  color="#222222"
                  lineHeight="22px"
                  fontWeight={400}
                  gap="8px"
                  padding="0"
                  alignItems="center">
                  <Box
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="center"
                    width="24px"
                    height="24px">
                    <Image
                      src="/icons/transcript_courses.svg"
                      alt="Tabs icon"
                      width={24}
                      height={20}
                    />
                  </Box>
                  <Text as="span">Transcript</Text>
                </Tab>

                <Tab
                  fontSize="16px"
                  color="#222222"
                  lineHeight="22px"
                  fontWeight={400}
                  gap="8px"
                  padding="0"
                  alignItems="center">
                  <Box
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="center"
                    width="24px"
                    height="24px">
                    <Image
                      src="/icons/meet_teacher_courses.svg"
                      alt="Tabs icon"
                      width={24}
                      height={20}
                    />
                  </Box>
                  <Text as="span">Meet with teacher</Text>
                </Tab>
              </TabList>

              <TabPanels color="#222222">
                <TabPanel
                  mt="64px"
                  mb={{ base: '30px', xl: '174px' }}
                  padding={{ base: '0 20px', lg: '0' }}>
                  <Box maxW="779px" margin={{ base: '0 auto 36px', lg: '0 auto 64px' }}>
                    <Box mb={{ base: '16px', lg: '40px' }} textAlign="center">
                      <Heading as="h4" margin="0">
                        Graphic Design
                      </Heading>
                    </Box>
                    <Box
                      display="flex"
                      gap={{ base: '40px', lg: '96px' }}
                      justifyContent="center"
                      flexWrap="wrap">
                      <Box textAlign="center" color="#222222" fontSize="16px" lineHeight="21.28px">
                        <Box display="flex" justifyContent="center">
                          <Image
                            src="/images/public_available/course_level.png"
                            width={63.5}
                            height={63.5}
                            alt="Graphic Design Icon"
                          />
                        </Box>
                        <Text fontWeight="400" as="p" margin="0 0 8px 0">
                          Course Level
                        </Text>
                        <Text as="p" margin="0" fontWeight="700">
                          Beginner
                        </Text>
                      </Box>

                      <Box textAlign="center" color="#222222" fontSize="16px" lineHeight="21.28px">
                        <Box display="flex" justifyContent="center">
                          <Image
                            src="/images/public_available/course_timerange.png"
                            width={63.5}
                            height={63.5}
                            alt="Graphic Design Icon"
                          />
                        </Box>
                        <Text fontWeight="400" as="p" margin="0 0 8px 0">
                          Course Timerange
                        </Text>
                        <Text as="p" margin="0" fontWeight="700">
                          56 hours
                        </Text>
                      </Box>

                      <Box textAlign="center" color="#222222" fontSize="16px" lineHeight="21.28px">
                        <Box display="flex" justifyContent="center">
                          <Image
                            src="/images/public_available/course_released.png"
                            width={63.5}
                            height={63.5}
                            alt="Graphic Design Icon"
                          />
                        </Box>
                        <Text fontWeight="400" as="p" margin="0 0 8px 0">
                          Course Released
                        </Text>
                        <Text as="p" margin="0" fontWeight="700">
                          01/15/2023
                        </Text>
                      </Box>

                      <Box textAlign="center" color="#222222" fontSize="16px" lineHeight="21.28px">
                        <Box display="flex" justifyContent="center">
                          <Image
                            src="/images/public_available/course_teachers.png"
                            width={63.5}
                            height={63.5}
                            alt="Graphic Design Icon"
                          />
                        </Box>
                        <Text fontWeight="400" as="p" margin="0 0 8px 0">
                          Course teachers
                        </Text>
                        <Text as="p" margin="0" fontWeight="700">
                          Tigran Manukyan <br />
                          Tigran Harutyunyan
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box padding="0" maxW="997px" margin="0 auto" color="#222222">
                    <Box mb={{ base: '16px', lg: '40px' }} textAlign="center">
                      <Heading
                        as="h4"
                        margin="0"
                        fontSize="24px"
                        fontWeight="700"
                        lineHeight="31.92px">
                        Course content
                      </Heading>
                    </Box>

                    <UnorderedList
                      margin={{ base: '0 0 36px 0', lg: '0 0 64px 0' }}
                      fontSize="16px"
                      fontWeight={400}
                      lineHeight="22px">
                      <ListItem
                        bg="white"
                        padding={{ base: '16px', lg: '16px 32px' }}
                        display="flex"
                        alignItems="center">
                        <Image src="/icons/book_icon.svg" alt="Book icon" width={16} height={16} />
                        <Text margin="0 0 0 8px">Introduction</Text>
                        <Text margin="0 0 0 auto">05:00</Text>
                      </ListItem>

                      <ListItem
                        bg="white"
                        padding={{ base: '16px', lg: '16px 32px' }}
                        display="flex"
                        alignItems="center">
                        <Image src="/icons/book_icon.svg" alt="Book icon" width={16} height={16} />
                        <Text margin="0 0 0 8px">Heres how you create buttons in figma</Text>
                        <Text margin="0 0 0 auto">10:25</Text>
                      </ListItem>

                      <ListItem
                        bg="white"
                        padding={{ base: '16px', lg: '16px 32px' }}
                        display="flex"
                        alignItems="center">
                        <Image src="/icons/book_icon.svg" alt="Book icon" width={16} height={16} />
                        <Text margin="0 0 0 8px">Heres how you create buttons in figma</Text>
                        <Text margin="0 0 0 auto">10:25</Text>
                      </ListItem>

                      <ListItem
                        bg="white"
                        padding={{ base: '16px', lg: '16px 32px' }}
                        display="flex"
                        alignItems="center">
                        <Image src="/icons/book_icon.svg" alt="Book icon" width={16} height={16} />
                        <Text margin="0 0 0 8px">Heres how you create buttons in figma</Text>
                        <Text margin="0 0 0 auto">25:24</Text>
                      </ListItem>
                    </UnorderedList>

                    <Box mb={{ base: '36px', lg: '64px' }}>
                      <Box textAlign="center" mb={{ base: '16px', lg: '20px' }}>
                        <Heading
                          as="h4"
                          margin="0"
                          fontSize="24px"
                          fontWeight="700"
                          lineHeight="31.92px">
                          Course details
                        </Heading>
                      </Box>

                      <Text as="span" fontSize="16px" fontWeight={400}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est .
                      </Text>
                    </Box>

                    <Flex flexDirection="column" gap="20px" mb={{ base: '20px', md: '40px' }}>
                      <Box
                        bg="white"
                        padding={{ base: '16px 16px', lg: '16px 32px' }}
                        borderRadius="6px">
                        <Box
                          mb="12px"
                          display="flex"
                          flexWrap="wrap"
                          gap={{ base: '12px', sm: '0' }}>
                          <Box mr="16px">
                            <Image
                              src="/images/public_available/feedback_courses.png"
                              width={40}
                              height={40}
                              alt="User Icon"
                            />
                          </Box>

                          <Flex flexDirection="column" mr={{ base: '0', sm: 'auto' }}>
                            <Text
                              mb="8px"
                              fontWeight={700}
                              fontSize="16px"
                              lineHeight="21.28px"
                              as="span">
                              Anna Sargsyan
                            </Text>
                            <Text lineHeight="18.62px" fontSize="14px" fontWeight={400} as="span">
                              18 december
                            </Text>
                          </Flex>

                          <Flex height="24px">
                            <Image src="/icons/hollow_star.svg" width={24} height={24} alt="star" />
                            <Image src="/icons/hollow_star.svg" width={24} height={24} alt="star" />
                            <Image src="/icons/hollow_star.svg" width={24} height={24} alt="star" />
                            <Image src="/icons/hollow_star.svg" width={24} height={24} alt="star" />
                            <Image src="/icons/hollow_star.svg" width={24} height={24} alt="star" />
                          </Flex>
                        </Box>

                        <Box lineHeight="22px" fontWeight={400} fontSize="16px">
                          <Text as="p" margin="0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.{' '}
                          </Text>
                        </Box>
                      </Box>

                      <Box
                        bg="white"
                        padding={{ base: '16px 16px', lg: '16px 32px' }}
                        borderRadius="6px">
                        <Box
                          mb="12px"
                          display="flex"
                          flexWrap="wrap"
                          gap={{ base: '12px', sm: '0' }}>
                          <Box mr="16px">
                            <Image
                              src="/images/public_available/feedback_courses.png"
                              width={40}
                              height={40}
                              alt="User Icon"
                            />
                          </Box>

                          <Flex flexDirection="column" mr={{ base: '0', sm: 'auto' }}>
                            <Text
                              mb="8px"
                              fontWeight={700}
                              fontSize="16px"
                              lineHeight="21.28px"
                              as="span">
                              Anna Sargsyan
                            </Text>
                            <Text lineHeight="18.62px" fontSize="14px" fontWeight={400} as="span">
                              18 december
                            </Text>
                          </Flex>

                          <Flex height="24px">
                            <Image src="/icons/hollow_star.svg" width={24} height={24} alt="star" />
                            <Image src="/icons/hollow_star.svg" width={24} height={24} alt="star" />
                            <Image src="/icons/hollow_star.svg" width={24} height={24} alt="star" />
                            <Image src="/icons/hollow_star.svg" width={24} height={24} alt="star" />
                            <Image src="/icons/hollow_star.svg" width={24} height={24} alt="star" />
                          </Flex>
                        </Box>

                        <Box lineHeight="22px" fontWeight={400} fontSize="16px">
                          <Text as="p" margin="0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.{' '}
                          </Text>
                        </Box>
                      </Box>

                      <Box
                        bg="white"
                        padding={{ base: '16px 16px', lg: '16px 32px' }}
                        borderRadius="6px">
                        <Box
                          mb="12px"
                          display="flex"
                          flexWrap="wrap"
                          gap={{ base: '12px', sm: '0' }}>
                          <Box mr="16px">
                            <Image
                              src="/images/public_available/feedback_courses.png"
                              width={40}
                              height={40}
                              alt="User Icon"
                            />
                          </Box>

                          <Flex flexDirection="column" mr={{ base: '0', sm: 'auto' }}>
                            <Text
                              mb="8px"
                              fontWeight={700}
                              fontSize="16px"
                              lineHeight="21.28px"
                              as="span">
                              Anna Sargsyan
                            </Text>
                            <Text lineHeight="18.62px" fontSize="14px" fontWeight={400} as="span">
                              18 december
                            </Text>
                          </Flex>

                          <Flex height="24px">
                            <Image src="/icons/hollow_star.svg" width={24} height={24} alt="star" />
                            <Image src="/icons/hollow_star.svg" width={24} height={24} alt="star" />
                            <Image src="/icons/hollow_star.svg" width={24} height={24} alt="star" />
                            <Image src="/icons/hollow_star.svg" width={24} height={24} alt="star" />
                            <Image src="/icons/hollow_star.svg" width={24} height={24} alt="star" />
                          </Flex>
                        </Box>

                        <Box lineHeight="22px" fontWeight={400} fontSize="16px">
                          <Text as="p" margin="0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.{' '}
                          </Text>
                        </Box>
                      </Box>

                      <Box
                        bg="white"
                        padding={{ base: '16px 16px', lg: '16px 32px' }}
                        borderRadius="6px">
                        <Box
                          mb="12px"
                          display="flex"
                          flexWrap="wrap"
                          gap={{ base: '12px', sm: '0' }}>
                          <Box mr="16px">
                            <Image
                              src="/images/public_available/feedback_courses.png"
                              width={40}
                              height={40}
                              alt="User Icon"
                            />
                          </Box>

                          <Flex flexDirection="column" mr={{ base: '0', sm: 'auto' }}>
                            <Text
                              mb="8px"
                              fontWeight={700}
                              fontSize="16px"
                              lineHeight="21.28px"
                              as="span">
                              Anna Sargsyan
                            </Text>
                            <Text lineHeight="18.62px" fontSize="14px" fontWeight={400} as="span">
                              18 december
                            </Text>
                          </Flex>

                          <Flex height="24px">
                            <Image src="/icons/hollow_star.svg" width={24} height={24} alt="star" />
                            <Image src="/icons/hollow_star.svg" width={24} height={24} alt="star" />
                            <Image src="/icons/hollow_star.svg" width={24} height={24} alt="star" />
                            <Image src="/icons/hollow_star.svg" width={24} height={24} alt="star" />
                            <Image src="/icons/hollow_star.svg" width={24} height={24} alt="star" />
                          </Flex>
                        </Box>

                        <Box lineHeight="22px" fontWeight={400} fontSize="16px">
                          <Text as="p" margin="0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.{' '}
                          </Text>
                        </Box>
                      </Box>
                    </Flex>

                    <Flex alignItems="center" flexDirection="column" mb="32px">
                      <Box mb="20px">
                        <Heading
                          as="h4"
                          margin="0"
                          fontSize="24px"
                          fontWeight={700}
                          lineHeight="31.92px">
                          Rate and tell your opinion
                        </Heading>
                      </Box>
                      <Flex>
                        <Image src="/icons/hollow_star.svg" width={44} height={44} alt="star" />
                        <Image src="/icons/hollow_star.svg" width={44} height={44} alt="star" />
                        <Image src="/icons/hollow_star.svg" width={44} height={44} alt="star" />
                        <Image src="/icons/hollow_star.svg" width={44} height={44} alt="star" />
                        <Image src="/icons/hollow_star.svg" width={44} height={44} alt="star" />
                      </Flex>
                    </Flex>

                    <Box width="100%">
                      <Box
                        mb="24px"
                        display="flex"
                        flexDirection="column"
                        alignItems="end"
                        lineHeight="20px"
                        fontSize="14px"
                        fontWeight={400}
                        color="#BAB7C6">
                        <Textarea
                          padding="9px 13px"
                          height="105px"
                          bg="white"
                          placeholder="Type here..."
                        />
                        <Text as="span">0/100</Text>
                      </Box>
                      <Box display="flex" justifyContent={{ base: 'center', md: 'flex-end' }}>
                        <Button
                          width={{ base: '100%', md: '216px' }}
                          height="46px"
                          lineHeight="22px"
                          fontSize="16px">
                          Send
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </TabPanel>
                <TabPanel margin="64px 0 224px 0 ">
                  <Flex
                    margin="0 auto"
                    flexDirection="column"
                    textAlign="center"
                    alignItems="center"
                    maxW="577px">
                    <Box width="44px" height="44px" mb="8px">
                      <Image src="/icons/lock_homework.svg" alt="lock" width={34} height={44} />
                    </Box>

                    <Box mb="16px">
                      <Text
                        color="#222222"
                        as="span"
                        lineHeight="36px"
                        fontSize={{ base: '16px', lg: '28px' }}
                        fontWeight={700}>
                        Pass the first lesson to do the homework
                      </Text>
                    </Box>

                    <Box>
                      <Button
                        width="120px"
                        height="46px"
                        lineHeight="22px"
                        fontSize="16px"
                        fontWeight={400}>
                        Watch video
                      </Button>
                    </Box>
                  </Flex>
                </TabPanel>

                <TabPanel
                  maxW="997px"
                  margin="64px auto 33px"
                  padding={{ base: '0 16px', lg: '0' }}>
                  <Box width="336px" mb="24px">
                    <FormControl>
                      <FormInput formLabelName="Title" placeholder="Write the title" name="title" />
                    </FormControl>
                  </Box>

                  <Box>
                    <FormControl>
                      <Box mb={{ base: '36px', lg: '64px' }}>
                        <Heading
                          margin="0 0 4px 0"
                          fontWeight={600}
                          lineHeight="20px"
                          fontSize="14px"
                          as="h5">
                          Write the note
                        </Heading>
                        <Box
                          mb="24px"
                          display="flex"
                          flexDirection="column"
                          alignItems="end"
                          lineHeight="20px"
                          fontSize="14px"
                          fontWeight={400}
                          color="#BAB7C6">
                          <Textarea
                            padding="9px 13px"
                            height="105px"
                            bg="white"
                            placeholder="Type here..."
                          />
                          <Text as="span">0/100</Text>
                        </Box>
                        <Box>
                          <Button width="216px" height="46px" lineHeight="22px" fontSize="16px">
                            Add Note
                          </Button>
                        </Box>
                      </Box>
                    </FormControl>
                  </Box>

                  <Box>
                    <Box lineHeight="21.28px" mb="24px" fontWeight={700} fontSize="16px">
                      <Box marginBottom="24px">
                        <Text as="span">Today</Text>
                      </Box>

                      <Box
                        bg="white"
                        padding={{ base: '16px', lg: '16px 32px' }}
                        borderRadius="8px">
                        <Flex justifyContent="space-between" mb="8px">
                          <Text as="span">My homework</Text>
                          <Box width="24px" height="24px" display="flex" justifyContent="center">
                            <Image src="/icons/secure_icon.svg" alt="icon" height={18} width={18} />
                          </Box>
                        </Flex>

                        <Box fontWeight={400} mb="16px">
                          <Text>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
                            laying out print, graphic or web designs. The passage is attributed to
                            an unknown typesetter in the 15th century who is thought to have
                            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
                            type specimen book. It usually begins with:
                          </Text>
                        </Box>

                        <Flex gap="8px" justifyContent="flex-end" alignContent="center">
                          <Box display="flex" justifyContent="center" width="24px" height="24px">
                            <Image src="/icons/edit_icon.svg" height={19} width={16} alt="Edith" />
                          </Box>

                          <Box display="flex" justifyContent="center" width="24px" height="24px">
                            <Image src="/icons/trash_icon.svg" height={20} width={20} alt="Trash" />
                          </Box>
                        </Flex>
                      </Box>
                    </Box>

                    <Box lineHeight="21.28px" mb="24px" fontWeight={700} fontSize="16px">
                      <Box marginBottom="24px">
                        <Text as="span">Yesterday</Text>
                      </Box>

                      <Box
                        bg="white"
                        mb="16px"
                        padding={{ base: '16px', lg: '16px 32px' }}
                        borderRadius="8px">
                        <Flex justifyContent="space-between" mb="8px">
                          <Text as="span">My homework</Text>
                          <Box width="24px" height="24px" display="flex" justifyContent="center">
                            <Image src="/icons/secure_icon.svg" alt="icon" height={18} width={18} />
                          </Box>
                        </Flex>

                        <Box fontWeight={400} mb="16px">
                          <Text>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
                            laying out print, graphic or web designs. The passage is attributed to
                            an unknown typesetter in the 15th century who is thought to have
                            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
                            type specimen book. It usually begins with:
                          </Text>
                        </Box>

                        <Flex gap="8px" justifyContent="flex-end" alignContent="center">
                          <Box display="flex" justifyContent="center" width="24px" height="24px">
                            <Image src="/icons/edit_icon.svg" height={19} width={16} alt="Edith" />
                          </Box>

                          <Box display="flex" justifyContent="center" width="24px" height="24px">
                            <Image src="/icons/trash_icon.svg" height={20} width={20} alt="Trash" />
                          </Box>
                        </Flex>
                      </Box>

                      <Box
                        bg="white"
                        mb="16px"
                        padding={{ base: '16px', lg: '16px 32px' }}
                        borderRadius="8px">
                        <Flex justifyContent="space-between" mb="8px">
                          <Text as="span">My homework</Text>
                          <Box width="24px" height="24px" display="flex" justifyContent="center">
                            <Image src="/icons/secure_icon.svg" alt="icon" height={18} width={18} />
                          </Box>
                        </Flex>

                        <Box fontWeight={400} mb="16px">
                          <Text>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
                            laying out print, graphic or web designs. The passage is attributed to
                            an unknown typesetter in the 15th century who is thought to have
                            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
                            type specimen book. It usually begins with:
                          </Text>
                        </Box>

                        <Flex gap="8px" justifyContent="flex-end" alignContent="center">
                          <Box display="flex" justifyContent="center" width="24px" height="24px">
                            <Image src="/icons/edit_icon.svg" height={19} width={16} alt="Edith" />
                          </Box>

                          <Box display="flex" justifyContent="center" width="24px" height="24px">
                            <Image src="/icons/trash_icon.svg" height={20} width={20} alt="Trash" />
                          </Box>
                        </Flex>
                      </Box>

                      <Box
                        bg="white"
                        padding={{ base: '16px', lg: '16px 32px' }}
                        borderRadius="8px">
                        <Flex justifyContent="space-between" mb="8px">
                          <Text as="span">My homework</Text>
                          <Box width="24px" height="24px" display="flex" justifyContent="center">
                            <Image src="/icons/secure_icon.svg" alt="icon" height={18} width={18} />
                          </Box>
                        </Flex>

                        <Box fontWeight={400} mb="16px">
                          <Text>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
                            laying out print, graphic or web designs. The passage is attributed to
                            an unknown typesetter in the 15th century who is thought to have
                            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
                            type specimen book. It usually begins with:
                          </Text>
                        </Box>

                        <Flex gap="8px" justifyContent="flex-end" alignContent="center">
                          <Box display="flex" justifyContent="center" width="24px" height="24px">
                            <Image src="/icons/edit_icon.svg" height={19} width={16} alt="Edith" />
                          </Box>

                          <Box display="flex" justifyContent="center" width="24px" height="24px">
                            <Image src="/icons/trash_icon.svg" height={20} width={20} alt="Trash" />
                          </Box>
                        </Flex>
                      </Box>
                    </Box>

                    <Box lineHeight="21.28px" fontWeight={700} fontSize="16px">
                      <Box marginBottom="24px">
                        <Text as="span">Previous 7 days</Text>
                      </Box>

                      <Box bg="white" padding="16px 32px" borderRadius="8px">
                        <Flex justifyContent="space-between" mb="8px">
                          <Text as="span">My homework</Text>
                          <Box width="24px" height="24px" display="flex" justifyContent="center">
                            <Image src="/icons/secure_icon.svg" alt="icon" height={18} width={18} />
                          </Box>
                        </Flex>

                        <Box fontWeight={400} mb="16px">
                          <Text>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
                            laying out print, graphic or web designs. The passage is attributed to
                            an unknown typesetter in the 15th century who is thought to have
                            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
                            type specimen book. It usually begins with:
                          </Text>
                        </Box>

                        <Flex gap="8px" justifyContent="flex-end" alignContent="center">
                          <Box display="flex" justifyContent="center" width="24px" height="24px">
                            <Image src="/icons/edit_icon.svg" height={19} width={16} alt="Edith" />
                          </Box>

                          <Box display="flex" justifyContent="center" width="24px" height="24px">
                            <Image src="/icons/trash_icon.svg" height={20} width={20} alt="Trash" />
                          </Box>
                        </Flex>
                      </Box>
                    </Box>
                  </Box>
                </TabPanel>

                <TabPanel
                  maxW="997px"
                  margin="64px auto 30px"
                  padding={{ base: '0 16px', lg: '0' }}>
                  <Heading
                    textAlign="center"
                    m={{ base: ' 0 0 16px 0', lg: ' 0 0 24px 0' }}
                    lineHeight="31.92px"
                    fontSize="24px"
                    fontWeight={700}>
                    Discover the most importan things about Figma
                  </Heading>
                  <Box lineHeight="22px" fontWeight={400} fontSize="16px">
                    <Text as="span">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries, but also the leap into
                      electronic typesetting, remaining essentially unchanged. It was popularised in
                      the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                      and more recently with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the 1960s with the
                      release of Letraset sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker including versions of
                      Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text ever since
                      the 1500s, when an unknown printer took a galley of type and scrambled it to
                      make a type specimen book. It has survived not only five centuries, but also
                      the leap into electronic typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text
                      of the printing and typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the 1960s with the
                      release of Letraset sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker including versions of
                      Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text ever since
                      the 1500s, when an unknown printer took a galley of type and scrambled it to
                      make a type specimen book. It has survived not only five centuries, but also
                      the leap into electronic typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text
                      of the printing and typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the 1960s with the
                      release of Letraset sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker including versions of
                      Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text ever since
                      the 1500s, when an unknown printer took a galley of type and scrambled it to
                      make a type specimen book. It has survived not only five centuries, but also
                      the leap into electronic typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text
                      of the printing and typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the 1960s with the
                      release of Letraset sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker including versions of
                      Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text ever since
                      the 1500s, when an unknown printer took a galley of type and scrambled it to
                      make a type specimen book. It has survived not only five centuries, but also
                      the leap into electronic typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text
                      of the printing and typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the 1960s with the
                      release of Letraset sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker including versions of
                      Lorem Ipsum.
                    </Text>
                  </Box>
                </TabPanel>

                <TabPanel maxWidth="1193px" margin="0 auto" padding={{ base: '0 16px', lg: '0' }}>
                  <Box mt="64px">
                    <Box
                      m="0 auto 40px"
                      textAlign="center"
                      color="#222222"
                      maxW={{ base: '350px', lg: '710px' }}>
                      <Heading
                        margin="0 0 16px 0"
                        fontWeight={700}
                        fontSize={{ base: '24px', lg: '28px' }}
                        lineHeight="36px"
                        as="h4">
                        Get in touch with our experts
                      </Heading>
                      <Text as="span">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer
                      </Text>
                    </Box>

                    <Box>
                      <Flex justifyContent="center" mb="40px">
                        <Box>
                          <Text as="span">Requesting a Tutor</Text>
                        </Box>
                        <Box>
                          <FormControl>
                            <Input
                              placeholder="Select Date and Time"
                              // size="md"
                              type="datetime-local"
                            />
                          </FormControl>
                        </Box>
                        <Flex>
                          <Image
                            src="/icons/article_arrow_left.svg"
                            alt="Arrow"
                            width={7.9}
                            height={14.5}
                          />
                          <Image
                            src="/icons/article_arrow_right.svg"
                            alt="Arrow"
                            width={7.9}
                            height={14.5}
                          />
                        </Flex>
                      </Flex>

                      <Flex
                        justifyContent="center"
                        flexWrap={{ base: 'wrap', xl: 'nowrap' }}
                        gap="20px"
                        mb={{ base: '17px', lg: '40px' }}>
                        <Box bg="#fff" padding="15px 20px" width="155px" borderRadius="8px">
                          <UnorderedList
                            lineHeight="22px"
                            fontWeight={400}
                            fontSize="16px"
                            margin="0"
                            listStyleType="none">
                            <ListItem color="#5B5B5B">Mon</ListItem>
                            <ListItem
                              color="#222222"
                              lineHeight="31.92px"
                              fontWeight={700}
                              fontSize="24px"
                              mb="24px">
                              28
                            </ListItem>
                            <ListItem
                              padding="7px 21px"
                              borderRadius="6px"
                              border="1px solid #3CB4E7"
                              mb="8px"
                              color="#3CB4E7">
                              10:00 AM
                            </ListItem>
                            <ListItem
                              padding="7px 21px"
                              borderRadius="6px"
                              border="1px solid #E9E9E9"
                              color="#BABABA"
                              bg="#E9E9E9"
                              mb="8px">
                              14:00 AM
                            </ListItem>
                            <ListItem
                              padding="7px 21px"
                              borderRadius="6px"
                              border="1px solid #3CB4E7"
                              color="#3CB4E7">
                              10:00 AM
                            </ListItem>
                          </UnorderedList>
                        </Box>
                        <Box bg="#fff" padding="15px 20px" width="155px" borderRadius="8px">
                          <UnorderedList
                            lineHeight="22px"
                            fontWeight={400}
                            fontSize="16px"
                            margin="0"
                            listStyleType="none">
                            <ListItem color="#5B5B5B">Tue</ListItem>
                            <ListItem
                              color="#222222"
                              lineHeight="31.92px"
                              fontWeight={700}
                              fontSize="24px"
                              mb="24px">
                              28
                            </ListItem>
                            <ListItem
                              padding="7px 21px"
                              borderRadius="6px"
                              border="1px solid #3CB4E7"
                              mb="8px"
                              color="#3CB4E7">
                              10:00 AM
                            </ListItem>
                            <ListItem
                              padding="7px 21px"
                              borderRadius="6px"
                              border="1px solid #E9E9E9"
                              color="#BABABA"
                              bg="#E9E9E9"
                              mb="8px">
                              14:00 AM
                            </ListItem>
                            <ListItem
                              padding="7px 21px"
                              borderRadius="6px"
                              border="1px solid #3CB4E7"
                              color="#3CB4E7">
                              10:00 AM
                            </ListItem>
                          </UnorderedList>
                        </Box>

                        <Box
                          bg="#fff"
                          display={{ base: 'none', lg: 'block' }}
                          padding="15px 20px"
                          width="155px"
                          borderRadius="8px">
                          <UnorderedList
                            lineHeight="22px"
                            fontWeight={400}
                            fontSize="16px"
                            margin="0"
                            listStyleType="none">
                            <ListItem color="#5B5B5B">Wed</ListItem>
                            <ListItem
                              color="#222222"
                              lineHeight="31.92px"
                              fontWeight={700}
                              fontSize="24px"
                              mb="24px">
                              28
                            </ListItem>
                            <ListItem
                              padding="7px 21px"
                              borderRadius="6px"
                              border="1px solid #3CB4E7"
                              mb="8px"
                              color="#3CB4E7">
                              10:00 AM
                            </ListItem>
                            <ListItem
                              padding="7px 21px"
                              borderRadius="6px"
                              border="1px solid #E9E9E9"
                              color="#BABABA"
                              bg="#E9E9E9"
                              mb="8px">
                              14:00 AM
                            </ListItem>
                            <ListItem
                              padding="7px 21px"
                              borderRadius="6px"
                              border="1px solid #3CB4E7"
                              color="#3CB4E7">
                              10:00 AM
                            </ListItem>
                          </UnorderedList>
                        </Box>

                        <Box
                          bg="#fff"
                          display={{ base: 'none', lg: 'block' }}
                          padding="15px 20px"
                          width="155px"
                          borderRadius="8px">
                          <UnorderedList
                            lineHeight="22px"
                            fontWeight={400}
                            fontSize="16px"
                            margin="0"
                            listStyleType="none">
                            <ListItem color="#5B5B5B">Thu</ListItem>
                            <ListItem
                              color="#222222"
                              lineHeight="31.92px"
                              fontWeight={700}
                              fontSize="24px"
                              mb="24px">
                              28
                            </ListItem>
                            <ListItem
                              padding="7px 21px"
                              borderRadius="6px"
                              border="1px solid #3CB4E7"
                              mb="8px"
                              color="#3CB4E7">
                              10:00 AM
                            </ListItem>
                            <ListItem
                              padding="7px 21px"
                              borderRadius="6px"
                              border="1px solid #E9E9E9"
                              color="#BABABA"
                              bg="#E9E9E9"
                              mb="8px">
                              14:00 AM
                            </ListItem>
                            <ListItem
                              padding="7px 21px"
                              borderRadius="6px"
                              border="1px solid #3CB4E7"
                              color="#3CB4E7">
                              10:00 AM
                            </ListItem>
                          </UnorderedList>
                        </Box>

                        <Box
                          bg="#fff"
                          display={{ base: 'none', lg: 'block' }}
                          padding="15px 20px"
                          width="155px"
                          borderRadius="8px">
                          <UnorderedList
                            lineHeight="22px"
                            fontWeight={400}
                            fontSize="16px"
                            margin="0"
                            listStyleType="none">
                            <ListItem color="#5B5B5B">Fri</ListItem>
                            <ListItem
                              color="#222222"
                              lineHeight="31.92px"
                              fontWeight={700}
                              fontSize="24px"
                              mb="24px">
                              28
                            </ListItem>
                            <ListItem
                              padding="7px 21px"
                              borderRadius="6px"
                              border="1px solid #3CB4E7"
                              mb="8px"
                              color="#3CB4E7">
                              10:00 AM
                            </ListItem>
                            <ListItem
                              padding="7px 21px"
                              borderRadius="6px"
                              border="1px solid #E9E9E9"
                              color="#BABABA"
                              bg="#E9E9E9"
                              mb="8px">
                              14:00 AM
                            </ListItem>
                            <ListItem
                              padding="7px 21px"
                              borderRadius="6px"
                              border="1px solid #3CB4E7"
                              color="#3CB4E7">
                              10:00 AM
                            </ListItem>
                          </UnorderedList>
                        </Box>

                        <Box
                          bg="#fff"
                          display={{ base: 'none', lg: 'block' }}
                          padding="15px 20px"
                          width="155px"
                          borderRadius="8px">
                          <UnorderedList
                            lineHeight="22px"
                            fontWeight={400}
                            fontSize="16px"
                            margin="0"
                            listStyleType="none">
                            <ListItem color="#5B5B5B">Sun</ListItem>
                            <ListItem
                              color="#222222"
                              lineHeight="31.92px"
                              fontWeight={700}
                              fontSize="24px"
                              mb="24px">
                              28
                            </ListItem>
                            <ListItem
                              padding="7px 21px"
                              borderRadius="6px"
                              border="1px solid #3CB4E7"
                              mb="8px"
                              color="#3CB4E7">
                              10:00 AM
                            </ListItem>
                            <ListItem
                              padding="7px 21px"
                              borderRadius="6px"
                              border="1px solid #E9E9E9"
                              color="#BABABA"
                              bg="#E9E9E9"
                              mb="8px">
                              14:00 AM
                            </ListItem>
                            <ListItem
                              padding="7px 21px"
                              borderRadius="6px"
                              border="1px solid #3CB4E7"
                              color="#3CB4E7">
                              10:00 AM
                            </ListItem>
                          </UnorderedList>
                        </Box>

                        <Box
                          bg="#fff"
                          display={{ base: 'none', lg: 'block' }}
                          padding="15px 20px"
                          width="155px"
                          borderRadius="8px">
                          <UnorderedList
                            lineHeight="22px"
                            fontWeight={400}
                            fontSize="16px"
                            margin="0"
                            listStyleType="none">
                            <ListItem color="#5B5B5B">Sat</ListItem>
                            <ListItem
                              color="#222222"
                              lineHeight="31.92px"
                              fontWeight={700}
                              fontSize="24px"
                              mb="24px">
                              28
                            </ListItem>
                            <ListItem
                              padding="7px 21px"
                              borderRadius="6px"
                              border="1px solid #3CB4E7"
                              mb="8px"
                              color="#3CB4E7">
                              10:00 AM
                            </ListItem>
                            <ListItem
                              padding="7px 21px"
                              borderRadius="6px"
                              border="1px solid #E9E9E9"
                              color="#BABABA"
                              bg="#E9E9E9"
                              mb="8px">
                              14:00 AM
                            </ListItem>
                            <ListItem
                              padding="7px 21px"
                              borderRadius="6px"
                              border="1px solid #3CB4E7"
                              color="#3CB4E7">
                              10:00 AM
                            </ListItem>
                          </UnorderedList>
                        </Box>
                      </Flex>

                      <Box textAlign="center">
                        <Text as="span" lineHeight="22px" fontSize="16px" fontWeight={400}>
                          View more
                        </Text>
                      </Box>

                      <Flex
                        maxW="1050px"
                        margin="64px auto 64px"
                        flexWrap="wrap"
                        justifyContent="center"
                        gap="20px">
                        <FormControl width={{ base: '343px', md: '515px' }}>
                          <FormInput
                            isRequired
                            formLabelName="First name"
                            name="First name"
                            placeholder="Enter name"></FormInput>
                        </FormControl>

                        <FormControl width={{ base: '343px', md: '515px' }}>
                          <FormInput
                            isRequired
                            formLabelName="Last name"
                            name="Լast name"
                            placeholder="Enter last name"></FormInput>
                        </FormControl>

                        <FormControl width={{ base: '343px', md: '515px' }}>
                          <FormInput
                            isRequired
                            formLabelName="Email"
                            name="Email"
                            placeholder="you@example.com"></FormInput>
                        </FormControl>

                        <FormControl width={{ base: '343px', md: '515px' }}>
                          <PhoneNumberInput value="number" onChange={Number}></PhoneNumberInput>
                        </FormControl>

                        <FormControl>
                          <Text as="span">Course name</Text>
                          <Textarea
                            padding="9px 13px"
                            height="105px"
                            bg="white"
                            placeholder="Type here..."
                          />
                        </FormControl>

                        <Box
                          width="100%"
                          mb="16px"
                          lineHeight="22px"
                          fontWeight={400}
                          fontSize="16px">
                          <Text fontWeight="700" as="span">
                            Instructor(s)
                          </Text>
                          <Box display="flex" width="100%" flexDirection="column">
                            <Text bg="#fff" as="span" padding="16px 0 16px 32px">
                              Tigra Manukyan
                            </Text>
                            <Text width="100%" bg="#fff" as="span" padding="16px 0 16px 32px">
                              Tigra Manukyan
                            </Text>
                          </Box>
                        </Box>

                        <FormControl display="flex" alignItems="center" gap="8px">
                          <Checkbox />
                          <Text>
                            By selecting this, you agree to the Privacy Policy and Cookie Policy.
                          </Text>
                        </FormControl>

                        <Box width="100%">
                          <Button
                            lineHeight="22px"
                            fontSize="16px"
                            fontWeight={400}
                            width="100%"
                            height="54px">
                            Lets talk
                          </Button>
                        </Box>
                      </Flex>
                    </Box>
                  </Box>

                  <Box maxW="825px" margin="0 auto 60px">
                    <Box mb="20px" textAlign="center" color="#222222">
                      <Heading
                        margin="0 0 16px 0"
                        fontWeight={700}
                        fontSize="28px"
                        lineHeight="36px"
                        as="h4">
                        Tutor Guidelines
                      </Heading>
                      <Text as="span" color="#5B5B5B">
                        When requesting a tutor, please keep in mind the following policies:
                      </Text>
                    </Box>

                    <UnorderedList
                      display="flex"
                      flexDirection="column"
                      gap="16px"
                      lineHeight="22px"
                      fontSize="16px"
                      fontWeight={400}
                      color="#222222"
                      m="0">
                      <ListItem>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                      </ListItem>
                      <ListItem>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                      </ListItem>
                      <ListItem>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                      </ListItem>
                      <ListItem>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                      </ListItem>
                      <ListItem>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default OnlineVideoCourse;
