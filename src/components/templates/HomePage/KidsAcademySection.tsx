import React, { FC } from 'react';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';

type KidsAcademySectionProps = {};

const commonFontStyle = {
  lineHeight: '21.28px',
  fontWeight: 700,
};

const KidsAcademySection: FC<KidsAcademySectionProps> = () => {
  return (
    <Box
      maxWidth="1920px"
      padding={{ base: '0 16px', lg: '0 ' }}
      margin={{
        base: '0 auto 36px',
        lg: '0 auto 148px',
      }}>
      <Flex
        padding={{ base: '0', lg: '46px 59px  0 0' }}
        borderRadius={{
          base: 'none',
          lg: ' 0 74px 74px 0',
        }}
        bg={{
          base: 'transparent',
          lg: '#ECF7FC',
        }}
        gap="24px"
        maxW="1560px"
        alignItems="center"
        flexWrap={{
          base: 'wrap',
          lg: 'nowrap',
        }}
        justifyContent={{
          base: 'center',
          lg: 'flex-end',
        }}>
        <Box>
          <Image src="/icons/middle_school_kids.png" alt="Kids" width={774} height={403} />
        </Box>

        <Box width="424px" textAlign="center">
          <Heading
            lineHeight="42.56px"
            fontWeight="700"
            fontSize={{
              base: '30px',
              md: '32px',
            }}
            margin="0 0 16px 0">
            Persona Kids Academy
          </Heading>
          <Text fontWeight="400" fontSize="16px" lineHeight="21.28px" margin="0 0 24px 0">
            Building the leaders of tomorrow, one young entrepreneur at a time. Join us at our Kid's
            Business Academy and let your creativity soar beyond imagination.
          </Text>

          <Box>
            <Link
              display="flex"
              justifyContent="center"
              gap="8px"
              fontSize="16px"
              {...commonFontStyle}
              color="#FF6131">
              Explore courses
              <Image src="/icons/not_found_icon.svg" alt="Arrow" width={24} height={24} />
            </Link>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default KidsAcademySection;
