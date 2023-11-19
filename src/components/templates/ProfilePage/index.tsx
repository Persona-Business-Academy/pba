'use client';
import React, { FC, useCallback, useEffect } from 'react';
import { Box, Button as ChakraButton, Flex, Text } from '@chakra-ui/react';
import { Country } from 'country-state-city';
import Image from 'next/image';
import { User } from 'next-auth';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Button, FormInput } from '@/components/atoms';
import PhoneNumberInput from '@/components/atoms/PhoneNumberInput';
import SelectLabel from '@/components/atoms/SelectLabel';
import { montserrat, segoe } from '@/constants/fonts';
import { UserProfileFormData } from '@/models/auth';

type Props = {
  user: User | null;
};

const Profile: FC<Props> = ({ user }) => {
  const { control, handleSubmit, reset } = useForm<UserProfileFormData>();

  useEffect(() => {
    if (user) {
      reset({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        state: user.state || '',
        city: user.city || '',
        country: user.country || '',
        phone: user.phone || '',
      });
    }
  }, [user, reset]);

  const onSubmit: SubmitHandler<UserProfileFormData> = useCallback(
    ({ firstName, lastName, email, state, city, address, country, phone }) => {
      console.log({ email, lastName, firstName, state, city, address, country, phone });
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
            {user?.firstName} {user?.lastName}
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
            rules={{
              required: 'This field is required',
            }}
            render={({ field: { onChange, value } }) => (
              <PhoneNumberInput value={value} placeholder="" onChange={onChange} country="" rest />
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
        <form>
          <Flex gap={24} flexDirection="column">
            <FormInput
              isRequired
              isInvalid={false}
              name="first name"
              type="text"
              formLabelName="Current Password"
              placeholder="First Name"
              value=""
              handleInputChange={() => {}}
              formHelperText="Your password must be less than 6 characters."
            />
            <FormInput
              isRequired
              isInvalid={false}
              name="first name"
              type="text"
              formLabelName="New Password"
              placeholder="First Name"
              value=""
              handleInputChange={() => {}}
              formHelperText="Your password must be less than 6 characters."
            />
            <FormInput
              isRequired
              isInvalid={false}
              name="first name"
              type="text"
              formLabelName="Confirm Password"
              placeholder="First Name"
              value=""
              handleInputChange={() => {}}
              formHelperText="Your password must be less than 6 characters."
            />
          </Flex>
          <Flex alignItems="flex-end" justifyContent="flex-end">
            <Button width="162px" height="53px" fontSize="16px">
              Change Password
            </Button>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};

export default Profile;
