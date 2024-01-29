import React, { FC } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Job } from '@/models/careers.model';
import { segoe } from '@/utils/constants/fonts';

type DescriptionSectionProps = {
  job: Job;
};

const DescriptionSection: FC<DescriptionSectionProps> = ({ job }) => {
  return (
    <Box maxW="895px" marginBottom={{ base: '36px', lg: '148px' }} color="#222222">
      <Box mb={{ base: '16px', lg: ' 64px' }}>
        <Heading
          className={segoe.className}
          m={{ base: ' 0 0 16px 0', lg: ' 0 0 24px 0' }}
          fontSize={{ base: '24px', lg: ' 32px' }}
          lineHeight={{ base: '31.92px', lg: ' 42.56px' }}
          fontWeight="700">
          Job Description
        </Heading>
        <Text lineHeight="22px" fontSize="16px" fontWeight="400" fontStyle="normal">
          {job.description}
        </Text>
      </Box>

      <Box mb={{ base: '16px', lg: ' 64px' }}>
        <Heading
          className={segoe.className}
          m={{ base: ' 0 0 16px 0', lg: ' 0 0 24px 0' }}
          fontSize={{ base: '24px', lg: ' 32px' }}
          lineHeight={{ base: '31.92px', lg: ' 42.56px' }}
          fontWeight="700">
          Job Responsibilities
        </Heading>
        <Text lineHeight="22px" fontSize="16px" fontWeight="400" fontStyle="normal">
          {job.responsibilities}
        </Text>
      </Box>

      <Box>
        <Heading
          className={segoe.className}
          m={{ base: ' 0 0 16px 0', lg: ' 0 0 24px 0' }}
          fontSize={{ base: '24px', lg: ' 32px' }}
          lineHeight={{ base: '31.92px', lg: ' 42.56px' }}
          fontWeight="700">
          Requirement & Skills
        </Heading>
        <Text lineHeight="22px" fontSize="16px" fontWeight="400" fontStyle="normal">
          {job.requirements}
        </Text>
      </Box>
    </Box>
  );
};

export default DescriptionSection;
