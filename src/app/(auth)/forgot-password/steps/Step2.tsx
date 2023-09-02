import { memo, useCallback } from 'react';
import { Text, VStack } from '@chakra-ui/react';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { useMutation } from '@tanstack/react-query';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { AuthService } from '@/api/services/AuthService';
import { Button } from '@/components/atom';
import OTPPassword from '@/components/atom/OTPPassword';
import { useAuth } from '@/contexts/AuthContext';
import { ForgotPasswordStep2Data } from '@/models/auth';
import { ForgotPasswordStep2Validation } from '@/validation';

const resolver = classValidatorResolver(ForgotPasswordStep2Validation);

const Step2 = () => {
  const { setStep, forgotPasswordUserId } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ForgotPasswordStep2Data>({
    resolver,
    defaultValues: { otpPassword: '', userId: forgotPasswordUserId },
  });

  const { mutate, isLoading } = useMutation<string, { message: string }, ForgotPasswordStep2Data>(
    AuthService.forgotPasswordStep2,
    {
      onSuccess: userId => {
        if (userId === forgotPasswordUserId) setStep('passwordStep');
      },
    },
  );

  const onSubmit: SubmitHandler<ForgotPasswordStep2Data> = useCallback(
    data => mutate(data),
    [mutate],
  );

  return (
    <VStack spacing={32}>
      <Text fontWeight={'400'} fontSize={14} lineHeight={'normal'} textAlign={'center'}>
        An email with password reset instructions has been sent to your email address
      </Text>
      <Text fontWeight={'600'} fontSize={20} lineHeight={'normal'} textAlign={'center'}>
        OTP verification
      </Text>
      <Controller
        name="otpPassword"
        control={control}
        rules={{ required: 'This field is required' }}
        render={({ field: { onChange } }) => <OTPPassword onChange={onChange} />}
      />
      <Button
        width={'100%'}
        onClick={handleSubmit(onSubmit)}
        isDisabled={!isValid}
        isLoading={isLoading}>
        Next
      </Button>
    </VStack>
  );
};

export default memo(Step2);
