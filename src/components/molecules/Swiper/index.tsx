'use client';
import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

type SwiperProps = {};

const Slide: FC<SwiperProps> = () => {
  return (
    <Flex width="100%" height="100%" justifyContent="center" alignItems="center">
      <Swiper
        onSwiper={swiper => console.log(swiper)}
        id="main"
        navigation
        pagination={{ clickable: true }}
        spaceBetween={3}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        onInit={swiper => console.log('Swiper initialized!', swiper)}
        onSlideChange={swiper => {
          console.log('Slide index changed to: ', swiper.activeIndex);
        }}
        onReachEnd={() => console.log('Swiper end reached')}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Flex>
  );
};

export default Slide;
