'use client';

import React, { FC } from 'react';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Button } from '@/components/atoms';

type Props = {};

const PbaCredit: FC<Props> = () => {
  return (
    <>
      <Container
        maxWidth={1097}
        margin="0 auto"
        marginTop="116px"
        marginBottom="377px"
        fontStyle="normal"
        lineHeight="normal"
        padding={0}>
        <Heading
          textAlign="center"
          color="#222222"
          fontWeight={700}
          fontSize="44px"
          marginBottom="80px">
          PBA credit
        </Heading>
        <Flex as="section" gap="121px">
          <Flex flexDirection="column" maxWidth="488px">
            <Text color="#222222" fontWeight={700} fontSize="28px" marginBottom="17px">
              Christmas Gift Card
            </Text>
            <Text color="#222222" fontWeight={400} fontSize="16px" marginBottom="16px">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer read more
            </Text>
            <Box marginBottom="22px">
              <Image
                src="/images/public_available/pba_gift_card_image.jpg"
                alt="PBA Gift Card"
                width={488}
                height={315}
              />
            </Box>
            <Text>Use Gift Card</Text>
          </Flex>
          <Flex flexDirection="column" maxWidth="488px">
            <Text color="#222222" fontWeight={700} fontSize="28px" marginBottom="17px">
              Christmas Gift Card
            </Text>
            <Text color="#222222" fontWeight={400} fontSize="16px" marginBottom="16px">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer read more
            </Text>
            <Box marginBottom="22px">
              <Image
                src="/images/public_available/pba_gift_card_image.jpg"
                alt="PBA Gift Card"
                width={488}
                height={315}
              />
            </Box>
            <Text>Use Gift Card</Text>
          </Flex>
        </Flex>
        <Flex maxWidth="996px" flexDirection="column" textAlign="center" marginTop="54px">
          <Text color="#000" fontWeight={700} fontSize="28px" marginBottom="17px">
            Do you want to give it someone?
          </Text>
          <Text color="#000" fontWeight={400} fontSize="16px" marginBottom="24px">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <Button
            alignSelf="center"
            width="139px"
            height="53px"
            padding="16px 32px"
            color="#FFFFFF">
            Contact us
          </Button>
        </Flex>
      </Container>
    </>
  );
};

export default PbaCredit;
