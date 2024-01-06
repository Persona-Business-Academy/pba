import React, { FC, memo } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import TimeIcon from '/public/icons/time_icon.svg';
import LevelIcon from '/public/icons/level_icon.svg';
import LessonsIcon from '/public/icons/book_icon.svg';
import HeartIcon from '/public/icons/heart_icon.svg';
import { OfflineCourse } from '@/models/offline-course.model';
import { generateAWSUrl } from '@/utils/helpers/common';

type OfflineCourseItemProps = {
  courseData: OfflineCourse;
};

const OfflineCourseItem: FC<OfflineCourseItemProps> = ({ courseData }) => {
  console.log(courseData);
  return (
    <Flex
      padding="16px"
      gap="16px"
      borderRadius="12px"
      border="1px solid #F3F4F6"
      backgroundColor="#FFFFFF">
      <Box width={240} height={154} position="relative">
        <Image src={generateAWSUrl(courseData.coverPhoto)} alt="" fill />
      </Box>
      <Flex flexDirection="column" justifyContent="space-between" flex={1} color="#222222">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          fontWeight={700}
          marginBottom="8px">
          <Text fontSize="24px">{courseData.title}</Text>
          <Text fontSize="16px" display="flex" alignItems="center">
            {courseData.price}
            <Image src="/icons/dram.svg" alt="dram" width={13} height={13} />
            /month
          </Text>
        </Flex>
        <Text
          fontWeight={400}
          fontSize="16px"
          marginBottom="16px"
          maxHeight="110px"
          overflow="hidden"
          display="-webkit-box"
          sx={{
            WebkitLineClamp: 3, // Number of lines to be shown
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis', // Ensure this is in camelCase
          }}>
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
              <Text>{courseData.courseLevel}</Text>
            </Flex>
            <Flex gap="8px">
              {<LessonsIcon />}
              <Text>{courseData.lessonsCount} lessons</Text>
            </Flex>
          </Flex>
          <Flex>{<HeartIcon />}</Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(OfflineCourseItem);
