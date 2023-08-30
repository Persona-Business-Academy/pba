'use client';
import { memo, useCallback } from 'react';
import { VStack } from '@chakra-ui/react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Button, FormInput } from '@/components/atom';
import { ForgotPasswordEmailStepData } from '@/models/auth';

const EmailStep = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordEmailStepData>({ defaultValues: { email: '' } });

  const onSubmit: SubmitHandler<ForgotPasswordEmailStepData> = useCallback(() => {}, []);

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
      <Button width={'100%'} onClick={handleSubmit(onSubmit)}>
        Next
      </Button>
    </VStack>
  );
};

export default memo(EmailStep);
