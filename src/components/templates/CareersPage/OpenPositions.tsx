import React, { FC } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { Job } from '@prisma/client';
import Link from 'next/link';
import { Button } from '@/components/atoms';
import { segoe } from '@/utils/constants/fonts';
import ButtonArrowRight from '/public/icons/arrow_right_careers.svg';
import { CAREERS_ROUTE } from '@/utils/constants/routes';

type OpenPositionsProps = {
  jobs: Job[];
};

const OpenPositions: FC<OpenPositionsProps> = ({ jobs }) => {
  return (
    <Flex as="section" flexDirection="column" my={{ base: '36px', md: '80px', xl: '148px' }}>
      <Flex
        flexDirection="column"
        maxWidth={794}
        textAlign="center"
        m="0 auto"
        gap={{ base: '16px', md: '20px' }}>
        <Heading
          className={segoe.className}
          fontSize={{ base: '28px', sm: '32px' }}
          fontWeight={{ base: 600, xl: 700 }}
          color="#222"
          lineHeight="normal"
          fontStyle="normal">
          Open Positions
        </Heading>
        <Text
          fontSize={16}
          fontWeight={400}
          color="#5B5B5B"
          lineHeight="24px"
          fontStyle="normal"
          textAlign={{ base: 'left', md: 'center' }}>
          If you are an enthusiastic professional eager to inspire and empower the next generation
          of creative professionals, we want to hear from you! To apply, please submit your resume,
          a cover letter outlining your teaching philosophy, and any relevant certifications.
        </Text>
      </Flex>

      <Flex
        rowGap={{ base: '0', md: '24px' }}
        flexDirection="column"
        mt={{ base: '20px', md: '40px' }}>
        <Flex columnGap="20px" flexWrap={{ base: 'wrap', md: 'nowrap' }}>
          {jobs.map((job: Job) => (
            <Flex
              key={job.id}
              justifyContent="space-between"
              as={Link}
              href={`${CAREERS_ROUTE}/job/${job.id}`}
              flexBasis="590px"
              pb="24px"
              borderBottom="1px solid #CDCBCF">
              <Flex
                flexDirection="column"
                gap={{ base: '8px', md: '16px' }}
                textAlign={{ base: 'center', sm: 'left' }}>
                <Heading
                  fontSize={{ base: '24px', md: '28px' }}
                  fontWeight={700}
                  color="#222"
                  lineHeight="normal"
                  fontStyle="normal">
                  {job.title}
                </Heading>
                <Text
                  fontSize="16px"
                  lineHeight="normal"
                  fontStyle="normal"
                  fontWeight={400}
                  color="#5B5B5B">
                  {job.contractType}
                </Text>
              </Flex>
              <Button
                bg="#FFFFFF"
                display={{ base: 'block', sm: 'none' }}
                _hover={{ bg: '#fff' }}
                _focus={{ bg: '#fff' }}>
                <ButtonArrowRight />
              </Button>
              <Button
                alignSelf="center"
                width="127px"
                height="53px"
                padding="16px 32px"
                display={{ base: 'none', sm: 'block' }}>
                Join now
              </Button>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Button
        bg="#fff"
        color="#1F1646"
        _hover={{ bg: '#F3F4F6' }}
        _focus={{ bg: '#E9E9E9' }}
        borderRadius="6px"
        border="1px solid #F3F4F6"
        padding="16px 32px"
        height="53px"
        margin="0 auto"
        mt={{ base: '20px', md: '64px' }}>
        View more
      </Button>
    </Flex>
  );
};

export default OpenPositions;
