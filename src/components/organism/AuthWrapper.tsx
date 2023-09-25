import { FC, memo, useMemo } from 'react';
import { Box, Center, Flex, Grid, GridItem, useMediaQuery } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from 'public/icons/persona_logo_auth.svg';
import { breakpoints } from '@/constants/chakra';
import { FORGOT_PASSWORD_ROUTE, HOMEPAGE_ROUTE } from '@/constants/routes';

interface Props {
  isCenter: boolean;
  children: React.ReactNode;
}

const RightComponent: FC<Props> = memo(({ isCenter, children }) =>
  isCenter ? (
    <Center h={'100%'}>
      <Box w={'100%'}>{children}</Box>
    </Center>
  ) : (
    children
  ),
);
RightComponent.displayName = 'RightComponent';

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isLargerThanMd] = useMediaQuery(`(max-width: ${breakpoints.md})`);

  const isCenter = useMemo(
    () => pathname === FORGOT_PASSWORD_ROUTE && isLargerThanMd,
    [isLargerThanMd, pathname],
  );

  return (
    <Grid templateColumns={{ base: '100%', md: '55% 45%' }} h={'100vh'}>
      <GridItem
        backgroundImage={'url("/images/public_available/auth_background.png")'}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
        display={{ base: 'none', md: 'block' }}
      />
      <GridItem
        paddingY={{ base: isCenter ? 'unset' : '40px', md: '60px', '2xl': '126px' }}
        paddingX={{ md: 5 }}
        maxH={'100%'}
        overflow={'auto'}>
        <RightComponent isCenter={isCenter}>
          <Flex justifyContent="center">
            <Link href={HOMEPAGE_ROUTE}>
              <Logo />
            </Link>
          </Flex>
          <Flex justifyContent="center">{children}</Flex>
        </RightComponent>
      </GridItem>
    </Grid>
  );
};

export default memo(AuthWrapper);
