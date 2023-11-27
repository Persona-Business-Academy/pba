import React, { FC } from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  Textarea,
} from '@chakra-ui/react';
import Image from 'next/image';
import { Button } from '@/components/atoms';
import { segoe } from '@/utils/constants/fonts';

type ApplicationFormProps = {};

const ApplicationForm: FC<ApplicationFormProps> = () => {
  return (
    <Box marginBottom={{ base: '36px', lg: '148px' }}>
      <Heading
        className={segoe.className}
        m={{ base: ' 0 0 16px 0', lg: ' 0 0 40px 0' }}
        fontSize={{ base: '28px', md: '24px' }}
        textAlign={{ base: 'center', lg: 'start' }}
        lineHeight="normal"
        fontWeight="700">
        Vacancy Application
      </Heading>

      <Box>
        <Flex gap="20px" justifyContent="center" alignItems="center">
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
              width="100%"
              padding="8px 14px"
              fontSize="16px"
              fontWeight="600"
              height="37px"
              lineHeight="21.28px">
              Submit
            </Button>
          </Box>

          <Box maxWidth="514px" display={{ base: 'none', lg: 'inline-block' }}>
            <Image src="/icons/job_img_form.jpg" alt="user img" width={507} height={607} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ApplicationForm;
