'use client';
import React, { FC } from 'react';
import { Box, Container, Heading, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import { segoe } from '@/constants/fonts';

type Props = {};

const AboutPage: FC<Props> = () => {
  return (
    <>
      <Stack
        backgroundImage="/images/public_available/about_mobile_img.png"
        padding={{ base: '68px 16px 67px 16px', md: '68px 0 67px 0', xl: '179px 0 124px 0' }}
        backgroundPosition="center"
        backgroundSize="cover">
        <Heading
          className={segoe.className}
          boxSizing="border-box"
          color="#fff"
          textAlign={{ base: 'center', md: 'center', xl: 'left' }}
          margin={{ md: '0px auto', xl: '0px 0px 0px 366px' }}
          maxWidth="668px"
          fontWeight="600"
          lineHeight={{ bsdr: '26.6px', md: '26.6px', xl: '42.56px' }}
          fontSize={{ base: '20px', md: '26px', xl: '32px' }}>
          <Text
            as="span"
            fontSize={{ base: '28px', xl: '44px' }}
            fontWeight="700"
            lineHeight={{ md: '37.4px', xl: '56.64px' }}>
            Hi, were Persona
            <br />
          </Text>
          And were changing the way people think and feel about training.
        </Heading>
      </Stack>

      <Box padding={{ base: '36px 16px 0', md: '36px 16px 0', xl: '96px 0 0 0 ' }} bg="#F6FCFF">
        <Container maxW="1200px" margin="0 auto">
          <Box className={segoe.className} maxW="784px" margin="0 auto 40px" color="#222222">
            <Heading
              margin={{ base: '0 0 16px 0', xl: '0 0 8px 0' }}
              fontSize="32px"
              lineHeight="42.56px"
              fontWeight="700"
              textAlign="center">
              Our Mission
            </Heading>
            <Text fontSize="16px" fontWeight="400" lineHeight="21.28px" margin="0">
              To create value - each day, every day - as we build an equal and accessible learning
              environment for all. The BYJU'S mission is to redefine how the world learns through
              relentless effort and innovation, breaking the barriers to quality education, and
              helping to build a learning ecosystem that will create leaders of tomorrow.
            </Text>
          </Box>

          <Box mb={{ base: '36px', sm: '36px', md: '100px', xl: '148px' }} color="#222222">
            <Box
              display="flex"
              gap="24px"
              marginBottom={{ base: '20px', sm: '20px', md: '30px', lg: '50px', xl: '148px' }}
              flexWrap={{ base: 'wrap', sm: 'wrap', md: 'wrap', lg: 'wrap', xl: 'nowrap' }}
              justifyContent={{ base: 'center', sm: 'center', md: 'center', lg: 'center' }}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                textAlign={{ base: 'start', sm: 'start', md: 'center', lg: 'center' }}
                width="562px">
                <Heading margin="0 0 16px 0" fontWeight="700" fontSize="24px" lineHeight="31.92px">
                  Lorem ipsum, or lipsum as it is sometimes known, print, graphic or web designs.
                </Heading>
                <Text margin="0" lineHeight="21.28px" fontWeight="400" fontSize="16px">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </Text>
              </Box>

              <Box display={{ base: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }}>
                <Image
                  src="/images/public_available/courses_img.jpg"
                  width={576}
                  height={402}
                  alt="Courses"
                />
              </Box>
            </Box>

            <Box
              display="flex"
              gap={24}
              marginBottom={{ base: '20px', sm: '20px', md: '30px', lg: '50px', xl: '148px' }}
              justifyContent={{ base: 'center', sm: 'center', md: 'center', lg: 'center' }}
              flexWrap={{
                base: 'wrap-reverse',
                sm: 'wrap-reverse',
                md: 'wrap-reverse',
                lg: 'wrap-reverse',
                xl: 'nowrap',
              }}>
              <Box display={{ base: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }}>
                <Image
                  src="/images/public_available/courses_img.jpg"
                  width={576}
                  height={402}
                  alt="Courses"
                />
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                textAlign={{ base: 'start', sm: 'start', md: 'center', lg: 'center' }}
                width="562px">
                <Heading margin="0 0 16px 0" fontWeight="700" fontSize="24px" lineHeight="31.92px">
                  Lorem ipsum, or lipsum as it is sometimes known, print, graphic or web designs.{' '}
                </Heading>
                <Text margin="0" lineHeight="21.28px" fontWeight="400" fontSize="16px">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </Text>
              </Box>
            </Box>

            <Box
              display="flex"
              gap={24}
              justifyContent={{ base: 'center', sm: 'center', md: 'center', lg: 'center' }}
              flexWrap={{ base: 'wrap', sm: 'wrap', md: 'wrap', lg: 'wrap', xl: 'nowrap' }}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                textAlign={{ base: 'start', sm: 'start', md: 'center', lg: 'center' }}
                width="562px">
                <Heading margin="0 0 16px 0" fontWeight="700" fontSize="24px" lineHeight="31.92px">
                  Lorem ipsum, or lipsum as it is sometimes known, print, graphic or web designs.{' '}
                </Heading>
                <Text margin="0" lineHeight="21.28px" fontWeight="400" fontSize="16px">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </Text>
              </Box>

              <Box display={{ base: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }}>
                <Image
                  src="/images/public_available/courses_img.jpg"
                  width={576}
                  height={402}
                  alt="Courses"
                />
              </Box>
            </Box>
          </Box>
        </Container>

        <Box display="none">
          <Box maxW="804px" margin="0 auto 40px" textAlign="center" color="#000000">
            <Heading margin="0 0 8px 0" fontSize="32px" lineHeight="42.56px" fontWeight="700">
              Our Values
            </Heading>
            <Text fontSize="16px" fontWeight="400" lineHeight="21.28px" margin="0">
              Our five key values guide everything we do, from the way we build relationships with
              schools and families to the way we work together behind the scenes to make things
              happen.
            </Text>
          </Box>

          <Box
            maxW="1200px"
            margin="0 auto"
            pb={{ base: '36px', sm: '36px', md: '36px', xl: '148px' }}
            gap="20px"
            display="flex"
            flexWrap="wrap"
            justifyContent="center">
            <Box mt={{ base: '0px', sm: '0px', md: '0px', xl: '40px' }}>
              <Box
                bg="#fff"
                width={{ base: '347px', sm: '347px', xl: '386px' }}
                margin="0 auto"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mb="22px"
                padding={{ base: '64px 17px', sm: '64px 17px', xl: '82.24px 39px 134px' }}>
                <Box mb="36px" width="139px" height="145px">
                  <Image src="/icons/about_value_1.svg" width={138} height={138} alt="Icon" />
                </Box>
                <UnorderedList listStyleType="none" textAlign="center" margin="0">
                  <ListItem
                    mb="16px"
                    lineHeight="31.92px"
                    fontSize="24px"
                    fontWeight="700"
                    color="#1F1646">
                    Always Follow <span style={{ color: '#FF6131' }}>Up Process</span>
                  </ListItem>
                  <ListItem
                    lineHeight="21.28px"
                    fontSize="16px"
                    fontWeight="400"
                    color="#5B5B5B"
                    display={{ base: 'none', sm: 'none', xl: 'block' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box
                bg="#fff"
                width={{ base: '347px', sm: '347px', xl: '386px' }}
                margin="0 auto"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                padding={{ base: '64px 17px', sm: '64px 17px', xl: '82.24px 39px 134px' }}>
                <Box mb="36px" width="139px" height="145px">
                  <Image src="/icons/about_value_2.svg" width={138} height={138} alt="Icon" />
                </Box>
                <UnorderedList listStyleType="none" textAlign="center" margin="0">
                  <ListItem
                    mb="16px"
                    lineHeight="31.92px"
                    fontSize="24px"
                    fontWeight="700"
                    color="#1F1646">
                    Never Compromise
                    <span style={{ color: '#FF6131' }}> with Quality</span>
                  </ListItem>
                  <ListItem
                    lineHeight="21.28px"
                    fontSize="16px"
                    fontWeight="400"
                    color="#5B5B5B"
                    display={{ base: 'none', sm: 'none', xl: 'block' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.{' '}
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>

            <Box>
              <Box
                bg="#fff"
                width={{ base: '347px', sm: '347px', xl: '386px' }}
                margin="0 auto"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mb="22px"
                padding={{ base: '64px 17px', sm: '64px 17px', xl: '82.24px 39px 134px' }}>
                <Box mb="36px" width="139px" height="145px">
                  <Image src="/icons/about_value_3.svg" width={138} height={138} alt="Icon" />
                </Box>
                <UnorderedList listStyleType="none" textAlign="center" margin="0">
                  <ListItem
                    mb="16px"
                    lineHeight="31.92px"
                    fontSize="24px"
                    fontWeight="700"
                    color="#1F1646">
                    Speed & <span style={{ color: '#FF6131' }}>Scale</span>
                  </ListItem>
                  <ListItem
                    display={{ base: 'none', sm: 'none', xl: 'block' }}
                    lineHeight="21.28px"
                    fontSize="16px"
                    fontWeight="400"
                    color="#5B5B5B">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box
                bg="#fff"
                width={{ base: '347px', sm: '347px', xl: '386px' }}
                margin="0 auto"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                padding={{ base: '64px 17px', sm: '64px 17px', xl: '82.24px 39px 134px' }}>
                <Box mb="36px" width="139px" height="145px">
                  <Image src="/icons/about_value_4.svg" width={138} height={138} alt="Icon" />
                </Box>
                <UnorderedList listStyleType="none" textAlign="center" margin="0">
                  <ListItem
                    mb="16px"
                    lineHeight="31.92px"
                    fontSize="24px"
                    fontWeight="700"
                    color="#1F1646">
                    Stop Complaining and
                    <span style={{ color: '#FF6131' }}> Start Fixing</span>
                  </ListItem>
                  <ListItem
                    display={{ base: 'none', sm: 'none', xl: 'block' }}
                    lineHeight="21.28px"
                    fontSize="16px"
                    fontWeight="400"
                    color="#5B5B5B">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>

            <Box mt={{ base: '0px', sm: '0px', md: '0px', xl: '40px' }}>
              <Box
                bg="#fff"
                width={{ base: '347px', sm: '347px', xl: '386px' }}
                margin="0 auto"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mb="22px"
                padding={{ base: '64px 17px', sm: '64px 17px', xl: '82.24px 39px 134px' }}>
                <Box mb="36px" width="139px" height="145px">
                  <Image src="/icons/about_value_5.svg" width={138} height={138} alt="Icon" />
                </Box>
                <UnorderedList listStyleType="none" textAlign="center" margin="0">
                  <ListItem
                    mb="16px"
                    lineHeight="31.92px"
                    fontSize="24px"
                    fontWeight="700"
                    color="#1F1646">
                    Show Ownership & <span style={{ color: '#FF6131' }}>Accountability</span>
                  </ListItem>
                  <ListItem
                    display={{ base: 'none', sm: 'none', xl: 'block' }}
                    lineHeight="21.28px"
                    fontSize="16px"
                    fontWeight="400"
                    color="#5B5B5B">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box
                bg="#fff"
                width={{ base: '347px', sm: '347px', xl: '386px' }}
                margin="0 auto"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                padding={{ base: '64px 17px', sm: '64px 17px', xl: '82.24px 39px 134px' }}>
                <Box mb="36px" width="139px" height="145px">
                  <Image src="/icons/about_value_6.svg" width={138} height={138} alt="Icon" />
                </Box>
                <UnorderedList listStyleType="none" textAlign="center" margin="0">
                  <ListItem
                    mb="16px"
                    lineHeight="31.92px"
                    fontSize="24px"
                    fontWeight="700"
                    color="#1F1646">
                    Be Persistence & <span style={{ color: '#FF6131' }}>Effective Learner</span>
                  </ListItem>
                  <ListItem
                    display={{ base: 'none', sm: 'none', xl: 'block' }}
                    lineHeight="21.28px"
                    fontSize="16px"
                    fontWeight="400"
                    color="#5B5B5B">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box pb={{ base: '36px', sm: '36px', md: '100px', lg: '148px', xl: '148px' }}>
          <Box
            padding="96px 0"
            mb="37px"
            bg="#3CB4E7"
            textAlign="center"
            color="#FFF"
            position="relative">
            <Heading
              maxW="804px"
              margin="0 auto"
              fontSize="32px"
              lineHeight="42.56px"
              fontWeight="700">
              Our History
            </Heading>
            <Text
              maxW="804px"
              fontSize="16px"
              fontWeight="400"
              lineHeight="21.28px"
              margin="0 auto">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
              print, graphic or web designs. The passage is attributed to an unknown typesetter in
              the `
            </Text>
            <Text
              display={{ base: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' }}
              as="span"
              position="absolute"
              width="50px"
              height="50px"
              backgroundColor="#3CB4E7"
              borderRadius="50%"
              bottom="-25px"
              left="50%"
              transform="translateX(-25%)"></Text>
          </Box>

          <Box maxW="752px" margin="0 auto" display="flex">
            <Box
              maxWidth="348px"
              marginLeft={{ base: '36px', sm: '36px', md: '0', lg: '0', xl: '0' }}
              marginRight={{ base: '0', sm: '0', md: '40px', lg: '40px', xl: '40px' }}
              order={{ base: '1', sm: '1', md: '0', lg: '0', xl: '0' }}>
              <UnorderedList
                margin="0 0 96px 0"
                fontSize="16px"
                color="#3CB4E7"
                lineHeight="21.28px"
                listStyleType="none"
                fontWeight="400">
                <ListItem mb="8px">2012</ListItem>
                <ListItem mb="8px" fontSize="24px" fontWeight="700">
                  Our first experiment
                </ListItem>
                <ListItem color="#222222">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
                  print, graphic or web designs. The passage is attributed to an unknown typesetter
                  in the 15th century who is thought to have scrambled parts of Cicero's De Finibus.
                </ListItem>
              </UnorderedList>

              <UnorderedList
                margin="0 0 96px 0"
                fontSize="16px"
                color="#3CB4E7"
                lineHeight="21.28px"
                listStyleType="none"
                fontWeight="400">
                <ListItem mb="8px">2012</ListItem>
                <ListItem mb="8px" fontSize="24px" fontWeight="700">
                  Our first experiment
                </ListItem>
                <ListItem fontWeight="400" color="#222222">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
                  print, graphic or web designs. The passage is attributed to an unknown typesetter
                  in the 15th century who is thought to have scrambled parts of Cicero's De Finibus.
                </ListItem>
              </UnorderedList>

              <UnorderedList
                margin="0 0 96px 0"
                fontSize="16px"
                color="#3CB4E7"
                lineHeight="21.28px"
                listStyleType="none"
                fontWeight="400">
                <ListItem mb="8px">2012</ListItem>
                <ListItem mb="8px" fontSize="24px" fontWeight="700">
                  Our first experiment
                </ListItem>
                <ListItem fontWeight="400" color="#222222">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
                  print, graphic or web designs. The passage is attributed to an unknown typesetter
                  in the 15th century who is thought to have scrambled parts of Cicero's De Finibus.
                </ListItem>
              </UnorderedList>

              <UnorderedList
                margin={{ base: '0', sm: '0 ', md: '0 0 96px 0', xl: '0 0 96px 0' }}
                fontSize="16px"
                color="#3CB4E7"
                lineHeight="21.28px"
                listStyleType="none"
                fontWeight="400">
                <ListItem mb="8px">2012</ListItem>
                <ListItem mb="8px" fontSize="24px" fontWeight="700">
                  Our first experiment
                </ListItem>
                <ListItem fontWeight="400" color="#222222">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
                  print, graphic or web designs. The passage is attributed to an unknown typesetter
                  in the 15th century who is thought to have scrambled parts of Cicero's De Finibus.
                </ListItem>
              </UnorderedList>
            </Box>

            <Box
              width="2px"
              backgroundColor="#000000"
              position="relative"
              display="flex"
              flexDirection="column"
              gap={{ base: '0', sm: '0', md: '210px', lg: '210px', xl: '210px' }}
              padding="40px 0 0 0">
              <Box display="flex" flexDirection="column" alignItems="center" gap="45px">
                <Box
                  display="flex"
                  alignItems="center"
                  mb={{ base: '260px', sm: '260px', md: '0', lg: '0', xl: '0' }}>
                  <Text
                    as="span"
                    width="14px"
                    height="14px"
                    borderRadius="50%"
                    backgroundColor="#3CB4E7"></Text>
                </Box>

                <Box
                  display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}
                  alignItems="center"
                  gap="8px">
                  <Text
                    as="span"
                    width="14px"
                    height="14px"
                    borderRadius="50%"
                    backgroundColor="#3CB4E7"></Text>
                </Box>
              </Box>

              <Box display="flex" flexDirection="column" alignItems="center" gap="45px">
                <Box
                  display="flex"
                  alignItems="center"
                  mb={{ base: '225px', sm: '225px', md: '0', lg: '0', xl: '0' }}>
                  <Text
                    as="span"
                    width="14px"
                    height="14px"
                    borderRadius="50%"
                    backgroundColor="#3CB4E7"></Text>
                </Box>

                <Box display="" alignItems="center" gap="8px">
                  <Text
                    display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}
                    as="span"
                    width="14px"
                    height="14px"
                    borderRadius="50%"
                    backgroundColor="#3CB4E7"></Text>
                </Box>
              </Box>

              <Box display="flex" flexDirection="column" alignItems="center" gap="45px">
                <Box
                  display="flex"
                  alignItems="center"
                  mb={{ base: '265px', sm: '265px', md: '0', lg: '0', xl: '0' }}>
                  <Text
                    as="span"
                    width="14px"
                    height="14px"
                    borderRadius="50%"
                    backgroundColor="#3CB4E7"></Text>
                </Box>

                <Box
                  display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}
                  alignItems="center">
                  <Text
                    as="span"
                    width="14px"
                    height="14px"
                    borderRadius="50%"
                    backgroundColor="#3CB4E7"></Text>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box display="flex" alignItems="center" gap="8px">
                  <Text
                    as="span"
                    width="14px"
                    height="14px"
                    borderRadius="50%"
                    backgroundColor="#3CB4E7"></Text>
                </Box>
              </Box>
            </Box>

            <Box
              marginTop="55px"
              maxWidth="303px"
              marginLeft="60px"
              display={{ base: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
              <UnorderedList
                margin="0 0 96px 0"
                fontSize="16px"
                color="#3CB4E7"
                lineHeight="21.28px"
                listStyleType="none"
                fontWeight="400">
                <ListItem mb="8px">2012</ListItem>
                <ListItem mb="8px" fontSize="24px" fontWeight="700">
                  Our first experiment
                </ListItem>
                <ListItem fontWeight="400" color="#222222">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
                  print, graphic or web designs. The passage is attributed to an unknown typesetter
                  in the 15th century who is thought to have scrambled parts of Cicero's De Finibus.
                </ListItem>
              </UnorderedList>

              <UnorderedList
                margin="0 0 96px 0"
                fontSize="16px"
                color="#3CB4E7"
                lineHeight="21.28px"
                listStyleType="none"
                fontWeight="400">
                <ListItem mb="8px">2012</ListItem>
                <ListItem mb="8px" fontSize="24px" fontWeight="700">
                  Our first experiment
                </ListItem>
                <ListItem fontWeight="400" color="#222222">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
                  print, graphic or web designs. The passage is attributed to an unknown typesetter
                  in the 15th century who is thought to have scrambled parts of Cicero's De Finibus.
                </ListItem>
              </UnorderedList>
              <UnorderedList
                margin="0 0 96px 0"
                fontSize="16px"
                color="#3CB4E7"
                lineHeight="21.28px"
                listStyleType="none"
                fontWeight="400">
                <ListItem mb="8px">2012</ListItem>
                <ListItem mb="8px" fontSize="24px" fontWeight="700">
                  Our first experiment
                </ListItem>
                <ListItem fontWeight="400" color="#222222">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
                  print, graphic or web designs. The passage is attributed to an unknown typesetter
                  in the 15th century who is thought to have scrambled parts of Cicero's De Finibus.
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>
        <Box bg="#1F1646">
          <Box
            padding={{ base: '86px 0', sm: '86px 0', xl: '96px 0' }}
            color="#fff"
            maxWidth="1228px"
            gap={{
              base: '81px',
              sm: '81px',
              md: '50px',
              lg: '50px',
              xl: '0',
            }}
            margin="0 auto"
            display="flex"
            flexWrap="wrap"
            justifyContent={{
              base: 'center',
              sm: 'center',
              md: 'center',
              lg: 'center',
              xl: 'space-between',
            }}>
            <UnorderedList
              textAlign="center"
              width="305px"
              fontWeight="700"
              listStyleType="none"
              margin="0">
              <ListItem
                lineHeight={{
                  base: ' 37.24px',
                  sm: ' 37.24px',
                  md: ' 37.24px',
                  lg: '53.64px',
                  xl: '53.64px',
                }}
                fontSize={{ base: '28px', sm: '28px', md: '28px', lg: '44px', xl: '44px' }}>
                1M+
              </ListItem>
              <ListItem
                lineHeight={{
                  base: ' 31.92px',
                  sm: ' 31.92px',
                  md: ' 31.92px',
                  lg: '42.56px',
                  xl: '42.56px',
                }}
                fontSize={{ base: '24px', sm: '24px', md: '24px', lg: '32px', xl: '32px' }}>
                Users on our platform
              </ListItem>
            </UnorderedList>

            <UnorderedList
              textAlign="center"
              width="305px"
              fontWeight="700"
              listStyleType="none"
              margin="0">
              <ListItem
                lineHeight={{
                  base: ' 37.24px',
                  sm: ' 37.24px',
                  md: ' 37.24px',
                  lg: '53.64px',
                  xl: '53.64px',
                }}
                fontSize={{ base: '28px', sm: '28px', md: '28px', lg: '44px', xl: '44px' }}>
                150+
              </ListItem>
              <ListItem
                lineHeight={{
                  base: ' 31.92px',
                  sm: ' 31.92px',
                  md: ' 31.92px',
                  lg: '42.56px',
                  xl: '42.56px',
                }}
                fontSize={{ base: '24px', sm: '24px', md: '24px', lg: '32px', xl: '32px' }}>
                Total course
              </ListItem>
            </UnorderedList>

            <UnorderedList
              textAlign="center"
              width="305px"
              fontWeight="700"
              listStyleType="none"
              margin="0">
              <ListItem
                lineHeight={{
                  base: ' 37.24px',
                  sm: ' 37.24px',
                  md: ' 37.24px',
                  lg: '53.64px',
                  xl: '53.64px',
                }}
                fontSize={{ base: '28px', sm: '28px', md: '28px', lg: '44px', xl: '44px' }}>
                1M+
              </ListItem>
              <ListItem
                lineHeight={{
                  base: ' 31.92px',
                  sm: ' 31.92px',
                  md: ' 31.92px',
                  lg: '42.56px',
                  xl: '42.56px',
                }}
                fontSize={{ base: '24px', sm: '24px', md: '24px', lg: '32px', xl: '32px' }}>
                Nanodegree certificates earned{' '}
              </ListItem>
            </UnorderedList>

            <UnorderedList
              textAlign="center"
              width="305px"
              fontWeight="700"
              listStyleType="none"
              margin="0">
              <ListItem
                lineHeight={{
                  base: ' 37.24px',
                  sm: ' 37.24px',
                  md: ' 37.24px',
                  lg: '53.64px',
                  xl: '53.64px',
                }}
                fontSize={{ base: '28px', sm: '28px', md: '28px', lg: '44px', xl: '44px' }}>
                1M+
              </ListItem>
              <ListItem
                lineHeight={{
                  base: ' 31.92px',
                  sm: ' 31.92px',
                  md: ' 31.92px',
                  lg: '42.56px',
                  xl: '42.56px',
                }}
                fontSize={{ base: '24px', sm: '24px', md: '24px', lg: '32px', xl: '32px' }}>
                Users on our platform
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutPage;
