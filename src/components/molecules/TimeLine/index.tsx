import React, { FC } from 'react';
import { Box, Container, Flex, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { Button } from '@/components/atoms';

type TimeLineProps = {};

const TimeLine: FC<TimeLineProps> = () => {
  return (
    <Box marginBottom={{ base: '36px ', lg: ' 148px', xl: ' 148px' }}>
      <Container maxWidth="895px" margin="0 auto" padding="0" color="#222222">
        <Heading
          as="h2"
          margin={{ base: '0 0 16px 0', lg: ' 0 0 40px 0', xl: ' 0 0 40px 0' }}
          textAlign="center"
          fontSize={{ base: '28px', lg: '32px', xl: '32px' }}
          lineHeight={{ base: '37.24px', lg: '42.56px ', xl: '42.56px ' }}>
          Course Timeline
        </Heading>

        <Box
          display="flex"
          flexDirection={{ base: 'row', lg: 'column', xl: 'column' }}
          maxWidth={{ base: '285px', lg: '849px', xl: '849px' }}
          gap={{ base: '0', lg: '13px', xl: '13px' }}
          margin="0 auto 40px">
          <Box
            flex={{ base: '1', lg: '0', xl: '0' }}
            width={{ base: '100%', lg: '796px', xl: '796px' }}
            margin={{ base: '0', lg: '0 auto', xl: '0 auto' }}
            height={{ base: '299px', lg: '0', xl: '0' }}
            justifyContent="center"
            flexDirection={{ base: 'row', lg: 'column', xl: 'column' }}
            display="flex">
            <Flex
              justifyContent="space-around"
              flexDirection={{ base: 'column', lg: 'row', xl: 'row' }}>
              <UnorderedList
                flexDirection={{ base: 'row', lg: 'column', xl: 'column' }}
                gap="13px"
                margin="0"
                display="flex"
                alignItems="center"
                listStyleType="none">
                <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700">
                  Beginner
                </ListItem>
                <ListItem
                  transform={{
                    base: 'translate(8px , 0px)',
                    lg: 'translate(0, 7px)',
                    xl: 'translate(0,7px)',
                  }}
                  width="12px"
                  height="12px"
                  bg="#000"
                  borderRadius="10px"></ListItem>
              </UnorderedList>

              <UnorderedList
                gap="13px"
                margin="0"
                display="flex"
                flexDirection={{ base: 'row', lg: 'column', xl: 'column' }}
                alignItems="center"
                listStyleType="none">
                <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700">
                  Mid level
                </ListItem>
                <ListItem
                  transform={{
                    base: 'translate(6px , 0px)',
                    lg: 'translate(0, 7px)',
                    xl: 'translate(0,7px)',
                  }}
                  width="12px"
                  height="12px"
                  bg="#000"
                  borderRadius="10px"></ListItem>
              </UnorderedList>

              <UnorderedList
                gap="13px"
                margin="0"
                display="flex"
                flexDirection={{ base: 'row', lg: 'column', xl: 'column' }}
                alignItems="center"
                listStyleType="none">
                <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700">
                  Advance
                </ListItem>
                <ListItem
                  transform={{
                    base: 'translate(9px , 2px)',
                    lg: 'translate(0, 7px)',
                    xl: 'translate(0,7px)',
                  }}
                  width="12px"
                  height="12px"
                  bg="#000"
                  borderRadius="10px"></ListItem>
              </UnorderedList>
            </Flex>
            <Text
              as="span"
              margin="0"
              display="block"
              width={{ base: '1px', lg: '100%', xl: '100%' }}
              height={{ base: '100%', lg: '2px', xl: '2px' }}
              bg="#000"></Text>
          </Box>

          <Flex
            flex={{ base: '1', lg: '0', xl: '0' }}
            justifyContent="space-between"
            flexDirection={{ base: 'column', lg: 'row', xl: 'row' }}>
            <Text as="p" margin="0" lineHeight="18.75px" fontSize="16px" fontWeight="400">
              Lorem Ipsum
            </Text>
            <Text as="p" margin="0" lineHeight="18.75px" fontSize="16px" fontWeight="400">
              Lorem Ipsum
            </Text>
            <Text as="p" margin="0" lineHeight="18.75px" fontSize="16px" fontWeight="400">
              Lorem Ipsum
            </Text>
            <Text as="p" margin="0" lineHeight="18.75px" fontSize="16px" fontWeight="400">
              Lorem Ipsum
            </Text>
          </Flex>
        </Box>

        <Flex justifyContent="center" gap="20px" flexWrap="wrap">
          <Box
            borderRadius="15px"
            width="285px"
            boxShadow="0px 4px 6px 0px #0000000F"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="8px"
            padding="23px 47px">
            <Text as="p" margin="0" fontWeight="700" fontSize="24px" lineHeight="31.92px">
              Wed, Mar 22
            </Text>
            <Text as="p" lineHeight="21.28px" fontSize="16px" fontWeight="400" margin="0">
              Wednesday
            </Text>
            <Text as="p" lineHeight="21.28px" fontSize="16px" fontWeight="400" margin="0">
              2:00-2:45 PM
            </Text>

            <Box width="100%" mt="8px">
              <Button
                color="#3CB4E7"
                padding="12px 24px"
                height="37px"
                width="100%"
                border="1px solid #3CB4E7"
                lineHeight="21.28px"
                fontSize="16px"
                background="transparent">
                Enroll
              </Button>
            </Box>
          </Box>

          <Box
            borderRadius="15px"
            width="285px"
            boxShadow="0px 4px 6px 0px #0000000F"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="8px"
            padding="23px 47px">
            <Text as="p" margin="0" fontWeight="700" fontSize="24px" lineHeight="31.92px">
              Wed, Mar 22
            </Text>
            <Text as="p" lineHeight="21.28px" fontSize="16px" fontWeight="400" margin="0">
              Wednesday
            </Text>
            <Text as="p" lineHeight="21.28px" fontSize="16px" fontWeight="400" margin="0">
              2:00-2:45 PM
            </Text>

            <Box width="100%" mt="8px">
              <Button
                color="#3CB4E7"
                padding="12px 24px"
                height="37px"
                width="100%"
                border="1px solid #3CB4E7"
                lineHeight="21.28px"
                fontSize="16px"
                background="transparent">
                Enroll
              </Button>
            </Box>
          </Box>

          <Box
            borderRadius="15px"
            width="285px"
            boxShadow="0px 4px 6px 0px #0000000F"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="8px"
            padding="23px 47px">
            <Text as="p" margin="0" fontWeight="700" fontSize="24px" lineHeight="31.92px">
              Wed, Mar 22
            </Text>
            <Text as="p" lineHeight="21.28px" fontSize="16px" fontWeight="400" margin="0">
              Wednesday
            </Text>
            <Text as="p" lineHeight="21.28px" fontSize="16px" fontWeight="400" margin="0">
              2:00-2:45 PM
            </Text>

            <Box width="100%" mt="8px">
              <Button
                color="#3CB4E7"
                padding="12px 24px"
                height="37px"
                width="100%"
                border="1px solid #3CB4E7"
                lineHeight="21.28px"
                fontSize="16px"
                background="transparent">
                Enroll
              </Button>
            </Box>
          </Box>
        </Flex>

        <Flex flexDirection="column" alignItems="center" gap="16px" mt="24px">
          <Text fontSize="18px" lineHeight="18px" margin="0" as="span">
            Don't see a time that works for you?
          </Text>
          <Text fontSize="18px" lineHeight="18px" margin="0" as="span">
            Request another time
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default TimeLine;
