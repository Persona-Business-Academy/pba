'use client';
import React, { FC, memo } from 'react';
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
import dynamic from 'next/dynamic';
import { durationList, skillLevelList, topicList } from '@/utils/constants/filters';
import { segoe } from '@/utils/constants/fonts';
const CourseFilterItem = dynamic(() => import('../CourseFilterItem'), { ssr: false });

type CourseFilterProps = {
  queryParams: any;
};

const CourseFilter: FC<CourseFilterProps> = ({ queryParams }) => {
  return (
    <Flex flexDirection="column" gap={32}>
      <Accordion allowMultiple>
        {topicList.map(({ title, id, categoryList }) => (
          <AccordionItem key={id}>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              {categoryList.map(({ id, title, value }) => (
                <CourseFilterItem
                  title={title}
                  id={id}
                  key={id}
                  value={value}
                  filterBy="topic"
                  queryParams={queryParams}
                />
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
          {skillLevelList.map(({ id, title, value }, index) => (
            <CourseFilterItem
              title={title}
              id={id}
              key={index}
              value={value}
              filterBy="skill-level"
              queryParams={queryParams}
            />
          ))}
        </Box>
      </Flex>

      <Flex gap={16} flexDirection="column" m={0}>
        <Text as="span" color="#222" fontWeight={700} fontSize="16px" className={segoe.className}>
          Duration
        </Text>
        <Box m={0}>
          {durationList.map(({ id, title, value }, index) => (
            <CourseFilterItem
              id={id}
              title={title}
              key={index}
              value={value}
              filterBy="duration"
              queryParams={queryParams}
            />
          ))}
        </Box>
      </Flex>
    </Flex>
  );
};

export default memo(CourseFilter);
