'use client';
import { memo, useCallback } from 'react';
import { VStack } from '@chakra-ui/react';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { useMutation } from '@tanstack/react-query';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { AuthService } from '@/api/services/AuthService';
import { Button, FormInput } from '@/components/atom';
import { useAuth } from '@/contexts/AuthContext';
import { ForgotPasswordStep1Data } from '@/models/auth';
import { ForgotPasswordStep1Validation } from '@/validation';

const resolver = classValidatorResolver(ForgotPasswordStep1Validation);

const Step1 = () => {
  const { setStep, setForgotPasswordUserId } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordStep1Data>({ defaultValues: { email: '' }, resolver });

  const { mutate, isLoading } = useMutation<string, { message: string }, ForgotPasswordStep1Data>(
    AuthService.forgotPasswordStep1,
    {
      onSuccess: userId => {
        setStep('OTPStep');
        setForgotPasswordUserId(userId);
      },
    },
  );

  const onSubmit: SubmitHandler<ForgotPasswordStep1Data> = useCallback(
    data => mutate(data),
    [mutate],
  );

  return (
    <VStack spacing={16}>
      <Controller
        name="email"
        control={control}
        rules={{ required: 'This field is required' }}
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
      <Button width={'100%'} onClick={handleSubmit(onSubmit)} isLoading={isLoading}>
        Next
      </Button>
    </VStack>
  );
};

export default memo(Step1);
