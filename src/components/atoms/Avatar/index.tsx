import React, { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { generateBrightColor } from '@/utils/helpers/avatar';

type AvatarProps = {
  firstName: string;
  lastName: string;
};

const Avatar: FC<AvatarProps> = ({ firstName, lastName }) => {
  return (
    <Flex
      height="100%"
      width="100%"
      bg={generateBrightColor()}
      justifyContent="center"
      alignItems="center">
      <Text fontSize="38px" fontWeight={700} color="#fff">
        {firstName[0].toUpperCase()} {lastName[0].toUpperCase()}
      </Text>
    </Flex>
  );
};

export default Avatar;
