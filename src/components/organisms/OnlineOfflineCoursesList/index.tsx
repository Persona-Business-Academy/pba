'use client';

import React, { FC, PropsWithChildren, useMemo } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { OfflineCourseService } from '@/api/services/OfflineCourseService';
import RemovableButton from '@/components/atoms/RemovableButton';
import SearchInput from '@/components/atoms/SearchInput';
import CourseFilter from '@/components/molecules/CourseFilter';
import { Course, useCourseFilter } from '@/contexts/CourseFilterContext';
import { CACHE_CONFIG, topicHandler } from '@/utils/constants/filters';

const OnlineOfflineCourseList: FC<PropsWithChildren> = ({ children }) => {
  const { courseNames, removeCourseNameHandler } = useCourseFilter();

  const { data: offlineCourseGroupedListData } = useQuery(
    ['groupedCourses'],
    OfflineCourseService.getOfflineCourseGroupedList,
    CACHE_CONFIG,
  );

  const { data: offlineCourseSkillListData } = useQuery(
    ['course-skills'],
    OfflineCourseService.getOfflineCourseSkillList,
    CACHE_CONFIG,
  );

  const { data: offlineCourseDurationsListData } = useQuery(
    ['course-durations'],
    OfflineCourseService.getOfflineCourseDurationList,
    CACHE_CONFIG,
  );

  const courseTopicDataList = useMemo(() => {
    if (offlineCourseGroupedListData) {
      return topicHandler(offlineCourseGroupedListData);
    }
    return [];
  }, [offlineCourseGroupedListData]);

  const courseSkillsDataList = useMemo(() => {
    if (offlineCourseSkillListData) {
      return offlineCourseSkillListData.map(courseLevel => ({
        id: courseLevel.id,
        title: courseLevel.courseLevel,
        value: courseLevel.courseLevel,
      }));
    }
    return [];
  }, [offlineCourseSkillListData]);

  const courseDurationsDataList = useMemo(() => {
    if (offlineCourseDurationsListData) {
      return offlineCourseDurationsListData.map(courseDuration => ({
        id: courseDuration.id,
        title: `${courseDuration.totalDuration} Months`,
        value: courseDuration.totalDuration,
      }));
    }
    return [];
  }, [offlineCourseDurationsListData]);

  return (
    <>
      <Flex
        as="section"
        backgroundColor="#F6FCFF"
        borderRadius="0 0 72px 72px"
        padding="64px 0"
        marginTop="24px"
        marginBottom="96px">
        <SearchInput />
      </Flex>
      <Flex
        flexDirection="column"
        maxWidth={1200}
        margin="0 auto"
        lineHeight="normal"
        fontStyle="normal">
        <Flex as="section" gap="20px" marginBottom="148px">
          <Flex flexDirection="column" width="285px">
            <CourseFilter
              courseTopicDataList={courseTopicDataList}
              courseSkillsDataList={courseSkillsDataList}
              courseDurationsDataList={courseDurationsDataList}
            />
          </Flex>
          <Flex flexDirection="column" width="895px" gap={16}>
            <Flex alignItems="center" gap={16} height="40px">
              <Text as="span">Filter By:</Text>

              <Flex flexWrap="wrap" gap="10px">
                {courseNames.map((course: Course) => (
                  <RemovableButton
                    key={course.id}
                    removeQueryParamHandler={() => {
                      removeCourseNameHandler(course.id);
                    }}>
                    {course.name}
                  </RemovableButton>
                ))}
              </Flex>
            </Flex>

            <Flex flexDirection="column" gap="16px" marginBottom="40px">
              {children}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        as="section"
        backgroundColor="#1F1646"
        borderRadius="0px 48px 48px 0"
        maxWidth="1560px"
        height="484px"
        marginBottom="148px">
        <Flex
          maxWidth={449}
          flexDirection="column"
          gap="24px"
          alignItems="center"
          justifyContent="center"
          color="#FFFFFF"
          textAlign="center"
          lineHeight="normal"
          fontStyle="normal"
          marginLeft="400px">
          <Text fontSize="32px" fontWeight={700}>
            How our skill management works
          </Text>
          <Text fontSize="16px" fontWeight={400}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
            graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
            century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
            for use in A Type Specimen Book. It usually Begins with:
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default OnlineOfflineCourseList;
