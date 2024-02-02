import React, { FC } from 'react';
import { Box, Flex, Heading, Input, InputGroup, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Button } from '@/components/atoms';

type SubscribeSectionProps = {};

const SubscribeSection: FC<SubscribeSectionProps> = () => {
  return (
    <Flex
      as="section"
      backgroundColor="#F6FCFF"
      pt={{ base: '36px', md: '80px', xl: '151.95px' }}
      pb={{ base: '36px', md: '80px', xl: '126.26px' }}>
      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        gap={{ base: '16px', md: '20px' }}
        maxWidth={1200}
        margin="0 auto"
        px={{ base: '16px', xl: '0' }}
        alignItems="center">
        <Box width={{ base: '100%', lg: '590px' }}>
          <Heading
            mb="16px"
            lineHeight="normal"
            fontStyle="normal"
            color="#222222"
            fontSize={{ base: '28px', sm: '44px' }}
            fontWeight={{ base: 600, xl: 700 }}
            textAlign="center">
            Insights that drive innovation
          </Heading>
          <Text
            as="span"
            fontStyle="normal"
            lineHeight="normal"
            fontSize="16px"
            fontWeight={400}
            color="#747474">
            Lorem ipsum, or as it is sometimes known, is dummy text used in laying out print,
            graphic or web designs. The passage is attributed to an unknown typesetter in
          </Text>
          <Box>
            <InputGroup
              my="16px"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              border="1px solid #C0C0C0"
              padding="4px 4px 4px 16px"
              borderRadius="12px"
              outline="none">
              <Input
                height="100%"
                border="none"
                outline="none"
                _focusVisible={{ border: 'none' }}
                lineHeight="21.28px"
                fontSize="16px"
                fontWeight={400}
                placeholder="Your Email"
                _placeholder={{ color: '#DEDEDE' }}
              />

              <Button
                borderRadius="6px"
                p="12px 24px"
                lineHeight="14px"
                fontSize="14px"
                fontWeight={600}>
                Subscribe
              </Button>
            </InputGroup>
          </Box>
        </Box>
        <Box
          maxW={{ base: '100%', lg: '590px' }}
          height={{ base: 'auto', md: '388.7px' }}
          borderRadius="16px"
          overflow="hidden">
          <Image
            width={590}
            height={388.7}
            src="/images/public_available/article_img.jpg"
            alt="Article Image"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default SubscribeSection;
