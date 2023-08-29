'use client';
import { memo, useCallback } from 'react';
import { Text, useToast, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Button, FormInput } from '@/components/atom';
import { ERROR_MESSAGES } from '@/constants/common';
import { SignInFormData } from '@/models/auth';

// todo
const SignIn = () => {
  const toast = useToast();
  const { push } = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({ defaultValues: { email: '', password: '', rememberMe: false } });

  const onSubmit: SubmitHandler<SignInFormData> = useCallback(
    async ({ email, password }) => {
      try {
        const res = await signIn('credentials', { email, password, redirect: false });
        if (res?.ok) {
          push('/');
        } else {
          toast({ title: ERROR_MESSAGES.invalidCredentials, status: 'error' });
        }
      } catch {
        toast({ title: ERROR_MESSAGES.somethingWentWrong, status: 'error' });
      }
    },
    [push, toast],
  );

  return (
    <>
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
        <Text fontSize="16px" fontWeight="400" textDecorationLine="underline" textAlign="center">
          Forgot password?
        </Text>
        {/* <Box position="relative" w={'100%'}>
          <Divider borderColor={'#DDDADA'} />
          <AbsoluteCenter bg="white" px="5" color="grey.300">
            Or
          </AbsoluteCenter>
        </Box> */}
      </VStack>
    </>
  );
};

export default memo(SignIn);
