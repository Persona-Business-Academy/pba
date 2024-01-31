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
          Unlock your potential: Join us on a journey of innovation and growth. Explore open
          positions and be part of a team where your talents are valued and Ideas Are
          celebrated.Your next opportunity awaits – apply today and elevate your career with Persona
          Business Academy.
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
    </Flex>
  );
};

export default OpenPositions;
