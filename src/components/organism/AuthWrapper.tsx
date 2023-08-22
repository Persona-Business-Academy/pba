import { memo } from 'react';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import Image from 'next/image';

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid templateColumns={{ base: '55% 45%' }} h={'100vh'}>
      <GridItem
        backgroundImage={'url("/auth_background.png")'}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
      />
      <GridItem>
        <Flex justifyContent={'center'} alignItems={'center'} h={'100%'} w={'100%'}>
          <Box position={'absolute'} top={{ base: '60px', '2xl': '126px' }}>
            <Image src="/persona_logo_auth.svg" alt="" width={183} height={37.2} />
          </Box>
          {children}
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default memo(AuthWrapper);