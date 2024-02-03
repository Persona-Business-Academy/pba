'use client';
import React, { useCallback, useState } from 'react';
import { Box, Container, Flex, FormControl, Heading, Text } from '@chakra-ui/react';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';
import { ContactUsService } from '@/api/services/ContactUsService';
import { Button, FormInput, Loading, PhoneNumberInput } from '@/components/atoms';
import Checkbox from '@/components/atoms/Checkbox';
import FormTextarea from '@/components/atoms/FormTextarea';
import SuccessMessageToast from '@/components/atoms/SuccessMessageToast';
import { ContactUsApplicantFormValidation } from '@/utils/validation/contact-us';

const resolver = classValidatorResolver(ContactUsApplicantFormValidation);

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  company: '',
  message: '',
  agreeToPrivacyPolicy: false,
};

const Contact = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactUsApplicantFormValidation>({ defaultValues, resolver });

  const { mutate, isLoading } = useMutation<
    boolean,
    { message: boolean },
    ContactUsApplicantFormValidation
  >(ContactUsService.createContactUsApplicant, {
    onSuccess: () => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
      reset();
    },
  });

  const submitHandler = useCallback(
    (data: ContactUsApplicantFormValidation) => {
      if (!isChecked) return;
      mutate(data);
    },
    [isChecked, mutate],
  );

  return (
    <>
      <Box bg="#F6FCFF" padding="98px 0" borderRadius="0 0 34px 34px">
        {isLoading && <Loading />}
        <Box color="#222222" maxW="764px" margin="0 auto" textAlign="center">
          <Heading
            as="h1"
            margin="0 0 16px 0"
            fontSize="44px"
            fontWeight={700}
            lineHeight="53.64px">
            How can we help?
          </Heading>
          <Text as="p" margin="0" fontWeight={400} lineHeight="26.6px" fontSize="20px">
            We're here to assist you. Whether you have a question, feedback, or need support, we'd
            love to hear from you.
          </Text>
        </Box>
      </Box>

      <Container
        margin={{ base: '36px auto', lg: '148px auto' }}
        maxWidth="1200px"
        padding={{ base: '32px 16px', lg: '32px' }}
        borderRadius="12px"
        bg="#F3F4F6">
        <Flex
          gap={{ base: '36px', lg: '100px' }}
          width="100%"
          justifyContent="center"
          alignItems="center"
          flexWrap={{ base: 'wrap', lg: 'nowrap' }}>
          <Box width="408px">
            <Heading
              as="h2"
              textAlign={{ base: 'center', lg: 'left' }}
              margin="0"
              color="#111827"
              mb="12px"
              lineHeight="36px"
              fontSize={{ base: '28px', lg: '30px' }}
              fontWeight="800">
              Customer Support
            </Heading>

            <Text
              as="p"
              margin="0 0 32px 0"
              lineHeight="22px"
              fontSize="16px"
              color="#6B7280"
              fontWeight={400}>
              For inquiries regarding our products or assistance with an order, our dedicated
              customer support team is ready to help.
            </Text>

            <Box
              fontSize="16px"
              display="flex"
              gap="24px"
              flexDirection="column"
              fontWeight={400}
              lineHeight="22px"
              color="#6B7280">
              <Flex flexDirection="column">
                <Text as="p" margin="0">
                  Yervand Kochar 20, Yerevan
                </Text>
              </Flex>

              <Box display="flex" gap="13px" flexDirection="column">
                <Flex gap="12px">
                  <Image src="./icons/contact_mail_icon.svg" alt="Call Us" width={24} height={24} />
                  <Text as="span">training@pba.am</Text>
                </Flex>
              </Box>

              <Flex gap="5px">
                <Text as="span">Looking for careers?</Text>
                <Text lineHeight="21.28px" fontWeight={700} color="#111827" as="span">
                  View all job openings.
                </Text>
              </Flex>
            </Box>
          </Box>

          <Flex maxWidth="628px" textAlign="center" gap="16px" flexWrap="wrap">
            <Box mb="16px">
              <Heading
                as="h2"
                margin="0 0 16px 0"
                fontWeight={700}
                fontSize={{ base: '28px', lg: '30px' }}
                lineHeight="42.56px">
                Contact sales
              </Heading>
              <Text color="#6B7280" as="span" lineHeight="22px" fontSize="16px" fontWeight={400}>
                If you're experiencing technical issues with our products or services, our technical
                support team is here to assist you.
              </Text>
            </Box>

            <FormControl maxWidth="628px">
              <Box display="flex" flexDirection="column" gap="16px" flexWrap="wrap">
                <Box display="flex" gap="20px" flexWrap="wrap">
                  <Box width={{ base: '100%', lg: '304px' }}>
                    <Controller
                      name="firstName"
                      control={control}
                      rules={{
                        required: 'This field is required',
                      }}
                      render={({ field: { onChange, value, name } }) => (
                        <FormInput
                          isRequired
                          name={name}
                          type="text"
                          formLabelName="First name"
                          placeholder="Enter your name"
                          value={value}
                          handleInputChange={onChange}
                          isInvalid={!!errors[name]?.message}
                          formErrorMessage={errors[name]?.message}
                        />
                      )}
                    />
                  </Box>
                  <Box width={{ base: '100%', lg: '304px' }}>
                    <Controller
                      name="lastName"
                      control={control}
                      rules={{
                        required: 'This field is required',
                      }}
                      render={({ field: { onChange, value, name } }) => (
                        <FormInput
                          isRequired
                          name={name}
                          type="text"
                          formLabelName="Last name"
                          placeholder="Enter your name"
                          value={value}
                          handleInputChange={onChange}
                          isInvalid={!!errors[name]?.message}
                          formErrorMessage={errors[name]?.message}
                        />
                      )}
                    />
                  </Box>
                </Box>

                <Flex gap="20px" flexWrap="wrap">
                  <Box width={{ base: '100%', lg: '304px' }}>
                    <Controller
                      name="email"
                      control={control}
                      rules={{
                        required: 'This field is required',
                      }}
                      render={({ field: { onChange, value, name } }) => (
                        <FormInput
                          isRequired
                          name={name}
                          type="text"
                          formLabelName="Email"
                          placeholder="you@example.com"
                          value={value}
                          handleInputChange={onChange}
                          isInvalid={!!errors[name]?.message}
                          formErrorMessage={errors[name]?.message}
                        />
                      )}
                    />
                  </Box>

                  <Box width={{ base: '100%', lg: '304px' }}>
                    <Controller
                      name="phoneNumber"
                      control={control}
                      rules={{
                        required: 'This field is required',
                      }}
                      render={({ field: { onChange, value } }) => (
                        <PhoneNumberInput
                          onChange={onChange}
                          value={value}
                          isRequired
                          formLabelName="Phone Number"
                        />
                      )}
                    />
                  </Box>
                </Flex>

                <Box maxW="100%">
                  <Controller
                    name="company"
                    control={control}
                    rules={{
                      required: 'This field is required',
                    }}
                    render={({ field: { onChange, value, name } }) => (
                      <FormInput
                        isRequired
                        name={name}
                        type="text"
                        formLabelName="Company"
                        placeholder="Enter your company name"
                        value={value}
                        handleInputChange={onChange}
                        isInvalid={!!errors[name]?.message}
                        formErrorMessage={errors[name]?.message}
                      />
                    )}
                  />
                </Box>

                <Box width="100%">
                  <FormControl>
                    <Controller
                      name="message"
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { onChange, value, name } }) => (
                        <FormTextarea
                          name={name}
                          formLabelName="Message"
                          placeholder="Add a new value"
                          value={value}
                          handleInputChange={onChange}
                        />
                      )}
                    />
                  </FormControl>
                </Box>

                <Flex gap="12px" alignItems="center">
                  <Checkbox
                    onChange={e => setIsChecked(e.target.checked)}
                    isChecked={isChecked}
                    checked={isChecked}
                  />

                  <Text as="span">
                    By selecting this, you agree to the Privacy Policy and Cookie Policy.
                  </Text>
                </Flex>

                <Box mt="8px" maxWidth="100%" height="54px">
                  <Button
                    width="100%"
                    fontSize="16px"
                    lineHeight="22px"
                    height="100%"
                    fontWeight={400}
                    onClick={handleSubmit(submitHandler)}
                    isDisabled={!isChecked}
                    padding="16px 32px">
                    Lets talk
                  </Button>
                </Box>
                {showSuccessMessage && <SuccessMessageToast />}
              </Box>
            </FormControl>
          </Flex>
        </Flex>
      </Container>

      <Box
        bg={{ base: 'transparent', lg: '#F6FCFF', xl: '#F6FCFF' }}
        padding={{ base: '0', lg: '74px 0' }}
        mb={{ base: '36px', lg: '0' }}>
        <Flex maxWidth="1028px" margin=" 0 auto" gap="46px" flexDirection="column">
          <Box
            display={{ base: 'none', lg: 'flex' }}
            gap="215px"
            justifyContent="center"
            textAlign="center"
            color="#000000">
            <Box>
              <Text margin="0 0 16px 0" fontWeight={700} lineHeight="36px" fontSize="28px" as="p">
                Yerevan, Armenia
              </Text>
              <Text fontWeight={400} lineHeight="22px" fontSize="16px" as="span">
                20 Yervand Kochar St, 0070
              </Text>
            </Box>
          </Box>

          <Box display="flex" width="100%" justifyContent="center" gap="36px" flexWrap="wrap">
            <a target="_blank" href="https://www.facebook.com/personabusinessacademy">
              <Box display="flex" alignItems="center" gap="24px">
                <Box width={{ base: '36px', lg: '78px' }} height={{ base: '36px', lg: '78px' }}>
                  <Image
                    src="/images/public_available/social_facebook.png"
                    alt="Social_icon"
                    width={78}
                    height={78}
                  />
                </Box>

                <Box display={{ base: 'none', lg: 'block' }}>
                  <Text
                    as="p"
                    margin="0 0 8px 0"
                    fontWeight={400}
                    lineHeight="22px"
                    fontSize="16px">
                    <span style={{ fontWeight: '700', lineHeight: '21.28px' }}>Join</span> our
                  </Text>
                  <Text as="span" fontWeight={400} lineHeight="22px" fontSize="16px">
                    Facebook
                  </Text>
                </Box>
              </Box>
            </a>
            <a
              target="_blank"
              href="https://youtube.com/@personabusinessacademy?si=MXVSd_7svcYuZDdc">
              <Box display="flex" alignItems="center" gap="24px">
                <Box width={{ base: '36px', lg: '78px' }} height={{ base: '36px', lg: '78px' }}>
                  <Image
                    src="/images/public_available/social_youtube.png"
                    alt="Social_icon"
                    width={78}
                    height={78}
                  />
                </Box>

                <Box display={{ base: 'none', lg: 'block' }}>
                  <Text
                    as="p"
                    margin="0 0 8px 0"
                    fontWeight={400}
                    lineHeight="22px"
                    fontSize="16px">
                    <span style={{ fontWeight: '700', lineHeight: '21.28px' }}>Watch</span> our
                  </Text>
                  <Text as="span" fontWeight={400} lineHeight="22px" fontSize="16px">
                    YouTube videos
                  </Text>
                </Box>
              </Box>
            </a>
            <a target="_blank" href="https://www.instagram.com/persona_business_academy/">
              <Box display="flex" alignItems="center" gap="24px">
                <Box width={{ base: '36px', lg: '78px' }} height={{ base: '36px', lg: '78px' }}>
                  <Image
                    src="/images/public_available/social_instagram.png"
                    alt="Social_icon"
                    width={78}
                    height={78}
                  />
                </Box>

                <Box display={{ base: 'none', lg: 'block' }}>
                  <Text
                    as="p"
                    margin="0 0 8px 0"
                    fontWeight={400}
                    lineHeight="22px"
                    fontSize="16px">
                    <span style={{ fontWeight: '700', lineHeight: '21.28px' }}>Follow</span> us on
                  </Text>
                  <Text as="span" fontWeight={400} lineHeight="22px" fontSize="16px">
                    Instagram
                  </Text>
                </Box>
              </Box>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/school/persona-business-academy/?originalSubdomain=am">
              <Box display="flex" alignItems="center" gap="24px">
                <Box width={{ base: '36px', lg: '78px' }} height={{ base: '36px', lg: '78px' }}>
                  <Image
                    src="/images/public_available/social_linkedin.png"
                    alt="Social_icon"
                    width={78}
                    height={78}
                  />
                </Box>

                <Box display={{ base: 'none', lg: 'block' }}>
                  <Text
                    as="p"
                    margin="0 0 8px 0"
                    fontWeight={400}
                    lineHeight="22px"
                    fontSize="16px">
                    <span style={{ fontWeight: '700', lineHeight: '21.28px' }}>Connect</span> with
                    us on
                  </Text>
                  <Text as="span" fontWeight={400} lineHeight="22px" fontSize="16px">
                    Linkedin
                  </Text>
                </Box>
              </Box>
            </a>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Contact;
