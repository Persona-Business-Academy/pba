'use client';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Box, FormLabel, Text } from '@chakra-ui/react';
import Checkbox from '@/components/atoms/Checkbox';
import useQueryParams from '@/hooks/useQueryParam';

type CourseFilterItemProps = {
  title: string;
  value: string;
  filterBy: 'duration' | 'topic' | 'skill-level';
};

const CourseFilterItem: FC<CourseFilterItemProps> = ({ title, value, filterBy }) => {
  const [isChecked, setIsChecked] = useState<null | boolean>(null);
  const { addQueryParam, removeQueryParam } = useQueryParams();

  const onChangeHandler = useCallback(() => {
    setIsChecked(prevState => !prevState);
  }, []);

  useEffect(() => {
    if (isChecked === null) return;
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
        <Checkbox onChange={onChangeHandler} checked={!!isChecked} id={title} />
        <FormLabel htmlFor={title} cursor="pointer" margin={0}>
          {title}
        </FormLabel>
      </Text>
    </Box>
  );
};

export default CourseFilterItem;
