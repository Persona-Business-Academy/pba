'use client';

import React, { FC, PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { OfflineCourseService } from '@/api/services/OfflineCourseService';
import RemovableButton from '@/components/atoms/RemovableButton';
import SearchInput from '@/components/atoms/SearchInput';
import CourseFilter from '@/components/molecules/CourseFilter';
import useQueryParams from '@/hooks/useQueryParam';
import { CACHE_CONFIG, topicHandler } from '@/utils/constants/filters';

type CoursesProps = {};

type FilterType = {
  title: string;
  id: number;
  value: string;
  queryKey: string;
};

const OnlineOfflineCourseList: FC<PropsWithChildren<CoursesProps>> = ({ children }) => {
  const { removeQueryParam } = useQueryParams();
  const [queryParams, setQueryParams] = useState({});
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const params = useSearchParams()!;
  const searchParams = useMemo(() => new URLSearchParams(params), [params]);

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

  useEffect(() => {
    const courseIds = searchParams.getAll('course');
    const skillLevels = searchParams.getAll('skill-level');
    const durations = searchParams.getAll('duration');

    console.log({ offlineCourseSkillListData });

    const courseData = Object.values(offlineCourseGroupedListData || {})
      .flat()
      .filter(course => courseIds.map(id => +id).includes(course.id));

    console.log({ skillLevels });

    // setFilteredData(courseData);

    console.log({ courseData });
  }, [offlineCourseGroupedListData, searchParams]);

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
        title: courseDuration.totalDuration,
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
              queryParams={queryParams}
              courseTopicDataList={courseTopicDataList}
              courseSkillsDataList={courseSkillsDataList}
              courseDurationsDataList={courseDurationsDataList}
            />
          </Flex>
          <Flex flexDirection="column" width="895px" gap={16}>
            <Flex alignItems="center" gap={16} height="40px">
              <Text as="span">Filter By:</Text>

              <Flex flexWrap="wrap" gap="10px">
                {filteredData.map((data: FilterType) => (
                  <RemovableButton
                    key={data.value}
                    removeQueryParamHandler={() => {
                      removeQueryParam({ filterBy: data.queryKey, value: data.value });
                    }}>
                    {data.title}
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
