import React, { FC, useCallback, useState } from 'react';
import { Box, FormLabel, Text } from '@chakra-ui/react';
import Checkbox from '@/components/atoms/Checkbox';
import { useCourseFilter } from '@/contexts/CourseFilterContext';

type CourseFilterItemProps = {
  id: number;
  title: string;
  value: string;
  filterBy: 'duration' | 'title' | 'skill-level';
};

const CourseFilterItem: FC<CourseFilterItemProps> = ({ id, title, filterBy, value }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { setCourseNameHandler, removeCourseNameHandler } = useCourseFilter();

  const onChangeHandler = useCallback(() => {
    const updatedValue = !isChecked;
    setIsChecked(updatedValue);

    if (updatedValue) {
      setCourseNameHandler({
        id,
        name: title,
        filterBy,
        value,
      });
    } else {
      removeCourseNameHandler(id);
    }
  }, [filterBy, id, isChecked, removeCourseNameHandler, setCourseNameHandler, title, value]);

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
