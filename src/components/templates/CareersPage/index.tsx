'use client';
import React, { FC } from 'react';
import { Container } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const Section1 = dynamic(() => import('./Section1'));
const OpenPositions = dynamic(() => import('./OpenPositions'));
const LastSection = dynamic(() => import('./LastSection'));

type Props = {};

const CareersPage: FC<Props> = () => {
  return (
    <Container
      maxWidth={1200}
      margin="0 auto"
      my={{ base: '36px', md: '80px', xl: '148px' }}
      px={{ base: '16px', xl: '0' }}>
      <Section1 />
      <OpenPositions />
      <LastSection />
    </Container>
  );
};

export default CareersPage;
