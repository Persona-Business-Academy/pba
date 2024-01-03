import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import Image from 'next/image';
import { OfflineCourseService } from '@/api/services/OfflineCourseService';
import { Button } from '@/components/atoms';
import { segoe } from '@/utils/constants/fonts';
import { generateAWSUrl } from '@/utils/helpers/common';

const OfflineCourse = async ({ params: { id } }: { params: { id: string } }) => {
  const offlineCourse = await OfflineCourseService.getOfflineCourseItem(id);

  console.log(offlineCourse);

  return (
    <>
      <Box
        borderRadius="0 0 72px 72px"
        bg="#F6FCFF"
        padding={{
          base: '0 16px ',
          lg: ' 0',
        }}>
        <Container maxW="1200px" padding="0 0 82px 0" position="relative">
          <Flex
            gap={{
              base: '24px',
              lg: '122px',
            }}
            justifyContent="center"
            alignItems="center"
            padding="24px 0"
            flexWrap={{
              base: 'wrap-reverse',
              lg: 'nowrap',
            }}>
            <Box maxW="488px" color="#222222" textAlign="center">
              <Heading
                margin="0  0 8px 0"
                as="h2"
                color="#1F1646"
                lineHeight={{
                  base: '34.13px',
                  lg: '53.64px',
                }}
                fontSize={{ base: '28px', lg: '44px' }}>
                {offlineCourse.title}
              </Heading>
              <Flex justifyContent="center" gap="13px" mb="16px">
                <Flex alignItems="center" gap="6px">
                  <Image
                    src="/icons/hollow_star.svg"
                    alt="Rating Star"
                    width={16.5}
                    height={15.8}
                  />
                  <Image
                    src="/icons/hollow_star.svg"
                    alt="Rating Star"
                    width={16.5}
                    height={15.8}
                  />
                  <Image
                    src="/icons/hollow_star.svg"
                    alt="Rating Star"
                    width={16.5}
                    height={15.8}
                  />
                  <Image
                    src="/icons/hollow_star.svg"
                    alt="Rating Star"
                    width={16.5}
                    height={15.8}
                  />
                  <Image
                    src="/icons/hollow_star.svg"
                    alt="Rating Star"
                    width={16.5}
                    height={15.8}
                  />
                </Flex>

                <Text as="span" margin="0" lineHeight="18.75px" fontSize="16px">
                  {offlineCourse.rating}
                </Text>
              </Flex>

              <Box lineHeight="18.75px" fontSize="16px" mb="24px">
                <Text as="p" margin="0" lineHeight="18.75px" fontSize="16px">
                  {offlineCourse.subTitle}
                </Text>
              </Box>

              <Flex gap="16px" alignItems="center" justifyContent="center" flexWrap="wrap">
                <Button
                  bg="transparent"
                  padding={{
                    base: '12px 24px',
                    md: '16px 32px',
                  }}
                  border=" 1px solid #3CB4E7"
                  height="53px"
                  width="236px"
                  color="#3CB4E7"
                  fontWeight="700"
                  lineHeight="21.28px"
                  fontSize="16px">
                  Apply now
                </Button>
                <Button
                  padding="16px 0"
                  fontWeight="400"
                  lineHeight="21.28px"
                  fontSize="16px"
                  bg="transparent"
                  _focus={{
                    bg: 'transparent',
                  }}
                  _focusWithin={{
                    bg: 'transparent',
                  }}
                  _focusVisible={{
                    bg: 'transparent',
                  }}
                  _hover={{
                    bg: 'transparent',
                  }}
                  color="#1F1646">
                  View programm
                </Button>
              </Flex>
            </Box>

            <Box maxW="590px">
              <Box width="100%">
                <Image
                  src={generateAWSUrl(offlineCourse.coverPhoto)}
                  alt="Graphic Design"
                  width={590}
                  height={334}
                />
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box
        maxWidth="1200px"
        position="relative"
        display="flex"
        margin="0 auto"
        flexWrap="wrap"
        gap="20px"
        transform="translateY(-80px)"
        justifyContent="center">
        <Flex
          boxShadow="0px 15px 20px 0px #0000000D"
          alignItems="center"
          flexWrap="wrap"
          justifyContent="center"
          bg="#fff"
          gap="16px"
          padding="32px"
          borderRadius="12px"
          width="753px">
          <UnorderedList
            paddingRight="16px"
            listStyleType="none"
            margin="0"
            display="flex"
            flexDirection="column"
            gap="8px"
            borderRight="1px solid #C0C0C0">
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
              Language
            </ListItem>
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700" color="#222222">
              {offlineCourse.language}
            </ListItem>
          </UnorderedList>

          <UnorderedList
            listStyleType="none"
            margin="0"
            display="flex"
            paddingRight="16px"
            flexDirection="column"
            gap="8px"
            borderRight="1px solid #C0C0C0">
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
              Age
            </ListItem>
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700" color="#222222">
              {offlineCourse.ageLimit}
            </ListItem>
          </UnorderedList>

          <UnorderedList
            listStyleType="none"
            margin="0"
            display="flex"
            flexDirection="column"
            gap="8px"
            paddingRight={{
              base: '0',
              sm: '16px',
              md: '16px',
              lg: '16px',
              xl: '16px',
            }}
            borderRight={{
              base: 'none',
              sm: '1px solid #C0C0C0',
              md: '1px solid #C0C0C0',
              lg: '1px solid #C0C0C0',
              xl: '1px solid #C0C0C0',
            }}>
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
              Duration
            </ListItem>
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700" color="#222222">
              {offlineCourse.totalDuration} months
            </ListItem>
          </UnorderedList>

          <UnorderedList
            listStyleType="none"
            margin="0"
            paddingRight="16px"
            display="flex"
            flexDirection="column"
            gap="8px"
            borderRight="1px solid #C0C0C0">
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
              Level
            </ListItem>
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700" color="#222222">
              {offlineCourse.level}
            </ListItem>
          </UnorderedList>

          <UnorderedList
            listStyleType="none"
            margin="0"
            display="flex"
            flexDirection="column"
            gap="8px"
            paddingRight={{
              base: '0',
              sm: '16px',
              md: '16px',
              lg: '16px',
              xl: '16px',
            }}
            borderRight={{
              base: 'none',
              sm: '1px solid #C0C0C0',
              md: '1px solid #C0C0C0',
              lg: '1px solid #C0C0C0',
              xl: '1px solid #C0C0C0',
            }}>
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
              Certificate
            </ListItem>
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700" color="#222222">
              By level
            </ListItem>
          </UnorderedList>

          <UnorderedList
            listStyleType="none"
            margin="0"
            display="flex"
            flexDirection="column"
            gap="8px">
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
              Course ended
            </ListItem>
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700" color="#222222">
              {offlineCourse.graduatedStudentsCount} students
            </ListItem>
          </UnorderedList>
        </Flex>

        <Flex
          boxShadow="0px 15px 20px 0px #0000000D"
          flexDirection="column"
          width="426px"
          alignItems="center"
          gap="16px"
          padding=" 16px 32px"
          borderRadius="12px"
          bg="#fff">
          <Flex alignItems="center" gap="16px">
            <Text fontWeight="400" fontSize="16px" margin="0" lineHeight="18.75px">
              Course fee
            </Text>
            <Text fontWeight="700" lineHeight="37.24px" as="p" fontSize="28px" margin="0">
              {offlineCourse.price}/
              <Text fontWeight="400" fontSize="16px" lineHeight="21.28px" as="span" margin="0">
                month
              </Text>
            </Text>
          </Flex>

          <Box display="flex" gap="16px" alignItems="center">
            <Box
              height="53px"
              width={{ base: '239px', sm: '239px', md: '239px', lg: '322px', xl: '322px' }}>
              <Button
                padding="16px 32px"
                width="100%"
                height="100%"
                fontSize="16px"
                lineHeight="21.28px">
                Buy Now
              </Button>
            </Box>
            <Box>
              <Image src="/icons/heart_icon.svg" alt="Heart" width={24} height={24} />
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box marginBottom={{ base: '36px ', lg: ' 148px', xl: ' 148px' }}>
        <Box
          padding={{ base: '0 16px', sm: '0 16px', md: '0 16px', lg: '0', xl: '0' }}
          margin="0 auto"
          maxWidth="793px"
          color="#222222">
          <Heading
            margin={{
              base: '0 0 16px 0',
              sm: '0 0 16px 0 ',
              md: '0 0 24px 0 ',
              lg: ' 0 0 24px 0',
              xl: ' 0 0 24px 0',
            }}
            textAlign="center"
            fontSize={{ base: '28px ', sm: '28px ', md: '32px ', lg: ' 32px', xl: ' 32px' }}
            lineHeight="42.56px"
            fontWeight="700"
            className={segoe.className}>
            Description
          </Heading>
          <Text as="p" margin="0" fontSize="16px" lineHeight="24px" fontWeight="400">
            {offlineCourse.description}
          </Text>
        </Box>
      </Box>

      <Box
        padding={{
          base: '0 16px',
          lg: '0',
        }}
        maxWidth="100%"
        marginBottom={{ base: '36px ', lg: ' 148px', xl: ' 148px' }}>
        <Box marginLeft="auto" maxWidth="1560px">
          <Flex alignItems="center" gap="20px" flexWrap="wrap" justifyContent="center">
            <Box width="803px">
              <Heading
                as="h2"
                textAlign={{
                  base: 'center',
                  lg: 'left',
                }}
                margin="0 0 24px 0"
                fontSize="28px"
                lineHeight="37.24px">
                Your Child Will Learn
              </Heading>
              <Flex gap={{ base: '16px', xl: '29px' }} flexWrap="wrap" justifyContent="center">
                <UnorderedList
                  display="grid"
                  gridTemplateColumns="1fr 1fr"
                  margin="0"
                  gap="16px"
                  lineHeight="24px"
                  fontWeight="400"
                  fontSize="16px"
                  listStyleType="0"
                  color="#222222"
                  maxWidth="803px">
                  {offlineCourse.whatYouWillLearn.map((learning: string, index: number) => (
                    <ListItem key={index} display="flex" alignItems="flex-start" gap="12px">
                      <Image src="/icons/confirm_icon.svg" alt="Confirm" width={24} height={24} />
                      {learning}
                    </ListItem>
                  ))}
                </UnorderedList>
              </Flex>
            </Box>

            <Box
              width="361px"
              display="flex"
              justifyContent={{
                base: 'center ',
                xl: 'flex-start',
              }}
              padding="16px 0 16px 16px"
              bg="#F6FCFF"
              flexGrow="2">
              <Image
                src="/images/public_available/courses_img_design.png"
                alt="Learn Img"
                style={{
                  objectFit: 'cover',
                }}
                width={361}
                height={205}
              />
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box marginBottom={{ base: '36px ', lg: ' 148px', xl: ' 148px' }}>
        <Container maxWidth="895px" margin="0 auto" padding="0" color="#222222">
          <Heading
            as="h2"
            margin={{ base: '0 0 16px 0', lg: ' 0 0 40px 0', xl: ' 0 0 40px 0' }}
            textAlign="center"
            fontSize={{ base: '28px', lg: '32px', xl: '32px' }}
            lineHeight={{ base: '37.24px', lg: '42.56px ', xl: '42.56px ' }}>
            Course Timeline
          </Heading>

          <Box
            display="flex"
            flexDirection={{ base: 'row', lg: 'column', xl: 'column' }}
            maxWidth={{ base: '285px', lg: '849px', xl: '849px' }}
            gap={{ base: '0', lg: '13px', xl: '13px' }}
            margin="0 auto 40px">
            <Box
              flex={{ base: '1', lg: '0', xl: '0' }}
              width={{ base: '100%', lg: '796px', xl: '796px' }}
              margin={{ base: '0', lg: '0 auto', xl: '0 auto' }}
              height={{ base: '299px', lg: '0', xl: '0' }}
              justifyContent="center"
              flexDirection={{ base: 'row', lg: 'column', xl: 'column' }}
              display="flex">
              <Flex
                justifyContent="space-around"
                flexDirection={{ base: 'column', lg: 'row', xl: 'row' }}>
                <UnorderedList
                  flexDirection={{ base: 'row', lg: 'column', xl: 'column' }}
                  gap="13px"
                  margin="0"
                  display="flex"
                  alignItems="center"
                  listStyleType="none">
                  <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700">
                    Beginner
                  </ListItem>
                  <ListItem
                    transform={{
                      base: 'translate(8px , 0px)',
                      lg: 'translate(0, 7px)',
                      xl: 'translate(0,7px)',
                    }}
                    width="12px"
                    height="12px"
                    bg="#000"
                    borderRadius="10px"></ListItem>
                </UnorderedList>

                <UnorderedList
                  gap="13px"
                  margin="0"
                  display="flex"
                  flexDirection={{ base: 'row', lg: 'column', xl: 'column' }}
                  alignItems="center"
                  listStyleType="none">
                  <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700">
                    Mid level
                  </ListItem>
                  <ListItem
                    transform={{
                      base: 'translate(6px , 0px)',
                      lg: 'translate(0, 7px)',
                      xl: 'translate(0,7px)',
                    }}
                    width="12px"
                    height="12px"
                    bg="#000"
                    borderRadius="10px"></ListItem>
                </UnorderedList>

                <UnorderedList
                  gap="13px"
                  margin="0"
                  display="flex"
                  flexDirection={{ base: 'row', lg: 'column', xl: 'column' }}
                  alignItems="center"
                  listStyleType="none">
                  <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700">
                    Advance
                  </ListItem>
                  <ListItem
                    transform={{
                      base: 'translate(9px , 2px)',
                      lg: 'translate(0, 7px)',
                      xl: 'translate(0,7px)',
                    }}
                    width="12px"
                    height="12px"
                    bg="#000"
                    borderRadius="10px"></ListItem>
                </UnorderedList>
              </Flex>
              <Text
                as="span"
                margin="0"
                display="block"
                width={{ base: '1px', lg: '100%', xl: '100%' }}
                height={{ base: '100%', lg: '2px', xl: '2px' }}
                bg="#000"></Text>
            </Box>

            <Flex
              flex={{ base: '1', lg: '0', xl: '0' }}
              justifyContent="space-between"
              flexDirection={{ base: 'column', lg: 'row', xl: 'row' }}>
              <Text as="p" margin="0" lineHeight="18.75px" fontSize="16px" fontWeight="400">
                Lorem Ipsum
              </Text>
              <Text as="p" margin="0" lineHeight="18.75px" fontSize="16px" fontWeight="400">
                Lorem Ipsum
              </Text>
              <Text as="p" margin="0" lineHeight="18.75px" fontSize="16px" fontWeight="400">
                Lorem Ipsum
              </Text>
              <Text as="p" margin="0" lineHeight="18.75px" fontSize="16px" fontWeight="400">
                Lorem Ipsum
              </Text>
            </Flex>
          </Box>

          <Flex justifyContent="center" gap="20px" flexWrap="wrap">
            <Box
              borderRadius="15px"
              width="285px"
              boxShadow="0px 4px 6px 0px #0000000F"
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap="8px"
              padding="23px 47px">
              <Text as="p" margin="0" fontWeight="700" fontSize="24px" lineHeight="31.92px">
                Wed, Mar 22
              </Text>
              <Text as="p" lineHeight="21.28px" fontSize="16px" fontWeight="400" margin="0">
                Wednesday
              </Text>
              <Text as="p" lineHeight="21.28px" fontSize="16px" fontWeight="400" margin="0">
                2:00-2:45 PM
              </Text>

              <Box width="100%" mt="8px">
                <Button
                  color="#3CB4E7"
                  padding="12px 24px"
                  height="37px"
                  width="100%"
                  border="1px solid #3CB4E7"
                  lineHeight="21.28px"
                  fontSize="16px"
                  background="transparent">
                  Enroll
                </Button>
              </Box>
            </Box>

            <Box
              borderRadius="15px"
              width="285px"
              boxShadow="0px 4px 6px 0px #0000000F"
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap="8px"
              padding="23px 47px">
              <Text as="p" margin="0" fontWeight="700" fontSize="24px" lineHeight="31.92px">
                Wed, Mar 22
              </Text>
              <Text as="p" lineHeight="21.28px" fontSize="16px" fontWeight="400" margin="0">
                Wednesday
              </Text>
              <Text as="p" lineHeight="21.28px" fontSize="16px" fontWeight="400" margin="0">
                2:00-2:45 PM
              </Text>

              <Box width="100%" mt="8px">
                <Button
                  color="#3CB4E7"
                  padding="12px 24px"
                  height="37px"
                  width="100%"
                  border="1px solid #3CB4E7"
                  lineHeight="21.28px"
                  fontSize="16px"
                  background="transparent">
                  Enroll
                </Button>
              </Box>
            </Box>

            <Box
              borderRadius="15px"
              width="285px"
              boxShadow="0px 4px 6px 0px #0000000F"
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap="8px"
              padding="23px 47px">
              <Text as="p" margin="0" fontWeight="700" fontSize="24px" lineHeight="31.92px">
                Wed, Mar 22
              </Text>
              <Text as="p" lineHeight="21.28px" fontSize="16px" fontWeight="400" margin="0">
                Wednesday
              </Text>
              <Text as="p" lineHeight="21.28px" fontSize="16px" fontWeight="400" margin="0">
                2:00-2:45 PM
              </Text>

              <Box width="100%" mt="8px">
                <Button
                  color="#3CB4E7"
                  padding="12px 24px"
                  height="37px"
                  width="100%"
                  border="1px solid #3CB4E7"
                  lineHeight="21.28px"
                  fontSize="16px"
                  background="transparent">
                  Enroll
                </Button>
              </Box>
            </Box>
          </Flex>

          <Flex flexDirection="column" alignItems="center" gap="16px" mt="24px">
            <Text fontSize="18px" lineHeight="18px" margin="0" as="span">
              Don't see a time that works for you?
            </Text>
            <Text fontSize="18px" lineHeight="18px" margin="0" as="span">
              Request another time
            </Text>
          </Flex>
        </Container>
      </Box>

      <Box
        padding={{
          base: '0 16px ',
          lg: ' 0',
        }}>
        <Container maxWidth="1246px" padding="0">
          <Box color="#222222" marginBottom={{ base: '36px ', lg: ' 148px', xl: ' 148px' }}>
            <Heading
              textAlign="center"
              as="h2"
              lineHeight={{
                base: '31.92px',
                md: '37.24px ',
              }}
              margin={{
                base: '0 0 16px 0',
                lg: '0 0 40px 0',
              }}
              fontSize={{ base: '24px', lg: '32px', xl: '32px' }}
              fontWeight="700">
              Course instructors
            </Heading>

            <Flex margin="0 auto" gap="20px" flexWrap="wrap" justifyContent="center">
              {offlineCourse.courseInstructors.map((instructor, index: number) => (
                <Box key={index} maxW="402px">
                  <Flex
                    mb="24px"
                    borderRadius="12px"
                    flexDirection="column"
                    gap="16px"
                    alignItems="center"
                    bg="#ECF7FC"
                    padding="48px">
                    <Box>
                      <Image src="/icons/quote.svg" alt="comma" width={24.5} height={19.9} />
                    </Box>
                    <Text
                      textAlign="center"
                      margin="0"
                      as="span"
                      lineHeight={{
                        base: '18.75px ',
                        lg: '21.28px',
                      }}
                      fontSize="16px">
                      {instructor.about}
                    </Text>
                  </Flex>

                  <Flex flexDirection="column" alignItems="center" gap="8px">
                    <Box
                      width={74}
                      height={74}
                      position="relative"
                      borderRadius="50%"
                      overflow="auto">
                      <Image
                        src={generateAWSUrl(instructor.avatar)}
                        alt={[instructor.firstName, instructor.lastName].join(' ')}
                        fill
                      />
                    </Box>

                    <UnorderedList
                      borderBottom="1px solid #E9E8ED"
                      margin="0"
                      display="flex"
                      fontSize="16px"
                      flexDirection="column"
                      alignItems="center">
                      <ListItem mb="8px" lineHeight="16px" fontWeight="600" as="span">
                        {instructor.firstName} {instructor.lastName}
                      </ListItem>
                      <ListItem
                        mb="8px"
                        as="span"
                        color="#5B5B5B"
                        lineHeight="21.28px"
                        fontWeight="400">
                        {instructor.profession}
                      </ListItem>
                    </UnorderedList>

                    <UnorderedList
                      margin="0"
                      display="flex"
                      flexDirection="column"
                      alignItems="center">
                      <ListItem as="span" fontSize="16px" lineHeight="21.28px" fontWeight="400">
                        Enrolled:
                        <Text as="span" fontWeight="700">
                          {instructor.enrolledStudentsCount}
                        </Text>
                      </ListItem>
                      <ListItem as="span" fontSize="16px" lineHeight="21.28px" fontWeight="400">
                        Graduated:
                        <Text as="span" fontWeight="700">
                          {instructor.graduatedStudentsCount}
                        </Text>
                      </ListItem>
                    </UnorderedList>
                  </Flex>
                </Box>
              ))}
            </Flex>
          </Box>

          <Box marginBottom={{ base: '36px ', lg: ' 148px', xl: ' 148px' }}>
            <Box
              textAlign="center"
              maxW="673px"
              margin={{
                base: '0 auto 20px',
                sm: '0 auto 20px',
                md: '0 auto 40px ',
                lg: '0 auto 40px',
                xl: '0 auto 40px',
              }}>
              <Heading
                color="#222222"
                as="h2"
                margin={{
                  base: '0',
                  sm: '0',
                  md: '0 0 16px 0 ',
                  lg: '0 0 16px 0',
                  xl: '0 0 16px 0',
                }}
                fontWeight="700"
                lineHeight={{
                  base: '31.92px',
                  sm: '31.92px',
                  md: '37.24px ',
                  lg: '37.24px',
                  xl: '37.24px',
                }}
                fontSize={{ base: '24px', lg: '32px', xl: '32px' }}>
                how we pass PBA DESIGN COURSE
              </Heading>
              <Text
                display={{
                  base: 'none',
                  sm: 'none',
                  md: 'block ',
                  lg: 'block',
                  xl: 'block',
                }}
                color="#747474"
                as="p"
                margin="0"
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
                print, graphic or web designs. The passage is attributed to an unknown typesetter in
                the 15th century who
              </Text>
            </Box>

            <Box
              maxWidth="1200px"
              margin="0 auto"
              display="flex"
              flexDirection="column"
              alignItems="center">
              <Box
                textAlign="center"
                lineHeight="21.28px"
                fontSize="12px"
                fontWeight="400"
                mb="16px">
                <Text as="span">Watch Video</Text>
              </Box>

              <Flex
                alignItems="center"
                gap={{ base: '0', sm: '0', md: '30px', lg: '80px', xl: '132px' }}>
                <Box display={{ base: 'none', sm: 'none', md: 'block ', lg: 'block', xl: 'block' }}>
                  <Image
                    src="/icons/course_page_arrow_left.svg"
                    alt="Arrow"
                    width={55}
                    height={55}
                  />
                </Box>

                <Box maxWidth="821px" display="flex" flexDirection="column" alignItems="center">
                  <Image
                    src="/images/public_available/course_slide_img.jpg"
                    alt="Slide"
                    width={821}
                    height={481}
                  />

                  <Box width="285px" height="53px" transform="translateY(-26px)">
                    <Button
                      width="100%"
                      height="100%"
                      bg="#ECF7FC"
                      lineHeight="21.28px"
                      fontSize="16px"
                      fontWeight="700"
                      padding="16px 32px"
                      color="#363636">
                      Exam
                    </Button>
                  </Box>
                </Box>

                <Box display={{ base: 'none', sm: 'none', md: 'block ', lg: 'block', xl: 'block' }}>
                  <Image
                    src="/icons/course_page_arrow_right.svg"
                    alt="Arrow"
                    width={55}
                    height={55}
                  />
                </Box>
              </Flex>
            </Box>
          </Box>

          <Box marginBottom={{ base: '36px ', lg: ' 148px', xl: ' 148px' }}>
            <Box
              textAlign="center"
              maxW="673px"
              margin={{
                base: '0 auto 20px',
                sm: '0 auto 20px',
                md: '0 auto 40px ',
                lg: '0 auto 40px',
                xl: '0 auto 40px',
              }}>
              <Heading
                color="#222222"
                as="h2"
                margin={{
                  base: '0 0 16px 0',
                  sm: '0 0 16px 0',
                  md: '0 0 24px 0 ',
                  lg: '0 0 24px 0',
                  xl: '0 0 24px 0',
                }}
                fontWeight="700"
                lineHeight={{
                  base: '31.92px',
                  sm: '31.92px',
                  md: '37.24px ',
                  lg: '37.24px',
                  xl: '37.24px',
                }}
                fontSize={{ base: '24px', sm: '24px', md: '32px ', lg: '32px', xl: '32px' }}>
                Gain industry recognized certificate
              </Heading>
              <Text
                color="#747474"
                as="p"
                margin="0"
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
                print, graphic or web designs. The passage is attributed to an unknown typesetter in
                the 15th century who is th
              </Text>
            </Box>

            <Flex
              maxW="1200px"
              margin="0 auto"
              alignItems="center"
              gap={{ base: '20px', sm: '20px', md: '67px', lg: '67px', xl: '67px' }}
              flexWrap="wrap"
              justifyContent="center">
              <Box width="590px">
                <Accordion
                  maxWidth="590px"
                  defaultIndex={[0]}
                  allowMultiple
                  display="flex"
                  flexDirection="column"
                  gap="16px">
                  <AccordionItem
                    boxShadow="0px 2px 4px 0px #0000001F"
                    borderRadius="12px"
                    padding="24px"
                    border="none">
                    <AccordionButton
                      padding="0"
                      _hover={{ background: 'trnsparents' }}
                      display="flex"
                      alignItems="center"
                      gap="8px">
                      <Box>
                        <Image
                          src="/icons/result_course_icon.svg"
                          alt="Icon"
                          width={32}
                          height={32}
                        />
                      </Box>

                      <Box
                        as="span"
                        padding="0"
                        flex="1"
                        fontSize="24px"
                        fontWeight="700"
                        textAlign="left"
                        lineHeight="31.92px">
                        1. Fast results
                      </Box>
                    </AccordionButton>
                    <AccordionPanel
                      maxWidth="502px"
                      padding="0"
                      ml="auto"
                      lineHeight="18.75px"
                      color="#5B5B5B">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem
                    boxShadow="0px 2px 4px 0px #0000001F"
                    borderRadius="12px"
                    padding="24px"
                    border="none">
                    <h2>
                      <AccordionButton
                        padding="0"
                        _hover={{ background: 'trnsparents' }}
                        display="flex"
                        alignItems="center"
                        gap="8px">
                        <Box>
                          <Image
                            src="/icons/result_course_icon.svg"
                            alt="Icon"
                            width={32}
                            height={32}
                          />
                        </Box>

                        <Box
                          as="span"
                          padding="0"
                          flex="1"
                          fontSize="24px"
                          fontWeight="700"
                          textAlign="left"
                          lineHeight="31.92px">
                          3. results
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      maxWidth="502px"
                      padding="0"
                      ml="auto"
                      lineHeight="18.75px"
                      color="#5B5B5B">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem
                    boxShadow="0px 2px 4px 0px #0000001F"
                    borderRadius="12px"
                    padding="24px"
                    border="none">
                    <h2>
                      <AccordionButton
                        padding="0"
                        _hover={{ background: 'trnsparents' }}
                        display="flex"
                        alignItems="center"
                        gap="8px">
                        <Box>
                          <Image
                            src="/icons/result_course_icon.svg"
                            alt="Icon"
                            width={32}
                            height={32}
                          />
                        </Box>

                        <Box
                          as="span"
                          padding="0"
                          flex="1"
                          fontSize="24px"
                          fontWeight="700"
                          textAlign="left"
                          lineHeight="31.92px">
                          1. Fast results
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      maxWidth="502px"
                      padding="0"
                      ml="auto"
                      lineHeight="18.75px"
                      color="#5B5B5B">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>

              <Box>
                <Image
                  src="/images/public_available/course_student_img.jpg"
                  alt="Students"
                  width={543}
                  height={374}
                />
              </Box>
            </Flex>
          </Box>

          <Box marginBottom={{ base: '36px ', lg: ' 148px', xl: ' 148px' }}>
            <Heading
              textAlign="center"
              color="#222222"
              as="h2"
              margin={{
                base: '0 0 16px 0',
                sm: '0 0 16px 0',
                md: '0 0 55px 0 ',
                lg: '0 0 55px 0',
                xl: '0 0 55px 0',
              }}
              fontWeight="700"
              lineHeight={{
                base: '31.92px',
                sm: '31.92px',
                md: '37.24px ',
                lg: '37.24px',
                xl: '37.24px',
              }}
              fontSize={{ base: '24px', sm: '24px', md: '32px ', lg: '32px', xl: '32px' }}>
              Here is what our students are saying about us
            </Heading>

            <Flex
              maxWidth="1200px"
              margin="0 auto"
              alignItems="center"
              justifyContent="center"
              gap={{ base: '0 ', sm: '0 ', md: '50px', lg: ' 50px', xl: ' 162.5px' }}
              mb="55px">
              <Box
                width="40px"
                padding="8px"
                display={{ base: 'none ', sm: 'none ', md: 'none', lg: ' block', xl: ' block' }}>
                <Image src="/icons/arrow_left_partners.svg" alt="Arrow" height={24} width={24} />
              </Box>

              <Box
                borderRadius="15px"
                maxWidth="794px"
                padding={{
                  base: '24px ',
                  sm: '24px',
                  md: '24px',
                  lg: ' 48px 90px',
                  xl: ' 68px 124px',
                }}
                color="#222222"
                textAlign="center"
                bg="#FDF1F0">
                <Text
                  as="p"
                  fontWeight="700"
                  lineHeight={{
                    base: '21.28px ',
                    sm: '21.px',
                    md: '21.px',
                    lg: '42.56px',
                    xl: '42.56px',
                  }}
                  fontSize={{ base: '16px ', sm: '16px', md: '32px', lg: '32px', xl: '32px' }}>
                  It was a very good experience
                </Text>
                <Text as="span" fontSize="16px" lineHeight="18.75px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec
                  turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat
                  duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque
                  enim arcu. Elementum felis magna pretium in tincidunt. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.
                </Text>
              </Box>

              <Box
                padding="8px"
                display={{ base: 'none ', sm: 'none ', md: 'none', lg: ' block', xl: ' block' }}>
                <Image src="/icons/arrow_right_partners.svg" alt="Arrow" height={24} width={24} />
              </Box>
            </Flex>

            <Flex
              alignItems="center"
              gap="40px"
              maxW="579px"
              margin=" 0 auto"
              display={{ base: 'none ', sm: 'none ', md: 'flex ', lg: ' flex', xl: ' flex' }}>
              <Image
                src="/icons/feedback_students_first.png"
                alt="Feedback"
                width={72.7}
                height={75.9}
              />
              <Image
                src="/icons/feedback_students_second.png"
                alt="Feedback"
                width={72.7}
                height={75.9}
              />

              <Image
                src="/icons/feedback_students_third.png"
                alt="Feedback"
                width={126.9}
                height={132.5}
              />
              <Image
                src="/icons/feedback_students_first.png"
                alt="Feedback"
                width={72.7}
                height={75.9}
              />
              <Image
                src="/icons/feedback_students_second.png"
                alt="Feedback"
                width={72.7}
                height={75.9}
              />
            </Flex>
          </Box>

          <Box marginBottom={{ base: '36px ', lg: ' 148px', xl: ' 148px' }}>
            <Heading
              textAlign="center"
              color="#222222"
              as="h2"
              margin={{
                base: '0 0 16px 0',
                sm: '0 0 16px 0',
                md: '0 0 40px 0',
                lg: '0 0 40px 0',
                xl: '0 0 40px 0',
              }}
              fontWeight="700"
              lineHeight={{
                base: '31.92px',
                sm: '31.92px',
                md: '37.24px ',
                lg: '37.24px',
                xl: '37.24px',
              }}
              fontSize={{ base: '24px', sm: '24px', md: '32px ', lg: '32px', xl: '32px' }}>
              Apply for course
            </Heading>

            <Box maxWidth="1200px" margin="0 auto" color="#C0C0C0">
              <form style={{ width: '100%' }}>
                <Flex
                  width="100%"
                  alignItems="end"
                  gap="20px"
                  mb="40px"
                  flexWrap="wrap"
                  justifyContent="center">
                  <FormControl
                    maxWidth={{
                      base: '335px ',
                      sm: '335px ',
                      md: '335px ',
                      lg: ' 335px',
                      xl: ' 285px',
                    }}>
                    <FormLabel
                      margin="0 0 4px 0"
                      color="#222222"
                      fontSize="14px"
                      fontWeight="600"
                      lineHeight="20px">
                      Name
                    </FormLabel>
                    <Input
                      fontWeight="400"
                      height="37px"
                      lineHeight="21.28px"
                      fontSize="16px"
                      padding="8px 12px"
                      border="1px solid #C0C0C0"
                      type="text"
                      placeholder="Enter name"
                    />
                  </FormControl>

                  <FormControl
                    maxWidth={{
                      base: '335px ',
                      sm: '335px ',
                      md: '335px ',
                      lg: ' 335px',
                      xl: ' 285px',
                    }}>
                    <FormLabel
                      margin="0 0 4px 0"
                      color="#222222"
                      fontSize="14px"
                      fontWeight="600"
                      lineHeight="20px">
                      Email
                    </FormLabel>
                    <Input
                      fontWeight="400"
                      height="37px"
                      lineHeight="21.28px"
                      fontSize="16px"
                      padding="8px 12px"
                      border="1px solid #C0C0C0"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </FormControl>

                  <FormControl
                    maxWidth={{
                      base: '335px ',
                      sm: '335px ',
                      md: '335px ',
                      lg: ' 335px',
                      xl: ' 335px',
                    }}>
                    <FormLabel
                      margin="0 0 4px 0"
                      fontSize="14px"
                      color="#222222"
                      fontWeight="600"
                      lineHeight="20px">
                      Phone Number
                    </FormLabel>
                    <Input
                      fontWeight="400"
                      height="37px"
                      lineHeight="21.28px"
                      fontSize="16px"
                      padding="8px 12px"
                      border="1px solid #C0C0C0"
                      type="number"
                      placeholder="+374 98 901 820"
                    />
                  </FormControl>
                  <Button
                    lineHeight="21.28px"
                    fontSize="16px"
                    padding="16px 32px"
                    width={{ base: '100%', lg: '235px', xl: '235px' }}
                    height="42px">
                    Apply
                  </Button>
                </Flex>
              </form>
              <Box
                margin={{
                  base: '0 auto',
                  sm: '0 auto',
                  md: '0 auto',
                  lg: '0 auto',
                  xl: ' 0 0 0 auto',
                }}
                maxWidth="459px"
                height="56px"
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                border="1px solid"
                borderColor="#059669"
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
        </Container>
      </Box>
    </>
  );
};

export default OfflineCourse;
