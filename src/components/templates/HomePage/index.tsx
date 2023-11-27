'use client';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/atoms';

const WelcomeSection = dynamic(() => import('./WelcomeSection'));
const PersonaIntroSection = dynamic(() => import('./PersonaIntroSection'));
const KidsAcademySection = dynamic(() => import('./KidsAcademySection'));
const OnlineCoursesSection = dynamic(() => import('./OnlineCoursesSection'));
const ArticlesSection = dynamic(() => import('./ArticlesSection'));
const Trainers = dynamic(() => import('./Trainers'));
const PartnersSection = dynamic(() => import('./PartnersSection'));
const ReviewSection = dynamic(() => import('./ReviewSection'));

const HomePage = () => {
  return (
    <>
      <WelcomeSection />

      <PersonaIntroSection />

      <KidsAcademySection />

      <Container maxW="1200px" margin="0 auto" padding={{ base: '0 16px', xl: '0' }}>
        <OnlineCoursesSection />

        <ArticlesSection />

        <Trainers />
        <PartnersSection />
        <ReviewSection />
      </Container>

      <Box
        maxWidth="100%"
        bg="#1F1646"
        margin={{ base: '0', lg: '148px 0' }}
        padding={{
          base: '40px 10px',
          lg: '40px 0',
        }}
        color="#fff">
        <Box maxW="794px" margin="0 auto" textAlign="center">
          <Heading as="h2" margin="0" pb="16px" fontSize="28px" lineHeight="34.13px">
            Have a question?
          </Heading>
          <Text as="p" margin="0" pb="24px">
            Were always on the lookout for great talent. Want to join us on our mission to help
            great teams grow? Check out our openings to see where you fit in.
          </Text>
          <Button
            bg="#F3F4F6"
            color="#1F1646"
            height="53px"
            width="168px"
            borderRadius="6px"
            fontSize="16px"
            lineHeight="21.28px"
            border="1px solid #F3F4F6"
            fontWeight="400"
            _hover={{
              bg: 'F3F4F6',
            }}
            _focus={{
              bg: 'F3F4F6',
            }}>
            Contact us
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
