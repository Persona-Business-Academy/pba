import React, { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { teachersData } from '@/types/member';
const TrainerCard = dynamic(() => import('@/components/molecules/TrainerCard'));

type TrainersProps = {};

const Trainers: FC<TrainersProps> = () => {
  return (
    <Box mb={{ base: '36px', lg: '148px' }}>
      <Box textAlign="center" maxW="419px" m="0 auto" mb="20px">
        <Heading lineHeight="42.56px" fontWeight="700" fontSize="30" margin="0 0 16px 0">
          Top Trainers
        </Heading>
      </Box>

      <Box
        margin={{
          base: '0',
          xl: '40px 0 0 0',
        }}
        display="flex"
        gap="20px"
        flexWrap="wrap"
        justifyContent="center">
        {teachersData.map(trainer => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
      </Box>
    </Box>
  );
};

export default Trainers;
