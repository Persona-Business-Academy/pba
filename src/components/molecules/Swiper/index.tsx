'use client';
import React, { FC } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { OfflineCourseVideo } from '@prisma/client';
import ReactPlayer from 'react-player';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { generateAWSUrl } from '@/utils/helpers/common';

type SwiperProps = {
  offlineCourseVideo: OfflineCourseVideo[];
  courseName: string;
};

const Slide: FC<SwiperProps> = ({ offlineCourseVideo, courseName }) => {
  return (
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
          how we pass PBA {courseName} courses
        </Heading>
      </Box>

      <Box
        maxWidth="1200px"
        margin="0 auto"
        display="flex"
        flexDirection="column"
        alignItems="center">
        <Box textAlign="center" lineHeight="21.28px" fontSize="12px" fontWeight="400" mb="16px">
          <Text as="span">Watch Video</Text>
        </Box>

        <Flex alignItems="center" gap={{ base: '0', sm: '0', md: '30px', lg: '80px', xl: '132px' }}>
          <Box
            maxWidth={{
              base: '350px',
              lg: '800px',
            }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            margin={0}
            position="relative">
            <Flex width="100%" height="100%" justifyContent="center" alignItems="center">
              <Swiper
                id="main"
                navigation
                pagination={{ clickable: true }}
                slidesPerView={1}
                spaceBetween={5}
                modules={[Navigation, Pagination]}>
                {offlineCourseVideo.map((video: OfflineCourseVideo) => (
                  <SwiperSlide key={video.id} className="">
                    <ReactPlayer
                      url={generateAWSUrl(video.key)}
                      playing={false}
                      controls={true}
                      width="70%"
                      height="70%"
                      style={{
                        margin: '0 auto',
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Slide;
