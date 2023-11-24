import React, { FC } from 'react';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Button } from '@/components/atoms';

type Section1Props = {};

const commonFontStyle = {
  lineHeight: '21.28px',
  fontWeight: 700,
};

const Section1: FC<Section1Props> = () => {
  return (
    <Container as="section" padding={0} maxWidth="1200px" margin="0 auto">
      <Flex
        marginBottom="54px"
        alignItems="center"
        justifyContent={{
          base: 'center',
          xl: 'space-between',
        }}
        flexWrap={{ base: 'wrap', xl: 'nowrap' }}>
        <Flex maxW="490px" flexDirection="column">
          <Heading
            as="h1"
            margin="0 0 16px 0"
            fontSize={{ base: '28px', md: '32px' }}
            color="#1F1646"
            textAlign={{ base: 'center', lg: 'left' }}
            lineHeight={{ base: '37.24px', xl: '53.64px' }}>
            Welcome to
            <Text as="span" textTransform="uppercase" color="#3CB3E5">
              &nbsp;PBA
            </Text>
          </Heading>

          <Text
            fontSize="16px"
            color="#171717"
            marginBottom={{ base: '10px', xl: '32px' }}
            {...commonFontStyle}
            fontWeight={400}
            textAlign={{
              base: 'center',
              lg: 'left',
            }}>
            Join us on this transformative journey, where every lesson learned becomes a stepping
            stone towards a brighter, more promising future, for each individual and our collective
            society.Welcome to first Armenian leading educational platform.
          </Text>

          <Flex
            gap="24px"
            alignItems="center"
            justifyContent={{ base: 'center', lg: 'flex-start' }}>
            <Button
              width="177px"
              height="53px"
              fontSize="16px"
              fontWeight="400"
              lineHeight="21.28px">
              Try it free
            </Button>

            <Button
              variant="link"
              fontSize="16px"
              fontWeight="400"
              lineHeight="21.28px"
              bg="#F6FCFF"
              color="#222222"
              _hover={{ background: 'none' }}
              _focus={{ bg: 'transparent' }}>
              Explore courses
            </Button>
          </Flex>
        </Flex>

        <Flex
          marginTop="76px"
          position="relative"
          justifyContent="center"
          width={{
            base: '211px',
            sm: '450px',
            xl: ' 636px',
          }}>
          <Box display="flex" justifyContent="center">
            <Box
              bg="#FFFFFFCC"
              left={{ base: '-60px', lg: '-45px' }}
              bottom={{ base: '40px', lg: '70px' }}
              position="absolute"
              width={{ base: ' 119px', sm: '119px', xl: '181px' }}
              padding={{
                base: '8px',
                md: '16px 32px',
              }}
              borderRadius="20px">
              <Text
                margin="0"
                fontWeight="700"
                lineHeight={{
                  base: ' 21.28px',
                  md: '31.92px',
                }}
                fontSize={{ base: ' 16px', md: '24px' }}>
                250k
              </Text>
              <Text
                margin="0"
                fontWeight="400"
                lineHeight="21.28px"
                fontSize={{ base: ' 14px', sm: '14px', xl: '16px' }}>
                Assisted Student
              </Text>
            </Box>

            <Box
              bg="#FFFFFFCC"
              top={{ base: '20px', sm: '90px', md: '75px' }}
              left={{ base: '-30px', sm: '-10px', md: '20px' }}
              position="absolute"
              padding={{
                base: '8px',
                md: '16px 32px',
                xl: ' 16px 32px',
              }}
              borderRadius="20px">
              <Text
                margin="0"
                fontWeight="700"
                lineHeight={{
                  base: ' 21.28px',
                  md: '31.92px',
                  xl: '31.92px',
                }}
                fontSize={{
                  base: ' 16px',
                  md: '24px',
                  xl: '24px',
                }}>
                250k
              </Text>
              <Text
                margin="0"
                fontWeight="400"
                lineHeight={{
                  base: '18.62px',
                  md: '21.28px',
                  xl: '21.28px',
                }}
                fontSize={{ base: ' 14px', md: '16px' }}>
                Experts
              </Text>
            </Box>

            <Box
              bg="#FFFFFFCC"
              top={{ base: '80px', sm: '140px' }}
              right={{ base: '0', sm: '30px', md: '45px' }}
              position="absolute"
              padding={{
                base: '8px',
                md: '16px 32px',
              }}
              borderRadius="20px">
              <Text
                margin="0"
                fontWeight="700"
                lineHeight={{
                  base: ' 21.28px',
                  md: '31.92px',
                }}
                fontSize={{
                  base: ' 16px',
                  md: '24px',
                }}>
                250k
              </Text>
              <Text
                margin="0"
                fontWeight="400"
                lineHeight={{
                  base: '18.62px',
                  md: '21.28px',
                }}
                fontSize={{ base: ' 14px', lg: '16px' }}>
                Courses
              </Text>
            </Box>
            <Box>
              <Image
                src="/images/public_available/home_page_img.png"
                alt="Homepage image"
                width={415}
                height={542}
              />
            </Box>
          </Box>
        </Flex>
      </Flex>

      <Box>
        <Box mb={{ base: '0 ', lg: '40px' }}>
          <Heading
            as="h2"
            margin="0 0 16px 0"
            lineHeight="31.92px"
            fontWeight="700"
            fontSize={{ base: '24px ', lg: '32px' }}
            textAlign={{
              base: 'center',
              xl: 'left',
            }}>
            Popular topics to learn now
          </Heading>
        </Box>

        <Flex>
          <Box
            width="100%"
            display="flex"
            gap={{ base: '17px', lg: '20px' }}
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap">
            <Box
              display="flex"
              flexDirection="column"
              gap="8px"
              alignItems="center"
              background="#fff"
              width={{ base: '163px', md: '183px' }}
              boxShadow="0px 8px 16px 0px rgba(0, 0, 0, 0.08)"
              padding="16px 0"
              borderRadius="8px">
              <Box
                bg="#C3E7F7"
                margin="4px"
                width={{ base: '40px', lg: '40px' }}
                background="#FFF"
                boxShadow="0px 6px 12px 0px rgba(0, 0, 0, 0.10)"
                height="40px"
                display="flex"
                justifyContent="center"
                borderRadius="7px">
                <Image src="/icons/design_home.svg" width={24} height={24} alt="UI UX Icon" />
              </Box>

              <Text as="span" fontWeight="700" fontSize="16px" lineHeight="21.28px">
                UI/UX Design
              </Text>
            </Box>

            <Box
              display="flex"
              gap="16px"
              flexDirection="column"
              alignItems="center"
              background="#FFF"
              width={{ base: '163px', md: '183px' }}
              boxShadow="0px 8px 16px 0px rgba(0, 0, 0, 0.08)"
              padding="16px 0"
              borderRadius="8px">
              <Box
                bg="#C3E7F7"
                margin="4px"
                width="40px"
                background="#FFF"
                boxShadow="0px 6px 12px 0px rgba(0, 0, 0, 0.10)"
                height="40px"
                display="flex"
                justifyContent="center"
                borderRadius="7px">
                <Image src="/icons/marketing_home.svg" width={24} height={24} alt="UI UX Icon" />
              </Box>

              <Text as="span" fontWeight="700" fontSize="16px" lineHeight="21.28px">
                Digital Marketing
              </Text>
            </Box>

            <Box
              display="flex"
              gap="16px"
              flexDirection="column"
              alignItems="center"
              background="#FFF"
              width={{ base: '163px', md: '183px' }}
              boxShadow="0px 8px 16px 0px rgba(0, 0, 0, 0.08)"
              padding="16px 0"
              borderRadius="8px">
              <Box
                bg="#C3E7F7"
                margin="4px"
                width="40px"
                background="#FFF"
                boxShadow="0px 6px 12px 0px rgba(0, 0, 0, 0.10)"
                height="40px"
                display="flex"
                justifyContent="center"
                borderRadius="7px">
                <Image src="/icons/react_home.svg" width={24} height={24} alt="React" />
              </Box>
              <Text as="span" fontWeight="700" fontSize="16px" lineHeight="21.28px">
                React JS
              </Text>
            </Box>

            <Box
              display="flex"
              gap="16px"
              flexDirection="column"
              alignItems="center"
              background="#FFF"
              width={{ base: '163px', md: '183px' }}
              boxShadow="0px 8px 16px 0px rgba(0, 0, 0, 0.08)"
              padding="16px 0"
              borderRadius="8px">
              <Box
                bg="#C3E7F7"
                margin="4px"
                width="40px"
                background="#FFF"
                boxShadow="0px 6px 12px 0px rgba(0, 0, 0, 0.10)"
                height="40px"
                display="flex"
                justifyContent="center"
                borderRadius="7px">
                <Image src="/icons/management_home.svg" width={24} height={24} alt="Management" />
              </Box>
              <Text as="span" fontWeight="700" fontSize="16px" lineHeight="21.28px">
                HRM
              </Text>
            </Box>

            <Box
              display="flex"
              gap="16px"
              flexDirection="column"
              alignItems="center"
              background="#FFF"
              width={{ base: '163px', md: '183px' }}
              boxShadow="0px 8px 16px 0px rgba(0, 0, 0, 0.08)"
              padding="16px 0"
              borderRadius="8px">
              <Box
                bg="#C3E7F7"
                margin="4px"
                width="40px"
                background="#FFF"
                boxShadow="0px 6px 12px 0px rgba(0, 0, 0, 0.10)"
                height="40px"
                display="flex"
                justifyContent="center"
                borderRadius="7px">
                <Image src="/icons/design_home.svg" width={24} height={24} alt="Management" />
              </Box>

              <Text as="span" fontWeight="700" fontSize="16px" lineHeight="21.28px">
                Graphic Design
              </Text>
            </Box>

            <Box
              display="flex"
              gap="16px"
              flexDirection="column"
              alignItems="center"
              background="#FFF"
              width={{ base: '163px', md: '183px' }}
              boxShadow="0px 8px 16px 0px rgba(0, 0, 0, 0.08)"
              padding="16px 0"
              borderRadius={8}>
              <Box
                bg="#C3E7F7"
                margin="4px"
                width="40px"
                background="#FFF"
                boxShadow="0px 6px 12px 0px rgba(0, 0, 0, 0.10)"
                height="40px"
                display="flex"
                justifyContent="center"
                borderRadius="7px">
                <Image src="/icons/target_home.svg" width={24} height={24} alt="Target" />
              </Box>
              <Text as="span" fontWeight="700" fontSize="16px" lineHeight="21.28px">
                SMM
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Section1;
