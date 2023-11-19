import React, { FC, useCallback, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Checkbox from '@/components/atoms/Checkbox';
import useQueryParams from '@/hooks/useQueryParam';

type CourseFilterItemProps = {
  title: string;
  value: string;
};

const CourseFilterItem: FC<CourseFilterItemProps> = ({ title, value }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { setQueryParams } = useQueryParams();

  const onChangeHandler = useCallback(() => {
    setIsChecked(prevState => !prevState);
    setQueryParams({ key: value, value, addingFilter: !isChecked });
  }, [isChecked, setQueryParams, value]);

  return (
    <Box py={4} my={2} _hover={{ bg: '#0000000' }}>
      <Text display="flex" gap="12px">
        <Checkbox onChange={onChangeHandler} checked={isChecked} />
        {title}
      </Text>
    </Box>
  );
};

export default CourseFilterItem;
