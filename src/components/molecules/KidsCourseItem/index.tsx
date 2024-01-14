import React, { FC } from 'react';
import { Box, Flex, GridItem, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Button } from '@/components/atoms';

type KidsCourseItemProps = {};

const KidsCourseItem: FC<KidsCourseItemProps> = () => {
  return (
    <GridItem width="387px">
      <Box borderRadius="12px 12px 0px 0px" overflow="hidden" height="242px" position="relative">
        <Image
          src="/images/public_available/courses_img.jpg"
          alt="Kids offline courses"
          width={387}
          height={242}
        />
        <Image
          width={24}
          height={24}
          alt="Heart icon"
          src="/icons/heart_icon.svg"
          style={{ position: 'absolute', right: '24px', top: '24px' }}
        />
      </Box>
      <Box
        p="16px"
        borderRadius=" 0px 0px 12px 12px"
        background="#FFFFFF"
        boxShadow="0px 4px 6px 0px rgba(0, 0, 0, 0.06)">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          mb="8px"
          fontStyle="normal"
          fontWeight={700}
          lineHeight="normal"
          color="#222">
          <Text as="span" fontSize="24px">
            Graphic Design
          </Text>
          <Text as="span" fontSize="16px">
            100$/month
          </Text>
        </Flex>
        <Text fontSize="16px" fontStyle="normal" fontWeight={400} lineHeight="22px" color="#222">
          Get inspired by this revived W.H. Auden's Hymn to the United Nations.
        </Text>
        <Flex display="flex" alignItems="center" gap="21.72px" my="16px">
          <Flex gap="8.14px">
            <Image width={22} height={22} alt="Time icon" src="/icons/time_icon.svg" />
            <span
              style={{
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
              }}>
              3 month
            </span>
          </Flex>
          <Flex gap="8.14px">
            <Image width={22} height={22} alt="Level icon" src="/icons/level_icon.svg" />
            <span
              style={{
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
              }}>
              Open level
            </span>
          </Flex>
        </Flex>
        <Flex gap="16px">
          <Button>Enroll now</Button>
          <Button
            bg="#FFFFFF"
            color="#222"
            _hover={{
              bg: '#FFFFFF',
              color: '#5B5B5B',
            }}
            _focus={{
              bg: '#FFFFFF',
              color: '#222',
            }}>
            View Syllabus
          </Button>
        </Flex>
      </Box>
    </GridItem>
  );
};

export default KidsCourseItem;
