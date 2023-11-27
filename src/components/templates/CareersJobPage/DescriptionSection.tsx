import React, { FC } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { segoe } from '@/utils/constants/fonts';

type DescriptionSectionProps = {};

const DescriptionSection: FC<DescriptionSectionProps> = () => {
  return (
    <Box maxW="895px" marginBottom={{ base: '36px', lg: '148px' }} color="#222222">
      <Box mb={{ base: '16px', lg: ' 64px' }}>
        <Heading
          className={segoe.className}
          m={{ base: ' 0 0 16px 0', lg: ' 0 0 24px 0' }}
          fontSize={{ base: '24px', lg: ' 32px' }}
          lineHeight={{ base: '31.92px', lg: ' 42.56px' }}
          fontWeight="700">
          Job Description
        </Heading>
        <Text lineHeight="22px" fontSize="16px" fontWeight="400" fontStyle="normal">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
          cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
          ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
          dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum
          used since the 1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
          original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </Text>
      </Box>

      <Box mb={{ base: '16px', lg: ' 64px' }}>
        <Heading
          className={segoe.className}
          m={{ base: ' 0 0 16px 0', lg: ' 0 0 24px 0' }}
          fontSize={{ base: '24px', lg: ' 32px' }}
          lineHeight={{ base: '31.92px', lg: ' 42.56px' }}
          fontWeight="700">
          Job Responsibilities
        </Heading>
        <Text lineHeight="22px" fontSize="16px" fontWeight="400" fontStyle="normal">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
          cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
          ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
          dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum
          used since the 1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
          original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </Text>
      </Box>

      <Box>
        <Heading
          className={segoe.className}
          m={{ base: ' 0 0 16px 0', lg: ' 0 0 24px 0' }}
          fontSize={{ base: '24px', lg: ' 32px' }}
          lineHeight={{ base: '31.92px', lg: ' 42.56px' }}
          fontWeight="700">
          Requirement & Skills
        </Heading>
        <Text lineHeight="22px" fontSize="16px" fontWeight="400" fontStyle="normal">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
          cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
          ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
          dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum
          used since the 1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
          original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </Text>
      </Box>
    </Box>
  );
};

export default DescriptionSection;
