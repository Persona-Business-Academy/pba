'use client';
import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { Box, FormLabel, Text } from '@chakra-ui/react';
import Checkbox from '@/components/atoms/Checkbox';
import useQueryParams from '@/hooks/useQueryParam';

type CourseFilterItemProps = {
  id: number;
  queryParams: any;
  title: string;
  value: string;
  filterBy: 'duration' | 'topic' | 'skill-level';
};

const CourseFilterItem: FC<CourseFilterItemProps> = ({ title, value, filterBy, queryParams }) => {
  const { addQueryParam, removeQueryParam } = useQueryParams();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onChangeHandler = useCallback(() => {
    setIsChecked(prevState => !prevState);
  }, []);

  useEffect(() => {
    setIsChecked(queryParams[value]);
  }, [queryParams, value]);

  useEffect(() => {
    if (isChecked) {
      addQueryParam({ filterBy, value });
    } else {
      removeQueryParam({ filterBy, value });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

  return (
    <Box py={4} _hover={{ bg: '#0000000' }}>
      <Text display="flex" gap="12px">
        <Checkbox
          onChange={onChangeHandler}
          isChecked={!!isChecked}
          checked={!!isChecked}
          id={title}
        />
        <FormLabel htmlFor={title} cursor="pointer" margin={0}>
          {title}
        </FormLabel>
      </Text>
    </Box>
  );
};

export default memo(CourseFilterItem);
