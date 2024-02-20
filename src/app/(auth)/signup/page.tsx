'use client';
import { useCallback, useMemo, useState } from 'react';
import { Flex, Text, VStack } from '@chakra-ui/react';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { AuthService } from '@/api/services/AuthService';
import { Button, FormInput, Loading } from '@/components/atoms';
import { AuthBox } from '@/components/molecules';
import { segoe } from '@/utils/constants/fonts';
import { SIGN_IN_ROUTE, SIGN_UP_ROUTE, TERMS_AND_CONDITIONS_ROUTE } from '@/utils/constants/routes';
import { ResendEmailValidation, SignUpValidation } from '@/utils/validation';
import CheckIcon from '/public/icons/check.svg';

const resolver = classValidatorResolver(SignUpValidation);

export default function SignUpPage() {
  const [isSuccessfullySignedUp, setIsSuccessfullySignedUp] = useState(false);
  const {
    control,
    handleSubmit,
    getValues,
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
    { onSuccess: () => setIsSuccessfullySignedUp(true) },
  );

  const onSubmit: SubmitHandler<SignUpValidation> = useCallback(data => mutate(data), [mutate]);

  const { mutate: resendEmailMutation, isLoading: resendEmailIsLoading } = useMutation<
    boolean,
    { message: string },
    ResendEmailValidation
  >(AuthService.resendEmail);

  const sendEmailHandler = useCallback(() => {
    resendEmailMutation({ firstName: getValues('firstName'), email: getValues('email') });
  }, [getValues, resendEmailMutation]);

  return (
    <>
      {(isLoading || resendEmailIsLoading) && <Loading />}
      {isSuccessfullySignedUp ? (
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
            Check your email
          </Text>
          <Text
            fontSize="16px"
            fontWeight={400}
            className={segoe.className}
            textAlign="center"
            color="#222">
            Confirmation is sent to your email
          </Text>
          <Button
            mt="12px"
            p="12px 16px"
            fontSize="16px"
            fontWeight={400}
            mx="auto"
            onClick={sendEmailHandler}>
            Send again
          </Button>
        </Flex>
      ) : (
        <>
          <AuthBox data={authBoxProps.data} boxProps={authBoxProps.boxProps}>
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
                marginTop="-8px">
                By clicking &quot;Sign up,&quot; you agree to our{' '}
                <Text as={Link} href={TERMS_AND_CONDITIONS_ROUTE}>
                  Terms of Use{' '}
                </Text>
                and our
                <Text as={Link} href={`${TERMS_AND_CONDITIONS_ROUTE}?selected=12`}>
                  {' '}
                  Privacy Policy.
                </Text>
              </Text>
            </VStack>
          </AuthBox>
        </>
      )}
    </>
  );
}
