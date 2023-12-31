import React, { FC } from 'react';
import { Box, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';

type OurHistorySectionProps = {};

const OurHistorySection: FC<OurHistorySectionProps> = () => {
  return (
    <Box pb={{ base: '36px', md: '100px', lg: '148px' }}>
      <Box
        padding="96px 0"
        mb="37px"
        bg="#3CB4E7"
        textAlign="center"
        color="#FFF"
        position="relative">
        <Heading maxW="804px" margin="0 auto" fontSize="32px" lineHeight="42.56px" fontWeight="700">
          Our History
        </Heading>
        <Text maxW="804px" fontSize="16px" fontWeight="400" lineHeight="21.28px" margin="0 auto">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
          graphic or web designs. The passage is attributed to an unknown typesetter in the `
        </Text>
        <Text
          display={{ base: 'none', xl: 'block' }}
          as="span"
          position="absolute"
          width="50px"
          height="50px"
          backgroundColor="#3CB4E7"
          borderRadius="50%"
          bottom="-25px"
          left="50%"
          transform="translateX(-25%)"></Text>
      </Box>

      <Box maxW="752px" position="relative" margin="0 auto" display="flex">
        <Box
          maxWidth="348px"
          marginLeft={{ base: '36px', md: '0' }}
          marginRight={{ base: '0', md: '40px' }}
          order={{ base: '1', md: '0' }}>
          <UnorderedList
            margin="0 0 96px 0"
            fontSize="16px"
            color="#3CB4E7"
            lineHeight="31.92px"
            listStyleType="none"
            fontWeight="400">
            <ListItem mb="8px">2019</ListItem>
            <ListItem display="flex" mb="8px" fontSize="24px" fontWeight="700">
              <Text as="span">Idea to create Persona Business Academy </Text>
              <Text
                position="absolute"
                zIndex="4"
                right={{ base: '98%', md: '47.5%' }}
                top="5%"
                width="14px"
                height="14px"
                borderRadius="50"
                display="block"
                as="span"
                bg="#3CB4E7"></Text>
            </ListItem>
            <ListItem color="#222222">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
              print, graphic or web designs. The passage is attributed to an unknown typesetter in
              the 15th century who is thought to have scrambled parts of Cicero's De Finibus.
            </ListItem>
          </UnorderedList>

          <UnorderedList
            margin="0 0 96px 0"
            fontSize="16px"
            color="#3CB4E7"
            lineHeight="31.92px"
            listStyleType="none"
            fontWeight="400">
            <ListItem mb="8px">2020</ListItem>
            <ListItem display="flex" mb="8px" fontSize="24px" fontWeight="700">
              <Text as="span"> Start launching PBA</Text>
              <Text
                position="absolute"
                right={{ base: '98%', md: '47.5%' }}
                zIndex="4"
                top="40%"
                width="14px"
                height="14px"
                borderRadius="50"
                display="block"
                as="span"
                bg="#3CB4E7"></Text>
            </ListItem>
            <ListItem fontWeight="400" color="#222222">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
              print, graphic or web designs. The passage is attributed to an unknown typesetter in
              the 15th century who is thought to have scrambled parts of Cicero's De Finibus.
            </ListItem>
          </UnorderedList>

          <UnorderedList
            margin="0 0 96px 0"
            fontSize="16px"
            color="#3CB4E7"
            lineHeight="31.92px"
            listStyleType="none"
            fontWeight="400">
            <ListItem mb="8px">2021</ListItem>
            <ListItem display="flex" mb="8px" fontSize="24px" fontWeight="700">
              <Text as="span">Start of courses</Text>
              <Text
                position="absolute"
                right={{ base: '98%', md: '47.5%' }}
                zIndex="4"
                top="73%"
                width="14px"
                height="14px"
                borderRadius="50"
                display="block"
                as="span"
                bg="#3CB4E7"></Text>
            </ListItem>
            <ListItem fontWeight="400" color="#222222">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
              print, graphic or web designs. The passage is attributed to an unknown typesetter in
              the 15th century who is thought to have scrambled parts of Cicero's De Finibus.
            </ListItem>
          </UnorderedList>
        </Box>

        <Box width="2px" backgroundColor="#000000" position="relative" padding="40px 0 0 0"></Box>

        <Box
          marginTop="55px"
          maxWidth="303px"
          marginLeft="60px"
          display={{ base: 'none', md: 'block' }}>
          <UnorderedList
            margin="0 0 96px 0"
            fontSize="16px"
            color="#3CB4E7"
            lineHeight="31.92px"
            listStyleType="none"
            fontWeight="400">
            <ListItem mb="8px">2022</ListItem>
            <ListItem display="flex" mb="8px" fontSize="24px" fontWeight="700">
              <Text as="span"> Start of Talent Transformation Programm</Text>
              <Text
                position="absolute"
                right="47.5%"
                zIndex="4"
                top="10%"
                width="14px"
                height="14px"
                borderRadius="50"
                display="block"
                as="span"
                bg="#3CB4E7"></Text>
            </ListItem>

            <ListItem fontWeight="400" color="#222222">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
              print, graphic or web designs. The passage is attributed to an unknown typesetter in
              the 15th century who is thought to have scrambled parts of Cicero's De Finibus.
            </ListItem>
          </UnorderedList>

          <UnorderedList
            margin="0 0 96px 0"
            fontSize="16px"
            color="#3CB4E7"
            lineHeight="31.92px"
            listStyleType="none"
            fontWeight="400">
            <ListItem mb="8px">2022-2023</ListItem>
            <ListItem display="flex" mb="8px" fontSize="24px" fontWeight="700">
              <Text as="span">pba.am first e-learning platform in Armenia</Text>
              <Text
                position="absolute"
                right="47.5%"
                zIndex="4"
                top="45%"
                width="14px"
                height="14px"
                borderRadius="50"
                display="block"
                as="span"
                bg="#3CB4E7"></Text>
            </ListItem>
            <ListItem fontWeight="400" color="#222222">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
              print, graphic or web designs. The passage is attributed to an unknown typesetter in
              the 15th century who is thought to have scrambled parts of Cicero's De Finibus.
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default OurHistorySection;
