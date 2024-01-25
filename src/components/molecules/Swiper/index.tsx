'use client';
import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { OfflineCourseVideo } from '@prisma/client';
import ReactPlayer from 'react-player';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { generateAWSUrl } from '@/utils/helpers/common';

import 'swiper/css';
import 'swiper/css/navigation';

type SwiperProps = {
  offlineCourseVideo: OfflineCourseVideo[];
};

const Slide: FC<SwiperProps> = ({ offlineCourseVideo }) => {
  console.log(generateAWSUrl(offlineCourseVideo[0].key), '+++++++++++++');

  return (
    <Flex
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      sx={{
        '& .swiper-button-next': {},
        '& .swiper-button-prev': {},
      }}>
      <Swiper
        id="main"
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={swiper => {
          console.log('Slide index changed to: ', swiper.activeIndex);
        }}
        onInit={swiper => console.log('Swiper initialized!', swiper)}
        onReachEnd={() => console.log('Swiper end reached')}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={30}
        modules={[Navigation, Pagination]}>
        {offlineCourseVideo.map((video: OfflineCourseVideo) => (
          <SwiperSlide key={video.id}>
            <ReactPlayer
              url={generateAWSUrl(video.key)}
              playing={false}
              controls={true}
              width="100%"
              height="100%"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

export default Slide;
