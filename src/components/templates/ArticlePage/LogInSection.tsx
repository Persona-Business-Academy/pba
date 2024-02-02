import React, { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Button } from '@/components/atoms';

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
        fontStyle="normal">
        {description}
      </Text>

      <Flex
        justifyContent="center"
        alignItems="center"
        margin={{ base: '20px auto 36px', md: '40px 0 64px' }}
        textAlign="center"
        color="#222222"
        fontWeight={400}
        lineHeight="normal"
        fontStyle="normal"
        fontSize="16px"
        gap="8px">
        <Text as="span">Already have an account?</Text>
        <Button
          width="auto"
          color="#3CB4E7"
          bg="white"
          variant="link"
          _hover={{ bg: '#white' }}
          _active={{
            bg: '#white',
          }}
          _focus={{
            bg: '#white',
          }}>
          Log in
        </Button>
      </Flex>

      {/* <Heading
        className={segoe.className}
        fontWeight={700}
        margin="0 auto"
        fontSize={{ base: '24px', md: '32px' }}
        lineHeight="42.56px"
        fontStyle="normal"
        textAlign="center">
        Get to the end of the story Understand the worlds biggest issues—free for a month.
      </Heading>

      <Box display="flex" justifyContent="center" mt="24px">
        <Button
          width="235px"
          lineHeight="21.28px"
          fontSize="16px"
          fontWeight="700"
          height="53px"
          padding="16px 32px">
          View subscription options
        </Button>
      </Box> */}
    </Box>
  );
};

export default LogInSection;
