'use client';
import {
  Box,
  Container,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <Stack
        backgroundImage="/images/public_available/about_bg_img.png"
        padding="179px 0 124px 0"
        backgroundPosition="center"
        backgroundSize="cover">
        <Heading
          boxSizing="border-box"
          color="#fff"
          margin="0"
          marginLeft="366px"
          maxWidth="668px"
          fontWeight="700"
          lineHeight="42.56px"
          fontSize="32px"
          css={{
            '@media (max-width: 1000px)': {
              margin: '0 auto',
              textAlign: 'center',
            },
          }}>
          Hi, we’re <br /> <span style={{ fontSize: '44px', lineHeight: '56.64px' }}>Persona</span>{' '}
          <br />
          And we’re changing the way people think and feel about training.
        </Heading>
      </Stack>

      <Box pt="96px" bg="#F6FCFF">
        <Container maxW="1200px" margin="0 auto">
          <Box maxW="784px" margin="0 auto 40px" color="#222222">
            <Heading
              margin="0 0 8px 0"
              fontSize="32px"
              lineHeight="42.56px"
              fontWeight="700"
              textAlign="center">
              Our Mission
            </Heading>
            <Text fontSize="16px" fontWeight="400" lineHeight="21.28px" margin="0">
              To create value – each day, every day – as we build an equal and accessible learning
              environment for all. The BYJU'S mission is to redefine how the world learns through
              relentless effort and innovation, breaking the barriers to quality education, and
              helping to build a learning ecosystem that will create leaders of tomorrow.
            </Text>
          </Box>

          <Box mb="148px" color="#222222">
            <Box
              display="flex"
              gap={24}
              marginBottom="148px"
              css={{
                '@media (max-width: 1000px)': {
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                },
              }}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                textAlign="center"
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

              <Box flexGrow="1">
                <Image width="100%" src="/images/public_available/courses_img.jpg"></Image>
              </Box>
            </Box>

            <Box
              display="flex"
              gap={24}
              marginBottom="148px"
              css={{
                '@media (max-width: 1000px)': {
                  flexWrap: 'wrap-reverse',
                  justifyContent: 'center',
                },
              }}>
              <Box flexGrow="1">
                <Image width="100%" src="/images/public_available/courses_img.jpg"></Image>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                textAlign="center"
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
              css={{
                '@media (max-width: 1000px)': {
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                },
              }}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                textAlign="center"
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

              <Box flexGrow="1">
                <Image width="100%" src="/images/public_available/courses_img.jpg"></Image>
              </Box>
            </Box>
          </Box>
        </Container>

        <Box>
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

          <Box maxW="1203px" margin="0 auto" pb="148px" display="flex" gap="21">
            <Box mt="40px">
              <Box
                bg="#fff"
                width="387px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mb="22px"
                padding="82.24px 39px 134px">
                <Box mb="36px" width="139px" height="145px">
                  <Image width="100%" height="100%" src="/icons/about_value_1.svg" />
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
                  <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.{' '}
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box
                bg="#fff"
                width="387px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                padding="82.24px 39px 134px">
                <Box mb="36px" width="139px" height="145px">
                  <Image width="100%" height="100%" src="/icons/about_value_2.svg" />
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
                  <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.{' '}
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>

            <Box>
              <Box
                bg="#fff"
                width="387px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mb="22px"
                padding="82.24px 39px 134px">
                <Box mb="36px" width="139px" height="145px">
                  <Image width="100%" height="100%" src="/icons/about_value_3.svg" />
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
                  <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.{' '}
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box
                bg="#fff"
                width="387px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                padding="82.24px 39px 134px">
                <Box mb="36px" width="139px" height="145px">
                  <Image width="100%" height="100%" src="/icons/about_value_4.svg" />
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
                  <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.{' '}
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>

            <Box mt="40px">
              <Box
                bg="#fff"
                width="387px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mb="22px"
                padding="82.24px 39px 134px">
                <Box mb="36px" width="139px" height="145px">
                  <Image width="100%" height="100%" src="/icons/about_value_5.svg" />
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
                  <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box
                bg="#fff"
                width="387px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                padding="82.24px 39px 134px">
                <Box mb="36px" width="139px" height="145px">
                  <Image width="100%" height="100%" src="/icons/about_value_6.svg" />
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
                  <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box pb="148px">
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
            <span
              style={{
                position: 'absolute',
                width: '50px',
                height: '50px',
                backgroundColor: '#3CB4E7',
                borderRadius: '50%',
                bottom: '-25px',
              }}></span>
          </Box>

          <Box
            maxW="752px"
            margin="0 auto"
            display="flex"
            css={{
              '@media (max-width: 840px)': {
                flexWrap: 'wrap',
                flexDirection: 'row',
              },
            }}>
            <Box
              maxWidth="348px"
              marginRight="40px"
              css={{
                '@media (max-width: 840px)': {
                  maxWidth: '100%',
                  marginRight: '0',
                  textAlign: 'center',
                },
              }}>
              <UnorderedList
                margin="0 0 96px 0"
                fontSize="16px"
                color="#3CB4E7"
                listStyleType="none">
                <ListItem mb="8px" fontWeight="400">
                  2012
                </ListItem>
                <ListItem mb="8px" fontWeight="700">
                  Our first experiment
                </ListItem>
                <ListItem fontWeight="400" color="#222222">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
                  print, graphic or web designs. The passage is attributed to an unknown typesetter
                  in the 15th century who is thought to have scrambled parts of Cicero's De Finibus.
                </ListItem>
              </UnorderedList>
              {/*  */}
              <UnorderedList
                margin="0 0 96px 0"
                fontSize="16px"
                color="#3CB4E7"
                listStyleType="none">
                <ListItem mb="8px" fontWeight="400">
                  2012
                </ListItem>
                <ListItem mb="8px" fontWeight="700">
                  Our first experiment
                </ListItem>
                <ListItem fontWeight="400" color="#222222">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
                  print, graphic or web designs. The passage is attributed to an unknown typesetter
                  in the 15th century who is thought to have scrambled parts of Cicero's De Finibus.
                </ListItem>
              </UnorderedList>
              {/*  */}
              <UnorderedList
                margin="0 0 96px 0"
                fontSize="16px"
                color="#3CB4E7"
                listStyleType="none">
                <ListItem mb="8px" fontWeight="400">
                  2012
                </ListItem>
                <ListItem mb="8px" fontWeight="700">
                  Our first experiment
                </ListItem>
                <ListItem fontWeight="400" color="#222222">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
                  print, graphic or web designs. The passage is attributed to an unknown typesetter
                  in the 15th century who is thought to have scrambled parts of Cicero's De Finibus.
                </ListItem>
              </UnorderedList>
              {/*  */}
              <UnorderedList
                margin="0 0 96px 0"
                fontSize="16px"
                color="#3CB4E7"
                listStyleType="none">
                <ListItem mb="8px" fontWeight="400">
                  2012
                </ListItem>
                <ListItem mb="8px" fontWeight="700">
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
              css={{
                '@media (max-width: 1000px)': {
                  display: 'none',
                },
              }}>
              <UnorderedList
                margin="0"
                height="100%"
                listStyleType="none"
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="58px"
                bg="green">
                <ListItem height="14px" width="14px" borderRadius="50%" bg="#3CB4E7"></ListItem>
                <ListItem height="14px" width="14px" borderRadius="50%" bg="#3CB4E7"></ListItem>
              </UnorderedList>

              <UnorderedList
                margin="0"
                height="100%"
                listStyleType="none"
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="58px"
                bg="green">
                <ListItem height="14px" width="14px" borderRadius="50%" bg="#3CB4E7"></ListItem>
                <ListItem height="14px" width="14px" borderRadius="50%" bg="#3CB4E7"></ListItem>
              </UnorderedList>

              <UnorderedList
                margin="0"
                height="100%"
                listStyleType="none"
                display="flex"
                gap="58px"
                flexDirection="column"
                alignItems="center"
                bg="green">
                <ListItem height="14px" width="14px" borderRadius="50%" bg="#3CB4E7"></ListItem>
                <ListItem height="14px" width="14px" borderRadius="50%" bg="#3CB4E7"></ListItem>
              </UnorderedList>

              <UnorderedList
                margin="0"
                height="100%"
                listStyleType="none"
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="58px"
                bg="green">
                <ListItem height="14px" width="14px" borderRadius="50%" bg="#3CB4E7"></ListItem>
                <ListItem height="14px" width="14px" borderRadius="50%" bg="#3CB4E7"></ListItem>
              </UnorderedList>
            </Box>

            <Box
              marginTop="55px"
              maxWidth="303px"
              marginLeft="60px"
              css={{
                '@media (max-width: 840px)': {
                  maxWidth: '100%',
                  marginRight: '0',
                  textAlign: 'center',
                },
              }}>
              <UnorderedList
                margin="0 0 96px 0"
                fontSize="16px"
                color="#3CB4E7"
                listStyleType="none">
                <ListItem mb="8px" fontWeight="400">
                  2012
                </ListItem>
                <ListItem mb="8px" fontWeight="700">
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
                listStyleType="none">
                <ListItem mb="8px" fontWeight="400">
                  2012
                </ListItem>
                <ListItem mb="8px" fontWeight="700">
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
                listStyleType="none">
                <ListItem mb="8px" fontWeight="400">
                  2012
                </ListItem>
                <ListItem mb="8px" fontWeight="700">
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
          <div
            style={{
              padding: '96px 0',
              color: '#fff',
              maxWidth: '1228px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <UnorderedList
              textAlign="center"
              width="305px"
              fontWeight="700"
              listStyleType="none"
              margin="0">
              <ListItem lineHeight="53.64px" fontSize="44px">
                1M+
              </ListItem>
              <ListItem lineHeight="42.56px" fontSize="32px">
                Users on our platform
              </ListItem>
            </UnorderedList>

            <UnorderedList
              textAlign="center"
              width="305px"
              fontWeight="700"
              listStyleType="none"
              margin="0">
              <ListItem lineHeight="53.64px" fontSize="44px">
                150+
              </ListItem>
              <ListItem lineHeight="42.56px" fontSize="32px">
                Total course
              </ListItem>
            </UnorderedList>

            <UnorderedList
              textAlign="center"
              width="305px"
              fontWeight="700"
              listStyleType="none"
              margin="0">
              <ListItem lineHeight="53.64px" fontSize="44px">
                1M+
              </ListItem>
              <ListItem lineHeight="42.56px" fontSize="32px">
                Nanodegree certificates earned{' '}
              </ListItem>
            </UnorderedList>

            <UnorderedList
              textAlign="center"
              width="305px"
              fontWeight="700"
              listStyleType="none"
              margin="0">
              <ListItem lineHeight="53.64px" fontSize="44px">
                1M+
              </ListItem>
              <ListItem lineHeight="42.56px" fontSize="32px">
                Users on our platform
              </ListItem>
            </UnorderedList>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default About;
