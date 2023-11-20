'use client';
import React from 'react';
import {
  Box,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Textarea,
} from '@chakra-ui/react';
import Image from 'next/image';
import { Button, FormInput, PhoneNumberInput } from '@/components/atoms';

const Contact = () => {
  return (
    <>
      <Box bg="#F6FCFF" padding="98px 0" borderRadius="0 0 34px 34px">
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
            A member of our team would love to help youwith your query.
          </Text>
        </Box>
      </Box>

      <Container
        margin={{ base: '36px auto', lg: '148px auto', xl: '148px auto' }}
        maxWidth="1200px"
        padding={{ base: '32px 16px', lg: '32px', xl: '32px' }}
        borderRadius="12px"
        bg="#F3F4F6">
        <Flex
          gap={{ base: '36px', lg: '100px', xl: '100px' }}
          width="100%"
          justifyContent="center"
          alignItems="center"
          flexWrap={{ base: 'wrap', lg: 'nowrap', xl: 'nowrap' }}>
          <Box width="408px">
            <Heading
              as="h2"
              textAlign={{ base: 'center', lg: 'left', xl: 'left' }}
              margin="0"
              color="#111827"
              mb="12px"
              lineHeight="36px"
              fontSize={{ base: '28px', lg: '30px', xl: '30px' }}
              fontWeight="800">
              Get in touch
            </Heading>

            <Text
              as="p"
              margin="0 0 32px 0"
              lineHeight="22px"
              fontSize="16px"
              color="#6B7280"
              fontWeight={400}>
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet.
              Sapien tortor lacus arcu.
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
                  742 Evergreen Terrace
                </Text>
                <Text as="p" margin="0">
                  Springfield, OR 12345
                </Text>
              </Flex>

              <Box display="flex" gap="13px" flexDirection="column">
                <Flex gap="12px">
                  <Image
                    src="./icons/contact_phone_icon.svg"
                    alt="Call Us"
                    width={24}
                    height={24}
                  />
                  <Text as="span">+1 (555) 123-4567</Text>
                </Flex>
                <Flex gap="12px">
                  <Image src="./icons/contact_mail_icon.svg" alt="Call Us" width={24} height={24} />
                  <Text as="span">support@example.com</Text>
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
                fontSize={{ base: '28px', lg: '30px', xl: '30px' }}
                lineHeight="42.56px">
                Contact sales
              </Heading>
              <Text color="#6B7280" as="span" lineHeight="22px" fontSize="16px" fontWeight={400}>
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst
                amet. Sapien tortor lacus arcu.
              </Text>
            </Box>

            <FormControl maxWidth="628px">
              <Box display="flex" flexDirection="column" gap="16px" flexWrap="wrap">
                <Box display="flex" gap="20px" flexWrap="wrap">
                  <Box width={{ base: '100%', lg: '304px', xl: '304px' }}>
                    <FormInput
                      formLabelName="First name"
                      placeholder="Enter name"
                      name="firstName"
                      isRequired
                    />
                  </Box>
                  <Box width={{ base: '100%', lg: '304px', xl: '304px' }}>
                    <FormInput
                      formLabelName="Last name"
                      placeholder="Enter last name"
                      name="lastname"
                      isRequired
                    />
                  </Box>
                </Box>

                <Flex gap="20px" flexWrap="wrap">
                  <Box width={{ base: '100%', lg: '304px', xl: '304px' }}>
                    <FormInput
                      formLabelName="Email"
                      placeholder="you@example.com"
                      isRequired
                      name="email"
                    />
                  </Box>

                  <Box width={{ base: '100%', lg: '304px', xl: '304px' }}>
                    <PhoneNumberInput
                      value="number"
                      placeholder="98 901 820"
                      country="am"
                      onChange={Number}
                    />
                  </Box>
                </Flex>

                <Box maxW="100%">
                  <FormInput
                    placeholder="you@example.com"
                    formLabelName="Company"
                    isRequired
                    name="Company"
                  />
                </Box>

                <Box width="100%">
                  <FormControl>
                    <FormLabel
                      fontWeight={600}
                      marginBottom={4}
                      lineHeight="20px"
                      fontSize={14}
                      color="#222">
                      Message
                    </FormLabel>
                    <Textarea bg="#fff" placeholder="Type here ..." resize="none" />
                  </FormControl>
                </Box>

                <Flex gap="12px" alignItems="baseline">
                  <Checkbox />

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
                    padding="16px 32px">
                    Lets talk
                  </Button>
                </Box>
              </Box>
            </FormControl>
          </Flex>
        </Flex>
      </Container>

      <Box
        bg={{ base: 'transparent', lg: '#F6FCFF', xl: '#F6FCFF' }}
        padding={{ base: '0', lg: '74px 0', xl: '74px 0' }}
        mb={{ base: '36px', lg: '0', xl: ' 0' }}>
        <Flex maxWidth="1028px" margin=" 0 auto" gap="46px" flexDirection="column">
          <Box
            display={{ base: 'none', lg: 'flex', xl: 'flex' }}
            gap="215px"
            justifyContent="center"
            textAlign="center"
            color="#000000">
            <Box>
              <Text margin="0 0 16px 0" fontWeight={700} lineHeight="36px" fontSize="28px" as="p">
                Yerevan, Armenia
              </Text>
              <Text fontWeight={400} lineHeight="22px" fontSize="16px" as="span">
                20 Yervand Kochar St, Yerevan 0070
              </Text>
            </Box>
            <Box>
              <Text margin="0 0 16px 0" fontWeight={700} lineHeight="36px" fontSize="28px" as="p">
                Yerevan, Armenia
              </Text>
              <Text fontWeight={400} lineHeight="22px" fontSize="16px" as="span">
                05 Sayat Nova St, Yerevan 0070
              </Text>
            </Box>
          </Box>

          <Box display="flex" width="100%" justifyContent="center" gap="36px" flexWrap="wrap">
            <Box display="flex" alignItems="center" gap="24px">
              <Box
                width={{ base: '36px', lg: '78px', xl: '78px' }}
                height={{ base: '36px', lg: '78px', xl: '78px' }}>
                <Image
                  src="/images/public_available/social_facebook.png"
                  alt="Social_icon"
                  width={78}
                  height={78}
                />
              </Box>

              <Box display={{ base: 'none', lg: 'block', xl: 'block' }}>
                <Text as="p" margin="0 0 8px 0" fontWeight={400} lineHeight="22px" fontSize="16px">
                  <span style={{ fontWeight: '700', lineHeight: '21.28px' }}>Join</span> our
                </Text>
                <Text as="span" fontWeight={400} lineHeight="22px" fontSize="16px">
                  Facebook
                </Text>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" gap="24px">
              <Box
                width={{ base: '36px', lg: '78px', xl: '78px' }}
                height={{ base: '36px', lg: '78px', xl: '78px' }}>
                <Image
                  src="/images/public_available/social_youtube.png"
                  alt="Social_icon"
                  width={78}
                  height={78}
                />
              </Box>

              <Box display={{ base: 'none', lg: 'block', xl: 'block' }}>
                <Text as="p" margin="0 0 8px 0" fontWeight={400} lineHeight="22px" fontSize="16px">
                  <span style={{ fontWeight: '700', lineHeight: '21.28px' }}>Watch</span> our
                </Text>
                <Text as="span" fontWeight={400} lineHeight="22px" fontSize="16px">
                  YouTube videos
                </Text>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" gap="24px">
              <Box
                width={{ base: '36px', lg: '78px', xl: '78px' }}
                height={{ base: '36px', lg: '78px', xl: '78px' }}>
                <Image
                  src="/images/public_available/social_instagram.png"
                  alt="Social_icon"
                  width={78}
                  height={78}
                />
              </Box>

              <Box display={{ base: 'none', lg: 'block', xl: 'block' }}>
                <Text as="p" margin="0 0 8px 0" fontWeight={400} lineHeight="22px" fontSize="16px">
                  <span style={{ fontWeight: '700', lineHeight: '21.28px' }}>Follow</span> us on
                </Text>
                <Text as="span" fontWeight={400} lineHeight="22px" fontSize="16px">
                  Instagram
                </Text>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" gap="24px">
              <Box
                width={{ base: '36px', lg: '78px', xl: '78px' }}
                height={{ base: '36px', lg: '78px', xl: '78px' }}>
                <Image
                  src="/images/public_available/social_facebook.png"
                  alt="Social_icon"
                  width={78}
                  height={78}
                />
              </Box>

              <Box display={{ base: 'none', lg: 'block', xl: 'block' }}>
                <Text as="p" margin="0 0 8px 0" fontWeight={400} lineHeight="22px" fontSize="16px">
                  <span style={{ fontWeight: '700', lineHeight: '21.28px' }}>Connect</span> with us
                  on
                </Text>
                <Text as="span" fontWeight={400} lineHeight="22px" fontSize="16px">
                  Connect
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Contact;
