'use client';
import React, { FC, useCallback, useEffect } from 'react';
import { Box, Button as ChakraButton, Flex, Text } from '@chakra-ui/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Country } from 'country-state-city';
import Image from 'next/image';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { UserService } from '@/api/services/UserService';
import { Button, FormInput } from '@/components/atoms';
import PhoneNumberInput from '@/components/atoms/PhoneNumberInput';
import SelectLabel from '@/components/atoms/SelectLabel';
import { montserrat, segoe } from '@/utils/constants/fonts';
import { PasswordChangeData, UserProfileFormData } from '@/utils/models/auth';

type Props = {};

const Profile: FC<Props> = () => {
  const { control, handleSubmit, reset } = useForm<UserProfileFormData>();

  const { control: passwordChangeControl, handleSubmit: passwordChangeHandlerSubmit } =
    useForm<PasswordChangeData>();

  const { mutate: updateUserProfileMutation, data: updatedUserData } = useMutation<
    number,
    { message: string },
    any
  >(UserService.updateUserProfile);

  const { data: userData } = useQuery(['get-me'], UserService.getMe);

  console.log({ updatedUserData });

  useEffect(() => {
    if (userData) {
      reset({
        firstName: userData.firstName || '',
        lastName: userData.lastName || '',
        email: userData.email || '',
        state: userData.state || '',
        city: userData.city || '',
        country: userData.country || '',
        phone: userData.phone || '',
      });
    }
  }, [userData, reset]);

  const onSubmit: SubmitHandler<UserProfileFormData> = useCallback(
    ({ firstName, lastName, email, state, city, address, country, phone }) => {
      updateUserProfileMutation({
        firstName,
        lastName,
        email,
        state,
        city,
        address,
        country,
        phone,
      });
    },
    [updateUserProfileMutation],
  );

  const onPasswordChangeSubmit: SubmitHandler<PasswordChangeData> = useCallback(
    ({ currentPassword, newPassword, confirmPassword }) => {
      console.log(currentPassword, newPassword, confirmPassword);
    },
    [],
  );

  return (
    <Box width="700px" margin="0 auto" py="96px">
      <Text
        textAlign="center"
        as="h3"
        width="100%"
        fontSize="44px"
        fontWeight={700}
        lineHeight="normal"
        className={montserrat.className}>
        Edit Profile
      </Text>
      <Flex gap={16} paddingTop="64px">
        <Box borderRadius="50%" overflow="hidden">
          <Image width={101} height={101} alt="avatar_img" src="/images/avatar.jpeg" />
        </Box>
        <Box>
          <Text className={segoe.className} fontSize={24} fontWeight={700} lineHeight="normal">
            {/* {user?.firstName} {user?.lastName} */}
          </Text>
          <ChakraButton>Change Avatar</ChakraButton>
        </Box>
      </Flex>
      <Flex paddingTop="20px" flexDirection="column" gap={24}>
        <Flex gap="24px">
          <Controller
            name="firstName"
            control={control}
            rules={{
              required: 'This field is required',
            }}
            render={({ field: { onChange, value } }) => (
              <FormInput
                isRequired
                isInvalid={false}
                name="first name"
                type="text"
                formLabelName="First Name"
                placeholder="First Name"
                value={value}
                handleInputChange={onChange}
                formErrorMessage=""
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            rules={{
              required: 'This field is required',
            }}
            render={({ field: { onChange, value } }) => (
              <FormInput
                isRequired
                isInvalid={false}
                name="last name"
                type="text"
                formLabelName="Last Name"
                value={value}
                placeholder="Last Name"
                handleInputChange={onChange}
                formErrorMessage=""
              />
            )}
          />
        </Flex>
        <Flex gap="24px">
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'This field is required',
            }}
            render={({ field: { onChange, value } }) => (
              <FormInput
                isRequired
                isInvalid={false}
                name="email"
                type="email"
                formLabelName="Email"
                placeholder="you@gmail.com"
                value={value}
                handleInputChange={onChange}
                formErrorMessage=""
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
            rules={{
              required: 'This field is required',
            }}
            render={({ field: { onChange, value } }) => (
              <FormInput
                isRequired
                isInvalid={false}
                name="address"
                type="text"
                formLabelName="Address"
                placeholder="33062 komitas, 5st."
                value={value}
                handleInputChange={onChange}
                formErrorMessage=""
              />
            )}
          />
        </Flex>
        <Flex gap="24px">
          <Controller
            name="country"
            control={control}
            rules={{
              required: 'This field is required',
            }}
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
            rules={{
              required: 'This field is required',
            }}
            render={({ field: { onChange, value } }) => (
              <FormInput
                name="state"
                type="text"
                formLabelName="State"
                placeholder="Enter your state"
                value={value}
                handleInputChange={onChange}
              />
            )}
          />

          <Controller
            name="city"
            control={control}
            rules={{
              required: 'This field is required',
            }}
            render={({ field: { onChange, value } }) => (
              <FormInput
                name="city"
                type="text"
                formLabelName="City"
                placeholder="Enter your City"
                value={value}
                handleInputChange={onChange}
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
      <Flex flexDirection="column" gap={24}>
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
