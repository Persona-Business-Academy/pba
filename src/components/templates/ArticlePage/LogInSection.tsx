import React, { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';

type LogInSectionProps = {
  description: string;
};

const LogInSection: FC<LogInSectionProps> = ({ description }) => {
  return (
    <Box as="section" maxWidth="793px" margin={{ base: '36px auto 36px', md: '64px auto 0' }}>
      <Text
        margin="0"
        _firstLetter={{ fontSize: '44px', fontWeight: '700' }}
        color="#222222"
        fontSize="16px"
        fontWeight={400}
        lineHeight="normal"
        fontStyle="normal"
        mb="50px">
        {description}
      </Text>
    </Box>
  );
};

export default LogInSection;
