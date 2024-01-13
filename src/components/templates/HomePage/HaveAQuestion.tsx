import { memo } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Button } from '@/components/atoms';

const HaveAQuestion = () => {
  return (
    <Box
      maxWidth="100%"
      bg="#1F1646"
      margin={{ base: '0', lg: '148px 0 0 0' }}
      padding={{
        base: '40px 10px',
        lg: '40px 0',
      }}
      color="#fff">
      <Box maxW="794px" margin="0 auto" textAlign="center">
        <Heading as="h2" margin="0" pb="16px" fontSize="28px" lineHeight="34.13px">
          Have a question?
        </Heading>
        <Text as="p" margin="0" pb="24px">
          Were always on the lookout for great talent. Want to join us on our mission to help great
          teams grow? Check out our openings to see where you fit in.
        </Text>
        <Button
          bg="#F3F4F6"
          color="#1F1646"
          height="53px"
          width="168px"
          borderRadius="6px"
          fontSize="16px"
          lineHeight="21.28px"
          border="1px solid #F3F4F6"
          fontWeight="400"
          _hover={{
            bg: 'F3F4F6',
          }}
          _focus={{
            bg: 'F3F4F6',
          }}>
          Contact us
        </Button>
      </Box>
    </Box>
  );
};

export default memo(HaveAQuestion);
