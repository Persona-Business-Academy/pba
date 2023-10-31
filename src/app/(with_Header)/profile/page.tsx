'use client';
import React, { FC } from 'react';
import { Box, Button as ChakraButton, Flex, Text } from '@chakra-ui/react';
import { Country } from 'country-state-city';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { Button, FormInput } from '@/components/atoms';
import PhoneNumberInput from '@/components/atoms/PhoneNumberInput';
import SelectLabel from '@/components/atoms/SelectLabel';
import { montserrat, segoe } from '@/constants/fonts';

type Props = {};

const Profile: FC<Props> = () => {
  const { data } = useSession();
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
            {data?.user?.firstName} {data?.user?.lastName}
          </Text>
          <ChakraButton>Change Avatar</ChakraButton>
        </Box>
      </Flex>
      <Flex paddingTop="20px" flexDirection="column" gap={24}>
        <Flex gap="24px">
          <FormInput
            isRequired
            isInvalid={false}
            name="first name"
            type="text"
            formLabelName="First Name"
            placeholder="First Name"
            value=""
            handleInputChange={() => {}}
            formErrorMessage=""
          />
          <FormInput
            isRequired
            isInvalid={false}
            name="last name"
            type="text"
            formLabelName="Last Name"
            value=""
            placeholder="Last Name"
            handleInputChange={() => {}}
            formErrorMessage=""
          />
        </Flex>
        <Flex gap="24px">
          <FormInput
            isRequired
            isInvalid={false}
            name="email"
            type="email"
            formLabelName="Email"
            placeholder="you@gmail.com"
            value=""
            handleInputChange={() => {}}
            formErrorMessage=""
          />
          <PhoneNumberInput value="" placeholder="" onChange={() => {}} country="" rest />
        </Flex>
        <Flex gap="24px">
          <FormInput
            isRequired
            isInvalid={false}
            name="first name"
            type="text"
            formLabelName="Address"
            placeholder="33062 komitas, 5st."
            value=""
            handleInputChange={() => {}}
            formErrorMessage=""
          />
        </Flex>
        <Flex gap="24px">
          <SelectLabel
            options={Country.getAllCountries()}
            labelName="Country"
            valueLabel="name"
            nameLabel="name"
          />
          <FormInput
            name="state"
            type="text"
            formLabelName="State"
            placeholder="Enter your state"
            value=""
            handleInputChange={() => {}}
          />
          <FormInput
            name="city"
            type="text"
            formLabelName="City"
            placeholder="Enter your City"
            value=""
            handleInputChange={() => {}}
          />
        </Flex>
        <Flex alignItems="flex-end" justifyContent="flex-end">
          <Button width="162px" height="53px" fontSize="16px">
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
