'use client';
import React, { FC, useCallback, useMemo } from 'react';
import { Box, Button as ChakraButton, Flex, Text } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { Country } from 'country-state-city';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { User } from 'next-auth';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { UserService } from '@/api/services/UserService';
import { Button, FormInput } from '@/components/atoms';
import PhoneNumberInput from '@/components/atoms/PhoneNumberInput';
import SelectLabel from '@/components/atoms/SelectLabel';
import { montserrat, segoe } from '@/utils/constants/fonts';
import { PasswordChangeData, UserProfileFormData } from '@/utils/models/auth';

type Props = {
  sessionUser: User;
};

const Profile: FC<Props> = ({ sessionUser }) => {
  const router = useRouter();

  const defaultValues = useMemo(
    () => ({
      firstName: sessionUser?.firstName || '',
      lastName: sessionUser?.lastName || '',
      email: sessionUser?.email || '',
      state: sessionUser?.state || '',
      city: sessionUser?.city || '',
      country: sessionUser?.country || '',
      phone: sessionUser?.phone || '',
      address: sessionUser?.address || '',
    }),
    [
      sessionUser?.address,
      sessionUser?.city,
      sessionUser?.country,
      sessionUser?.email,
      sessionUser?.firstName,
      sessionUser?.lastName,
      sessionUser?.phone,
      sessionUser?.state,
    ],
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProfileFormData>({ defaultValues });

  const { control: passwordChangeControl, handleSubmit: passwordChangeHandlerSubmit } =
    useForm<PasswordChangeData>();

  const { mutateAsync: updateUserProfileMutation } = useMutation<
    number,
    { message: string },
    UserProfileFormData
  >(UserService.updateUserProfile);

  const onSubmit: SubmitHandler<any> = useCallback(
    async data => updateUserProfileMutation(data).finally(router.refresh),
    [router, updateUserProfileMutation],
  );

  const onPasswordChangeSubmit: SubmitHandler<PasswordChangeData> = useCallback(
    ({ currentPassword, newPassword, confirmPassword }) => {
      console.log(currentPassword, newPassword, confirmPassword);
    },
    [],
  );

  return (
    <Box
      width="700px"
      margin="0 auto"
      p={{ base: '36px 16px 36px 16px', md: '96px 16px 159px 16px', xl: '96px 0 159px 0' }}>
      <Text
        display={{ base: 'none', sm: 'block' }}
        textAlign="center"
        as="h3"
        width="100%"
        fontSize="44px"
        fontWeight={700}
        lineHeight="normal"
        className={montserrat.className}>
        Edit Profile
      </Text>
      <Flex
        gap={16}
        textAlign="center"
        paddingTop={{ base: '0', sm: '40px' }}
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'center', md: 'flex-start' }}>
        <Box borderRadius="50%" overflow="hidden" position="relative" width="101px" height="101px">
          <Image fill alt="avatar_img" src="/images/avatar.jpeg" />
        </Box>
        <Box>
          <Text
            className={segoe.className}
            fontSize={{ base: '16px', sm: '24px' }}
            fontWeight={700}
            lineHeight="normal"
            m={{ base: '0 0 8px 0', sm: '0 0 16px 0' }}>
            {`${sessionUser?.firstName || ''} ${sessionUser?.lastName || ''}`}
          </Text>
          <ChakraButton
            height="22px"
            color="#1F1646"
            backgroundColor="#fff"
            _hover={{
              color: '#1F1646',
              backgroundColor: '#fff',
            }}
            _focus={{
              color: '#1F1646',
              backgroundColor: '#fff',
            }}>
            Change Avatar
          </ChakraButton>
        </Box>
      </Flex>
      <Flex paddingTop={{ base: '36px', md: '40px' }} flexDirection="column" gap={24}>
        <Flex gap="24px" flexDirection={{ base: 'column', lg: 'row' }}>
          <Controller
            name="firstName"
            control={control}
            rules={{
              required: 'This field is required',
            }}
            render={({ field: { onChange, value, name } }) => (
              <FormInput
                isRequired
                name="firstName"
                type="text"
                formLabelName="First Name"
                placeholder="First Name"
                value={value}
                handleInputChange={onChange}
                isInvalid={!!errors[name]?.message}
                formErrorMessage={errors[name]?.message}
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            rules={{
              required: 'This field is required',
            }}
            render={({ field: { onChange, value, name } }) => (
              <FormInput
                isRequired
                name="lastName"
                type="text"
                formLabelName="Last Name"
                value={value}
                placeholder="Last Name"
                handleInputChange={onChange}
                isInvalid={!!errors[name]?.message}
                formErrorMessage={errors[name]?.message}
              />
            )}
          />
        </Flex>
        <Flex gap="24px" flexDirection={{ base: 'column', lg: 'row' }}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'This field is required',
            }}
            render={({ field: { onChange, value, name } }) => (
              <FormInput
                isRequired
                name="email"
                type="email"
                formLabelName="Email"
                placeholder="you@gmail.com"
                value={value}
                handleInputChange={onChange}
                isInvalid={!!errors[name]?.message}
                formErrorMessage={errors[name]?.message}
              />
            )}
          />

          <Controller
            name="phone"
            control={control}
            render={({ field: { onChange, value } }) => (
              <PhoneNumberInput onChange={onChange} value={value} />
            )}
          />
        </Flex>
        <Flex gap="24px">
          <Controller
            name="address"
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <FormInput
                isRequired
                name="address"
                type="text"
                formLabelName="Address"
                placeholder="33062 komitas, 5st."
                value={value}
                handleInputChange={onChange}
                isInvalid={!!errors[name]?.message}
                formErrorMessage={errors[name]?.message}
              />
            )}
          />
        </Flex>
        <Flex gap="24px" flexDirection={{ base: 'column', lg: 'row' }}>
          <Controller
            name="country"
            control={control}
            render={({ field: { onChange, value } }) => (
              <SelectLabel
                options={Country.getAllCountries()}
                labelName="Country"
                valueLabel="name"
                nameLabel="name"
                onChange={onChange}
                value={value}
              />
            )}
          />

          <Controller
            name="state"
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <FormInput
                name="state"
                type="text"
                formLabelName="State"
                placeholder="Enter your state"
                value={value}
                handleInputChange={onChange}
                isInvalid={!!errors[name]?.message}
                formErrorMessage={errors[name]?.message}
              />
            )}
          />

          <Controller
            name="city"
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <FormInput
                name="city"
                type="text"
                formLabelName="City"
                placeholder="Enter your City"
                value={value}
                handleInputChange={onChange}
                isInvalid={!!errors[name]?.message}
                formErrorMessage={errors[name]?.message}
              />
            )}
          />
        </Flex>
        <Flex alignItems="flex-end" justifyContent="flex-end">
          <Button width="162px" height="53px" fontSize="16px" onClick={handleSubmit(onSubmit)}>
            Save Changes
          </Button>
        </Flex>
        <Flex></Flex>
      </Flex>
      <Flex flexDirection="column" gap={24} mt={{ base: '12px', md: '40px' }}>
        <Text color="#000" fontSize={28} fontWeight={700} className={segoe.className}>
          Private Settings
        </Text>
        <Flex gap={24} flexDirection="column">
          <Controller
            name="currentPassword"
            control={passwordChangeControl}
            render={({ field: { onChange, value } }) => (
              <FormInput
                isRequired
                isInvalid={false}
                name="Current Password"
                type="text"
                formLabelName="Current Password"
                placeholder="Current Password"
                value={value}
                handleInputChange={onChange}
                formHelperText="Your password must be less than 6 characters."
              />
            )}
          />

          <Controller
            name="newPassword"
            control={passwordChangeControl}
            render={({ field: { onChange, value } }) => (
              <FormInput
                isRequired
                isInvalid={false}
                name="New Password"
                type="text"
                formLabelName="New Password"
                placeholder="New Password"
                value={value}
                handleInputChange={onChange}
                formHelperText="Your password must be less than 6 characters."
              />
            )}
          />

          <Controller
            name="confirmPassword"
            control={passwordChangeControl}
            render={({ field: { onChange, value } }) => (
              <FormInput
                isRequired
                isInvalid={false}
                name="Confirm Password"
                type="text"
                formLabelName="Confirm Password"
                placeholder="Confirm Password"
                value={value}
                handleInputChange={onChange}
                formHelperText="Your password must be less than 6 characters."
              />
            )}
          />
        </Flex>
        <Flex alignItems="flex-end" justifyContent="flex-end">
          <Button
            width="162px"
            height="53px"
            fontSize="16px"
            onClick={passwordChangeHandlerSubmit(onPasswordChangeSubmit)}>
            Change Password
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Profile;
