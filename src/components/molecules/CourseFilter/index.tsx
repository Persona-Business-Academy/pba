import React, { FC } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
import { durationList, filterList, skillLevelList } from '@/utils/constants/filters';
import { segoe } from '@/utils/constants/fonts';
import CourseFilterItem from '../CourseFilterItem';

type CourseFilterProps = {};

const CourseFilter: FC<CourseFilterProps> = () => {
  return (
    <Flex flexDirection="column" gap={32}>
      <Accordion allowToggle>
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
                <CourseFilterItem title={title} key={id} value={value} filterBy="topic" />
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      <Flex gap={16} flexDirection="column" m={0}>
        <Text as="span" color="#222" fontWeight={700} fontSize="16px" className={segoe.className}>
          Skill Level
        </Text>
        <Box m={0}>
          {skillLevelList.map(({ title, value }, index) => (
            <CourseFilterItem title={title} key={index} value={value} filterBy="skill-level" />
          ))}
        </Box>
      </Flex>

      <Flex gap={16} flexDirection="column" m={0}>
        <Text as="span" color="#222" fontWeight={700} fontSize="16px" className={segoe.className}>
          Duration
        </Text>
        <Box m={0}>
          {durationList.map(({ title, value }, index) => (
            <CourseFilterItem title={title} key={index} value={value} filterBy="duration" />
          ))}
        </Box>
      </Flex>
    </Flex>
  );
};

export default CourseFilter;
