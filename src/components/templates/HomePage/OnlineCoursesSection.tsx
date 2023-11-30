import React, { FC } from 'react';
import { Box, Heading, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';
import CourseCard from '@/components/molecules/CourseCard';

type OnlineCoursesSectionProps = {};

const OnlineCoursesSection: FC<OnlineCoursesSectionProps> = () => {
  return (
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
          courseDescription: 'Get inspired by this revived W.H. Audens Hymn to the United Nations.',
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
  );
};

export default OnlineCoursesSection;
