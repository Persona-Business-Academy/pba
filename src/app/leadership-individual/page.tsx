'use client';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { segoe } from '@/constants/fonts';

export default function LeadershipIndividual() {
  return (
    <Container
      maxWidth={1200}
      margin="0 auto"
      my={{ base: '36px', xl: '148px' }}
      px={{ base: '16px', xl: '0' }}>
      <Flex flexDirection="column" gap="24px">
        <Flex
          flexDirection="column"
          gap={{ base: '8px', md: '14px' }}
          maxWidth="387px"
          textAlign="center"
          margin={{ base: '0 auto', lg: '0' }}>
          <Heading
            color="#222"
            fontSize="28px"
            fontWeight={700}
            className={segoe.className}
            fontStyle="normal"
            lineHeight="normal">
            Tigran Harutyunyan
          </Heading>
          <Text
            color="#5b5b5b"
            fontSize="16px"
            fontWeight={400}
            fontStyle="normal"
            lineHeight="normal">
            Co-founder of Persona
          </Text>
        </Flex>
        <Flex gap="20px" flexWrap={{ base: 'wrap', lg: 'nowrap' }}>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            margin={{ base: '0 auto', lg: '0' }}>
            <Box
              width={{ base: '343px', lg: '387px' }}
              height="332px"
              backgroundColor="blueviolet"
              borderRadius="10.556px 10.556px 70.374px 10.556px"
              marginBottom="24px"></Box>
            <Text
              as={Link}
              href="#"
              display="inline-block"
              textAlign="center"
              fontSize="16px"
              fontWeight={400}
              textDecorationLine="underline">
              View LinkedIn page
            </Text>
          </Box>
          <Box
            maxWidth="793px"
            color="#000"
            fontSize="16px"
            fontWeight={400}
            fontStyle="normal"
            lineHeight="normal">
            <Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
              McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
              through the cites of the word in classical literature, discovered the undoubtable
              source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
              treatise on the theory of ethics, very popular during the Renaissance. The first line
              of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
              Cicero are also reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham. <br></br>\ <br></br>Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
              classical Latin literature from 45 BC, making it over 2000 years old. Richard
              McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
              through the cites of the word in classical literature, discovered the undoubtable
              source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
              treatise on the theory of ethics, very pop
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
