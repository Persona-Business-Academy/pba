'use client';
import { useCallback, useMemo } from 'react';
import { AbsoluteCenter, Box, Divider, Link, useToast, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Button, FormInput } from '@/components/atoms';
import { AuthBox } from '@/components/molecules';
import { ERROR_MESSAGES } from '@/constants/common';
import {
  FORGOT_PASSWORD_ROUTE,
  HOMEPAGE_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
} from '@/constants/routes';
import { SignInFormData } from '@/models/auth';

export default function SignInPage() {
  const toast = useToast();
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const route = searchParams?.get('callback_url');

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({ defaultValues: { email: '', password: '', rememberMe: false } });

  const authBoxProps = useMemo(
    () => ({
      data: [
        { href: SIGN_UP_ROUTE, title: 'Sign up' },
        { href: SIGN_IN_ROUTE, title: 'Sign In' },
      ],
      boxProps: { marginTop: { base: 64, md: 42 } },
    }),
    [],
  );

  const onSubmit: SubmitHandler<SignInFormData> = useCallback(
    ({ email, password }) => {
      signIn('credentials', { email, password, redirect: false })
        .then(res => {
          if (res?.ok) {
            push(route || HOMEPAGE_ROUTE);
          } else {
            toast({ title: ERROR_MESSAGES.invalidCredentials, status: 'error' });
          }
        })
        .catch(() => {
          toast({ title: ERROR_MESSAGES.somethingWentWrong, status: 'error' });
        });
    },
    [push, route, toast],
  );

  return (
    <AuthBox data={authBoxProps.data} boxProps={authBoxProps.boxProps}>
      <VStack spacing={32}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'This field is required',
          }}
          render={({ field: { onChange, value } }) => (
            <FormInput
              isRequired
              isInvalid={!!errors.email?.message}
              name="email"
              type="email"
              formLabelName="Email"
              value={value}
              handleInputChange={onChange}
              formErrorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: 'This field is required',
          }}
          render={({ field: { onChange, value } }) => (
            <FormInput
              isRequired
              isInvalid={!!errors.password?.message}
              name="password"
              formLabelName="Password"
              value={value}
              handleInputChange={onChange}
              type="password"
              formHelperText="Your password must be less than 6 characters."
              formErrorMessage={errors.password?.message}
            />
          )}
        />
      </VStack>
      <VStack spacing={16} paddingTop={16}>
        <Button width={'100%'} onClick={handleSubmit(onSubmit)} isDisabled={isSubmitting}>
          Sign in
        </Button>
        <Link
          href={FORGOT_PASSWORD_ROUTE}
          as={NextLink}
          fontSize="16px"
          fontWeight="400"
          textDecorationLine="underline"
          textAlign="center">
          Forgot password?
        </Link>
        <Box position="relative" w={'100%'} marginTop={'10px'}>
          <Divider borderColor={'#DDDADA'} />
          <AbsoluteCenter bg="white" px="5" color="grey.300" fontSize={'16px'} fontWeight={'400'}>
            Or
          </AbsoluteCenter>
        </Box>
      </VStack>
    </AuthBox>
  );
}
