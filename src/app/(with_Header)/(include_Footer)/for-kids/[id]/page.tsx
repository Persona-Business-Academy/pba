import React from 'react';
import { Box, Container, Flex, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { KidsCourseService } from '@/api/services/KidsCourseService';
import { Button } from '@/components/atoms';
import BenefitCard from '@/components/molecules/BenefitCard';
import OfflineCourseInstructor from '@/components/molecules/OfflineCourseInstructors';
import { segoe } from '@/utils/constants/fonts';
import { generateAWSUrl } from '@/utils/helpers/common';

const Slide = dynamic(() => import('@/components/molecules/Swiper'), { ssr: false });

const KidsCourse = async ({ params: { id } }: { params: { id: string } }) => {
  const kidsCourse = await KidsCourseService.getKidsCourseItem(id);

  return (
    <>
      <Box
        borderRadius="0 0 72px 72px"
        bg="#F6FCFF"
        padding={{
          base: '0 16px ',
          lg: ' 0',
        }}>
        <Container maxW="1200px" padding="0 0 82px 0" position="relative">
          <Flex
            gap={{
              base: '24px',
              lg: '122px',
            }}
            justifyContent="center"
            alignItems="center"
            padding="24px 0"
            flexWrap={{
              base: 'wrap-reverse',
              lg: 'nowrap',
            }}>
            <Box maxW="488px" color="#222222" textAlign="center">
              <Heading
                margin="0  0 8px 0"
                as="h2"
                color="#1F1646"
                lineHeight={{
                  base: '34.13px',
                  lg: '53.64px',
                }}
                fontSize={{ base: '28px', lg: '44px' }}>
                {kidsCourse.title}
              </Heading>
              <Flex justifyContent="center" gap="13px" mb="16px">
                <Flex alignItems="center" gap="6px">
                  <Image
                    src="/icons/hollow_star.svg"
                    alt="Rating Star"
                    width={16.5}
                    height={15.8}
                  />
                  <Image
                    src="/icons/hollow_star.svg"
                    alt="Rating Star"
                    width={16.5}
                    height={15.8}
                  />
                  <Image
                    src="/icons/hollow_star.svg"
                    alt="Rating Star"
                    width={16.5}
                    height={15.8}
                  />
                  <Image
                    src="/icons/hollow_star.svg"
                    alt="Rating Star"
                    width={16.5}
                    height={15.8}
                  />
                  <Image
                    src="/icons/hollow_star.svg"
                    alt="Rating Star"
                    width={16.5}
                    height={15.8}
                  />
                </Flex>

                <Text as="span" margin="0" lineHeight="18.75px" fontSize="16px">
                  {kidsCourse.rating}
                </Text>
              </Flex>

              <Box lineHeight="18.75px" fontSize="16px" mb="24px">
                <Text as="p" margin="0" lineHeight="18.75px" fontSize="16px">
                  {kidsCourse.subTitle}
                </Text>
              </Box>

              <Flex gap="16px" alignItems="center" justifyContent="center" flexWrap="wrap">
                <Button
                  bg="transparent"
                  padding={{
                    base: '12px 24px',
                    md: '16px 32px',
                  }}
                  border=" 1px solid #3CB4E7"
                  height="53px"
                  width="236px"
                  color="#3CB4E7"
                  fontWeight="700"
                  lineHeight="21.28px"
                  fontSize="16px">
                  Apply now
                </Button>
                <Button
                  padding="16px 0"
                  fontWeight="400"
                  lineHeight="21.28px"
                  fontSize="16px"
                  bg="transparent"
                  _focus={{
                    bg: 'transparent',
                  }}
                  _focusWithin={{
                    bg: 'transparent',
                  }}
                  _focusVisible={{
                    bg: 'transparent',
                  }}
                  _hover={{
                    bg: 'transparent',
                  }}
                  color="#1F1646">
                  View programm
                </Button>
              </Flex>
            </Box>

            <Box maxW="590px">
              <Box width="100%">
                <Image
                  src={generateAWSUrl(kidsCourse.coverPhoto)}
                  alt="Graphic Design"
                  width={590}
                  height={334}
                />
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box
        maxWidth="1200px"
        position="relative"
        display="flex"
        margin="0 auto"
        flexWrap="wrap"
        gap="20px"
        transform="translateY(-80px)"
        justifyContent="center">
        <Flex
          boxShadow="0px 15px 20px 0px #0000000D"
          alignItems="center"
          flexWrap="wrap"
          justifyContent="center"
          bg="#fff"
          gap="16px"
          padding="32px"
          borderRadius="12px"
          width="753px">
          <UnorderedList
            paddingRight="16px"
            listStyleType="none"
            margin="0"
            display="flex"
            flexDirection="column"
            gap="8px"
            borderRight="1px solid #C0C0C0">
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
              Language
            </ListItem>
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700" color="#222222">
              {kidsCourse.language}
            </ListItem>
          </UnorderedList>

          <UnorderedList
            listStyleType="none"
            margin="0"
            display="flex"
            paddingRight="16px"
            flexDirection="column"
            gap="8px"
            borderRight="1px solid #C0C0C0">
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
              Age
            </ListItem>
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700" color="#222222">
              {kidsCourse.ageLimit}
            </ListItem>
          </UnorderedList>

          <UnorderedList
            listStyleType="none"
            margin="0"
            display="flex"
            flexDirection="column"
            gap="8px"
            paddingRight={{
              base: '0',
              sm: '16px',
              md: '16px',
              lg: '16px',
              xl: '16px',
            }}
            borderRight={{
              base: 'none',
              sm: '1px solid #C0C0C0',
              md: '1px solid #C0C0C0',
              lg: '1px solid #C0C0C0',
              xl: '1px solid #C0C0C0',
            }}>
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
              Duration
            </ListItem>
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700" color="#222222">
              {kidsCourse.totalDuration} months
            </ListItem>
          </UnorderedList>

          <UnorderedList
            listStyleType="none"
            margin="0"
            paddingRight="16px"
            display="flex"
            flexDirection="column"
            gap="8px"
            borderRight="1px solid #C0C0C0">
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
              Level
            </ListItem>
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700" color="#222222">
              {kidsCourse.courseLevel}
            </ListItem>
          </UnorderedList>

          <UnorderedList
            listStyleType="none"
            margin="0"
            display="flex"
            flexDirection="column"
            gap="8px"
            paddingRight={{
              base: '0',
              sm: '16px',
              md: '16px',
              lg: '16px',
              xl: '16px',
            }}
            borderRight={{
              base: 'none',
              sm: '1px solid #C0C0C0',
              md: '1px solid #C0C0C0',
              lg: '1px solid #C0C0C0',
              xl: '1px solid #C0C0C0',
            }}>
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
              Certificate
            </ListItem>
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700" color="#222222">
              By level
            </ListItem>
          </UnorderedList>

          <UnorderedList
            listStyleType="none"
            margin="0"
            display="flex"
            flexDirection="column"
            gap="8px">
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="400" color="#5B5B5B">
              Course ended
            </ListItem>
            <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700" color="#222222">
              {kidsCourse.graduatedStudentsCount} students
            </ListItem>
          </UnorderedList>
        </Flex>

        <Flex
          boxShadow="0px 15px 20px 0px #0000000D"
          flexDirection="column"
          width="426px"
          alignItems="center"
          gap="16px"
          padding=" 16px 32px"
          borderRadius="12px"
          bg="#fff">
          <Flex alignItems="center" gap="16px">
            <Text fontWeight="400" fontSize="16px" margin="0" lineHeight="18.75px">
              Course fee
            </Text>
            <Text
              fontWeight="700"
              lineHeight="37.24px"
              as="p"
              fontSize="28px"
              margin="0"
              display="flex"
              alignItems="center">
              {kidsCourse.price}
              <Image src="/icons/dram.svg" alt="dram" width={18} height={18} /> /
              <Text fontWeight="400" fontSize="16px" lineHeight="21.28px" as="span" margin="0">
                month
              </Text>
            </Text>
          </Flex>

          <Box display="flex" gap="16px" alignItems="center">
            <Box
              height="53px"
              width={{ base: '239px', sm: '239px', md: '239px', lg: '322px', xl: '322px' }}>
              <Button
                padding="16px 32px"
                width="100%"
                height="100%"
                fontSize="16px"
                lineHeight="21.28px">
                Buy Now
              </Button>
            </Box>
            <Box>
              <Image src="/icons/heart_icon.svg" alt="Heart" width={24} height={24} />
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box marginBottom={{ base: '36px ', lg: ' 148px', xl: ' 148px' }}>
        <Box
          padding={{ base: '0 16px', sm: '0 16px', md: '0 16px', lg: '0', xl: '0' }}
          margin="0 auto"
          maxWidth="793px"
          color="#222222">
          <Heading
            margin={{
              base: '0 0 16px 0',
              sm: '0 0 16px 0 ',
              md: '0 0 24px 0 ',
              lg: ' 0 0 24px 0',
              xl: ' 0 0 24px 0',
            }}
            textAlign="center"
            fontSize={{ base: '28px ', sm: '28px ', md: '32px ', lg: ' 32px', xl: ' 32px' }}
            lineHeight="42.56px"
            fontWeight="700"
            className={segoe.className}>
            Description
          </Heading>
          <Text as="p" margin="0" fontSize="16px" lineHeight="24px" fontWeight="400">
            {kidsCourse.description}
          </Text>
        </Box>
      </Box>

      <Box
        padding={{
          base: '0 16px',
          lg: '0',
        }}
        maxWidth="100%"
        marginBottom={{ base: '36px ', lg: ' 148px', xl: ' 148px' }}>
        <Box marginLeft="auto" maxWidth="1560px">
          <Flex alignItems="center" gap="20px" flexWrap="wrap" justifyContent="center">
            <Box width="803px">
              <Heading
                as="h2"
                textAlign={{
                  base: 'center',
                  lg: 'left',
                }}
                margin="0 0 24px 0"
                fontSize="28px"
                lineHeight="37.24px">
                Your Child Will Learn
              </Heading>
              <Flex
                gap={{ base: '16px', xl: '29px' }}
                flexWrap="wrap"
                justifyContent="center"
                maxWidth="803px">
                <UnorderedList
                  display="grid"
                  gridTemplateColumns="repeat(2,1fr)"
                  margin="0"
                  gap="16px"
                  lineHeight="24px"
                  fontWeight="400"
                  fontSize="16px"
                  listStyleType="0"
                  color="#222222"
                  width="100%">
                  {kidsCourse.whatYouWillLearn.map((learning: string, index: number) => (
                    <ListItem
                      key={index}
                      display="flex"
                      alignItems="flex-start"
                      gap="12px"
                      width="100%">
                      <Image src="/icons/confirm_icon.svg" alt="Confirm" width={24} height={24} />
                      {learning}
                    </ListItem>
                  ))}
                </UnorderedList>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box marginBottom={{ base: '36px ', lg: ' 148px', xl: ' 148px' }}>
        <Container maxWidth="895px" margin="0 auto" padding="0" color="#222222">
          <Heading
            as="h2"
            margin={{ base: '0 0 16px 0', lg: ' 0 0 40px 0', xl: ' 0 0 40px 0' }}
            textAlign="center"
            fontSize={{ base: '28px', lg: '32px', xl: '32px' }}
            lineHeight={{ base: '37.24px', lg: '42.56px ', xl: '42.56px ' }}>
            Course Timeline
          </Heading>

          <Box
            display="flex"
            flexDirection={{ base: 'row', lg: 'column', xl: 'column' }}
            maxWidth={{ base: '285px', lg: '849px', xl: '849px' }}
            gap={{ base: '0', lg: '13px', xl: '13px' }}
            margin="0 auto 40px">
            <Box
              flex={{ base: '1', lg: '0', xl: '0' }}
              width={{ base: '100%', lg: '796px', xl: '796px' }}
              margin={{ base: '0', lg: '0 auto', xl: '0 auto' }}
              height={{ base: '299px', lg: '0', xl: '0' }}
              justifyContent="center"
              flexDirection={{ base: 'row', lg: 'column', xl: 'column' }}
              display="flex">
              <Flex
                justifyContent="space-around"
                flexDirection={{ base: 'column', lg: 'row', xl: 'row' }}>
                <UnorderedList
                  flexDirection={{ base: 'row', lg: 'column', xl: 'column' }}
                  gap="13px"
                  margin="0"
                  display="flex"
                  alignItems="center"
                  listStyleType="none">
                  <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700">
                    Beginner
                  </ListItem>
                  <ListItem
                    transform={{
                      base: 'translate(8px , 0px)',
                      lg: 'translate(0, 7px)',
                      xl: 'translate(0,7px)',
                    }}
                    width="12px"
                    height="12px"
                    bg="#000"
                    borderRadius="10px"></ListItem>
                </UnorderedList>

                <UnorderedList
                  gap="13px"
                  margin="0"
                  display="flex"
                  flexDirection={{ base: 'row', lg: 'column', xl: 'column' }}
                  alignItems="center"
                  listStyleType="none">
                  <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700">
                    Mid level
                  </ListItem>
                  <ListItem
                    transform={{
                      base: 'translate(6px , 0px)',
                      lg: 'translate(0, 7px)',
                      xl: 'translate(0,7px)',
                    }}
                    width="12px"
                    height="12px"
                    bg="#000"
                    borderRadius="10px"></ListItem>
                </UnorderedList>

                <UnorderedList
                  gap="13px"
                  margin="0"
                  display="flex"
                  flexDirection={{ base: 'row', lg: 'column', xl: 'column' }}
                  alignItems="center"
                  listStyleType="none">
                  <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700">
                    Advance
                  </ListItem>
                  <ListItem
                    transform={{
                      base: 'translate(9px , 2px)',
                      lg: 'translate(0, 7px)',
                      xl: 'translate(0,7px)',
                    }}
                    width="12px"
                    height="12px"
                    bg="#000"
                    borderRadius="10px"></ListItem>
                </UnorderedList>
              </Flex>
              <Text
                as="span"
                margin="0"
                display="block"
                width={{ base: '1px', lg: '100%', xl: '100%' }}
                height={{ base: '100%', lg: '2px', xl: '2px' }}
                bg="#000"></Text>
            </Box>

            <Flex
              flex={{ base: '1', lg: '0', xl: '0' }}
              justifyContent="space-between"
              flexDirection={{ base: 'column', lg: 'row', xl: 'row' }}>
              <Text as="p" margin="0" lineHeight="18.75px" fontSize="16px" fontWeight="400">
                Lorem Ipsum
              </Text>
              <Text as="p" margin="0" lineHeight="18.75px" fontSize="16px" fontWeight="400">
                Lorem Ipsum
              </Text>
              <Text as="p" margin="0" lineHeight="18.75px" fontSize="16px" fontWeight="400">
                Lorem Ipsum
              </Text>
              <Text as="p" margin="0" lineHeight="18.75px" fontSize="16px" fontWeight="400">
                Lorem Ipsum
              </Text>
            </Flex>
          </Box>

          <Flex justifyContent="center" gap="20px" flexWrap="wrap">
            <Box
              borderRadius="15px"
              width="285px"
              boxShadow="0px 4px 6px 0px #0000000F"
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap="8px"
              padding="23px 47px">
              <Text as="p" margin="0" fontWeight="700" fontSize="24px" lineHeight="31.92px">
                Wed, Mar 22
              </Text>
              <Text as="p" lineHeight="21.28px" fontSize="16px" fontWeight="400" margin="0">
                Wednesday
              </Text>
              <Text as="p" lineHeight="21.28px" fontSize="16px" fontWeight="400" margin="0">
                2:00-2:45 PM
              </Text>

              <Box width="100%" mt="8px">
                <Button
                  color="#3CB4E7"
                  padding="12px 24px"
                  height="37px"
                  width="100%"
                  border="1px solid #3CB4E7"
                  lineHeight="21.28px"
                  fontSize="16px"
                  background="transparent">
                  Enroll
                </Button>
              </Box>
            </Box>

            <Box
              borderRadius="15px"
              width="285px"
              boxShadow="0px 4px 6px 0px #0000000F"
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap="8px"
              padding="23px 47px">
              <Text as="p" margin="0" fontWeight="700" fontSize="24px" lineHeight="31.92px">
                Wed, Mar 22
              </Text>
              <Text as="p" lineHeight="21.28px" fontSize="16px" fontWeight="400" margin="0">
                Wednesday
              </Text>
              <Text as="p" lineHeight="21.28px" fontSize="16px" fontWeight="400" margin="0">
                2:00-2:45 PM
              </Text>

              <Box width="100%" mt="8px">
                <Button
                  color="#3CB4E7"
                  padding="12px 24px"
                  height="37px"
                  width="100%"
                  border="1px solid #3CB4E7"
                  lineHeight="21.28px"
                  fontSize="16px"
                  background="transparent">
                  Enroll
                </Button>
              </Box>
            </Box>

            <Box
              borderRadius="15px"
              width="285px"
              boxShadow="0px 4px 6px 0px #0000000F"
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap="8px"
              padding="23px 47px">
              <Text as="p" margin="0" fontWeight="700" fontSize="24px" lineHeight="31.92px">
                Wed, Mar 22
              </Text>
              <Text as="p" lineHeight="21.28px" fontSize="16px" fontWeight="400" margin="0">
                Wednesday
              </Text>
              <Text as="p" lineHeight="21.28px" fontSize="16px" fontWeight="400" margin="0">
                2:00-2:45 PM
              </Text>

              <Box width="100%" mt="8px">
                <Button
                  color="#3CB4E7"
                  padding="12px 24px"
                  height="37px"
                  width="100%"
                  border="1px solid #3CB4E7"
                  lineHeight="21.28px"
                  fontSize="16px"
                  background="transparent">
                  Enroll
                </Button>
              </Box>
            </Box>
          </Flex>

          <Flex flexDirection="column" alignItems="center" gap="16px" mt="24px">
            <Text fontSize="18px" lineHeight="18px" margin="0" as="span">
              Don't see a time that works for you?
            </Text>
            <Text fontSize="18px" lineHeight="18px" margin="0" as="button">
              Request another time
            </Text>
          </Flex>
        </Container>
      </Box>

      <Box
        padding={{
          base: '0 16px ',
          lg: ' 0',
        }}>
        <Container maxWidth="1246px" padding="0">
          <Box color="#222222" marginBottom={{ base: '36px ', lg: ' 148px', xl: ' 148px' }}>
            <Heading
              textAlign="center"
              as="h2"
              lineHeight={{
                base: '31.92px',
                md: '37.24px ',
              }}
              margin={{
                base: '0 0 16px 0',
                lg: '0 0 40px 0',
              }}
              fontSize={{ base: '24px', lg: '32px', xl: '32px' }}
              fontWeight="700">
              Course instructors
            </Heading>

            <Flex margin="0 auto" gap="20px">
              {kidsCourse.courseInstructors.map(instructor => (
                <OfflineCourseInstructor key={instructor.id} instructor={instructor} />
              ))}
            </Flex>
          </Box>

          <Box marginBottom="148px">
            <Flex justifyContent="center" mb="40px">
              <Text
                textAlign="center"
                as="span"
                color="#5B5B5B"
                fontFamily={segoe.className}
                fontSize="32px"
                fontStyle="normal"
                fontWeight={700}
                lineHeight="normal">
                Benefits of learning to design
              </Text>
              <Text
                as="span"
                textAlign="center"
                color="#222"
                fontFamily={segoe.className}
                fontSize="32px"
                fontStyle="normal"
                fontWeight={700}
                lineHeight="normal">
                for Kids
              </Text>
            </Flex>

            <Flex gap="20px" flexWrap="wrap">
              {Array.from({ length: 4 }, () => (
                <BenefitCard key={Math.random()} />
              ))}
            </Flex>
          </Box>

          <Slide offlineCourseVideo={kidsCourse.OfflineCourseVideo} courseName={kidsCourse.title} />
        </Container>
      </Box>
    </>
  );
};

export default KidsCourse;
