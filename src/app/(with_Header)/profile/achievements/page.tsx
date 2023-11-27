import React, { FC } from 'react';
import { Box, Container, Flex, Heading, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { montserrat } from '@/utils/constants/fonts';

type Props = {};

const Achievements: FC<Props> = () => {
  return (
    <Container maxW="1138px" margin="0 auto" p={{ base: '16px', md: '0' }}>
      <Heading
        m="64px 0"
        textAlign="center"
        fontSize={{ base: '28px', md: '44px' }}
        color="#000000"
        fontStyle="normal"
        lineHeight="normal"
        fontWeight={{ base: 600, md: 700 }}>
        Your achievements
      </Heading>

      <Flex flexDirection="column" gap={{ base: '16px', md: '28px' }}>
        {/* 1************************* */}
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection={{ base: 'column', xl: 'row' }}
          borderRadius="12px"
          boxShadow="0px 4px 6px 0px rgba(0, 0, 0, 0.06)"
          gap="29px"
          p="16px">
          <Box
            width="296px"
            height="244px"
            borderRadius="6px"
            overflow="hidden"
            display={{ base: 'none', sm: 'block' }}>
            <Image
              src="/images/public_available/achievements_img.jpg"
              alt="Achievements image"
              width={296}
              height={244}
            />
          </Box>

          <Box
            width="781px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center">
            <Flex
              gap={{ base: '28px', lg: '133px' }}
              width="100%"
              justifyContent={{ base: 'center', xl: 'flex-end' }}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Text
                  textAlign="center"
                  fontSize={{ base: '24px', md: '32px' }}
                  fontStyle="normal"
                  fontWeight={700}
                  lineHeight="normal"
                  color="#222">
                  Interior design
                </Text>

                <Box m="24px 0" borderRadius="23px">
                  <Box
                    width={{ base: '241px', xl: '427px' }}
                    height={{ base: '9px', xl: '14px' }}
                    backgroundColor="#F6FCFF"
                    borderRadius="23px">
                    <Box
                      width={{ base: '100px', xl: '135px' }}
                      height={{ base: '9px', xl: '14px' }}
                      backgroundColor="#3CB4E7"
                      borderRadius="23px"></Box>
                  </Box>
                </Box>

                <Flex gap={{ base: '25px', md: '54px' }} mb="24px">
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center">
                    <Image src="/icons/time_icon.svg" width={46} height={46} alt="time" />
                    <Text
                      m="8px 0 0 0"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight={400}
                      lineHeight="22px"
                      color="#222">
                      1 hour 20 minute
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center">
                    <Image src="/icons/level_icon.svg" width={46} height={46} alt="level" />
                    <Text
                      m="8px 0 0 0"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight={400}
                      lineHeight="22px"
                      color="#222">
                      Beginner
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center">
                    <Image src="/icons/book_icon.svg" width={46} height={46} alt="lessons" />
                    <Text
                      m="8px 0 0 0"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight={400}
                      lineHeight="22px"
                      color="#222">
                      50 lessons
                    </Text>
                  </Box>
                </Flex>

                <Link
                  href="#"
                  target="blank"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="normal"
                  textDecoration="underline">
                  Download certificate PDF
                </Link>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column">
                <Box
                  borderRadius="50%"
                  border="4px solid #30A883"
                  width={{ base: '57px', xl: '110px' }}
                  height={{ base: '57px', xl: '110px' }}
                  display="flex"
                  justifyContent="center">
                  <Text
                    className={montserrat.className}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    fontSize={{ base: '28px', xl: '44px' }}
                    fontStyle="normal"
                    fontWeight={700}
                    lineHeight="normal"
                    color="#30A883">
                    75
                  </Text>
                </Box>
                <Text
                  fontSize={{ base: '16px', md: '24px' }}
                  fontStyle="normal"
                  fontWeight={700}
                  lineHeight="normal"
                  color="#222"
                  m={{ base: '0', sm: '16px 0 0 0' }}>
                  Very good
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Achievements;
