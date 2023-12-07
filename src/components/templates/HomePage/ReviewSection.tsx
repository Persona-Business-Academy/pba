import React, { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
const StudentFeedback = dynamic(() => import('@/components/molecules/StudentFeedback'));

type ReviewSectionProps = {};

const ReviewSection: FC<ReviewSectionProps> = () => {
  const studentsFeedback = [
    {
      id: 1,
      feedbackText:
        'When I first came to Persona Business Academy, at Tigran Manukyans course, it seemed like I was on some new planet appeared (so everything was new and mixed).Then Manukyan the willingness of Tigran, Gagik and Tigran Harutyunyan, everything to explain thoroughly, patience and created As a result of the environment, Persona became more than just that organization providing quality knowledge. By visiting Persona, you are sure to get quality knowledge (not only in your chosen field) but also for sure you will have the most interesting and colorful course in life',
      studentAvatarSrc: '/icons/feed_dani.svg',
      firstName: 'Daniela',
      lastName: 'Zanazanyan',
      profession: 'Designer',
    },
    {
      id: 2,
      feedbackText:
        "Hi, I'm Garry, I've been trying my strength at IT for almost a year now, particularly in Front-End. Before learning about the PBA and joining its ranks, I received professional knowledge in 2 other different educational places. However I will not hide that they were not so satisfactory and sufficient for me. Accepting PBA and joining the ranks of students of Narek Boshyan's JavaScript course group, I realized how big a difference there is between previous and current studies in the organization of processes, their quality and level. And both the methodology of organizing the course in PBA and Narek Boshyan's Compassionate and individualized treatment of any student obligates us to study well and become leading professionals in the field.",
      studentAvatarSrc: '/icons/feed_garri.svg',
      firstName: 'Garri',
      lastName: 'Gevorgyan',
      profession: 'Web-developer',
    },
    {
      id: 3,
      feedbackText:
        "Hi, I'm Armine, attending HRM in PBA I gained new knowledge at the courses by discovering and loving that realm unknown to me. Thanks to my trainer Julieta Asatryan, new to increase the level of cognitive perception. The course gave not only new knowledge, but also friends and invaluable values in the form of innovative ideas",
      studentAvatarSrc: '/icons/feed_armine.svg',
      firstName: 'Armine',
      lastName: 'Hakobyan',
      profession: 'Desinger',
    },
  ];
  return (
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
  );
};

export default ReviewSection;
