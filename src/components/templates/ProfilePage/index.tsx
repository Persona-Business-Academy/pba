'use client';
import React, { FC, useCallback } from 'react';
import { Box, Button as ChakraButton, Flex, Text } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
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
  const { control, handleSubmit } = useForm<UserProfileFormData>();

  const { control: passwordChangeControl, handleSubmit: passwordChangeHandlerSubmit } =
    useForm<PasswordChangeData>();

  const { mutate: updateUserProfileMutation, data: updatedUserData } = useMutation<
    number,
    { message: string },
    any
  >(UserService.updateUserProfile);

  // const { data: userData } = useQuery(['get-me'], UserService.getMe);

  console.log({ updatedUserData });

  // useEffect(() => {
  //   if (userData) {
  //     reset({
  //       firstName: userData.firstName || '',
  //       lastName: userData.lastName || '',
  //       email: userData.email || '',
  //       state: userData.state || '',
  //       city: userData.city || '',
  //       country: userData.country || '',
  //       phone: userData.phone || '',
  //     });
  //   }
  // }, [userData, reset]);

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
            John Smith
            {/* {user?.firstName} {user?.lastName} */}
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
              required: 'This field idata-themes required',
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
        <Flex gap="24px" flexDirection={{ base: 'column', lg: 'row' }}>
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
        <Flex gap="24px" flexDirection={{ base: 'column', lg: 'row' }}>
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
