'use client';
import { memo, useCallback } from 'react';
import { Text, VStack } from '@chakra-ui/react';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { AuthService } from '@/api/services/AuthService';
import { Button, FormInput } from '@/components/atom';
import { SignUpFormData } from '@/models/auth';
import { SignUpValidation } from '@/validation';

const resolver = classValidatorResolver(SignUpValidation);

// todo
const SignUp = () => {
  const { push } = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver,
    defaultValues: { firstName: '', lastName: '', email: '', password: '' },
  });

  const { mutate, isLoading } = useMutation<boolean, { message: string }, SignUpFormData>(
    AuthService.signUp,
    { onSuccess: () => push('/') },
  );

  const onSubmit: SubmitHandler<SignUpFormData> = useCallback(data => mutate(data), [mutate]);

  return (
    <>
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
        <Text
          fontSize={12}
          fontStyle="normal"
          fontWeight={400}
          lineHeight="20px"
          marginTop="-8px">{`By clicking "Sign up," you agree to our Terms of Use and our Privacy Policy.`}</Text>
      </VStack>
    </>
  );
};

export default memo(SignUp);
