import { Dispatch, FC, memo, SetStateAction } from 'react';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { SubLabel } from '@/models/header';

interface DesktopSubNav {
  label: string;
  subLabels: SubLabel[];
  isChevronIconVisible: number | null;
  id: number;
}
const DesktopSubNav: FC<DesktopSubNav> = ({ label, subLabels, isChevronIconVisible, id }) => {
  return (
    <Flex width="183px">
      <Box flexBasis="183px" role={'group'} width="100%" display={'block'} rounded={'md'}>
        <Stack direction={'row'} align={'center'} width="100%">
          <Box display="flex" flexDirection="column" width="100%">
            <Text
              fontWeight={700}
              width="100%"
              fontSize={16}
              marginBottom="5px"
              padding="8px 16px"
              margin={0}
              display="flex"
              justifyContent="space-between"
              as={Link}
              href=""
              _hover={{
                bg: '#F6FCFF',
              }}
              onMouseOver={() => setIsChevronIconVisible(id)}>
              {label}

              {id === isChevronIconVisible && (
                <Image width={16} height={16} alt="chevron_right" src="/icons/chevron_right.svg" />
              )}
            </Text>
          </Box>
        </Stack>
      </Box>

      <Flex flexBasis="267px" flexDirection="column" position="absolute" left="183px" top={0}>
        {id === isChevronIconVisible &&
          subLabels.map(({ subLabelName }, index: number) => (
            <Box
              as={Link}
              href={''}
              display="flex"
              gap={11}
              flexDirection="column"
              width="100%"
              key={index}
              rounded="md">
              <Text
                lineHeight="normal"
                fontFamily="Segoe UI"
                marginBottom="5px"
                padding="8px 16px"
                _hover={{ color: '#3CB3E5' }}
                fontWeight={400}
                fontSize={16}>
                {subLabelName}
              </Text>
            </Box>
          ))}
      </Flex>
    </Flex>
  );
};

export default memo(DesktopSubNav);
