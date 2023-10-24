'use client';
import React, { FC } from 'react';
import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  ListItem,
  Text,
  Textarea,
  UnorderedList,
} from '@chakra-ui/react';
import Image from 'next/image';
import { Button } from '@/components/atom';

type Props = {};

const CareersJob: FC<Props> = () => {
  return (
    <Container maxW="1201px" padding={{ base: '0 16px', xl: '0' }}>
      <Flex
        color="#222222"
        margin={{ base: '36px 0 36px', lg: '148px 0 41px', xl: ' 148px 0 41px' }}
        flexWrap="wrap"
        justifyContent="space-between"
        gap="24px">
        <Box>
          <Heading
            as="h2"
            noOfLines={1}
            margin="0"
            fontWeight="700"
            lineHeight="42.56px"
            fontSize="32px">
            HR Manager
          </Heading>
        </Box>
        <Box>
          <Button
            padding={{ base: '8px 14px', md: '16px 32px', lg: '16px 32px', xl: ' 16px 32px' }}
            height="53px"
            width="140px"
            lineHeight="21.28px"
            fontFamily="400"
            fontSize="16px">
            Apply now
          </Button>
        </Box>
      </Flex>

      <Box
        color="#222222"
        justifyContent="space-beetwen"
        display={{ base: 'block', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' }}
        maxWidth="470px"
        flexWrap="wrap"
        gap="40px"
        borderBottom="1px solid #BDBDBD"
        paddingBottom="24px">
        <UnorderedList
          margin={{ base: '0 0 20px 0', sm: '0', md: '0', lg: '0', xl: '0' }}
          listStyleType="none"
          fontSize="16px"
          lineHeight={{ base: '18.75px', sm: '0', md: '21.28px', lg: '21.28px', xl: '21.28px' }}>
          <ListItem fontWeight="700">Salary:</ListItem>
          <ListItem fontWeight="400">£24,000 - £26,000</ListItem>
        </UnorderedList>

        <UnorderedList
          margin={{ base: '0 0 20px 0', sm: '0', md: '0', lg: '0', xl: '0' }}
          listStyleType="none"
          fontSize="16px"
          lineHeight={{ base: '18.75px', sm: '0', md: '21.28px', lg: '21.28px', xl: '21.28px' }}>
          <ListItem fontWeight="700">Working hours:</ListItem>
          <ListItem fontWeight="400">10:00-18:00</ListItem>
        </UnorderedList>

        <UnorderedList margin="0" listStyleType="none" fontSize="16px" lineHeight="21.28px">
          <ListItem fontWeight="700">Contract type:</ListItem>
          <ListItem fontWeight="400">Full-time, Permanent</ListItem>
        </UnorderedList>
      </Box>

      <Box m={{ base: '24px 0 20px', md: '24px 0 40px', lg: ' 24px 0 40px', xl: '24px 0 40px' }}>
        <UnorderedList
          listStyleType="none"
          margin="0"
          fontSize="16px"
          fontWeight="400"
          lineHeight="21.28px">
          <ListItem marginBottom="8px">Opportunity for HR Manager to build the Team</ListItem>
          <ListItem>Opportunity to work with global counterparts</ListItem>
        </UnorderedList>
      </Box>

      <Box maxW="895px" marginBottom={{ base: '36px', lg: '148px', xl: '148px' }} color="#222222">
        <Box mb={{ base: '16px', lg: ' 64px', xl: '64px' }}>
          <Heading
            margin={{ base: '0 0 16px 0', lg: ' 0 0 24px 0', xl: '0 0 24px 0' }}
            fontSize={{ base: '24px', lg: ' 32px', xl: '32px' }}
            lineHeight={{ base: '31.92px', lg: ' 42.56px', xl: '42.56px' }}
            fontWeight="700">
            Job Description
          </Heading>
          <Text
            lineHeight={{ base: '18.75px', lg: ' 21.28px', xl: '21.28px' }}
            fontSize="16px"
            fontWeight="400"
            maxW="876px"
            margin="0">
            {`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
            the cites of the word in classical literature, discovered the undoubtable source. Lorem
            Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
            Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
            theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk
            of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
            1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from the 1914 translation
            by H. Rackham.`}
          </Text>
        </Box>

        <Box mb={{ base: '16px', lg: ' 64px', xl: '64px' }}>
          <Heading
            margin={{ base: '0 0 16px 0', lg: ' 0 0 24px 0', xl: '0 0 24px 0' }}
            fontSize={{ base: '24px', lg: ' 32px', xl: '32px' }}
            lineHeight={{ base: '31.92px', lg: ' 42.56px', xl: '42.56px' }}
            fontWeight="700">
            Job Responsibilities
          </Heading>
          <Text
            lineHeight={{ base: '18.75px', lg: ' 21.28px', xl: '21.28px' }}
            fontSize="16px"
            fontWeight="400"
            maxW="876px"
            margin="0">
            {`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
            the cites of the word in classical literature, discovered the undoubtable source. Lorem
            Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
            Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
            theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk
            of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
            1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from the 1914 translation
            by H. Rackham.`}
          </Text>
        </Box>

        <Box>
          <Heading
            margin={{ base: '0 0 16px 0', lg: ' 0 0 24px 0', xl: '0 0 24px 0' }}
            fontSize={{ base: '24px', lg: ' 32px', xl: '32px' }}
            lineHeight={{ base: '31.92px', lg: ' 42.56px', xl: '42.56px' }}
            fontWeight="700">
            Requirement & Skills
          </Heading>
          <Text
            lineHeight={{ base: '18.75px', lg: ' 21.28px', xl: '21.28px' }}
            fontSize="16px"
            fontWeight="400"
            maxW="876px"
            margin="0">
            {`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
            the cites of the word in classical literature, discovered the undoubtable source. Lorem
            Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
            Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
            theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk
            of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
            1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from the 1914 translation
            by H. Rackham.`}
          </Text>
        </Box>
      </Box>

      <Box marginBottom={{ base: '36px', lg: '148px', xl: '148px' }}>
        <Heading
          margin={{ base: '0 0 16px 0', lg: '0 0 40px 0', xl: '0 0 40px 0' }}
          fontSize="24px"
          textAlign={{ base: 'center', lg: 'start', xl: 'start' }}
          lineHeight="31.92px"
          fontWeight="700">
          Vacancy Application
        </Heading>

        <Box>
          <Flex
            gap="20px"
            justifyContent={{ base: 'center', lg: 'center', xl: 'center' }}
            alignItems="center">
            <Box width="666px">
              <FormControl marginBottom="36px">
                <FormLabel
                  lineHeight="20px"
                  fontSize="14px"
                  fontWeight="600"
                  paddingBottom="4px"
                  margin="0">
                  Full name*
                </FormLabel>
                <Input
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="21.28px"
                  borderColor="#DEDEDE"
                  height="37px"
                  type="email"
                  placeholder="Enter full name"
                  padding="8px 12px"
                />
              </FormControl>

              <FormControl marginBottom="36px">
                <FormLabel
                  lineHeight="20px"
                  color="#22222"
                  fontSize="14px"
                  fontWeight="600"
                  paddingBottom="4px"
                  margin="0">
                  Email*
                </FormLabel>
                <Input
                  type="email"
                  height="37px"
                  borderColor="#DEDEDE"
                  placeholder="you@example.com"
                  padding="8px 12px"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="21.28px"
                />
              </FormControl>

              <FormControl marginBottom="36px">
                <FormLabel
                  lineHeight="20px"
                  fontSize="14px"
                  fontWeight="600"
                  paddingBottom="4px"
                  margin="0">
                  Phone Number*
                </FormLabel>
                <InputGroup>
                  <InputLeftAddon>ICON</InputLeftAddon>
                  <Input
                    type="tel"
                    height="37px"
                    borderColor="#DEDEDE"
                    placeholder="+374 98 901 820"
                    fontWeight="400"
                    fontSize="14px"
                    lineHeight="18.62px"
                  />
                </InputGroup>
              </FormControl>

              <Box marginBottom="36px">
                <Text margin="0 0 6px 0" fontSize="14px" lineHeight="20px" fontWeight="600">
                  CV*
                </Text>

                <Box
                  borderRadius="12px"
                  padding="20px 0"
                  bg="#F6FCFF"
                  color="#C0C0C0"
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                  alignItems="center">
                  <Text margin="0 0 2px 0" fontSize="14px" fontWeight="500" lineHeight="20px">
                    Upload documents
                  </Text>
                  <Text fontSize="13px" fontWeight="400" lineHeight="18px" margin="0">
                    pdf, doc, xls
                  </Text>
                </Box>
              </Box>

              <FormControl>
                <FormLabel
                  margin="0 0 4px 0"
                  fontWeight="600"
                  fontSize="16px"
                  lineHeight="20px"
                  color="#5B5B5B">
                  Motivation letter
                </FormLabel>
                <Textarea
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="24px"
                  height="87px"
                  padding="9px 13px"
                  placeholder="Type here..."
                  color="#C0C0C0"
                  size="md"
                  resize="vertical"
                />
                <Text textAlign="end" color="#BAB7C6">
                  0/100
                </Text>
              </FormControl>

              <Button
                type="submit"
                color="#FFFFFF"
                bg="#3CB4E7"
                width="100%"
                padding="8px 14px"
                fontSize="16px"
                fontWeight="600"
                height="37px"
                lineHeight="21.28px">
                Submit
              </Button>
            </Box>

            <Box
              maxWidth="514px"
              display={{ base: 'none', lg: 'inline-block', xl: 'inline-block' }}>
              <Image src="/icons/job_img_form.jpg" alt="user img" width={507} height={607} />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};

export default CareersJob;
