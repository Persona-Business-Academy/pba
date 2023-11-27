import React, { FC } from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { segoe } from '@/utils/constants/fonts';

type MissionSectionProps = {};

const MissionSection: FC<MissionSectionProps> = () => {
  return (
    <Container maxW="1200px" margin="0 auto">
      <Box className={segoe.className} maxW="784px" margin="0 auto 40px" color="#222222">
        <Heading
          margin={{ base: '0 0 16px 0', xl: '0 0 8px 0' }}
          fontSize="32px"
          lineHeight="42.56px"
          fontWeight="700"
          textAlign="center">
          Our Mission
        </Heading>
        <Text fontSize="16px" fontWeight="400" lineHeight="21.28px" margin="0">
          To create value - each day, every day - as we build an equal and accessible learning
          environment for all. The BYJU'S mission is to redefine how the world learns through
          relentless effort and innovation, breaking the barriers to quality education, and helping
          to build a learning ecosystem that will create leaders of tomorrow.
        </Text>
      </Box>

      <Box mb={{ base: '36px', md: '100px', xl: '148px' }} color="#222222">
        <Box
          display="flex"
          gap="24px"
          marginBottom={{ base: '20px', md: '30px', lg: '50px', xl: '148px' }}
          flexWrap={{ base: 'wrap', xl: 'nowrap' }}
          justifyContent="center">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign={{ base: 'start', md: 'center' }}
            width="562px">
            <Heading margin="0 0 16px 0" fontWeight="700" fontSize="24px" lineHeight="31.92px">
              Lorem ipsum, or lipsum as it is sometimes known, print, graphic or web designs.
            </Heading>
            <Text margin="0" lineHeight="21.28px" fontWeight="400" fontSize="16px">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Text>
          </Box>

          <Box display={{ base: 'none', lg: 'block' }}>
            <Image
              src="/images/public_available/courses_img.jpg"
              width={576}
              height={402}
              alt="Courses"
            />
          </Box>
        </Box>

        <Box
          display="flex"
          gap={24}
          marginBottom={{ base: '20px', md: '30px', lg: '50px', xl: '148px' }}
          justifyContent="center"
          flexWrap={{
            base: 'wrap-reverse',
            xl: 'nowrap',
          }}>
          <Box display={{ base: 'none', lg: 'block' }}>
            <Image
              src="/images/public_available/courses_img.jpg"
              width={576}
              height={402}
              alt="Courses"
            />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign={{ base: 'start', md: 'center' }}
            width="562px">
            <Heading margin="0 0 16px 0" fontWeight="700" fontSize="24px" lineHeight="31.92px">
              Lorem ipsum, or lipsum as it is sometimes known, print, graphic or web designs.{' '}
            </Heading>
            <Text margin="0" lineHeight="21.28px" fontWeight="400" fontSize="16px">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Text>
          </Box>
        </Box>

        <Box
          display="flex"
          gap={24}
          justifyContent="center"
          flexWrap={{ base: 'wrap', xl: 'nowrap' }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign={{ base: 'start', md: 'center' }}
            width="562px">
            <Heading margin="0 0 16px 0" fontWeight="700" fontSize="24px" lineHeight="31.92px">
              Lorem ipsum, or lipsum as it is sometimes known, print, graphic or web designs.{' '}
            </Heading>
            <Text margin="0" lineHeight="21.28px" fontWeight="400" fontSize="16px">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Text>
          </Box>

          <Box display={{ base: 'none', lg: 'block' }}>
            <Image
              src="/images/public_available/courses_img.jpg"
              width={576}
              height={402}
              alt="Courses"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default MissionSection;
