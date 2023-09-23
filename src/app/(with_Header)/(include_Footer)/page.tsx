'use client';

import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import DigitalMarketingIcon from 'public/icons/digital_marketing.svg';
import GraphicDesignIcon from 'public/icons/graphic_design_icon.svg';
import HRMIcon from 'public/icons/hrm_icon.svg';
import ReactIcon from 'public/icons/react_icon.svg';
import SMMIcon from 'public/icons/smm_icon.svg';
import UiUxDesignIcon from 'public/icons/ui_design_icon.svg';
import { Button, IconButton } from '@/components/atom';

const commonFontStyle = {
  fontStyle: 'normal',
  lineHeight: 'normal',
  fontWeight: 700,
  fontFamily: 'Montserrat',
};

const Home = () => {
  return (
    <div>
      <IconButton>Explore courses</IconButton>
      <Flex
        backgroundColor="#F6FCFF"
        borderRadius="0px 0px 74px  74px"
        padding={0}
        paddingBottom="96px">
        <Container as="section" padding={0} maxWidth="1200px" margin="0 auto">
          <Flex gap="286px">
            <Flex flexDirection="column" gap="16px" maxWidth="490px" marginTop="189px">
              <Heading
                fontSize="44px"
                color="#1F1646"
                style={{
                  fontFamily: `'Montserrat', sans-serif`,
                }}>
                Welcome to{' '}
                <Text as="span" color="#3CB3E5">
                  PBA
                </Text>
              </Heading>
              <Text fontSize="16px" color="#171717" {...commonFontStyle} fontWeight={400}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At et posuere est non vitae
                enim, sed consectetur. Nullam interdum feugiat nibh lectus viverra sollicitudin.
              </Text>
              <Flex gap="24px" marginTop="16px">
                <Button width="177px" height="53px" padding="16px 32px">
                  Explore Courses
                </Button>
                <Button variant="link" backgroundColor="#F6FCFF" color="#222222">
                  Play Our video
                </Button>
              </Flex>
            </Flex>
            <Flex marginTop="76px">
              <Box>
                <Image
                  src="/images/public_available/home_page.jpg"
                  alt="Homepage image"
                  width={415}
                  height={542}
                />
              </Box>
            </Flex>
          </Flex>
          <Flex flexDirection="column">
            <Flex>
              <Heading color="#222222" fontSize="32px" {...commonFontStyle} marginBottom="40px">
                Popular topics to learn now
              </Heading>
            </Flex>
            <Flex gap="110px">
              <Text
                as="button"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <UiUxDesignIcon style={{ marginBottom: '16px' }} />
                <Text as="span" fontSize="16px" {...commonFontStyle} color="#222222">
                  UI/UX Design
                </Text>
              </Text>
              <Text
                as="button"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <DigitalMarketingIcon style={{ marginBottom: '16px' }} />
                <Text as="span" fontSize="16px" {...commonFontStyle} color="#222222">
                  Digital Marketing
                </Text>
              </Text>
              <Text
                as="button"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <ReactIcon style={{ marginBottom: '16px' }} />
                <Text as="span" fontSize="16px" {...commonFontStyle} color="#222222">
                  React Js
                </Text>
              </Text>
              <Text
                as="button"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <HRMIcon style={{ marginBottom: '16px' }} />
                <Text as="span" fontSize="16px" {...commonFontStyle} color="#222222">
                  HRM
                </Text>
              </Text>
              <Text
                as="button"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <GraphicDesignIcon style={{ marginBottom: '16px' }} />
                <Text as="span" fontSize="16px" {...commonFontStyle} color="#222222">
                  Graphic Design
                </Text>
              </Text>
              <Text
                as="button"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <SMMIcon style={{ marginBottom: '16px' }} />
                <Text as="span" fontSize="16px" {...commonFontStyle} color="#222222">
                  Social Media Marketing
                </Text>
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Flex>
      {/* <Flex flexDirection="column" padding={0} maxWidth="1200px" margin="0 auto" gap="148px">
        <Flex as="section" flexDirection="column" marginTop="148px">
          <Heading
            color="#222222"
            fontSize="32px"
            {...commonFontStyle}
            marginBottom="16px"
            textAlign="center">
            What is Persona?
          </Heading>
          <Text
            color="#696984"
            fontSize="16px"
            {...commonFontStyle}
            {...commonFontStyle}
            fontWeight={400}
            marginBottom="16px"
            maxWidth="667px"
            margin="0 auto">
            Skilline is a platform that allows educators to create online classes whereby they can
            store the course materials online; manage assignments, quizzes and exams; monitor due
            dates; grade results and provide students with feedback all in one place.
          </Text>
          <Flex gap="20px">
            <Box
              padding="45px 166px"
              borderRadius="20px"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <ForIndividualsIcon />
              <Heading fontSize="32px" {...commonFontStyle} color="#BABABA" margin="8px  0 16px 0">
                for{' '}
                <Text as="span" color="#1F1646" fontSize="32px" {...commonFontStyle}>
                  INDIVIDUALS
                </Text>
              </Heading>
              <Button
                color="#FF6131"
                backgroundColor="#FFF"
                fontSize="16px"
                fontFamily="Segoe"
                {...commonFontStyle}>
                Start a class today
              </Button>
            </Box>
            <Box
              padding="45px 199px"
              borderRadius="20px"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <ForKidsIcon />
              <Heading fontSize="32px" {...commonFontStyle} color="#BABABA" margin="8px  0 16px 0">
                for{' '}
                <Text as="span" color="#1F1646" fontSize="32px" {...commonFontStyle}>
                  KIDS
                </Text>
              </Heading>
              <Button
                color="#FF6131"
                backgroundColor="#FFF"
                fontSize="16px"
                fontFamily="Segoe"
                {...commonFontStyle}>
                Start a class today
              </Button>
            </Box>
          </Flex>
        </Flex>
        <Flex as="section" flexDirection="column">
          <Heading
            fontFamily="Segoe"
            color="#222222"
            fontSize="32px"
            {...commonFontStyle}
            marginBottom="16px"
            textAlign="center">
            Talent Transformation Programm
          </Heading>
          <Text
            fontFamily="Segoe"
            color="#4D4D4D"
            textAlign="center"
            fontSize="16px"
            {...commonFontStyle}
            fontWeight={400}
            lineHeight="normal"
            maxWidth="846px"
            margin="0 auto">
            We drive our clients growth through innovation and haLorem ipsum, or lipsum as it is
            sometimes known, is dummy text used in laying out print, graphic or web designs.
          </Text>
          <Flex marginTop="40px" gap="60.95px">
            <Flex flexDirection="column" gap="36px" maxWidth="424px" alignItems="center">
              <StudentHat />
              <Text
                fontFamily="Segoe"
                fontSize="32px"
                {...commonFontStyle}
                textAlign="center"
                color="#222222">
                We believe learning should be simple and its impact should be big.
              </Text>
            </Flex>
            <Flex flexDirection="column" maxWidth="24px" alignItems="center">
              <DoneIcon />
              <Text as="span" backgroundColor="#1F1646" width="1px" height="185px"></Text>
              <DoneIcon />
              <Text as="span" backgroundColor="#1F1646" width="1px" height="193px"></Text>
              <DoneIcon />
              <Text as="span" backgroundColor="#1F1646" width="1px" height="102px"></Text>
            </Flex>
            <Flex flexDirection="column" maxWidth="631px" gap="64px">
              <Box>
                <Heading
                  fontFamily="Segoe"
                  fontSize="24px"
                  {...commonFontStyle}
                  color="#222222"
                  marginBottom="16px">
                  Free access to the maintenance
                </Heading>
                <Text
                  fontFamily="Segoe"
                  fontSize="16px"
                  {...commonFontStyle}
                  color="#5B5B5B"
                  fontWeight={400}>
                  We are offering this limited free deal for website maintenance in order to give
                  you free access to the website maintenance service. You can now access all the
                  features of our website maintenance service for free. You will be able to monitor
                  your website, apply updates and fix errors for free. With our free website
                  maintenance service, you can focus on your business instead of worrying about your
                  website.
                </Text>
              </Box>
              <Box>
                <Heading
                  fontFamily="Segoe"
                  fontSize="24px"
                  {...commonFontStyle}
                  color="#222222"
                  marginBottom="16px">
                  Providing an authentic report on web performance
                </Heading>
                <Text
                  fontFamily="Segoe"
                  fontSize="16px"
                  {...commonFontStyle}
                  color="#5B5B5B"
                  fontWeight={400}>
                  People are busy and they often forget to check their website for updates and
                  changes. We value our customers that’s why we are giving free website maintenance
                  services to keep your website up to date and secure. Get your website updates for
                  free and get professional advice from our team of experts. Get a free consultation
                  with one of our experts!
                </Text>
              </Box>
              <Box>
                <Heading
                  fontFamily="Segoe"
                  fontSize="24px"
                  {...commonFontStyle}
                  color="#222222"
                  marginBottom="16px">
                  Achieving your loyalty and feedback
                </Heading>
                <Text
                  fontFamily="Segoe"
                  fontSize="16px"
                  {...commonFontStyle}
                  color="#5B5B5B"
                  fontWeight={400}>
                  We are offering this limited free deal for website maintenance in order to give
                  you free access to the website maintenance service. You can now access all the
                  features of our website maintenance service for free. You will be able to monitor
                  your website, apply updates and fix errors for free. With our free website
                  maintenance service, you can focus on your business instead of worrying about your
                  website.
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Flex as="section" flexDirection="column">
          <Heading
            fontFamily="Segoe"
            color="#222222"
            fontSize="32px"
            {...commonFontStyle}
            marginBottom="16px"
            textAlign="center">
            Explore Inspiring Courses
          </Heading>
          <Text
            fontFamily="Segoe"
            color="#4D4D4D"
            textAlign="center"
            fontSize="16px"
            {...commonFontStyle}
            fontWeight={400}
            lineHeight="normal"
            maxWidth="846px"
            margin="0 auto"
            marginBottom="40px">
            We drive our clients growth through innovation and hard work
          </Text>
          <Flex flexDirection="column" gap="16px" alignItems="center">
            <Flex gap="16px">
              <Button
                color="#222222"
                backgroundColor="#FFFFFF"
                borderRadius="6px"
                border="1px solid #E5EEFF"
                {...commonFontStyle}
                fontFamily="Segoe"
                fontSize="16px"
                _hover={{
                  color: '#3CB4E7',
                  backgroundColor: '#FFFFFF',
                }}>
                Design <ArrowRightIcon />
              </Button>
              <Button
                color="#222222"
                backgroundColor="#FFFFFF"
                borderRadius="6px"
                border="1px solid #E5EEFF"
                {...commonFontStyle}
                fontFamily="Segoe"
                fontSize="16px"
                _hover={{
                  color: '#3CB4E7',
                  backgroundColor: '#FFFFFF',
                }}>
                Design <ArrowRightIcon />
              </Button>
              <Button
                color="#222222"
                backgroundColor="#FFFFFF"
                borderRadius="6px"
                border="1px solid #E5EEFF"
                {...commonFontStyle}
                fontFamily="Segoe"
                fontSize="16px"
                _hover={{
                  color: '#3CB4E7',
                  backgroundColor: '#FFFFFF',
                }}>
                Design <ArrowRightIcon />
              </Button>
              <Button
                color="#222222"
                backgroundColor="#FFFFFF"
                borderRadius="6px"
                border="1px solid #E5EEFF"
                {...commonFontStyle}
                fontFamily="Segoe"
                fontSize="16px"
                _hover={{
                  color: '#3CB4E7',
                  backgroundColor: '#FFFFFF',
                }}>
                Design <ArrowRightIcon />
              </Button>
              <Button
                color="#222222"
                backgroundColor="#FFFFFF"
                borderRadius="6px"
                border="1px solid #E5EEFF"
                {...commonFontStyle}
                fontFamily="Segoe"
                fontSize="16px"
                _hover={{
                  color: '#3CB4E7',
                  backgroundColor: '#FFFFFF',
                }}>
                Design <ArrowRightIcon />
              </Button>
              <Button
                color="#222222"
                backgroundColor="#FFFFFF"
                borderRadius="6px"
                border="1px solid #E5EEFF"
                {...commonFontStyle}
                fontFamily="Segoe"
                fontSize="16px"
                _hover={{
                  color: '#3CB4E7',
                  backgroundColor: '#FFFFFF',
                }}>
                Design <ArrowRightIcon />
              </Button>
              <Button
                color="#222222"
                backgroundColor="#FFFFFF"
                borderRadius="6px"
                border="1px solid #E5EEFF"
                {...commonFontStyle}
                fontFamily="Segoe"
                fontSize="16px"
                _hover={{
                  color: '#3CB4E7',
                  backgroundColor: '#FFFFFF',
                }}>
                Design <ArrowRightIcon />
              </Button>
            </Flex>
            <Flex gap="16px">
              <Button
                color="#222222"
                backgroundColor="#FFFFFF"
                borderRadius="6px"
                border="1px solid #E5EEFF"
                {...commonFontStyle}
                fontFamily="Segoe"
                fontSize="16px"
                _hover={{
                  color: '#3CB4E7',
                  backgroundColor: '#FFFFFF',
                }}>
                Design <ArrowRightIcon />
              </Button>
              <Button
                color="#222222"
                backgroundColor="#FFFFFF"
                borderRadius="6px"
                border="1px solid #E5EEFF"
                {...commonFontStyle}
                fontFamily="Segoe"
                fontSize="16px"
                _hover={{
                  color: '#3CB4E7',
                  backgroundColor: '#FFFFFF',
                }}>
                Design <ArrowRightIcon />
              </Button>
              <Button
                color="#222222"
                backgroundColor="#FFFFFF"
                borderRadius="6px"
                border="1px solid #E5EEFF"
                {...commonFontStyle}
                fontFamily="Segoe"
                fontSize="16px"
                _hover={{
                  color: '#3CB4E7',
                  backgroundColor: '#FFFFFF',
                }}>
                Design <ArrowRightIcon />
              </Button>
              <Button
                color="#222222"
                backgroundColor="#FFFFFF"
                borderRadius="6px"
                border="1px solid #E5EEFF"
                {...commonFontStyle}
                fontFamily="Segoe"
                fontSize="16px"
                _hover={{
                  color: '#3CB4E7',
                  backgroundColor: '#FFFFFF',
                }}>
                Design <ArrowRightIcon />
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        as="section"
        marginTop="148px"
        backgroundColor="#ECF7FC"
        borderRadius="0px 74px 74px 0"
        maxWidth="1580px"
        height="449px"
        gap="9px">
        <Flex maxWidth="774px" height="403px" marginLeft="310px" marginTop="46px">
          <Image
            src="/images/public_available/middle_school_kids.jpg"
            alt="Middle school kids"
            width={774}
            height={403}
          />
        </Flex>
        <Flex maxWidth="424px" flexDirection="column" alignItems="center" marginTop="118px">
          <Heading
            fontFamily="Segoe"
            color="#222222"
            fontSize="32px"
            {...commonFontStyle}
            marginBottom="16px"
            textAlign="center">
            Every child deserves the chance to learn
          </Heading>
          <Text
            fontFamily="Segoe"
            color="#222222"
            textAlign="center"
            fontSize="16px"
            {...commonFontStyle}
            fontWeight={400}
            lineHeight="normal"
            marginBottom="24px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Text>
          <Button
            color="#FF6131"
            backgroundColor="#ECF7FC"
            fontSize="16px"
            fontFamily="Segoe"
            {...commonFontStyle}>
            Explore courses
          </Button>
        </Flex>
      </Flex>
      <Flex flexDirection="column" padding={0} maxWidth="1200px" margin="0 auto" gap="148px">
        <Flex as="section" flexDirection="column" marginTop="148px">
          <Flex
            flexDirection="column"
            gap="16px"
            alignItems="center"
            margin="0 auto"
            maxWidth="564px">
            <Heading
              fontFamily="Segoe"
              color="#222222"
              fontSize="32px"
              {...commonFontStyle}
              textAlign="center">
              Short Online Courses
            </Heading>
            <Button
              color="#FF6131"
              backgroundColor="#FFFFFF"
              fontSize="16px"
              fontFamily="Segoe"
              {...commonFontStyle}>
              Get your subscribtion
            </Button>
            <Text
              fontFamily="Segoe"
              color="#222222"
              textAlign="center"
              fontSize="16px"
              {...commonFontStyle}
              fontWeight={400}>
              bite-sized, flexible learning Upskill, reskill or pursue a passion with short courses
              across every subject, whether youre a beginner or already an expert.
            </Text>
          </Flex>
          <Flex gap="20px" margin="40px 0">
            <Card maxWidth="387px" borderRadius="0px 0px 12px 12px">
              <Image
                src="/images/public_available/online_courses_image.jpg"
                width={387}
                height={235}
                alt="Graphic design image"
              />
              <Flex flexDirection="column" gap="8px" padding="16px">
                <Heading fontFamily="Segoe" color="#222222" fontSize="24px" {...commonFontStyle}>
                  Graphic Design
                </Heading>
                <Text
                  fontFamily="Segoe"
                  color="#222222"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="21.581px">
                  Get inspired by this revived W.H. Audens Hymn to the United Nations.
                </Text>
                <Text>
                  <Flex gap="8px" alignItems="center">
                    <StarIcon />
                    <Text color="#0C0C0C" fontFamily="Segoe" fontSize="16px" {...commonFontStyle}>
                      4.8
                    </Text>
                  </Flex>
                </Text>
              </Flex>
            </Card>
            <Card maxWidth="387px" borderRadius="0px 0px 12px 12px">
              <Image
                src="/images/public_available/online_courses_image.jpg"
                width={387}
                height={235}
                alt="Graphic design image"
              />
              <Flex flexDirection="column" gap="8px" padding="16px">
                <Heading fontFamily="Segoe" color="#222222" fontSize="24px" {...commonFontStyle}>
                  Graphic Design
                </Heading>
                <Text
                  fontFamily="Segoe"
                  color="#222222"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="21.581px">
                  Get inspired by this revived W.H. Auden Hymn to the United Nations.
                </Text>
                <Text>
                  <Flex gap="8px" alignItems="center">
                    <StarIcon />
                    <Text color="#0C0C0C" fontFamily="Segoe" fontSize="16px" {...commonFontStyle}>
                      4.8
                    </Text>
                  </Flex>
                </Text>
              </Flex>
            </Card>
            <Card maxWidth="387px" borderRadius="0px 0px 12px 12px">
              <Image
                src="/images/public_available/online_courses_image.jpg"
                width={387}
                height={235}
                alt="Graphic design image"
              />
              <Flex flexDirection="column" gap="8px" padding="16px">
                <Heading fontFamily="Segoe" color="#222222" fontSize="24px" {...commonFontStyle}>
                  Graphic Design
                </Heading>
                <Text
                  fontFamily="Segoe"
                  color="#222222"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="21.581px">
                  Get inspired by this revived W.H. Audens Hymn to the United Nations.
                </Text>
                <Text>
                  <Flex gap="8px" alignItems="center">
                    <StarIcon />
                    <Text color="#0C0C0C" fontFamily="Segoe" fontSize="16px" {...commonFontStyle}>
                      4.8
                    </Text>
                  </Flex>
                </Text>
              </Flex>
            </Card>
          </Flex>
          <Flex
            as={Link}
            justifyContent="flex-end"
            fontFamily="Segoe"
            color="#222222"
            fontStyle="normal"
            fontWeight={400}
            lineHeight="normal">
            View all courses
          </Flex>
        </Flex>
        <Flex as="section" flexDirection="column">
          <Heading
            fontFamily="Segoe"
            color="#222222"
            fontSize="32px"
            {...commonFontStyle}
            textAlign="center"
            marginBottom="40px">
            Only Qualified Articles
          </Heading>
          <Grid templateColumns="repeat(auto-fit, minmax(400px,1fr))" gap="20px">
            <GridItem
              w="100%"
              h="auto"
              padding="24px"
              borderRadius="8px"
              border="1px solid #F3F4F6">
              <Text
                fontSize="16px"
                fontFamily="Segoe"
                color="#333333"
                {...commonFontStyle}
                marginBottom="8px">
                How to Build a Design System if youre...
              </Text>
              <Text
                fontFamily="Segoe"
                color="#333333"
                fontSize="16px"
                opacity={0.8}
                fontStyle="normal"
                fontWeight={400}
                lineHeight="normal"
                paddingBottom="32px"
                borderBottom={`1px solid rgba(51, 51, 51, 0.2)`}>
                It is always hard to be the only person in a company who is responsible for product
                design. Your day can be insanely...
              </Text>
              <Flex
                justifyContent="space-between"
                marginTop="16px"
                fontFamily="Segoe"
                fontSize="16px"
                fontStyle="normal"
                fontWeight={400}
                lineHeight="normal"
                opacity="0.6">
                <Text>March 01, 2021</Text>
                <Text>
                  <Flex alignItems="center" gap="10px">
                    <EyeIcon />
                    <Text>440</Text>
                  </Flex>
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              w="100%"
              h="auto"
              padding="24px"
              borderRadius="8px"
              border="1px solid #F3F4F6">
              <Text
                fontSize="16px"
                fontFamily="Segoe"
                color="#333333"
                {...commonFontStyle}
                marginBottom="8px">
                How to Build a Design System if you are...
              </Text>
              <Text
                fontFamily="Segoe"
                color="#333333"
                fontSize="16px"
                opacity={0.8}
                fontStyle="normal"
                fontWeight={400}
                lineHeight="normal"
                paddingBottom="32px"
                borderBottom={`1px solid rgba(51, 51, 51, 0.2)`}>
                It is always hard to be the only person in a company who is responsible for product
                design. Your day can be insanely...
              </Text>
              <Flex
                justifyContent="space-between"
                marginTop="16px"
                fontFamily="Segoe"
                fontSize="16px"
                fontStyle="normal"
                fontWeight={400}
                lineHeight="normal"
                opacity="0.6">
                <Text>March 01, 2021</Text>
                <Text>
                  <Flex alignItems="center" gap="10px">
                    <EyeIcon />
                    <Text>440</Text>
                  </Flex>
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              w="100%"
              h="auto"
              padding="24px"
              borderRadius="8px"
              border="1px solid #F3F4F6"
              marginTop="20px">
              <Text
                fontSize="16px"
                fontFamily="Segoe"
                color="#333333"
                {...commonFontStyle}
                marginBottom="8px">
                How to Build a Design System if you are...
              </Text>
              <Text
                fontFamily="Segoe"
                color="#333333"
                fontSize="16px"
                opacity={0.8}
                fontStyle="normal"
                fontWeight={400}
                lineHeight="normal"
                paddingBottom="32px"
                borderBottom={`1px solid rgba(51, 51, 51, 0.2)`}>
                It is always hard to be the only person in a company who is responsible for product
                design. Your day can be insanely...
              </Text>
              <Flex
                justifyContent="space-between"
                marginTop="16px"
                fontFamily="Segoe"
                fontSize="16px"
                fontStyle="normal"
                fontWeight={400}
                lineHeight="normal"
                opacity="0.6">
                <Text>March 01, 2021</Text>
                <Text>
                  <Flex alignItems="center" gap="10px">
                    <EyeIcon />
                    <Text>440</Text>
                  </Flex>
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              w="100%"
              h="auto"
              padding="24px"
              borderRadius="8px"
              border="1px solid #F3F4F6"
              marginTop="20px">
              <Text
                fontSize="16px"
                fontFamily="Segoe"
                color="#333333"
                {...commonFontStyle}
                marginBottom="8px">
                How to Build a Design System if you are...
              </Text>
              <Text
                fontFamily="Segoe"
                color="#333333"
                fontSize="16px"
                opacity={0.8}
                fontStyle="normal"
                fontWeight={400}
                lineHeight="normal"
                paddingBottom="32px"
                borderBottom={`1px solid rgba(51, 51, 51, 0.2)`}>
                It is always hard to be the only person in a company who is responsible for product
                design. Your day can be insanely...
              </Text>
              <Flex
                justifyContent="space-between"
                marginTop="16px"
                fontFamily="Segoe"
                fontSize="16px"
                fontStyle="normal"
                fontWeight={400}
                lineHeight="normal"
                opacity="0.6">
                <Text>March 01, 2021</Text>
                <Text>
                  <Flex alignItems="center" gap="10px">
                    <EyeIcon />
                    <Text>440</Text>
                  </Flex>
                </Text>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
        <Flex as="section" flexDirection="column" gap="40px">
          <Flex flexDirection="column" gap="16px">
            <Heading
              fontFamily="Segoe"
              color="#222222"
              fontSize="32px"
              {...commonFontStyle}
              textAlign="center">
              Top Trainers
            </Heading>
            <Text
              fontFamily="Segoe"
              color="#222222"
              textAlign="center"
              fontSize="16px"
              {...commonFontStyle}
              fontWeight={400}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </Text>
          </Flex>
          <Flex gap="20px">
            <Card maxWidth="285px" boxShadow="none">
              <Box width="100%" height="285px" borderRadius="12px 74px 0px 0px">
                <Image
                  src="/images/public_available/trainers_image.jpg"
                  alt="Trainer"
                  width={285}
                  height={285}
                />
              </Box>
              <Flex flexDirection="column" padding="16px 10px">
                <Text
                  fontFamily="Segoe"
                  color="#222222"
                  fontSize="16px"
                  {...commonFontStyle}
                  textAlign="center">
                  Name Surname
                </Text>
                <Text
                  fontFamily="Segoe"
                  color="#5B5B5B"
                  fontSize="16px"
                  {...commonFontStyle}
                  textAlign="center"
                  paddingBottom="10px"
                  borderBottom="1px solid #F3F4F6">
                  Digital Creator & Educator
                </Text>
                <Text
                  fontFamily="Segoe"
                  color="#222222"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="normal"
                  textAlign="center"
                  marginTop="10px"
                  marginBottom="6px">
                  Enrolled students: 89
                </Text>
                <Text
                  fontFamily="Segoe"
                  color="#222222"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="normal"
                  textAlign="center">
                  Graduated students: 12
                </Text>
              </Flex>
            </Card>
            <Card maxWidth="285px" boxShadow="none">
              <Box width="100%" height="285px" borderRadius="12px 74px 0px 0px">
                <Image
                  src="/images/public_available/trainers_image.jpg"
                  alt="Trainer"
                  width={285}
                  height={285}
                />
              </Box>
              <Flex flexDirection="column" padding="16px 10px">
                <Text
                  fontFamily="Segoe"
                  color="#222222"
                  fontSize="16px"
                  {...commonFontStyle}
                  textAlign="center">
                  Name Surname
                </Text>
                <Text
                  fontFamily="Segoe"
                  color="#5B5B5B"
                  fontSize="16px"
                  {...commonFontStyle}
                  textAlign="center"
                  paddingBottom="10px"
                  borderBottom="1px solid #F3F4F6">
                  Digital Creator & Educator
                </Text>
                <Text
                  fontFamily="Segoe"
                  color="#222222"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="normal"
                  textAlign="center"
                  marginTop="10px"
                  marginBottom="6px">
                  Enrolled students: 89
                </Text>
                <Text
                  fontFamily="Segoe"
                  color="#222222"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="normal"
                  textAlign="center">
                  Graduated students: 12
                </Text>
              </Flex>
            </Card>
            <Card maxWidth="285px" boxShadow="none">
              <Box width="100%" height="285px" borderRadius="12px 74px 0px 0px">
                <Image
                  src="/images/public_available/trainers_image.jpg"
                  alt="Trainer"
                  width={285}
                  height={285}
                />
              </Box>
              <Flex flexDirection="column" padding="16px 10px">
                <Text
                  fontFamily="Segoe"
                  color="#222222"
                  fontSize="16px"
                  {...commonFontStyle}
                  textAlign="center">
                  Name Surname
                </Text>
                <Text
                  fontFamily="Segoe"
                  color="#5B5B5B"
                  fontSize="16px"
                  {...commonFontStyle}
                  textAlign="center"
                  paddingBottom="10px"
                  borderBottom="1px solid #F3F4F6">
                  Digital Creator & Educator
                </Text>
                <Text
                  fontFamily="Segoe"
                  color="#222222"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="normal"
                  textAlign="center"
                  marginTop="10px"
                  marginBottom="6px">
                  Enrolled students: 89
                </Text>
                <Text
                  fontFamily="Segoe"
                  color="#222222"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="normal"
                  textAlign="center">
                  Graduated students: 12
                </Text>
              </Flex>
            </Card>
            <Card maxWidth="285px" boxShadow="none">
              <Box width="100%" height="285px" borderRadius="12px 74px 0px 0px">
                <Image
                  src="/images/public_available/trainers_image.jpg"
                  alt="Trainer"
                  width={285}
                  height={285}
                />
              </Box>
              <Flex flexDirection="column" padding="16px 10px">
                <Text
                  fontFamily="Segoe"
                  color="#222222"
                  fontSize="16px"
                  {...commonFontStyle}
                  textAlign="center">
                  Name Surname
                </Text>
                <Text
                  fontFamily="Segoe"
                  color="#5B5B5B"
                  fontSize="16px"
                  {...commonFontStyle}
                  textAlign="center"
                  paddingBottom="10px"
                  borderBottom="1px solid #F3F4F6">
                  Digital Creator & Educator
                </Text>
                <Text
                  fontFamily="Segoe"
                  color="#222222"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="normal"
                  textAlign="center"
                  marginTop="10px"
                  marginBottom="6px">
                  Enrolled students: 89
                </Text>
                <Text
                  fontFamily="Segoe"
                  color="#222222"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight={400}
                  lineHeight="normal"
                  textAlign="center">
                  Graduated students: 12
                </Text>
              </Flex>
            </Card>
          </Flex>
        </Flex>
        <Flex as="section" flexDirection="column" gap="40px">
          <Heading
            fontFamily="Segoe"
            color="#222222"
            fontSize="32px"
            {...commonFontStyle}
            textAlign="center">
            Our Partners
          </Heading>
          <Flex gap="20px" alignItems="center">
            <PartnersArrowLeft />
            <PartnersLogo />
            <PartnersLogo />
            <PartnersLogo />
            <PartnersLogo />
            <PartnersLogo />
            <PartnersLogo />
            <PartnersLogo />
            <PartnersLogo />
            <PartnersLogo />
            <PartnersLogo />
            <PartnersArrowRight />
          </Flex>
        </Flex>
        <Flex as="section" flexDirection="column">
          <Heading
            fontFamily="Segoe"
            color="#222222"
            fontSize="32px"
            {...commonFontStyle}
            textAlign="center"
            marginBottom="40px">
            Why Students Love Persona
          </Heading>
          <Flex gap="20px">
            <Flex flexDirection="column" maxWidth="387px">
              <Flex
                flexDirection="column"
                padding="48px"
                gap="16px"
                justifyContent="center"
                alignItems="center"
                backgroundColor="#ECF7FC"
                borderRadius="12px">
                <QuoteIcon />
                <Text
                  fontFamily="Segoe"
                  color="#222222"
                  fontSize="16px"
                  {...commonFontStyle}
                  fontWeight={400}
                  textAlign="center">
                  When our designs need an expert opinion or approval, I know I can rely on your
                  agency Thank you for all your help-I will be recommending you to everyone
                </Text>
              </Flex>
              <Flex justifyContent="center">
                <ArrowDownBlue />
              </Flex>

              <Flex
                flexDirection="column"
                gap="8px"
                justifyContent="center"
                alignItems="center "
                marginTop="24px">
                <Box width={73.5} height={73.5}>
                  <Image
                    width={73.5}
                    height={73.5}
                    src="/images/public_available/review_picture.jpg"
                    alt=""
                  />
                </Box>
                <Text
                  fontFamily="Segoe"
                  color="#3D3D3D"
                  fontSize="16px"
                  {...commonFontStyle}
                  textAlign="center">
                  Name Surname
                </Text>
                <Text
                  fontFamily="Segoe"
                  color="#3D3D3D"
                  fontSize="16px"
                  {...commonFontStyle}
                  fontWeight={400}
                  textAlign="center">
                  Designer
                </Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" maxWidth="387px">
              <Flex
                flexDirection="column"
                padding="48px"
                gap="16px"
                justifyContent="center"
                alignItems="center"
                backgroundColor="#FFEFEA"
                borderRadius="12px">
                <QuoteIcon />
                <Text
                  fontFamily="Segoe"
                  color="#222222"
                  fontSize="16px"
                  {...commonFontStyle}
                  fontWeight={400}
                  textAlign="center">
                  When our designs need an expert opinion or approval, I know I can rely on your
                  agency Thank you for all your help-I will be recommending you to everyone
                </Text>
              </Flex>
              <Flex justifyContent="center">
                <ArrowDownPink />
              </Flex>

              <Flex
                flexDirection="column"
                gap="8px"
                justifyContent="center"
                alignItems="center "
                marginTop="24px">
                <Box width={73.5} height={73.5}>
                  <Image
                    width={73.5}
                    height={73.5}
                    src="/images/public_available/review_picture.jpg"
                    alt=""
                  />
                </Box>
                <Text
                  fontFamily="Segoe"
                  color="#3D3D3D"
                  fontSize="16px"
                  {...commonFontStyle}
                  textAlign="center">
                  Name Surname
                </Text>
                <Text
                  fontFamily="Segoe"
                  color="#3D3D3D"
                  fontSize="16px"
                  {...commonFontStyle}
                  fontWeight={400}
                  textAlign="center">
                  Designer
                </Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" maxWidth="387px">
              <Flex
                flexDirection="column"
                padding="48px"
                gap="16px"
                justifyContent="center"
                alignItems="center"
                backgroundColor="#ECF7FC"
                borderRadius="12px">
                <QuoteIcon />
                <Text
                  fontFamily="Segoe"
                  color="#222222"
                  fontSize="16px"
                  {...commonFontStyle}
                  fontWeight={400}
                  textAlign="center">
                  When our designs need an expert opinion or approval, I know I can rely on your
                  agency Thank you for all your help-I will be recommending you to everyone
                </Text>
              </Flex>
              <Flex justifyContent="center">
                <ArrowDownBlue />
              </Flex>

              <Flex
                flexDirection="column"
                gap="8px"
                justifyContent="center"
                alignItems="center "
                marginTop="24px">
                <Box width={73.5} height={73.5}>
                  <Image
                    width={73.5}
                    height={73.5}
                    src="/images/public_available/review_picture.jpg"
                    alt=""
                  />
                </Box>
                <Text
                  fontFamily="Segoe"
                  color="#3D3D3D"
                  fontSize="16px"
                  {...commonFontStyle}
                  textAlign="center">
                  Name Surname
                </Text>
                <Text
                  fontFamily="Segoe"
                  color="#3D3D3D"
                  fontSize="16px"
                  {...commonFontStyle}
                  fontWeight={400}
                  textAlign="center">
                  Designer
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        as="section"
        flexDirection="column"
        alignItems="center"
        maxWidth="100%"
        height="299px"
        backgroundColor="#1F1646"
        borderRadius="73px 73px 0px 0px"
        marginTop="148px">
        <Text
          fontFamily="Montserrat"
          fontSize="44px"
          {...commonFontStyle}
          color="#FFFFFF"
          marginTop="59px"
          marginBottom="16px">
          Find the right course for you
        </Text>
        <Text
          fontFamily="Segoe"
          fontSize="16px"
          {...commonFontStyle}
          fontWeight={400}
          color="#FFFFFF"
          marginBottom="24px">
          See your personalised recommendations based on your interests and goals.
        </Text>
        <Button
          color="#1F1646"
          backgroundColor="#FFFFFF"
          borderRadius="6px"
          width={154}
          height={53}>
          Explore courses
        </Button>
      </Flex> */}
    </div>
  );
};

export default Home;
