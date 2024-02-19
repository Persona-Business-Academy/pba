import React, { FC } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { OFFLINE_COURSES_ROUTE } from '@/utils/constants/routes';

type Props = {};

const Courses: FC<Props> = () => {
  return (
    <Flex
      flexDirection="column"
      mt="148px"
      alignItems="center"
      width="100%"
      height="800px"
      gap="264px">
      <Heading> Your Courses </Heading>

      <Text>
        You aren't enrolled in any classes.{' '}
        <Text
          as={Link}
          href={OFFLINE_COURSES_ROUTE}
          textAlign="center"
          display="inline-block"
          fontSize="16px"
          fontWeight={400}
          color="#222"
          borderBottom="1px solid"
          borderColor="#222"
          paddingBottom="2px"
          _hover={{
            color: '#5B5B5B',
            borderColor: '#5B5B5B',
          }}>
          Find some here
        </Text>
      </Text>
    </Flex>
  );
};

export default Courses;
