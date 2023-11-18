'use client';
import { Box, Container, Flex, Heading, Link, Text, UnorderedList } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Button, OutlinedButton } from '@/components/atoms';
import CourseCard from '@/components/molecules/CourseCard';

const TrainerCard = dynamic(() => import('@/components/molecules/TrainerCard'));
const ArticleItem = dynamic(() => import('@/components/molecules/ArticleItem'));
const StudentFeedback = dynamic(() => import('@/components/molecules/StudentFeedback'));

const commonFontStyle = {
  lineHeight: '21.28px',
  fontWeight: 700,
};

const HomePage = () => {
  const trainers = [
    {
      id: 1,
      firstName: 'Gagik',
      lastName: 'Tamamyan',
      profession: 'SMM Specialist',
      enrolledStudents: 0,
      graduatedStudents: 0,
    },
    {
      id: 2,
      firstName: 'Julieta',
      lastName: 'Asatryan',
      profession: 'HRM Specialist',
      enrolledStudents: 0,
      graduatedStudents: 0,
    },
    {
      id: 3,
      firstName: 'Narek',
      lastName: 'Boshyan',
      profession: 'Full-Stack Developer',
      enrolledStudents: 0,
      graduatedStudents: 0,
    },
    {
      id: 4,
      firstName: 'Tigran ',
      lastName: 'Manukyan',
      profession: 'SMM Specialist',
      enrolledStudents: 0,
      graduatedStudents: 0,
    },
  ];

  const studentsFeedback = [
    {
      id: 1,
      feedbackText:
        'When I first came to Persona Business Academy, at Tigran Manukyans course, it seemed like I was on some new planet appeared (so everything was new and mixed).Then Manukyan the willingness of Tigran, Gagik and Tigran Harutyunyan, everything to explain thoroughly, patience and created As a result of the environment, Persona became more than just that organization providing quality knowledge. By visiting Persona, you are sure to get quality knowledge (not only in your chosen field) but also for sure you will have the most interesting and colorful course in life',
      studentAvatarSrc: '/icons/students_feed.png',
      firstName: 'Daniela',
      lastName: 'Zanazanyan',
      profession: 'Designer',
    },
    {
      id: 2,
      feedbackText:
        "Hi, I'm Garry, I've been trying my strength at IT for almost a year now, particularly in Front-End. Before learning about the PBA and joining its ranks, I received professional knowledge in 2 other different educational places. However I will not hide that they were not so satisfactory and sufficient for me. Accepting PBA and joining the ranks of students of Narek Boshyan's JavaScript course group, I realized how big a difference there is between previous and current studies in the organization of processes, their quality and level. And both the methodology of organizing the course in PBA and Narek Boshyan's Compassionate and individualized treatment of any student obligates us to study well and become leading professionals in the field.",
      studentAvatarSrc: '/icons/students_feed.png',
      firstName: 'Gari',
      lastName: 'Gevorgyan',
      profession: 'Web-developer',
    },
    {
      id: 3,
      feedbackText:
        "Hi, I'm Armine, attending HRM in PBA I gained new knowledge at the courses by discovering and loving that realm unknown to me. Thanks to my trainer Julieta Asatryan, new to increase the level of cognitive perception. The course gave not only new knowledge, but also friends and invaluable values in the form of innovative ideas",
      studentAvatarSrc: '/icons/students_feed.png',
      firstName: 'Armine',
      lastName: 'Hakobyan',
      profession: 'Desinger',
    },
  ];

  return (
    <>
      <Box
        mb={{
          base: '0',
          md: '148px',
        }}
        borderRadius={{
          base: '0 0 16px 16px',
          lg: '0 0 74px  74px',
        }}
        backgroundColor="#F6FCFF"
        padding={{
          base: '36px 10px ',
          lg: '50px 20px',
          xl: '78px 0 86px',
        }}>
        <Container as="section" padding={0} maxWidth="1200px" margin="0 auto">
          <Flex
            marginBottom="54px"
            alignItems="center"
            justifyContent={{
              base: 'center',
              xl: 'space-between',
            }}
            flexWrap={{ base: 'wrap', xl: 'nowrap' }}>
            <Flex maxW="490px" flexDirection="column">
              <Heading
                as="h1"
                margin="0 0 16px 0"
                fontSize={{ base: '28px', md: '32px' }}
                color="#1F1646"
                textAlign={{ base: 'center', lg: 'left' }}
                lineHeight={{ base: '37.24px', xl: '53.64px' }}>
                Welcome to
                <Text as="span" textTransform="uppercase" color="#3CB3E5">
                  &nbsp;PBA
                </Text>
              </Heading>

              <Text
                fontSize="16px"
                color="#171717"
                marginBottom={{ base: '10px', xl: '32px' }}
                {...commonFontStyle}
                fontWeight={400}
                textAlign={{
                  base: 'center',
                  lg: 'left',
                }}>
                Join us on this transformative journey, where every lesson learned becomes a
                stepping stone towards a brighter, more promising future, for each individual and
                our collective society.Welcome to first Armenian leading educational platform.
              </Text>

              <Flex
                gap="24px"
                alignItems="center"
                justifyContent={{ base: 'center', lg: 'flex-start' }}>
                <Button
                  width="177px"
                  height="53px"
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="21.28px">
                  Try it free
                </Button>

                <Button
                  variant="link"
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="21.28px"
                  bg="#F6FCFF"
                  color="#222222"
                  _hover={{ background: 'none' }}
                  _focus={{ bg: 'transparent' }}>
                  Explore courses
                </Button>
              </Flex>
            </Flex>

            <Flex
              marginTop="76px"
              position="relative"
              justifyContent="center"
              width={{
                base: '211px',
                sm: '450px',
                xl: ' 636px',
              }}>
              <Box display="flex" justifyContent="center">
                <Box
                  bg="#FFFFFFCC"
                  left={{ base: '-60px', lg: '-45px' }}
                  bottom={{ base: '40px', lg: '70px' }}
                  position="absolute"
                  width={{ base: ' 119px', sm: '119px', xl: '181px' }}
                  padding={{
                    base: '8px',
                    md: '16px 32px',
                  }}
                  borderRadius="20px">
                  <Text
                    margin="0"
                    fontWeight="700"
                    lineHeight={{
                      base: ' 21.28px',
                      md: '31.92px',
                    }}
                    fontSize={{ base: ' 16px', md: '24px' }}>
                    250k
                  </Text>
                  <Text
                    margin="0"
                    fontWeight="400"
                    lineHeight="21.28px"
                    fontSize={{ base: ' 14px', sm: '14px', xl: '16px' }}>
                    Assisted Student
                  </Text>
                </Box>

                <Box
                  bg="#FFFFFFCC"
                  top={{ base: '20px', sm: '90px', md: '75px' }}
                  left={{ base: '-30px', sm: '-10px', md: '20px' }}
                  position="absolute"
                  padding={{
                    base: '8px',
                    md: '16px 32px',
                    xl: ' 16px 32px',
                  }}
                  borderRadius="20px">
                  <Text
                    margin="0"
                    fontWeight="700"
                    lineHeight={{
                      base: ' 21.28px',
                      md: '31.92px',
                      xl: '31.92px',
                    }}
                    fontSize={{
                      base: ' 16px',
                      md: '24px',
                      xl: '24px',
                    }}>
                    250k
                  </Text>
                  <Text
                    margin="0"
                    fontWeight="400"
                    lineHeight={{
                      base: '18.62px',
                      md: '21.28px',
                      xl: '21.28px',
                    }}
                    fontSize={{ base: ' 14px', md: '16px' }}>
                    Experts
                  </Text>
                </Box>

                <Box
                  bg="#FFFFFFCC"
                  top={{ base: '80px', sm: '140px' }}
                  right={{ base: '0', sm: '30px', md: '45px' }}
                  position="absolute"
                  padding={{
                    base: '8px',
                    md: '16px 32px',
                  }}
                  borderRadius="20px">
                  <Text
                    margin="0"
                    fontWeight="700"
                    lineHeight={{
                      base: ' 21.28px',
                      md: '31.92px',
                    }}
                    fontSize={{
                      base: ' 16px',
                      md: '24px',
                    }}>
                    250k
                  </Text>
                  <Text
                    margin="0"
                    fontWeight="400"
                    lineHeight={{
                      base: '18.62px',
                      md: '21.28px',
                    }}
                    fontSize={{ base: ' 14px', lg: '16px' }}>
                    Courses
                  </Text>
                </Box>
                <Box>
                  <Image
                    src="/images/public_available/home_page_img.png"
                    alt="Homepage image"
                    width={415}
                    height={542}
                  />
                </Box>
              </Box>
            </Flex>
          </Flex>

          <Box>
            <Box mb={{ base: '0 ', lg: '40px' }}>
              <Heading
                as="h2"
                margin="0 0 16px 0"
                lineHeight="31.92px"
                fontWeight="700"
                fontSize={{ base: '24px ', lg: '32px' }}
                textAlign={{
                  base: 'center',
                  xl: 'left',
                }}>
                Popular topics to learn now
              </Heading>
            </Box>

            <Flex>
              <Box
                width="100%"
                display="flex"
                gap={{ base: '17px', lg: '20px' }}
                alignItems="center"
                justifyContent="center"
                flexWrap="wrap">
                <Box
                  display="flex"
                  flexDirection="column"
                  gap="8px"
                  alignItems="center"
                  background="#fff"
                  width={{ base: '163px', md: '183px' }}
                  boxShadow="0px 8px 16px 0px rgba(0, 0, 0, 0.08)"
                  padding="16px 0"
                  borderRadius="8px">
                  <Box
                    bg="#C3E7F7"
                    margin="4px"
                    width={{ base: '40px', lg: '40px' }}
                    background="#FFF"
                    boxShadow="0px 6px 12px 0px rgba(0, 0, 0, 0.10)"
                    height="40px"
                    display="flex"
                    justifyContent="center"
                    borderRadius="7px">
                    <Image src="/icons/design_home.svg" width={24} height={24} alt="UI UX Icon" />
                  </Box>

                  <Text as="span" fontWeight="700" fontSize="16px" lineHeight="21.28px">
                    UI/UX Design
                  </Text>
                </Box>

                <Box
                  display="flex"
                  gap="16px"
                  flexDirection="column"
                  alignItems="center"
                  background="#FFF"
                  width={{ base: '163px', md: '183px' }}
                  boxShadow="0px 8px 16px 0px rgba(0, 0, 0, 0.08)"
                  padding="16px 0"
                  borderRadius="8px">
                  <Box
                    bg="#C3E7F7"
                    margin="4px"
                    width="40px"
                    background="#FFF"
                    boxShadow="0px 6px 12px 0px rgba(0, 0, 0, 0.10)"
                    height="40px"
                    display="flex"
                    justifyContent="center"
                    borderRadius="7px">
                    <Image
                      src="/icons/marketing_home.svg"
                      width={24}
                      height={24}
                      alt="UI UX Icon"
                    />
                  </Box>

                  <Text as="span" fontWeight="700" fontSize="16px" lineHeight="21.28px">
                    Digital Marketing
                  </Text>
                </Box>

                <Box
                  display="flex"
                  gap="16px"
                  flexDirection="column"
                  alignItems="center"
                  background="#FFF"
                  width={{ base: '163px', md: '183px' }}
                  boxShadow="0px 8px 16px 0px rgba(0, 0, 0, 0.08)"
                  padding="16px 0"
                  borderRadius="8px">
                  <Box
                    bg="#C3E7F7"
                    margin="4px"
                    width="40px"
                    background="#FFF"
                    boxShadow="0px 6px 12px 0px rgba(0, 0, 0, 0.10)"
                    height="40px"
                    display="flex"
                    justifyContent="center"
                    borderRadius="7px">
                    <Image src="/icons/react_home.svg" width={24} height={24} alt="React" />
                  </Box>
                  <Text as="span" fontWeight="700" fontSize="16px" lineHeight="21.28px">
                    React JS
                  </Text>
                </Box>

                <Box
                  display="flex"
                  gap="16px"
                  flexDirection="column"
                  alignItems="center"
                  background="#FFF"
                  width={{ base: '163px', md: '183px' }}
                  boxShadow="0px 8px 16px 0px rgba(0, 0, 0, 0.08)"
                  padding="16px 0"
                  borderRadius="8px">
                  <Box
                    bg="#C3E7F7"
                    margin="4px"
                    width="40px"
                    background="#FFF"
                    boxShadow="0px 6px 12px 0px rgba(0, 0, 0, 0.10)"
                    height="40px"
                    display="flex"
                    justifyContent="center"
                    borderRadius="7px">
                    <Image
                      src="/icons/management_home.svg"
                      width={24}
                      height={24}
                      alt="Management"
                    />
                  </Box>
                  <Text as="span" fontWeight="700" fontSize="16px" lineHeight="21.28px">
                    HRM
                  </Text>
                </Box>

                <Box
                  display="flex"
                  gap="16px"
                  flexDirection="column"
                  alignItems="center"
                  background="#FFF"
                  width={{ base: '163px', md: '183px' }}
                  boxShadow="0px 8px 16px 0px rgba(0, 0, 0, 0.08)"
                  padding="16px 0"
                  borderRadius="8px">
                  <Box
                    bg="#C3E7F7"
                    margin="4px"
                    width="40px"
                    background="#FFF"
                    boxShadow="0px 6px 12px 0px rgba(0, 0, 0, 0.10)"
                    height="40px"
                    display="flex"
                    justifyContent="center"
                    borderRadius="7px">
                    <Image src="/icons/design_home.svg" width={24} height={24} alt="Management" />
                  </Box>

                  <Text as="span" fontWeight="700" fontSize="16px" lineHeight="21.28px">
                    Graphic Design
                  </Text>
                </Box>

                <Box
                  display="flex"
                  gap="16px"
                  flexDirection="column"
                  alignItems="center"
                  background="#FFF"
                  width={{ base: '163px', md: '183px' }}
                  boxShadow="0px 8px 16px 0px rgba(0, 0, 0, 0.08)"
                  padding="16px 0"
                  borderRadius={8}>
                  <Box
                    bg="#C3E7F7"
                    margin="4px"
                    width="40px"
                    background="#FFF"
                    boxShadow="0px 6px 12px 0px rgba(0, 0, 0, 0.10)"
                    height="40px"
                    display="flex"
                    justifyContent="center"
                    borderRadius="7px">
                    <Image src="/icons/target_home.svg" width={24} height={24} alt="Target" />
                  </Box>
                  <Text as="span" fontWeight="700" fontSize="16px" lineHeight="21.28px">
                    SMM
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>

      <Container maxW="1200px" margin="0 auto" padding={{ base: '0 16px', xl: '0' }}>
        <Box
          mb={{
            base: '36px ',
            md: '148px ',
          }}>
          <Box
            color="#222222"
            maxW="667px"
            margin={{
              base: '0 auto 20px ',
              md: '0 auto 40px ',
            }}
            textAlign="center">
            <Heading
              lineHeight={{
                base: '31.92px',
                lg: '42.56px',
              }}
              fontSize={{ base: '24px', lg: '32px' }}
              fontWeight="700"
              margin="0 0 16px 0"
              as="h2">
              What is Persona?
            </Heading>
            <Text fontSize="16px" fontWeight="400" color="#696984" lineHeight="21.28px">
              Skilline is a platform that allows educators to create online classes whereby they can
              store the course materials online; manage assignments, quizzes and exams; monitor due
              dates; grade results and provide students with feedback all in one place.
            </Text>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            flexWrap={{ base: 'wrap', lg: 'nowrap' }}
            gap="20px">
            <Box
              width="590px"
              borderRadius="20px"
              padding="45px 0"
              display="flex"
              alignItems="center"
              flexDirection="column">
              <Box>
                <Image src="./icons/home_icon_indeviduals.svg" alt="" width={108} height={108} />
              </Box>

              <Text
                mt="8px"
                color="#BABABA"
                margin="0 0 16px 0"
                lineHeight="42.56px"
                fontSize="32px"
                fontWeight="700">
                for
                <span style={{ color: '#1F1646', marginLeft: '15px', textTransform: 'uppercase' }}>
                  individuals
                </span>
              </Text>

              <Text
                color="#FF6131"
                fontSize="16px"
                fontWeight="700"
                lineHeight="21.28px"
                margin="0"
                display="flex"
                gap="8px">
                Start a class today
                <Image src="/icons/not_found_icon.svg" alt="Arrow icon" width={24} height={24} />
              </Text>
            </Box>

            <Box
              width="590px"
              bg="#F6FCFF"
              borderRadius="20px"
              padding="45px 0"
              display="flex"
              alignItems="center"
              flexDirection="column">
              <Box width="108px" height="108px">
                <Image src="./icons/home_icon_kids.svg" alt="Kids Icon" width={108} height={108} />
              </Box>

              <Text
                color="#BABABA"
                mt="8px"
                margin="0 0 16px 0"
                lineHeight="42.56px"
                fontSize="32px"
                fontWeight="700">
                for
                <span style={{ color: '#1F1646', marginLeft: '15px' }}>Kids</span>
              </Text>

              <Text
                color="#FF6131"
                fontSize="16px"
                fontWeight="700"
                lineHeight="21.28px"
                margin="0"
                display="flex"
                gap="8px">
                Start a class today
                <span>
                  <Image src="/icons/not_found_icon.svg" alt="Arrow icon" width={24} height={24} />
                </span>
              </Text>
            </Box>
          </Box>
        </Box>

        <Box mb={{ base: '36px', lg: '148px' }}>
          <Box color="#222222" maxW="846px" margin="0 auto 40px" textAlign="center">
            <Heading
              lineHeight={{ base: '31.92px', xl: '42.56px' }}
              fontSize={{ base: '24px', xl: '32px' }}
              fontWeight="700"
              margin="0 0 16px 0"
              as="h2">
              Talent Transformation Program
            </Heading>
            <Text fontSize="16px" fontWeight="400" color="#696984" lineHeight="21.28px">
              Where the classroom becomes your launchpad, and knowledge takes flight through
              hands-on experience and face-to-face guidance.
            </Text>
          </Box>

          <Box>
            <Flex
              justifyContent={{
                base: 'center',
                lg: 'space-between',
                xl: 'space-between',
              }}
              color="#222222"
              flexWrap={{ base: 'wrap', lg: 'nowrap' }}
              gap={{ base: '26px', lg: '60px' }}>
              <Box
                width="424px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center">
                <Image src="/icons/student_hat.svg" alt="Should icon" width={128} height={128} />
                <Text
                  display={{ base: 'none', lg: 'block' }}
                  textAlign="center"
                  fontSize="32px"
                  fontWeight="700"
                  lineHeight="42.56px"
                  margin="36px 0 0 0">
                  We believe that our transformation program will transform not only your knowledge
                  in the IT world but also in your life
                </Text>
              </Box>

              <Box width="654px">
                <Box
                  gap={{
                    base: '24px',
                    lg: '60px',
                  }}
                  display="flex">
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Box width="24px" height="24px">
                      <Image
                        src="/icons/done_icon_homepage.svg"
                        alt="Done"
                        width={24}
                        height={24}
                      />
                    </Box>

                    <Box width="2px" height="100%" bg="#1F1646"></Box>
                  </Box>

                  <Box mb="64px">
                    <Heading
                      margin="0 0 16px 0"
                      as="h3"
                      lineHeight={{
                        base: '26.6px',
                        lg: '31.92px',
                      }}
                      fontSize={{
                        base: '20px',
                        lg: '24px',
                      }}
                      fontWeight="700"
                      color="#222222">
                      Free access to the maintenance
                    </Heading>
                    <Text
                      margin="0"
                      color="#5B5B5B"
                      lineHeight="21.28px"
                      fontSize="16px"
                      fontWeight="400">
                      The period of courses at a business academy represents an immersive
                      educational journey designed to provide students with comprehensive knowledge,
                      practical skills, and a deep understanding of various aspects of the business
                      world. This period typically encompasses a structured curriculum that covers
                      fundamental business principles, specialized coursework, and hands-on training
                      aimed at nurturing well-rounded professionals with the ability to thrive in
                      diverse business environments.
                    </Text>
                  </Box>
                </Box>

                <Box
                  gap={{
                    base: '24px',
                    lg: '60px',
                  }}
                  display="flex">
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Box width="24px" height="24px">
                      <Image
                        src="/icons/done_icon_homepage.svg"
                        alt="Done"
                        width={24}
                        height={24}
                      />
                    </Box>

                    <Box width="2px" height="100%" bg="#1F1646"></Box>
                  </Box>

                  <Box mb="64px">
                    <Heading
                      margin="0 0 16px 0"
                      as="h3"
                      lineHeight={{
                        base: '26.6px',
                        lg: '31.92px',
                      }}
                      fontSize={{
                        base: '20px',
                        lg: '24px',
                      }}
                      fontWeight="700"
                      color="#222222">
                      Providing an authentic report on web performance
                    </Heading>
                    <Text
                      margin="0"
                      color="#5B5B5B"
                      lineHeight="21.28px"
                      fontSize="16px"
                      fontWeight="400">
                      By providing hands-on training, interactive workshops, and industry-relevant
                      case studies, our business academy ensures that students gain a deep
                      understanding of business fundamentals and are well-prepared to tackle complex
                      challenges in the workplace. The practical application of learned concepts
                      allows students to develop problem-solving skills, strategic thinking, and
                      effective decision-making abilities, which are essential for thriving in the
                      dynamic business environment.
                    </Text>
                  </Box>
                </Box>

                <Box
                  gap={{
                    base: '24px',
                    lg: '60px',
                  }}
                  display="flex">
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Box width="24px" height="24px">
                      <Image
                        src="/icons/done_icon_homepage.svg"
                        alt="Done"
                        width={24}
                        height={24}
                      />
                    </Box>

                    <Box width="2px" height="100%" bg="#1F1646"></Box>
                  </Box>

                  <Box>
                    <Heading
                      margin="0 0 16px 0"
                      as="h3"
                      lineHeight={{
                        base: '26.6px',
                        lg: '31.92px',
                      }}
                      fontSize={{
                        base: '20px',
                        lg: '24px',
                      }}
                      fontWeight="700"
                      color="#222222">
                      Achieving your loyalty and feedback
                    </Heading>
                    <Text
                      margin="0"
                      color="#5B5B5B"
                      lineHeight="21.28px"
                      fontSize="16px"
                      fontWeight="400">
                      Passing exams at persona business academy signifies the culmination of
                      rigorous preparation, dedication, and a comprehensive understanding of the
                      fundamental concepts and principles within the realm of business studies. It
                      reflects a student's ability to apply theoretical knowledge to practical
                      scenarios, demonstrate critical thinking skills, and showcase a deep
                      comprehension of various business disciplines. The process of passing exams at
                      a business academy often involves thorough preparation, including extensive
                      study of course materials, active participation in classroom discussions, and
                      engagement in collaborative learning activities.
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box mb={{ base: '36px', lg: '148px' }}>
          <Box
            color="#222222"
            maxW="846px"
            margin={{
              base: '0 auto 20px',
              lg: '0 auto 40px',
            }}
            textAlign="center">
            <Heading
              lineHeight={{
                base: '31.92px',
                lg: '42.56px',
              }}
              fontSize={{ base: '24px', lg: '32px' }}
              fontWeight="700"
              margin="0 0 16px 0"
              as="h2">
              Explore Inspiring Courses
            </Heading>
            <Text fontSize="16px" fontWeight="400" color="#696984" margin="0" lineHeight="21.28px">
              We drive our clients growth through innovation and hard work
            </Text>
          </Box>

          <Flex flexDirection="column" gap={16}>
            <UnorderedList
              margin="0"
              listStyleType="none"
              display="flex"
              justifyContent="center"
              gap="16px"
              flexWrap="wrap">
              {Array.from({ length: 7 }, (_, index: number) => index).map((index: number) => (
                <OutlinedButton key={index}>Design</OutlinedButton>
              ))}
            </UnorderedList>
            <UnorderedList
              margin="0"
              listStyleType="none"
              display={{ base: 'none', md: 'flex', xl: '"flex"' }}
              gap="16px"
              justifyContent="center">
              {Array.from({ length: 4 }, (_, index: number) => index).map((index: number) => (
                <OutlinedButton key={index}>Design </OutlinedButton>
              ))}
            </UnorderedList>
          </Flex>
        </Box>
      </Container>

      <Box
        maxWidth="1920px"
        padding={{ base: '0 16px', lg: '0 ' }}
        margin={{
          base: '0 auto 36px',
          lg: '0 auto 148px',
        }}>
        <Flex
          padding={{ base: '0', lg: '46px 59px  0 0' }}
          borderRadius={{
            base: 'none',
            lg: ' 0 74px 74px 0',
          }}
          bg={{
            base: 'transparent',
            lg: '#ECF7FC',
          }}
          gap="24px"
          maxW="1560px"
          alignItems="center"
          flexWrap={{
            base: 'wrap',
            lg: 'nowrap',
          }}
          justifyContent={{
            base: 'center',
            lg: 'flex-end',
          }}>
          <Box>
            <Image src="/icons/middle_school_kids.png" alt="Kids" width={774} height={403} />
          </Box>

          <Box width="424px" textAlign="center">
            <Heading
              lineHeight="42.56px"
              fontWeight="700"
              fontSize={{
                base: '30px',
                md: '32px',
              }}
              margin="0 0 16px 0">
              Persona Kids Academy
            </Heading>
            <Text fontWeight="400" fontSize="16px" lineHeight="21.28px" margin="0 0 24px 0">
              Building the leaders of tomorrow, one young entrepreneur at a time. Join us at our
              Kid's Business Academy and let your creativity soar beyond imagination.
            </Text>

            <Box>
              <Link
                display="flex"
                justifyContent="center"
                gap="8px"
                fontSize="16px"
                {...commonFontStyle}
                color="#FF6131">
                Explore courses
                <Image src="/icons/not_found_icon.svg" alt="Arrow" width={24} height={24} />
              </Link>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Container maxW="1200px" margin="0 auto" padding={{ base: '0 16px', xl: '0' }}>
        <Box mb={{ base: '36px', lg: '148px' }}>
          <Box textAlign="center" maxW="564px" m="0 auto">
            <Heading
              lineHeight={{
                base: '31.92px',
                lg: '42.56px',
              }}
              fontWeight="700"
              fontSize={{ base: '24px', lg: '32px' }}
              margin="0 0 16px 0">
              Short Online Courses
            </Heading>
            <Box mb="16px">
              <Link
                display="flex"
                justifyContent="center"
                gap="8px"
                fontWeight={{
                  base: '400',
                  md: '700',
                  xl: '700',
                }}
                fontSize="16px"
                lineHeight="21.28px"
                color={{
                  base: '#222222',
                  md: '#FF6131',
                }}>
                Get your subscribtion
                <Box display={{ base: 'none', md: 'block' }}>
                  <Image src="/icons/not_found_icon.svg" alt="Arrow" width={24} height={24} />
                </Box>
              </Link>
            </Box>
            <Text fontWeight="400" fontSize="16px" lineHeight="21.28px" margin="0 0 24px 0">
              bite-sized, flexible learning Upskill, reskill or pursue a passion with short courses
              across every subject, whether youre a beginner or already an expert.
            </Text>
          </Box>

          <Box
            display="flex"
            flexWrap={{ base: 'wrap', lg: 'nowrap' }}
            justifyContent={{
              base: 'center',
              lg: 'spacebetween',
            }}
            gap="20px"
            margin="40px 0">
            {Array.from({ length: 3 }, (_, i) => ({
              id: i,
              courseTitle: 'Graphic Design',
              courseDescription:
                'Get inspired by this revived W.H. Audens Hymn to the United Nations.',
              rating: 4.8,
            })).map(course => (
              <CourseCard {...course} key={course.id} />
            ))}
          </Box>

          <Box
            display="flex"
            justifyContent={{
              base: 'center',
              xl: 'flex-end',
            }}>
            <Link lineHeight="21.28px" fontSize="16px" fontWeight="400">
              View all courses
            </Link>
          </Box>
        </Box>

        <Box mb={{ base: '36px', lg: '148px' }}>
          <Heading
            textAlign="center"
            margin={{
              base: '0 0 16px 0',
            }}
            as="h3"
            color="#222222"
            fontWeight="700"
            fontSize={{ base: '24px', lg: '32px' }}
            lineHeight={{
              base: '31.92px',
              lg: '42.56px',
            }}>
            Only Qualified Articles
          </Heading>

          <Box
            display="flex"
            flexWrap="wrap"
            gap="40px 20px"
            justifyContent={{
              base: 'center',
            }}
            padding="0">
            {Array.from({ length: 4 }, (_, i) => ({
              id: i,
              articleTitle: 'How to Build a Design System if youre...',
              articleDescription:
                'Its always hard to be the only person in a company who is responsible for product design. Your day can be insanely...',
              articleDate: 'March 01, 2021',
              viewCount: 440,
            })).map((article, i) => (
              <ArticleItem {...article} key={i} />
            ))}
          </Box>
        </Box>

        <Box mb={{ base: '36px', lg: '148px' }}>
          <Box textAlign="center" maxW="419px" m="0 auto" mb="20px">
            <Heading lineHeight="42.56px" fontWeight="700" fontSize="30" margin="0 0 16px 0">
              Top Trainers
            </Heading>
            <Text
              fontWeight="400"
              fontSize="16px"
              lineHeight="21.28px"
              margin={{
                base: '"0 0 16px 0"',
                lg: '"0 0 24px 0"',
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </Text>
          </Box>

          <Box
            margin={{
              base: '0',
              xl: '40px 0 0 0',
            }}
            display="flex"
            gap="20px"
            flexWrap="wrap"
            justifyContent="center">
            {trainers.map(trainer => (
              <TrainerCard key={trainer.id} {...trainer} />
            ))}
          </Box>
        </Box>

        <Box mb={{ base: '36px', lg: '148px' }}>
          <Heading
            textAlign="center"
            margin="0"
            as="h3"
            lineHeight={{
              base: '31.92px',
              lg: '42.56px',
            }}
            fontSize={{ base: '24px', md: '32px' }}
            fontWeight="700">
            Our Partners
          </Heading>

          <Box
            display="flex"
            maxWidth="820px"
            margin={{
              base: '16px auto 0',
              md: '40px auto 0',
            }}
            gap="34px"
            alignItems="center"
            flexWrap="wrap"
            justifyContent={{
              base: 'center',
              lg: 'space-between',
            }}>
            <Box width="118px" height="32px">
              <Image
                src="/images/public_available/partners_icon_holding.png"
                alt="Partner Icon"
                width={118}
                height={32}
              />
            </Box>
            <Box width="99px" height="32px">
              <Image
                src="/images/public_available/partners_icon_ware.png"
                alt="Partner Icon"
                width={99}
                height={32}
              />
            </Box>
            <Box width="114px" height="32px">
              <Image
                src="/images/public_available/partners_icon_oki.png"
                alt="Partner Icon"
                width={114}
                height={32}
              />
            </Box>
            <Box width="70px" height="32px">
              <Image
                src="/images/public_available/partners_icon_vilpe.png"
                alt="Partner Icon"
                width={70}
                height={32}
              />
            </Box>
            <Box width="99px" height="32px" display={{ base: 'none', lg: 'block' }}>
              <Image
                src="/images/public_available/partners_icon_ware.png"
                alt="Partner Icon"
                width={99}
                height={32}
              />
            </Box>

            <Box width="118px" height="32px" display={{ base: 'none', lg: 'block' }}>
              <Image
                src="/images/public_available/partners_icon_holding.png"
                alt="Partner Icon"
                width={118}
                height={32}
              />
            </Box>
          </Box>
        </Box>

        <Box mb={{ base: '36px', lg: '148px' }}>
          <Heading
            textAlign="center"
            m="0"
            as="h3"
            lineHeight={{
              base: '31.92px',
              md: '42.56px',
            }}
            fontSize={{ base: '24px', md: '32px' }}
            fontWeight="700">
            Why Students Love Persona
          </Heading>

          <Box
            display="flex"
            gap="20px"
            justifyContent="center"
            margin={{
              base: '16px 0 0 0',
              md: '36px 0 0 0',
              lg: '40px 0 0 0',
            }}
            flexWrap={{ base: 'wrap', lg: 'nowrap' }}>
            {studentsFeedback.map((feedback, i) => (
              <StudentFeedback key={i} {...feedback} bg={i === 1 ? '#ffefea' : '#ECF7FC'} />
            ))}
          </Box>
        </Box>
      </Container>

      <Box
        maxWidth="100%"
        bg="#1F1646"
        margin={{ base: '0', lg: '148px 0' }}
        padding={{
          base: '40px 10px',
          lg: '40px 0',
        }}
        color="#fff">
        <Box maxW="794px" margin="0 auto" textAlign="center">
          <Heading as="h2" margin="0" pb="16px" fontSize="28px" lineHeight="34.13px">
            Have a question?
          </Heading>
          <Text as="p" margin="0" pb="24px">
            Were always on the lookout for great talent. Want to join us on our mission to help
            great teams grow? Check out our openings to see where you fit in.
          </Text>
          <Button
            bg="#F3F4F6"
            color="#1F1646"
            height="32px"
            fontSize="16px"
            lineHeight="21.28px"
            fontWeight="400">
            Contact us
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
