'use client';
import React, { FC, useCallback, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Checkbox from '@/components/atoms/Checkbox';

type CourseFilterItemProps = {
  title: string;
  value: string;
  filterBy: 'duration' | 'topic' | 'skill-level';
};

const CourseFilterItem: FC<CourseFilterItemProps> = ({ title, value, filterBy }) => {
  const [isChecked, setIsChecked] = useState<null | boolean>(null);

  const onChangeHandler = useCallback(() => {
    setIsChecked(prevState => !prevState);
  }, []);

  // useEffect(() => {
  //   if (isChecked === null) return;
  //   if (isChecked) {
  //     addQueryParam({ filterBy, value });
  //   } else {
  //     removeQueryParam({ filterBy, value });
  //   }
  // }, [addQueryParam, filterBy, isChecked, removeQueryParam, value]);

  return (
    <Box py={4} _hover={{ bg: '#0000000' }}>
      <Text display="flex" gap="12px">
        <Checkbox onChange={onChangeHandler} checked={!!isChecked} />
        {title}
      </Text>
    </Box>
  );
};

export default CourseFilterItem;
