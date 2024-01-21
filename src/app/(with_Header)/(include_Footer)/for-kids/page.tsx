'use client';

import { FC } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import PlusIcon from 'public/icons/plus_pricing_icon.svg';
import AddIcon from 'public/icons/xmark_pricing_icon.svg';
import { KidsCourseService } from '@/api/services/KidsCourseService';
import { Button, Loading } from '@/components/atoms';
import SearchInput from '@/components/atoms/SearchInput';
import KidsCourseItem from '@/components/molecules/KidsCourseItem';
import { KidsCourse } from '@/models/kids-course.model';
import { segoe } from '@/utils/constants/fonts';

type Props = {
  searchParams: {
    [key: string]: string;
  };
};

const KidsCourses: FC<Props> = ({ searchParams }) => {
  const { data: kidsCourseData, isLoading } = useQuery(['kids-courses', searchParams], () =>
    KidsCourseService.getKidsCourseList(searchParams),
  );

  return (
    <>
      {isLoading && <Loading />}
      <Flex
        as="section"
        backgroundColor="#F6FCFF"
        borderRadius={{ base: '0px 0px 16px 16px', md: '0px  0px 73px 73px' }}
        py={{ base: '36px', md: '20px' }}
        mb={{ base: '36px', md: '96px' }}
        px={{ base: '16px', xl: '0px' }}>
        <Flex
          maxWidth={1200}
          margin="0 auto"
          alignItems="center"
          gap="19px"
          flexDirection={{ base: 'column', lg: 'row' }}>
          <Box w={{ base: '100%', md: '794px' }} textAlign="center">
            <Heading
              fontSize={{ base: '28px', md: '44px' }}
              fontWeight={{ base: 600, md: 700 }}
              color="#222222"
              marginBottom="16px"
              fontStyle="normal"
              lineHeight="normal">
              Kids Offline Courses
            </Heading>
            <SearchInput />
          </Box>
          <Box borderRadius="38px" overflow="hidden">
            <Image
              src="/images/public_available/kids_offline_courses.jpg"
              alt="Kids offline courses"
              width={387}
              height={260}
            />
          </Box>
        </Flex>
      </Flex>
      <Container maxWidth={1200} px={{ base: '16px', xl: '0px' }}>
        <Grid
          gridGap="20px"
          templateColumns={{
            base: 'repeat(auto-fill, minmax(300px, 387px))',
            md: 'repeat(auto-fill, minmax(380px, 1fr))',
          }}
          mb={{ base: '20px', md: '64px' }}
          justifyContent="center"
          alignItems="center"
          justifyItems="center">
          {kidsCourseData?.map((course: KidsCourse) => (
            <KidsCourseItem
              key={course.id}
              id={course.id}
              title={course.title}
              subTitle={course.subTitle}
              price={course.price}
              totalDuration={course.totalDuration}
              courseLevel={course.courseLevel}
            />
          ))}
        </Grid>

        <Flex
          flexDirection={{ base: 'column', lg: 'row' }}
          as="section"
          gap="20px"
          alignItems="center"
          mt={{ base: '36px', md: '80px', xl: '148px' }}
          mb={{ base: '36px', md: '94px' }}>
          <Box width={{ base: '100%', lg: '590px' }}>
            <Heading
              fontSize={{ base: '28px', md: '44px' }}
              fontStyle="normal"
              fontWeight={{ base: 600, md: 700 }}
              lineHeight="normal"
              color="#222"
              m={{ base: '0 0 16px 0', sm: ' 0 0 50px 0' }}
              textAlign="center">
              Why Should Your Kid Learn Computer Science?
            </Heading>
            <UnorderedList
              margin="0"
              fontSize="16px"
              fontStyle="normal"
              fontWeight={400}
              lineHeight="normal"
              color="#000">
              <ListItem mb={{ base: '8px', md: '16px' }}>
                Computing would offer opportunities for creativity and innovation. Creating
                something from scratch encourages students to improve students' imagination and
                skills at the same time..
              </ListItem>
              <ListItem mb={{ base: '8px', md: '16px' }}>
                When learning computer science, students will face challenges that require them to
                navigate obstacles and learn to be an incredible problem solver.
              </ListItem>
              <ListItem>
                With technology leads our current world, learning the basics of computer science
                helps students to increase their ability in integral and analytical thinking when
                solving complicated problems that will be useful to overcome their future
              </ListItem>
            </UnorderedList>
          </Box>
          <Box borderRadius="9.478px" overflow="hidden">
            <Image
              src="/images/public_available/kids_learn_computer_science.jpg"
              alt="Kids offline courses"
              width={590}
              height={342}
            />
          </Box>
        </Flex>
        <Flex as="section" flexDirection="column" alignItems={{ base: 'center', md: 'normal' }}>
          <Heading
            className={segoe.className}
            textAlign={{ base: 'center', md: 'left' }}
            fontSize={{ base: '28px', md: '32px' }}
            fontStyle="normal"
            fontWeight={700}
            lineHeight={{ base: '36px', md: 'normal' }}
            color="#222"
            m="0 0 40px 0">
            It's time to elevate your skills
          </Heading>
          <Flex gap={{ base: '16px', md: '0' }} flexDirection={{ base: 'column', md: 'row' }}>
            <Box
              _hover={{
                borderBottom: '8px solid #3CB4E7',
                marginTop: '24px',
              }}
              p="32px"
              boxShadow="0px -4px 4px -1px rgba(0, 0, 0, 0.06)"
              width={400}
              transition="all 0.3s"
              height={333}>
              <Box
                borderRadius="86px"
                overflow="hidden"
                display="flex"
                alignItems="center"
                justifyContent="center">
                <Image
                  src="/images/public_available/kids_courses_skills_img1.jpg"
                  alt="Kids offline courses skills"
                  width={86}
                  height={86}
                />
              </Box>
              <Text
                fontSize="16px"
                fontStyle="normal"
                fontWeight={700}
                lineHeight="normal"
                color="#222"
                my="16px"
                textAlign="center">
                Schedule and attend your favorite class
              </Text>
              <Text
                fontSize="16px"
                fontStyle="normal"
                fontWeight={400}
                lineHeight="22px"
                color="#5B5B5B"
                textAlign="center">
                Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non.
                Cras aliquet purus dui laoreet diam sed lacus, fame
              </Text>
            </Box>
            <Box
              _hover={{
                borderBottom: '8px solid #3CB4E7',
                marginTop: '24px',
              }}
              p="32px"
              boxShadow="0px -4px 4px -1px rgba(0, 0, 0, 0.06)"
              width={400}
              transition="all 0.3s"
              height={333}>
              <Box
                borderRadius="86px"
                overflow="hidden"
                display="flex"
                alignItems="center"
                justifyContent="center">
                <Image
                  src="/images/public_available/kids_courses_skills_img2.jpg"
                  alt="Kids offline courses skills"
                  width={86}
                  height={86}
                />
              </Box>
              <Text
                fontSize="16px"
                fontStyle="normal"
                fontWeight={700}
                lineHeight="normal"
                color="#222"
                my="16px"
                textAlign="center">
                Learn and pass exams
              </Text>
              <Text
                fontSize="16px"
                fontStyle="normal"
                fontWeight={400}
                lineHeight="22px"
                color="#5B5B5B"
                textAlign="center">
                Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non.
                Cras aliquet purus dui laoreet diam sed lacus, fame
              </Text>
            </Box>
            <Box
              _hover={{
                borderBottom: '8px solid #3CB4E7',
                marginTop: '24px',
              }}
              p="32px"
              boxShadow="0px -4px 4px -1px rgba(0, 0, 0, 0.06)"
              width={400}
              transition="all 0.3s"
              height={333}>
              <Box
                borderRadius="86px"
                overflow="hidden"
                display="flex"
                alignItems="center"
                justifyContent="center">
                <Image
                  src="/images/public_available/kids_courses_skills_img3.jpg"
                  alt="Kids offline courses skills"
                  width={86}
                  height={86}
                />
              </Box>
              <Text
                fontSize="16px"
                fontStyle="normal"
                fontWeight={700}
                lineHeight="normal"
                color="#222"
                my="16px"
                textAlign="center">
                Become a pro and get your certificate
              </Text>
              <Text
                fontSize="16px"
                fontStyle="normal"
                fontWeight={400}
                lineHeight="22px"
                color="#5B5B5B"
                textAlign="center">
                Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non.
                Cras aliquet purus dui laoreet diam sed lacus, fame
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Box
          maxW="1200px"
          margin={{
            base: '36px auto 36px',
            md: '80px auto 80px',
            xl: '148px auto 148px',
          }}>
          <Heading
            className={segoe.className}
            textAlign={{ base: 'center', md: 'left' }}
            mb={{ base: '16px', md: '40px' }}
            lineHeight="36px"
            fontWeight={700}
            fontSize="28px"
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
                          lineHeight="normal"
                          fontSize="16px"
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
                      lineHeight="22px"
                      fontWeight="400"
                      color="#5B5B5B">
                      All our mentors are experienced and accomplished professionals with a passion
                      for teaching. They've been working in their respective fields for a minimum of
                      5+ years.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Container>

      <Flex px={{ base: '16px', xl: '0px' }} backgroundColor="#1f1646" flexShrink={0}>
        <Flex
          alignItems="center"
          flexDirection="column"
          width="794px"
          margin="0 auto"
          color="#ffffff"
          lineHeight="normal"
          fontStyle="normal"
          py="40px">
          <Text fontSize={{ base: '28px', md: '32px' }} fontWeight={{ base: 600, md: 700 }}>
            Have Questions?
          </Text>
          <Text fontSize="16px" fontWeight={400} mt="16px" mb="24px" lineHeight="22px">
            We're here to help your child succeed, no matter their experience level.
          </Text>
          <Button
            padding="16px 32px"
            borderRadius="6px"
            backgroundColor="#fff"
            color="#1f1646"
            _hover={{
              bg: '#F3F4F6',
              color: '#1f1646',
            }}
            _focus={{
              bg: '#E9E9E9',
              color: '#1f1646',
            }}>
            Contact us
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default KidsCourses;
