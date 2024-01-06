'use client';
import React, { FC, PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import RemovableButton from '@/components/atoms/RemovableButton';
import SearchInput from '@/components/atoms/SearchInput';
import CourseFilter from '@/components/molecules/CourseFilter';
import useQueryParams from '@/hooks/useQueryParam';
import { QueryParams } from '@/types/queryParams';
import { durationList, skillLevelList, topicList } from '@/utils/constants/filters';

type CoursesProps = {};

type FilterType = {
  title: string;
  id: number;
  value: string;
  queryKey: string;
};

const initData: QueryParams = {
  'front-end': false,
  'back-end': false,
  'graphic-design': false,
  'ui-ux-design': false,
  beginner: false,
  intermediate: false,
  advanced: false,
  '100': false,
  '200': false,
  '300': false,
};

const OnlineOfflineCourseList: FC<PropsWithChildren<CoursesProps>> = ({ children }) => {
  const { removeQueryParam } = useQueryParams();
  const [queryParams, setQueryParams] = useState<QueryParams>(initData);
  const [filteredData, setFilteredData] = useState<Array<FilterType>>([]);
  const params = useSearchParams()!;
  const searchParams = useMemo(() => new URLSearchParams(params), [params]);

  const topicData = useMemo(() => topicList.flatMap(item => item.categoryList), []);

  const getListToCheck = useCallback(
    (key: string) => {
      switch (key) {
        case 'topic':
          return topicData;
        case 'skill-level':
          return skillLevelList;
        default:
          return durationList;
      }
    },
    [topicData],
  );

  useEffect(() => {
    const updatedQueryParams: Partial<QueryParams> = {};
    const filteredDataList: { title: string; id: number; value: string; queryKey: string }[] = [];

    if (![...searchParams].length) {
      setQueryParams(initData);
      setFilteredData([]);
    }
    searchParams.forEach((queryValues, queryKey) => {
      const queryNames = queryValues.split(',');

      console.log(queryNames);
      const listToCheck = getListToCheck(queryKey);

      listToCheck.forEach(({ value, id, title }) => {
        if (queryNames.includes(value)) {
          updatedQueryParams[value as keyof QueryParams] = true;
          filteredDataList.push({ title, id, value, queryKey });
        } else {
          updatedQueryParams[value as keyof QueryParams] = false;
        }
      });
    });

    setQueryParams(prevState => ({ ...prevState, ...updatedQueryParams }) as QueryParams);
    setFilteredData(filteredDataList);
  }, [getListToCheck, params, searchParams, topicData]);

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
            <CourseFilter queryParams={queryParams} />
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
            {/* <Flex
              justifyContent="center"
              alignItems="center"
              gap="38px"
              color="#5B5B5B"
              fontWeight={600}
              fontSize="14px"
              lineHeight="20px">
              <Text>{<ArrowLeft />}</Text>
              <Text>1</Text>
              <Text>2</Text>
              <Text>3</Text>
              <Text>4</Text>
              <Text>5</Text>
              <Text>6</Text>
              <Text>7</Text>
              <Text>...</Text>
              <Text>52</Text>
              <Text>{<ArrowRight />}</Text>
            </Flex> */}
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
