import React, { FC, Fragment } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import { filterList } from '@/utils/constants/filters';
import CourseFilterItem from '../CourseFilterItem';

type CourseFilterProps = {};

const CourseFilter: FC<CourseFilterProps> = () => {
  return (
    <Fragment>
      <Accordion>
        {filterList.map(({ title, id, categoryList }) => (
          <AccordionItem key={id}>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              {categoryList.map(({ id, title, value }) => (
                <CourseFilterItem title={title} key={id} value={value} />
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Fragment>
  );
};

export default CourseFilter;
