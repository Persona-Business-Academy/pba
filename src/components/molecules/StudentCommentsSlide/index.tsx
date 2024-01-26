'use client';
import React, { FC, useCallback, useState } from 'react';
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { CourseComment } from '@prisma/client';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';

type StudentCommentSlideProps = {
  comments: CourseComment[];
};

const StudentCommentSlide: FC<StudentCommentSlideProps> = ({ comments }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const handleSlideChange = useCallback((swiper: any) => {
    setActiveSlideIndex(swiper.activeIndex);
  }, []);

  console.log({ activeSlideIndex });

  return (
    <Box
      sx={{
        '& .swiper-button-next': {
          'background-image': 'url(/icons/chevron-right.svg)',
        },
        '& .swiper-button-prev': {
          'background-image': 'url(/icons/chevron-left.svg)',
        },
      }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        onSwiper={swiper => console.log(swiper)}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        onSlideChange={handleSlideChange}>
        {comments.map((comment: CourseComment) => (
          <SwiperSlide key={comment.id}>
            <Box
              borderRadius="15px"
              margin="0 auto"
              maxWidth="794px"
              padding={{
                base: '24px ',
                sm: '24px',
                md: '24px',
                lg: ' 48px 90px',
                xl: ' 68px 124px',
              }}
              color="#222222"
              textAlign="center"
              bg="#FDF1F0">
              <Text
                as="p"
                fontWeight="700"
                lineHeight={{
                  base: '21.28px ',
                  sm: '21.px',
                  md: '21.px',
                  lg: '42.56px',
                  xl: '42.56px',
                }}
                fontSize={{ base: '16px ', sm: '16px', md: '32px', lg: '32px', xl: '32px' }}>
                {comment.headline}
              </Text>
              <Text as="span" fontSize="16px" lineHeight="18.75px">
                {comment.text}
              </Text>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      <Flex justifyContent="center" gap="40px" height="222px" mt="55px">
        {comments.map((_, index) => (
          <Avatar
            key={index}
            src={`/icons/feedback_students_third.png`}
            width={activeSlideIndex === index ? '126px' : '72px'}
            height={activeSlideIndex === index ? '132px' : '72px'}
            transition="all 0.3s"
          />
        ))}
      </Flex>
    </Box>
  );
};

export default StudentCommentSlide;
