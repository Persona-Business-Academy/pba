'use client';
import React, { FC, memo } from 'react';
import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';

type TrainerCardProps = {
  src: string;
  firstName: string;
  lastName: string;
  profession: string;
  enrolledStudents: number;
  graduatedStudents: number;
};

const TrainerCard: FC<TrainerCardProps> = ({
  firstName,
  lastName,
  profession,
  enrolledStudents,
  graduatedStudents,
  src,
}) => {
  return (
    <Box
      margin={{
        base: '0',
        lg: '40px 0 0 0',
      }}
      display="flex"
      gap="20px"
      flexWrap="wrap"
      justifyContent="center">
      <Box maxW="285px">
        <Box
          overflow="hidden"
          position="relative"
          bg="pink"
          borderTopRightRadius="72px"
          borderTopLeftRadius="12px"
          width="285px"
          height="271px">
          <Image src={src} alt="Treners" fill objectFit="cover" />
        </Box>

        <UnorderedList
          textAlign="center"
          fontSize="16px"
          lineHeight="21.28px"
          fontWeight="400"
          m="0"
          listStyleType="none"
          padding="16px 10px">
          <ListItem mb="8px" fontWeight="700">
            {firstName} {lastName}
          </ListItem>
          <ListItem pb="10px" borderBottom="1px solid #F3F4F6">
            {profession}
          </ListItem>
          <ListItem pt="10px" mb="6px">
            Enrolled students: {enrolledStudents}
          </ListItem>
          <ListItem>Graduated students: {graduatedStudents}</ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default memo(TrainerCard);
