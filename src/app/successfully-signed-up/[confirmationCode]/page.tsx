'use client';
import React, { useCallback, useState } from 'react';
import { Flex, Text, useToast } from '@chakra-ui/react';
import Link from 'next/link';
import Logo from '/public/icons/persona_logo_auth.svg';
import { useRouter } from 'next/navigation';
import { signIn, SignInResponse } from 'next-auth/react';
import { Button, Loading } from '@/components/atoms';
import { segoe } from '@/utils/constants/fonts';
import { HOMEPAGE_ROUTE } from '@/utils/constants/routes';
import CheckIcon from '/public/icons/check.svg';

const SuccessfullySignedUp = ({
  params: { confirmationCode },
}: {
  params: { confirmationCode: string };
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const signinHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const res: SignInResponse | undefined = await signIn('credentials', {
        email: '',
        password: '',
        confirmationCode,
        callbackUrl: HOMEPAGE_ROUTE,
        redirect: false,
      });

      if (res?.ok && res.url) {
        router.push(res.url);
        router.refresh();
      } else {
        toast({ title: res?.error, status: 'error' });
      }
    } catch (error) {
      console.log('error');
    } finally {
      setIsLoading(false);
    }
  }, [confirmationCode, router, toast]);

  return (
    <Flex
      h={'100vh'}
      width={{ base: '375px', sm: '475px' }}
      mx="auto"
      mt="126px"
      flexDirection="column">
      {isLoading && <Loading />}
      <Flex justifyContent="center">
        <Link href={HOMEPAGE_ROUTE}>
          <Logo />
        </Link>
      </Flex>
      <Flex flexDirection="column" marginTop="137px" padding="32px" gap="12px">
        <Flex justifyContent="center" mb="12px">
          <CheckIcon />
        </Flex>
        <Text
          fontSize="24px"
          fontWeight={700}
          className={segoe.className}
          textAlign="center"
          color="#222">
          Your email is successfully verified
        </Text>
        <Text
          fontSize="16px"
          fontWeight={400}
          className={segoe.className}
          textAlign="center"
          color="#222">
          Please click continue to explore our website
        </Text>
        <Button
          mt="12px"
          p="12px 16px"
          fontSize="16px"
          fontWeight={400}
          mx="auto"
          onClick={signinHandler}>
          Continue
        </Button>
      </Flex>
    </Flex>
  );
};

export default SuccessfullySignedUp;
