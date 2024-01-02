import React, { FC, memo } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import TimeIcon from '/public/icons/time_icon.svg';
import LevelIcon from '/public/icons/level_icon.svg';
import LessonsIcon from '/public/icons/book_icon.svg';
import HeartIcon from '/public/icons/heart_icon.svg';
import { OfflineCourse } from '@/models/offline-course.model';

type OfflineCourseItemProps = {
  courseData: OfflineCourse;
};

const OfflineCourseItem: FC<OfflineCourseItemProps> = ({ courseData }) => {
  return (
    <Flex
      padding="16px"
      gap="16px"
      borderRadius="12px"
      border="1px solid #F3F4F6"
      backgroundColor="#FFFFFF">
      <Box>
        <Image
          src={'/images/public_available/offline_courses.jpg'}
          alt=""
          width={240}
          height={154}
        />
      </Box>
      <Flex flexDirection="column" justifyContent="space-between" flex={1} color="#222222">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          fontWeight={700}
          marginBottom="8px">
          <Text fontSize="24px">{courseData.title}</Text>
          <Text fontSize="16px">{courseData.price}/month</Text>
        </Flex>
        <Text fontWeight={400} fontSize="16px" marginBottom="16px">
          {courseData.subTitle}
        </Text>
        <Flex justifyContent="space-between">
          <Flex width="332px" justifyContent="space-between" alignItems="center">
            <Flex gap="8px">
              {<TimeIcon />}
              <Text>{courseData.totalDuration} month</Text>
            </Flex>
            <Flex gap="8px">
              {<LevelIcon />}
              <Text>{courseData.level}</Text>
            </Flex>
            <Flex gap="8px">
              {<LessonsIcon />}
              <Text>50 lessons</Text>
            </Flex>
          </Flex>
          <Flex>{<HeartIcon />}</Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(OfflineCourseItem);
