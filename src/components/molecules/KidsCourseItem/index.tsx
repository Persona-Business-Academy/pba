import React, { FC } from 'react';
import { Box, Flex, GridItem, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/atoms';
import { FOR_KIDS_ROUTE } from '@/utils/constants/routes';
import { generateAWSUrl } from '@/utils/helpers/common';

type KidsCourseItemProps = {
  title: string;
  subTitle: string;
  price: number;
  totalDuration: number;
  courseLevel: string;
  id: number;
  coverPhoto: string;
};

const KidsCourseItem: FC<KidsCourseItemProps> = ({
  id,
  title,
  subTitle,
  price,
  totalDuration,
  courseLevel,
  coverPhoto,
}) => {
  return (
    <GridItem
      id={id.toString()}
      as={Link}
      href={`${FOR_KIDS_ROUTE}/${title.replaceAll(' ', '-')}/${id}`}
      _hover={{
        boxShadow: '0px 20px 50px 0px #0000001A',
      }}
      transition="all 0.3s">
      <Box borderRadius="12px 12px 0px 0px" overflow="hidden" height="242px" position="relative">
        <Image
          src={generateAWSUrl(coverPhoto)}
          alt="Kids offline courses"
          width={387}
          height={242}
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
            {title}
          </Text>
          <Text as="span" fontSize="16px" display="flex">
            {price}
            <Image src="/icons/dram.svg" alt="dram" width={13} height={13} />
            /month
          </Text>
        </Flex>
        <Text fontSize="16px" fontStyle="normal" fontWeight={400} lineHeight="22px" color="#222">
          {subTitle}
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
              {totalDuration} month
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
              {courseLevel} level
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
            View Program
          </Button>
        </Flex>
      </Box>
    </GridItem>
  );
};

export default KidsCourseItem;
