import React, { FC, useCallback, useState } from 'react';
import { Box, FormLabel, Text } from '@chakra-ui/react';
import Checkbox from '@/components/atoms/Checkbox';

type CourseFilterItemProps = {
  id: number;
  title: string;
  value: string;
  filterBy: 'duration' | 'course' | 'skill-level';
};

const CourseFilterItem: FC<CourseFilterItemProps> = ({ title }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onChangeHandler = useCallback(() => {
    const updatedValue = !isChecked;
    setIsChecked(updatedValue);
  }, [isChecked]);

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
