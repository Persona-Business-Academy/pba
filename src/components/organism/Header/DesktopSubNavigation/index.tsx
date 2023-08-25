import { FC, memo } from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { SubLabel } from '@/models/header';

interface DesktopSubNav {
  label: string;
  subLabels: SubLabel[];
}
const DesktopSubNav: FC<DesktopSubNav> = ({ label, subLabels }) => {
  return (
    <Box role={'group'} width="100%" display={'block'} rounded={'md'}>
      <Stack direction={'row'} align={'center'}>
        <Box display="flex" gap={11} flexDirection="column">
          <Text fontWeight={700} fontSize={16} marginBottom="5px">
            {label}
          </Text>
          {subLabels.map(({ subLabelName }, index) => (
            <Text
              as={Link}
              key={index}
              href={''}
              lineHeight="normal"
              fontFamily="Segoe UI"
              _hover={{ color: '#3CB3E5' }}
              fontWeight={400}
              fontSize={16}>
              {subLabelName}
            </Text>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default memo(DesktopSubNav);
