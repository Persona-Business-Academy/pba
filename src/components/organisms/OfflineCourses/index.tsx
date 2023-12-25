import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { OnlineCourseService } from '@/api/services/OnlineCourseService';
import RemovableButton from '@/components/atoms/RemovableButton';
import CourseFilter from '@/components/molecules/CourseFilter';
import ArrowLeft from '/public/icons/left_arrow.svg';
import ArrowRight from '/public/icons/right_arrow.svg';
import InputSearchIcon from '/public/icons/search_icon.svg';
import OnlineCourseItem from '@/components/molecules/OnlineCourseItem';
import useQueryParams from '@/hooks/useQueryParam';
import { QueryParams } from '@/types/queryParams';
import { durationList, skillLevelList, topicList } from '@/utils/constants/filters';
import { montserrat } from '@/utils/constants/fonts';

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

const OfflineCourses: FC<CoursesProps> = () => {
  const { removeQueryParam } = useQueryParams();
  const [queryParams, setQueryParams] = useState<QueryParams>(initData);
  const [search, setSearch] = useState('');
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

  console.log(searchParams.getAll('skill-level'));

  const queryString = useMemo(() => {
    let queryStr = ``;
    searchParams.forEach((value, key) => {
      queryStr += `${key}=${value}&`;
    });
    return queryStr;
  }, [searchParams]);

  const { data } = useQuery({
    queryKey: ['online-courses'],
    queryFn: () => OnlineCourseService.getOnlineCourseList(`q=${search}&${queryString}`),
  });

  return (
    <>
      <Flex
        as="section"
        backgroundColor="#F6FCFF"
        borderRadius="0 0 72px 72px"
        padding="64px 0"
        marginTop="24px"
        marginBottom="96px">
        <Flex width="794px" margin="0 auto" flexDirection="column" alignItems="center">
          <Text
            className={montserrat.className}
            fontSize="44px"
            fontWeight={700}
            color="#222222"
            marginBottom="16px">
            Courses
          </Text>
          <Text fontSize="16px" fontWeight={400} color="#222222" marginBottom="32px">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying.
          </Text>
          <InputGroup>
            <Input
              placeholder="What are you looking for?"
              borderRadius="12px"
              border="1px solid #F9FAFB"
              background="#FFF"
              color="#C0C0C0"
              fontSize="16px"
              fontWeight={400}
              padding="12px 16px"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <InputRightElement width="45px">{<InputSearchIcon />}</InputRightElement>
          </InputGroup>
        </Flex>
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
            <Flex alignItems="center" gap={16}>
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
              {(data || []).map(onlineCourse => (
                <OnlineCourseItem key={onlineCourse.id} {...onlineCourse} />
              ))}
            </Flex>
            <Flex
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

export default OfflineCourses;
