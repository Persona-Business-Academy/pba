'use client';
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
import PlusIcon from '/public/icons/plus_pricing_icon.svg';
import AddIcon from '/public/icons/xmark_pricing_icon.svg';
import Image from 'next/image';
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

const KidsCourses = ({ searchParams }: Props) => {
  const { data: kidsCourseData, isLoading } = useQuery(['kids-courses', searchParams], () =>
    KidsCourseService.getKidsCourseList(searchParams),
  );

  const questionsKidsPage = [
    {
      id: 1,
      question: 'What age group is the Persona Kids Academy suitable for?',
      answer:
        'The academy is tailored for children aged 9-16, providing age-appropriate activities and learning experiences.',
    },
    {
      id: 2,
      question: 'Are the classes focused on practical skills?',
      answer:
        'Yes, the Persona Kids Academy emphasizes both theoretical knowledge and practical skills related to various professions, allowing children to gain a well-rounded understanding.',
    },
    {
      id: 3,
      question: 'What is the duration of each class or session?',
      answer:
        'The duration of classes may vary, but on average, each session lasts 3-5 months. We aim to balance learning and playtime for an enriching experience.',
    },
    {
      id: 4,
      question: "Is there any assessment or evaluation of the children's progress?",
      answer:
        "While we prioritize a positive learning environment, we do conduct periodic assessments to track each child's development and provide feedback to parents.",
    },
    {
      id: 5,
      question: 'What kinds of professions do children learn about?',
      answer:
        'Children will have the opportunity to explore a wide range of professions, including robotics,graphic design, ui/ux and etc., through engaging lessons and activities',
    },
  ];

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
          <Box w={{ base: '90%', md: '794px' }} textAlign="center">
            <Heading
              fontSize={{ base: '28px', md: '44px' }}
              fontWeight={{ base: 600, md: 700 }}
              color="#222222"
              marginBottom="16px"
              fontStyle="normal"
              lineHeight="normal">
              Kids Offline Courses
            </Heading>
            <Text fontSize="16px" fontWeight={400} color="#222222" marginBottom="32px">
              Empower young minds with knowledge – where every course becomes a stepping stone to a
              future filled with endless possibilities
            </Text>
            <SearchInput />
          </Box>
          <Box borderRadius="38px" overflow="hidden">
            <Image
              src="/images/public_available/kids.webp"
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
              coverPhoto={course.coverPhoto}
              pdf={course.pdf}
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
              Why Should Your Child Learn IT Professions?
            </Heading>
            <UnorderedList
              margin="0"
              fontSize="16px"
              fontStyle="normal"
              fontWeight={400}
              lineHeight="normal"
              color="#000"
              pl="20px">
              <ListItem mb={{ base: '8px', md: '16px' }}>
                Learning IT professions equips your child with skills that are in high demand and
                likely to be critical in the future job market. In a rapidly advancing technological
                landscape, IT proficiency is a valuable asset that provides long-term relevance.
              </ListItem>
              <ListItem mb={{ base: '8px', md: '16px' }}>
                IT education fosters problem-solving skills and critical thinking. Through coding
                and various IT activities, children learn to approach challenges systematically,
                analyze problems, and develop logical solutions.
              </ListItem>
              <ListItem>
                IT skills are versatile and can be applied across various disciplines. Whether your
                child aspires to be a scientist, artist, or engineer, the foundational knowledge
                gained through IT education provides a versatile skill set that can be adapted to
                diverse career paths.
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
            textAlign={{ base: 'center' }}
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
                  src="/images/public_available/kids_skills_img1.webp"
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
                Best for you
              </Text>
              <Text
                fontSize="16px"
                fontStyle="normal"
                fontWeight={400}
                lineHeight="22px"
                color="#5B5B5B"
                textAlign="center">
                Choosing the right profession is a crucial decision that significantly impacts
                various aspects of an individual's life. Choose the most suitable for you from our
                various courses.
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
                  src="/images/public_available/kids_skills_img2.webp"
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
                Exams serve as a standardized method to assess a student's understanding of the
                material covered in a course.
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
                  src="/images/public_available/kids_skills_img3.webp"
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
                Graduation
              </Text>
              <Text
                fontSize="16px"
                fontStyle="normal"
                fontWeight={400}
                lineHeight="22px"
                color="#5B5B5B"
                textAlign="center">
                Graduation symbolizes the successful completion of an educational journey. It
                signifies the acquisition of knowledge, skills, and academic achievements over the
                course of the program.
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
            mb={{ base: '28px', md: '40px' }}
            lineHeight="36px"
            fontWeight={700}
            fontSize="28px"
            color="#222222">
            Frequently Asked Questions
          </Heading>

          <Accordion allowMultiple display="flex" flexDirection="column" gap="16px">
            {questionsKidsPage.map((item, index) => (
              <AccordionItem border="none" key={item.id} id={index.toString()}>
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
                          {item.question}
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
                      {item.answer}
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
