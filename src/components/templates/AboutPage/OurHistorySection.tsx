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

      <Box maxW="752px" margin="0 auto" display="flex">
        <Box
          maxWidth="348px"
          marginLeft={{ base: '36px', md: '0' }}
          marginRight={{ base: '0', md: '40px' }}
          order={{ base: '1', md: '0' }}>
          <UnorderedList
            margin="0 0 96px 0"
            fontSize="16px"
            color="#3CB4E7"
            lineHeight="21.28px"
            listStyleType="none"
            fontWeight="400">
            <ListItem mb="8px">2019</ListItem>
            <ListItem mb="8px" fontSize="24px" fontWeight="700">
              Idea to create Persona Business Academy
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
            lineHeight="21.28px"
            listStyleType="none"
            fontWeight="400">
            <ListItem mb="8px">2021</ListItem>
            <ListItem mb="8px" fontSize="24px" fontWeight="700">
              Start of courses
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
            lineHeight="21.28px"
            listStyleType="none"
            fontWeight="400">
            <ListItem mb="8px">2022-2023</ListItem>
            <ListItem mb="8px" fontSize="24px" fontWeight="700">
              pba.am first e-learning platform in Armenia
            </ListItem>
            <ListItem fontWeight="400" color="#222222">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
              print, graphic or web designs. The passage is attributed to an unknown typesetter in
              the 15th century who is thought to have scrambled parts of Cicero's De Finibus.
            </ListItem>
          </UnorderedList>
        </Box>

        <Box
          width="2px"
          backgroundColor="#000000"
          position="relative"
          display="flex"
          flexDirection="column"
          gap={{ base: '0', md: '210px' }}
          padding="40px 0 0 0">
          <Box display="flex" flexDirection="column" alignItems="center" gap="45px">
            <Box display="flex" alignItems="center" mb={{ base: '260px', md: '0' }}>
              <Text
                as="span"
                width="14px"
                height="14px"
                borderRadius="50%"
                backgroundColor="#3CB4E7"></Text>
            </Box>

            <Box display={{ base: 'none', md: 'flex' }} alignItems="center" gap="8px">
              <Text
                as="span"
                width="14px"
                height="14px"
                borderRadius="50%"
                backgroundColor="#3CB4E7"></Text>
            </Box>
          </Box>

          <Box display="flex" flexDirection="column" alignItems="center" gap="45px">
            <Box display="flex" alignItems="center" mb={{ base: '225px', md: '0' }}>
              <Text
                as="span"
                width="14px"
                height="14px"
                borderRadius="50%"
                backgroundColor="#3CB4E7"></Text>
            </Box>

            <Box display="" alignItems="center" gap="8px">
              <Text
                display={{ base: 'none', md: 'flex' }}
                as="span"
                width="14px"
                height="14px"
                borderRadius="50%"
                backgroundColor="#3CB4E7"></Text>
            </Box>
          </Box>

          <Box display="flex" flexDirection="column" alignItems="center" gap="45px">
            <Box display="flex" alignItems="center" mb={{ base: '265px', md: '0' }}>
              <Text
                as="span"
                width="14px"
                height="14px"
                borderRadius="50%"
                backgroundColor="#3CB4E7"></Text>
            </Box>

            <Box display={{ base: 'none', md: 'flex' }} alignItems="center">
              <Text
                as="span"
                width="14px"
                height="14px"
                borderRadius="50%"
                backgroundColor="#3CB4E7"></Text>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box display="flex" alignItems="center" gap="8px">
              <Text
                as="span"
                width="14px"
                height="14px"
                borderRadius="50%"
                backgroundColor="#3CB4E7"></Text>
            </Box>
          </Box>
        </Box>

        <Box
          marginTop="55px"
          maxWidth="303px"
          marginLeft="60px"
          display={{ base: 'none', md: 'block' }}>
          <UnorderedList
            margin="0 0 96px 0"
            fontSize="16px"
            color="#3CB4E7"
            lineHeight="21.28px"
            listStyleType="none"
            fontWeight="400">
            <ListItem mb="8px">2020</ListItem>
            <ListItem mb="8px" fontSize="24px" fontWeight="700">
              Start launching PBA
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
            lineHeight="21.28px"
            listStyleType="none"
            fontWeight="400">
            <ListItem mb="8px">2022</ListItem>
            <ListItem mb="8px" fontSize="24px" fontWeight="700">
              Start of Talent Transformation Programm
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
