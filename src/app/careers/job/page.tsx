'use client';
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  ListItem,
  Spacer,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  Textarea,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';

type Props = {};

const CareersJob = (props: Props) => {
  return (
    <Container maxW="1201px">
      <Flex marginBottom="41px">
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
        <Spacer />
        <Box>
          <Button
            bg="#3CB4E7"
            color="#fff"
            padding="26.5px 32px"
            lineHeight="21px"
            fontSize="16px"
            borderRadius="6px">
            Apply now
          </Button>
        </Box>
      </Flex>

      <Box
        display="flex"
        justifyContent="space-between"
        width="470px"
        borderBottom="1px solid #BDBDBD"
        paddingBottom="24px">
        <UnorderedList
          margin="0"
          // paddingRight="40px"
          listStyleType="none"
          fontSize="16px"
          lineHeight="21.28px">
          <ListItem fontWeight="700">Salary:</ListItem>
          <ListItem fontWeight="400">£24,000 - £26,000</ListItem>
        </UnorderedList>

        <UnorderedList
          margin="0"
          // paddingRight="40px"
          listStyleType="none"
          fontSize="16px"
          lineHeight="21.28px">
          <ListItem fontWeight="700">Working hours:</ListItem>
          <ListItem fontWeight="400">10:00-18:00</ListItem>
        </UnorderedList>

        <UnorderedList margin="0" listStyleType="none" fontSize="16px" lineHeight="21.28px">
          <ListItem fontWeight="700">Contract type:</ListItem>
          <ListItem fontWeight="400">Full-time, Permanent</ListItem>
        </UnorderedList>
      </Box>

      <Box marginTop="24px">
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

      <Box maxW="895px" marginTop="116px" marginBottom="148px">
        {/* 1 */}
        <Box paddingBottom="64px">
          <Heading
            margin="0"
            fontSize="32px"
            lineHeight="42.56px"
            fontWeight="700"
            paddingBottom="24px">
            Job Description
          </Heading>
          <Text lineHeight="21.28px" fontSize="16px" fontWeight="400" maxW="876px" margin="0">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
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
            by H. Rackham.
          </Text>
        </Box>
        {/* 2 */}
        <Box paddingBottom="64px">
          <Heading
            margin="0"
            fontSize="32px"
            lineHeight="42.56px"
            fontWeight="700"
            paddingBottom="24px">
            Job Responsibilities
          </Heading>
          <Text lineHeight="21.28px" fontSize="16px" fontWeight="400" maxW="876px" margin="0">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
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
            by H. Rackham.
          </Text>
        </Box>
        {/* 3 */}
        <Box>
          <Heading
            margin="0"
            fontSize="32px"
            lineHeight="42.56px"
            fontWeight="700"
            paddingBottom="24px">
            Requirement & Skills
          </Heading>
          <Text lineHeight="21.28px" fontSize="16px" fontWeight="400" maxW="876px" margin="0">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
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
            by H. Rackham.
          </Text>
        </Box>
      </Box>

      <Box>
        <Heading
          margin="0"
          fontSize="24px"
          lineHeight="31.92px"
          fontWeight="700"
          paddingBottom="40px">
          Vacancy Application
        </Heading>

        <Box>
          <Grid templateColumns="repeat(2, 666px 507px)" gap="26px">
            <GridItem w="100%">
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
                  <InputLeftAddon children="ICON" />
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
            </GridItem>

            <GridItem maxW="100%">
              <Image src="/icons/job_img_form.jpg" alt="user img" width="507px" height="607px" />
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default CareersJob;
