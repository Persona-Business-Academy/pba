import { memo } from 'react';
import { Flex, Grid, GridItem } from '@chakra-ui/react';
import Link from 'next/link';
import Logo from 'public/icons/persona_logo_auth.svg';
import { HOMEPAGE_ROUTE } from '@/constants/routes';

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid templateColumns={{ base: '55% 45%' }} h={'100vh'}>
      <GridItem
        backgroundImage={'url("/images/public_available/auth_background.png")'}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
      />
      <GridItem paddingY={{ base: '60px', '2xl': '126px' }} maxH={'100%'} overflow={'auto'}>
        <Flex justifyContent="center">
          <Link href={HOMEPAGE_ROUTE}>
            <Logo />
          </Link>
        </Flex>
        <Flex justifyContent="center">{children}</Flex>
      </GridItem>
    </Grid>
  );
};

export default memo(AuthWrapper);
