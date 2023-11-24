'use client';
import { Box, Container, Flex, Heading, Link, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Button } from '@/components/atoms';
import CourseCard from '@/components/molecules/CourseCard';

const TrainerCard = dynamic(() => import('@/components/molecules/TrainerCard'));
const ArticleItem = dynamic(() => import('@/components/molecules/ArticleItem'));
const StudentFeedback = dynamic(() => import('@/components/molecules/StudentFeedback'));
const Section1 = dynamic(() => import('./Section1'));
const Section2 = dynamic(() => import('./Section2'));

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
        <Section1 />
      </Box>

      <Section2 />

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
            height="53px"
            width="168px"
            borderRadius="6px"
            fontSize="16px"
            lineHeight="21.28px"
            border="1px solid #F3F4F6"
            fontWeight="400"
            _hover={{
              bg: 'F3F4F6',
            }}
            _focus={{
              bg: 'F3F4F6',
            }}>
            Contact us
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
