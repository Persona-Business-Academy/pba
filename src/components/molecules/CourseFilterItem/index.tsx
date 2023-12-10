import React, { FC, useCallback, useEffect, useState } from 'react';
import { Box, FormLabel, Text } from '@chakra-ui/react';
import Checkbox from '@/components/atoms/Checkbox';
import useQueryParams from '@/hooks/useQueryParam';
import { QueryParams } from '@/types/queryParams';

type CourseFilterItemProps = {
  id: number;
  queryParams: QueryParams;
  title: string;
  value: string;
  filterBy: 'duration' | 'topic' | 'skill-level';
};

const CourseFilterItem: FC<CourseFilterItemProps> = ({ title, value, filterBy, queryParams }) => {
  const { addQueryParam, removeQueryParam } = useQueryParams();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    setIsChecked(queryParams[value as keyof QueryParams]);
  }, [queryParams, value]);

  const toggleQueryParam = useCallback(
    (updatedValue: boolean) => {
      if (updatedValue) {
        addQueryParam({ filterBy, value });
      } else {
        removeQueryParam({ filterBy, value });
      }
    },
    [addQueryParam, filterBy, removeQueryParam, value],
  );

  const onChangeHandler = useCallback(() => {
    const updatedValue = !isChecked;
    setIsChecked(updatedValue);
    toggleQueryParam(updatedValue);
  }, [isChecked, toggleQueryParam]);

  return (
    <Box py={4} _hover={{ bg: '#0000000' }}>
      <Text display="flex" gap="12px">
        <Checkbox onChange={onChangeHandler} isChecked={isChecked} checked={isChecked} id={title} />
        <FormLabel htmlFor={title} cursor="pointer" margin={0}>
          {title}
        </FormLabel>
      </Text>
    </Box>
  );
};

export default CourseFilterItem;
