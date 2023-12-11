'use client';
import { useCallback, useMemo } from 'react';
import { Text, VStack } from '@chakra-ui/react';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { AuthService } from '@/api/services/AuthService';
import { Button, FormInput, Loading } from '@/components/atoms';
import { AuthBox } from '@/components/molecules';
import { SIGN_IN_ROUTE, SIGN_UP_ROUTE } from '@/utils/constants/routes';
import { SignUpValidation } from '@/utils/validation';

const resolver = classValidatorResolver(SignUpValidation);

export default function SignUpPage() {
  const { push } = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValidation>({
    resolver,
    defaultValues: { firstName: '', lastName: '', email: '', password: '' },
  });

  const authBoxProps = useMemo(
    () => ({
      data: [
        { href: SIGN_UP_ROUTE, title: 'Sign up' },
        { href: SIGN_IN_ROUTE, title: 'Sign In' },
      ],
      boxProps: { marginTop: { base: 64, md: 37 } },
    }),
    [],
  );

  const { mutate, isLoading } = useMutation<boolean, { message: string }, SignUpValidation>(
    AuthService.signUp,
    { onSuccess: () => push(SIGN_IN_ROUTE) },
  );

  const onSubmit: SubmitHandler<SignUpValidation> = useCallback(data => mutate(data), [mutate]);

  return (
    <AuthBox data={authBoxProps.data} boxProps={authBoxProps.boxProps}>
      {isLoading && <Loading />}
      <VStack spacing={32}>
        <Controller
          name="firstName"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormInput
              isRequired
              isInvalid={!!errors.firstName?.message}
              name="firstName"
              type="text"
              formLabelName="First Name"
              value={value}
              handleInputChange={onChange}
              formErrorMessage={errors.firstName?.message}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormInput
              isRequired
              isInvalid={!!errors.lastName?.message}
              name="lastName"
              type="text"
              formLabelName="Last Name"
              value={value}
              handleInputChange={onChange}
              formErrorMessage={errors.lastName?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
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
        <Button width={'100%'} onClick={handleSubmit(onSubmit)} isLoading={isLoading}>
          Sign up
        </Button>
        <Text fontSize={12} fontStyle="normal" fontWeight={400} lineHeight="20px" marginTop="-8px">
          By clicking &quot;Sign up,&quot; you agree to our Terms of Use and our Privacy Policy.
        </Text>
      </VStack>
    </AuthBox>
  );
}
