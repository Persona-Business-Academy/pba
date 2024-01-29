import React, { FC } from 'react';
import { Container } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { JobService } from '@/api/services/JobService';

const FirstSection = dynamic(() => import('./FirstSection'));
const OpenPositions = dynamic(() => import('./OpenPositions'));
const LastSection = dynamic(() => import('./LastSection'));

type Props = {};

const CareersPage: FC<Props> = async () => {
  const jobs = await JobService.getJobList();

  return (
    <Container
      maxWidth={1200}
      margin="0 auto"
      my={{ base: '36px', md: '80px', xl: '148px' }}
      px={{ base: '16px', xl: '0' }}>
      <FirstSection />
      <OpenPositions jobs={jobs} />
      <LastSection />
    </Container>
  );
};

export default CareersPage;
