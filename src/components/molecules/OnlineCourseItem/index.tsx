import React, { FC, memo } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import TimeIcon from '/public/icons/time_icon.svg';
import LevelIcon from '/public/icons/level_icon.svg';
import LessonsIcon from '/public/icons/book_icon.svg';
import HeartIcon from '/public/icons/heart_icon.svg';

type OnlineCourseItemProps = {};

const OnlineCourseItem: FC<OnlineCourseItemProps> = () => {
  return (
    <Flex
      padding="16px"
      gap="16px"
      borderRadius="12px"
      border="1px solid #F3F4F6"
      backgroundColor="#FFFFFF">
      <Box>
        <Image src="/images/public_available/offline_courses.jpg" alt="" width={240} height={154} />
      </Box>
      <Box maxWidth="608px" color="#222222">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          fontWeight={700}
          marginBottom="8px">
          <Text fontSize="24px">Interior design</Text>
          <Text fontSize="16px">100$/month</Text>
        </Flex>
        <Text fontWeight={400} fontSize="16px" marginBottom="16px">
          This professional interior designing course will help you gain practical knowledge on how
          to create and manage your own design projects right through to running your own interior
          design business.This professional interior designing course will....
        </Text>
        <Flex justifyContent="space-between">
          <Flex width="332px" justifyContent="space-between" alignItems="center">
            <Flex gap="8px">
              {<TimeIcon />}
              <Text>3 month</Text>
            </Flex>
            <Flex gap="8px">
              {<LevelIcon />}
              <Text>Open level</Text>
            </Flex>
            <Flex gap="8px">
              {<LessonsIcon />}
              <Text>50 lessons</Text>
            </Flex>
          </Flex>
          <Flex>{<HeartIcon />}</Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default memo(OnlineCourseItem);
