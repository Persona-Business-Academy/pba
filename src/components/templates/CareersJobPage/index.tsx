'use client';
import React, { FC } from 'react';
import { Container } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const IntroForJob = dynamic(() => import('./IntroForJob'));
const DescriptionSection = dynamic(() => import('./DescriptionSection'));
const ApplicationForm = dynamic(() => import('./ApplicationForm'));

type Props = {};

const CareersJobPage: FC<Props> = () => {
  return (
    <Container maxW="1200px" padding={{ base: '0 16px', xl: '0' }}>
      <IntroForJob />
      <DescriptionSection />
      <ApplicationForm />
    </Container>
  );
};

export default CareersJobPage;
