'use client';
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import Image from 'next/image';
import { Button } from '@/components/atom';

const commonFontStyle = {
  lineHeight: '21.28px',
  fontWeight: 700,
};

const Home = () => {
  return (
    <Box>
      <Box>
        <Box
          mb="148px"
          borderRadius="0px 0px 74px  74px"
          backgroundColor="#F6FCFF"
          paddingBottom="96px">
          <Container as="section" padding={0} maxWidth="1200px" margin="0 auto">
            <Flex alignItems="center" justifyContent="space-between">
              <Flex maxW="490px" flexDirection="column">
                <Heading as="h1" margin="0 0 16px 0" fontSize="44px" color="#1F1646">
                  Welcome to
                  <Text as="span" textTransform="uppercase" color="#3CB3E5">
                    &nbsp;PBA
                  </Text>
                </Heading>
                <Text
                  fontSize="16px"
                  color="#171717"
                  margin="0 0 32px 0"
                  {...commonFontStyle}
                  fontWeight={400}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At et posuere est non
                  vitae enim, sed consectetur. Nullam interdum feugiat nibh lectus viverra
                  sollicitudin.
                </Text>
                <Flex gap="24px" alignItems="center">
                  <Button
                    width="177px"
                    height="53px"
                    fontSize="16px"
                    fontWeight="400"
                    lineHeight="21.28px">
                    Explore Courses
                  </Button>

                  <Button
                    variant="link"
                    fontSize="16px"
                    fontWeight="400"
                    lineHeight="21.28px"
                    bg="#F6FCFF"
                    color="#222222">
                    Play Our video
                  </Button>
                </Flex>
              </Flex>

              <Flex marginTop="76px">
                <Box>
                  <Image
                    src="/images/public_available/home_page_img.png"
                    alt="Homepage image"
                    width={415}
                    height={542}
                  />
                </Box>
              </Flex>
            </Flex>

            <Box>
              <Box mb="40px">
                <Heading as="h2">Popular topics to learn now</Heading>
              </Box>

              <Flex>
                <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
                  <Box display="flex" flexDirection="column" gap="16px" alignItems="center">
                    <Box bg="#C3E7F7" padding="16px" borderRadius="7px">
                      <Image
                        src="/icons/design_home_icon.svg"
                        width={30}
                        height={30}
                        alt="UI UX Icon"
                      />
                    </Box>

                    <Text as="span" fontWeight="700" fontSize="16px" lineHeight="21.28px">
                      UI/UX Design
                    </Text>
                  </Box>

                  <Box display="flex" gap="16px" flexDirection="column" alignItems="center">
                    <Box bg="#C3E7F7" padding="16px" borderRadius="7px">
                      <Image
                        src="/icons/marketing_home_icon.svg"
                        width={30}
                        height={30}
                        alt="UI UX Icon"
                      />
                    </Box>

                    <Text as="span" fontWeight="700" fontSize="16px" lineHeight="21.28px">
                      Digital Marketing
                    </Text>
                  </Box>

                  <Box display="flex" gap="16px" flexDirection="column" alignItems="center">
                    <Box bg="#C3E7F7" padding="16px" borderRadius="7px">
                      <Image src="/icons/react_home_icon.svg" width={30} height={30} alt="React" />
                    </Box>
                    <Text as="span" fontWeight="700" fontSize="16px" lineHeight="21.28px">
                      React JS
                    </Text>
                  </Box>

                  <Box display="flex" gap="16px" flexDirection="column" alignItems="center">
                    <Box bg="#C3E7F7" padding="16px" borderRadius="7px">
                      <Image
                        src="/icons/management_home_icon.svg"
                        width={30}
                        height={30}
                        alt="Management"
                      />
                    </Box>
                    <Text as="span" fontWeight="700" fontSize="16px" lineHeight="21.28px">
                      HRM
                    </Text>
                  </Box>

                  <Box display="flex" gap="16px" flexDirection="column" alignItems="center">
                    <Box bg="#C3E7F7" padding="16px" borderRadius="7px">
                      <Image
                        src="/icons/design_graphic_home_icon.svg"
                        width={30}
                        height={30}
                        alt="Management"
                      />
                    </Box>

                    <Text as="span" fontWeight="700" fontSize="16px" lineHeight="21.28px">
                      Graphic Design
                    </Text>
                  </Box>

                  <Box display="flex" gap="16px" flexDirection="column" alignItems="center">
                    <Box bg="#C3E7F7" padding="16px" borderRadius="7px">
                      <Image
                        src="/icons/target_home_icon.svg"
                        width={30}
                        height={30}
                        alt="Target"
                      />
                    </Box>
                    <Text as="span" fontWeight="700" fontSize="16px" lineHeight="21.28px">
                      Social Media Marketing
                    </Text>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Container>
        </Box>

        <Container maxW="1200px" margin="0 auto">
          <Box mb="148px">
            <Box color="#222222" maxW="667px" margin="0 auto 40px" textAlign="center">
              <Heading
                lineHeight="42.56px"
                fontSize="32px"
                fontWeight="700"
                margin="0 0 16px 0"
                as="h2">
                What is Persona?
              </Heading>
              <Text fontSize="16px" fontWeight="400" color="#696984" lineHeight="21.28px">
                Skilline is a platform that allows educators to create online classes whereby they
                can store the course materials online; manage assignments, quizzes and exams;
                monitor due dates; grade results and provide students with feedback all in one
                place.
              </Text>
            </Box>
            <Box display="flex" justifyContent="center" gap="20px">
              <Box
                width="590px"
                borderRadius="20px"
                padding="45px 0"
                display="flex"
                alignItems="center"
                flexDirection="column">
                <Box>
                  <Image src="./icons/home_icon_indeviduals.svg" alt="" width={108} height={108} />
                </Box>

                <Text
                  mt="8px"
                  color="#BABABA"
                  margin="0 0 16px 0"
                  lineHeight="42.56px"
                  fontSize="32px"
                  fontWeight="700">
                  for
                  <span
                    style={{ color: '#1F1646', marginLeft: '15px', textTransform: 'uppercase' }}>
                    individuals
                  </span>
                </Text>

                <Text
                  color="#FF6131"
                  fontSize="16px"
                  fontWeight="700"
                  lineHeight="21.28px"
                  margin="0"
                  display="flex"
                  gap="8px">
                  Start a class today
                  <Image src="/icons/not_found_icon.svg" alt="Arrow icon" width={24} height={24} />
                </Text>
              </Box>
              <Box
                width="590px"
                bg="#F6FCFF"
                borderRadius="20px"
                padding="45px 0"
                display="flex"
                alignItems="center"
                flexDirection="column">
                <Box width="108px" height="108px">
                  <Image
                    src="./icons/home_icon_kids.svg"
                    alt="Kids Icon"
                    width={108}
                    height={108}
                  />
                </Box>

                <Text
                  color="#BABABA"
                  mt="8px"
                  margin="0 0 16px 0"
                  lineHeight="42.56px"
                  fontSize="32px"
                  fontWeight="700">
                  for
                  <span style={{ color: '#1F1646', marginLeft: '15px' }}>Kids</span>
                </Text>

                <Text
                  color="#FF6131"
                  fontSize="16px"
                  fontWeight="700"
                  lineHeight="21.28px"
                  margin="0"
                  display="flex"
                  gap="8px">
                  Start a class today
                  <span>
                    <Image
                      src="/icons/not_found_icon.svg"
                      alt="Arrow icon"
                      width={24}
                      height={24}
                    />
                  </span>
                </Text>
              </Box>
            </Box>
          </Box>

          <Box mb="148px">
            <Box color="#222222" maxW="846px" margin="0 auto 40px" textAlign="center">
              <Heading
                lineHeight="42.56px"
                fontSize="32px"
                fontWeight="700"
                margin="0 0 16px 0"
                as="h2">
                Talent Transformation Programm
              </Heading>
              <Text fontSize="16px" fontWeight="400" color="#696984" lineHeight="21.28px">
                We drive our clients growth through innovation and haLorem ipsum, or lipsum as it is
                sometimes known, is dummy text used in laying out print, graphic or web designs.
              </Text>
            </Box>

            <Box>
              <Flex justifyContent="space-between" color="#222222">
                <Box
                  width="424px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center">
                  <Image src="/icons/student_hat.svg" alt="Should icon" width={128} height={128} />
                  <Text
                    textAlign="center"
                    fontSize="32px"
                    fontWeight="700"
                    lineHeight="42.56px"
                    margin="36px 0 0 0">
                    We believe learning should be simple and its impact should be big.
                  </Text>
                </Box>

                <Box width="654px">
                  <Box gap="60px" display="flex">
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <Box width="24px" height="24px">
                        <Image
                          src="/icons/done_icon_homepage.svg"
                          alt="Done"
                          width={24}
                          height={24}
                        />
                      </Box>

                      <Box width="2px" height="100%" bg="#1F1646"></Box>
                    </Box>

                    <Box mb="64px">
                      <Heading
                        margin="0 0 16px 0"
                        as="h3"
                        lineHeight="31.92px"
                        fontSize="24px"
                        fontWeight="700"
                        color="#222222">
                        Free access to the maintenance
                      </Heading>
                      <Text
                        margin="0"
                        color="#5B5B5B"
                        lineHeight="21.28px"
                        fontSize="16px"
                        fontWeight="400">
                        We are offering this limited free deal for website maintenance in order to
                        give you free access to the website maintenance service. You can now access
                        all the features of our website maintenance service for free. You will be
                        able to monitor your website, apply updates and fix errors for free. With
                        our free website maintenance service, you can focus on your business instead
                        of worrying about your website.
                      </Text>
                    </Box>
                  </Box>

                  <Box gap="60px" display="flex">
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <Box width="24px" height="24px">
                        <Image
                          src="/icons/done_icon_homepage.svg"
                          alt="Done"
                          width={24}
                          height={24}
                        />
                      </Box>

                      <Box width="2px" height="100%" bg="#1F1646"></Box>
                    </Box>

                    <Box mb="64px">
                      <Heading
                        margin="0 0 16px 0"
                        as="h3"
                        lineHeight="31.92px"
                        fontSize="24px"
                        fontWeight="700"
                        color="#222222">
                        Providing an authentic report on web performance
                      </Heading>
                      <Text
                        margin="0"
                        color="#5B5B5B"
                        lineHeight="21.28px"
                        fontSize="16px"
                        fontWeight="400">
                        People are busy and they often forget to check their website for updates and
                        changes. We value our customers thats why we are giving free website
                        maintenance services to keep your website up to date and secure. Get your
                        website updates for free and get professional advice from our team of
                        experts. Get a free consultation with one of our experts!
                      </Text>
                    </Box>
                  </Box>

                  <Box gap="60px" display="flex">
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <Box width="24px" height="24px">
                        <Image
                          src="/icons/done_icon_homepage.svg"
                          alt="Done"
                          width={24}
                          height={24}
                        />
                      </Box>

                      <Box width="2px" height="100%" bg="#1F1646"></Box>
                    </Box>

                    <Box>
                      <Heading
                        margin="0 0 16px 0"
                        as="h3"
                        lineHeight="31.92px"
                        fontSize="24px"
                        fontWeight="700"
                        color="#222222">
                        Achieving your loyalty and feedback
                      </Heading>
                      <Text
                        margin="0"
                        color="#5B5B5B"
                        lineHeight="21.28px"
                        fontSize="16px"
                        fontWeight="400">
                        We are looking for a long-term partnership with our clients and want to know
                        what you think about our service. We want to improve our service based on
                        your feedback. You will get a free website migration, free website backup,
                        free SSL certificate installation, and more! Get in touch with us now!
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Box>

          <Box mb="148px">
            <Box color="#222222" maxW="846px" margin="0 auto 40px" textAlign="center">
              <Heading
                lineHeight="42.56px"
                fontSize="32px"
                fontWeight="700"
                margin="0 0 16px 0"
                as="h2">
                Explore Inspiring Courses
              </Heading>
              <Text fontSize="16px" fontWeight="400" color="#696984" lineHeight="21.28px">
                We drive our clients growth through innovation and hard work
              </Text>
            </Box>

            <Box>
              <UnorderedList listStyleType="none" display="flex" gap="16px">
                <ListItem
                  padding="16px 32px"
                  display="flex"
                  width="157px"
                  borderColor="#E5EEFF"
                  border="1px solid"
                  borderRadius="6px"
                  gap="8px"
                  fontSize="16px"
                  fontWeight="700"
                  lineHeight="21.28px">
                  Design
                  <Image src="/icons/arrow_right.svg" height={24} width={24} alt="Arrow " />
                </ListItem>

                <ListItem
                  padding="16px 32px"
                  display="flex"
                  width="157px"
                  borderColor="#E5EEFF"
                  border="1px solid"
                  borderRadius="6px"
                  gap="8px"
                  fontSize="16px"
                  fontWeight="700"
                  lineHeight="21.28px">
                  Design
                  <Image src="/icons/arrow_right.svg" height={24} width={24} alt="Arrow " />
                </ListItem>

                <ListItem
                  padding="16px 32px"
                  display="flex"
                  width="157px"
                  borderColor="#E5EEFF"
                  border="1px solid"
                  borderRadius="6px"
                  gap="8px"
                  fontSize="16px"
                  fontWeight="700"
                  lineHeight="21.28px">
                  Design
                  <Image src="/icons/arrow_right.svg" height={24} width={24} alt="Arrow " />
                </ListItem>

                <ListItem
                  padding="16px 32px"
                  display="flex"
                  width="157px"
                  borderColor="#E5EEFF"
                  border="1px solid"
                  borderRadius="6px"
                  gap="8px"
                  fontSize="16px"
                  fontWeight="700"
                  lineHeight="21.28px">
                  Design
                  <Image src="/icons/arrow_right.svg" height={24} width={24} alt="Arrow " />
                </ListItem>
                <ListItem
                  padding="16px 32px"
                  display="flex"
                  width="157px"
                  borderColor="#E5EEFF"
                  border="1px solid"
                  borderRadius="6px"
                  gap="8px"
                  fontSize="16px"
                  fontWeight="700"
                  lineHeight="21.28px">
                  Design
                  <Image src="/icons/arrow_right.svg" height={24} width={24} alt="Arrow " />
                </ListItem>
                <ListItem
                  padding="16px 32px"
                  display="flex"
                  width="157px"
                  borderColor="#E5EEFF"
                  border="1px solid"
                  borderRadius="6px"
                  gap="8px"
                  fontSize="16px"
                  fontWeight="700"
                  lineHeight="21.28px">
                  Design
                  <Image src="/icons/arrow_right.svg" height={24} width={24} alt="Arrow " />
                </ListItem>
                <ListItem
                  padding="16px 32px"
                  display="flex"
                  width="157px"
                  borderColor="#E5EEFF"
                  border="1px solid"
                  borderRadius="6px"
                  gap="8px"
                  fontSize="16px"
                  fontWeight="700"
                  lineHeight="21.28px">
                  Design
                  <Image src="/icons/arrow_right.svg" height={24} width={24} alt="Arrow " />
                </ListItem>
              </UnorderedList>
              <UnorderedList listStyleType="none" display="flex" gap="16px" justifyContent="center">
                <ListItem
                  padding="16px 32px"
                  display="flex"
                  width="157px"
                  borderColor="#E5EEFF"
                  border="1px solid"
                  borderRadius="6px"
                  gap="8px"
                  fontSize="16px"
                  fontWeight="700"
                  lineHeight="21.28px">
                  Design
                  <Image src="/icons/arrow_right.svg" height={24} width={24} alt="Arrow " />
                </ListItem>

                <ListItem
                  padding="16px 32px"
                  display="flex"
                  width="157px"
                  borderColor="#E5EEFF"
                  border="1px solid"
                  borderRadius="6px"
                  gap="8px"
                  fontSize="16px"
                  fontWeight="700"
                  lineHeight="21.28px">
                  Design
                  <Image src="/icons/arrow_right.svg" height={24} width={24} alt="Arrow " />
                </ListItem>

                <ListItem
                  padding="16px 32px"
                  display="flex"
                  width="157px"
                  borderColor="#E5EEFF"
                  border="1px solid"
                  borderRadius="6px"
                  gap="8px"
                  fontSize="16px"
                  fontWeight="700"
                  lineHeight="21.28px">
                  Design
                  <Image src="/icons/arrow_right.svg" height={24} width={24} alt="Arrow " />
                </ListItem>
                <ListItem
                  padding="16px 32px"
                  display="flex"
                  width="157px"
                  borderColor="#E5EEFF"
                  border="1px solid"
                  borderRadius="6px"
                  gap="8px"
                  fontSize="16px"
                  fontWeight="700"
                  lineHeight="21.28px">
                  Design
                  <Image src="/icons/arrow_right.svg" height={24} width={24} alt="Arrow " />
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Container>

        <Box maxWidth="1681px" bg="#ECF7FC" mb="148px" borderRadius=" 0 74px 74px 0">
          <Flex p="42px 64px 0 0 " gap="9px" alignItems="center" justifyContent="flex-end">
            <Box>
              <Image src="/icons/middle_school_kids.png" alt="Kids" width={774} height={403} />
            </Box>

            <Box width="424px" textAlign="center">
              <Heading lineHeight="42.56px" fontWeight="700" fontSize="30" margin="0 0 16px 0">
                Every child deserves the chance to learn
              </Heading>
              <Text fontWeight="400" fontSize="16px" lineHeight="21.28px" margin="0 0 24px 0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Text>

              <Box>
                <Link
                  display="flex"
                  justifyContent="center"
                  gap="8px"
                  fontSize="16px"
                  {...commonFontStyle}
                  color="#FF6131">
                  Explore courses
                  <Image src="/icons/not_found_icon.svg" alt="Arrow" width={24} height={24} />
                </Link>
              </Box>
            </Box>
          </Flex>
        </Box>

        <Container maxW="1208px" margin="0 auto">
          <Box mb="148px">
            <Box textAlign="center" maxW="564px" m="0 auto">
              <Heading lineHeight="42.56px" fontWeight="700" fontSize="30" margin="0 0 16px 0">
                Short Online Courses
              </Heading>
              <Box mb="16px">
                <Link
                  display="flex"
                  justifyContent="center"
                  gap="8px"
                  fontSize="16px"
                  {...commonFontStyle}
                  color="#FF6131">
                  Get your subscribtion
                  <Image src="/icons/not_found_icon.svg" alt="Arrow" width={24} height={24} />
                </Link>
              </Box>
              <Text fontWeight="400" fontSize="16px" lineHeight="21.28px" margin="0 0 24px 0">
                bite-sized, flexible learning Upskill, reskill or pursue a passion with short
                courses across every subject, whether youre a beginner or already an expert.
              </Text>
            </Box>

            <Box display="flex" gap="20px" margin="40px 0">
              <Box width="387px">
                <Box>
                  <Image
                    src="/images/public_available/sort_courses_design.jpg"
                    alt="Course Image"
                    width={387}
                    height={235}
                  />
                </Box>

                <Box border="1px solid" borderTop="none" borderColor="#F3F4F6" borderRadius="12px">
                  <UnorderedList padding="16px" m="0" listStyleType="none" color="#222222">
                    <ListItem fontSize="24px" mb="8px" fontWeight="700" lineHeight="31.92px">
                      Graphic Design
                    </ListItem>
                    <ListItem fontWeight="400" fontSize="16px" mb="8px">
                      Get inspired by this revived W.H. Audens Hymn to the United Nations.
                    </ListItem>
                    <ListItem display="flex" alignItems="center" gap="8px">
                      <span>
                        <Image src="/icons/star_icon.svg" alt="Star" width={24} height={24} />
                      </span>
                      4.8
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Box>
              <Box width="387px">
                <Box>
                  <Image
                    src="/images/public_available/sort_courses_design.jpg"
                    alt="Course Image"
                    width={387}
                    height={235}
                  />
                </Box>

                <Box border="1px solid" borderTop="none" borderColor="#F3F4F6" borderRadius="12px">
                  <UnorderedList padding="16px" m="0" listStyleType="none" color="#222222">
                    <ListItem fontSize="24px" mb="8px" fontWeight="700" lineHeight="31.92px">
                      Graphic Design
                    </ListItem>
                    <ListItem fontWeight="400" fontSize="16px" mb="8px">
                      Get inspired by this revived W.H. Audens Hymn to the United Nations.{' '}
                    </ListItem>
                    <ListItem display="flex" alignItems="center" gap="8px">
                      <span>
                        <Image src="/icons/star_icon.svg" alt="Star" width={24} height={24} />
                      </span>
                      4.8
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Box>
              <Box width="387px">
                <Box>
                  <Image
                    src="/images/public_available/sort_courses_marketing.jpg"
                    alt="Course Image"
                    width={387}
                    height={235}
                  />
                </Box>

                <Box border="1px solid" borderTop="none" borderColor="#F3F4F6" borderRadius="12px">
                  <UnorderedList padding="16px" m="0" listStyleType="none" color="#222222">
                    <ListItem fontSize="24px" mb="8px" fontWeight="700" lineHeight="31.92px">
                      Graphic Design
                    </ListItem>
                    <ListItem fontWeight="400" fontSize="16px">
                      Get inspired by this revived W.H. Audens Hymn to the United Nations.{' '}
                    </ListItem>
                    <ListItem display="flex" alignItems="center" gap="8px" mb="8px">
                      <span>
                        <Image src="/icons/star_icon.svg" alt="Star" width={24} height={24} />
                      </span>
                      4.8
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Box>
            </Box>

            <Box display="flex" justifyContent="flex-end">
              <Link lineHeight="21.28px" fontSize="16px" fontWeight="400">
                View all courses
              </Link>
            </Box>
          </Box>

          <Box mb="148px">
            <Heading
              textAlign="center"
              mb="40px"
              as="h3"
              color="#222222"
              fontWeight="700"
              fontSize="32px"
              lineHeight="42.56px">
              Only Qualified Articles
            </Heading>

            <Box display="flex" flexWrap="wrap" gap="40px 20px" padding="0">
              <Box
                maxW="590px"
                border="1px solid"
                borderRadius="8px"
                borderColor="#F3F4F6"
                padding="24px">
                <UnorderedList
                  listStyleType="none"
                  color="#333333"
                  borderBottom="1px solid #858585"
                  pb="32px">
                  <ListItem fontWeight="700" fontSize="16px" lineHeight="21.28px" mb="8px">
                    How to Build a Design System if youre...
                  </ListItem>
                  <ListItem fontSize="16px" lineHeight="21.28px" fontWeight="400">
                    Its always hard to be the only person in a company who is responsible for
                    product design. Your day can be insanely...
                  </ListItem>
                </UnorderedList>

                <UnorderedList
                  mt="16px"
                  color="#858585"
                  listStyleType="none"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center">
                  <ListItem fontSize="16px" lineHeight="21.28px" fontWeight="400">
                    March 01, 2021
                  </ListItem>

                  <ListItem
                    fontSize="16px"
                    lineHeight="21.28px"
                    fontWeight="400"
                    display="flex"
                    alignItems="center"
                    gap="8px">
                    <span>
                      <Image src="/icons/eye_icon.svg" alt="Eye" width={16} height={11.3} />
                    </span>
                    440
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box
                maxW="590px"
                border="1px solid"
                borderRadius="8px"
                borderColor="#F3F4F6"
                padding="24px">
                <UnorderedList
                  listStyleType="none"
                  color="#333333"
                  borderBottom="1px solid #858585"
                  pb="32px">
                  <ListItem fontWeight="700" fontSize="16px" lineHeight="21.28px" mb="8px">
                    How to Build a Design System if youre...
                  </ListItem>
                  <ListItem fontSize="16px" lineHeight="21.28px" fontWeight="400">
                    Its always hard to be the only person in a company who is responsible for
                    product design. Your day can be insanely...
                  </ListItem>
                </UnorderedList>

                <UnorderedList
                  mt="16px"
                  color="#858585"
                  listStyleType="none"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center">
                  <ListItem fontSize="16px" lineHeight="21.28px" fontWeight="400">
                    March 01, 2021
                  </ListItem>

                  <ListItem
                    fontSize="16px"
                    lineHeight="21.28px"
                    fontWeight="400"
                    display="flex"
                    alignItems="center"
                    gap="8px">
                    <span>
                      <Image src="/icons/eye_icon.svg" alt="Eye" width={16} height={11.3} />
                    </span>
                    440
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box
                maxW="590px"
                border="1px solid"
                borderRadius="8px"
                borderColor="#F3F4F6"
                padding="24px">
                <UnorderedList
                  listStyleType="none"
                  color="#333333"
                  borderBottom="1px solid #858585"
                  pb="32px">
                  <ListItem fontWeight="700" fontSize="16px" lineHeight="21.28px" mb="8px">
                    How to Build a Design System if youre...
                  </ListItem>
                  <ListItem fontSize="16px" lineHeight="21.28px" fontWeight="400">
                    Its always hard to be the only person in a company who is responsible for
                    product design. Your day can be insanely...
                  </ListItem>
                </UnorderedList>

                <UnorderedList
                  mt="16px"
                  color="#858585"
                  listStyleType="none"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center">
                  <ListItem fontSize="16px" lineHeight="21.28px" fontWeight="400">
                    March 01, 2021
                  </ListItem>

                  <ListItem
                    fontSize="16px"
                    lineHeight="21.28px"
                    fontWeight="400"
                    display="flex"
                    alignItems="center"
                    gap="8px">
                    <span>
                      <Image src="/icons/eye_icon.svg" alt="Eye" width={16} height={11.3} />
                    </span>
                    440
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box
                maxW="590px"
                border="1px solid"
                borderRadius="8px"
                borderColor="#F3F4F6"
                padding="24px">
                <UnorderedList
                  listStyleType="none"
                  color="#333333"
                  borderBottom="1px solid #858585"
                  pb="32px">
                  <ListItem fontWeight="700" fontSize="16px" lineHeight="21.28px" mb="8px">
                    How to Build a Design System if youre...
                  </ListItem>
                  <ListItem fontSize="16px" lineHeight="21.28px" fontWeight="400">
                    Its always hard to be the only person in a company who is responsible for
                    product design. Your day can be insanely...
                  </ListItem>
                </UnorderedList>

                <UnorderedList
                  mt="16px"
                  color="#858585"
                  listStyleType="none"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center">
                  <ListItem fontSize="16px" lineHeight="21.28px" fontWeight="400">
                    March 01, 2021
                  </ListItem>

                  <ListItem
                    fontSize="16px"
                    lineHeight="21.28px"
                    fontWeight="400"
                    display="flex"
                    alignItems="center"
                    gap="8px">
                    <span>
                      <Image src="/icons/eye_icon.svg" alt="Eye" width={16} height={11.3} />
                    </span>
                    440
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Box>

          <Box mb="148px">
            <Box textAlign="center" maxW="419px" m="0 auto">
              <Heading lineHeight="42.56px" fontWeight="700" fontSize="30" margin="0 0 16px 0">
                Top Trainers
              </Heading>
              <Text fontWeight="400" fontSize="16px" lineHeight="21.28px" margin="0 0 24px 0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </Text>
            </Box>

            <Box mt="40px" display="flex" gap="20px" flexWrap="wrap">
              <Box maxW="285px">
                <Box>
                  <Image
                    src="/images/public_available/trainers_image.jpg"
                    alt="Treners"
                    width={285}
                    height={271}
                  />
                </Box>

                <UnorderedList
                  textAlign="center"
                  fontSize="16px"
                  lineHeight="21.28px"
                  fontWeight="400"
                  m="0"
                  listStyleType="none"
                  padding="16px 10px">
                  <ListItem mb="8px" fontWeight="700">
                    Name Surname
                  </ListItem>
                  <ListItem pb="10px" borderBottom="1px solid #F3F4F6">
                    Digital Creator & Educator
                  </ListItem>
                  <ListItem pt="10px" mb="6px">
                    Enrolled students: 89
                  </ListItem>
                  <ListItem>Graduated students: 12</ListItem>
                </UnorderedList>
              </Box>
              <Box maxW="285px">
                <Box>
                  <Image
                    src="/images/public_available/trainers_image.jpg"
                    alt="Treners"
                    width={285}
                    height={271}
                  />
                </Box>

                <UnorderedList
                  textAlign="center"
                  fontSize="16px"
                  lineHeight="21.28px"
                  fontWeight="400"
                  m="0"
                  listStyleType="none"
                  padding="16px 10px">
                  <ListItem mb="8px" fontWeight="700">
                    Name Surname
                  </ListItem>
                  <ListItem pb="10px" borderBottom="1px solid #F3F4F6">
                    Digital Creator & Educator
                  </ListItem>
                  <ListItem pt="10px" mb="6px">
                    Enrolled students: 89
                  </ListItem>
                  <ListItem>Graduated students: 12</ListItem>
                </UnorderedList>
              </Box>
              <Box maxW="285px">
                <Box>
                  <Image
                    src="/images/public_available/trainers_image.jpg"
                    alt="Treners"
                    width={285}
                    height={271}
                  />
                </Box>

                <UnorderedList
                  textAlign="center"
                  fontSize="16px"
                  lineHeight="21.28px"
                  fontWeight="400"
                  m="0"
                  listStyleType="none"
                  padding="16px 10px">
                  <ListItem mb="8px" fontWeight="700">
                    Name Surname
                  </ListItem>
                  <ListItem pb="10px" borderBottom="1px solid #F3F4F6">
                    Digital Creator & Educator
                  </ListItem>
                  <ListItem pt="10px" mb="6px">
                    Enrolled students: 89
                  </ListItem>
                  <ListItem>Graduated students: 12</ListItem>
                </UnorderedList>
              </Box>
              <Box maxW="285px">
                <Box>
                  <Image
                    src="/images/public_available/trainers_image.jpg"
                    alt="Treners"
                    width={285}
                    height={271}
                  />
                </Box>

                <UnorderedList
                  textAlign="center"
                  fontSize="16px"
                  lineHeight="21.28px"
                  fontWeight="400"
                  m="0"
                  listStyleType="none"
                  padding="16px 10px">
                  <ListItem mb="8px" fontWeight="700">
                    Name Surname
                  </ListItem>
                  <ListItem pb="10px" borderBottom="1px solid #F3F4F6">
                    Digital Creator & Educator
                  </ListItem>
                  <ListItem pt="10px" mb="6px">
                    Enrolled students: 89
                  </ListItem>
                  <ListItem>Graduated students: 12</ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Box>

          <Box mb="148px">
            <Heading
              textAlign="center"
              m="0"
              as="h3"
              lineHeight="42.56px"
              fontSize="32px"
              fontWeight="700">
              Our Partners
            </Heading>

            <Box mt="40px" display="flex" gap="30px" justifyContent="center" alignItems="center">
              <Box>
                <Image
                  src="/icons/arrow_left_partners.svg"
                  alt="Arrow left"
                  width={24}
                  height={24}
                />
              </Box>
              <Box display="flex" gap="20px" alignItems="center">
                <Box>
                  <Image
                    src="/images/public_available/partners_logo_dole.jpg"
                    alt="Partners Logo"
                    width={92}
                    height={92}
                  />
                </Box>

                <Box>
                  <Image
                    src="/images/public_available/partners_logo_PG.jpg"
                    alt="Partners Logo"
                    width={92}
                    height={92}
                  />
                </Box>

                <Box>
                  <Image
                    src="/images/public_available/partners_logo_huawei.jpg"
                    alt="Partners Logo"
                    width={92}
                    height={92}
                  />
                </Box>

                <Box>
                  <Image
                    src="/images/public_available/partners_logo_dole.jpg"
                    alt="Partners Logo"
                    width={92}
                    height={92}
                  />
                </Box>

                <Box>
                  <Image
                    src="/images/public_available/partners_logo_huawei.jpg"
                    alt="Partners Logo"
                    width={92}
                    height={92}
                  />
                </Box>

                <Box>
                  <Image
                    src="/images/public_available/partners_logo_PG.jpg"
                    alt="Partners Logo"
                    width={92}
                    height={92}
                  />
                </Box>

                <Box>
                  <Image
                    src="/images/public_available/partners_logo_dole.jpg"
                    alt="Partners Logo"
                    width={92}
                    height={92}
                  />
                </Box>

                <Box>
                  <Image
                    src="/images/public_available/partners_logo_PG.jpg"
                    alt="Partners Logo"
                    width={92}
                    height={92}
                  />
                </Box>

                <Box>
                  <Image
                    src="/images/public_available/partners_logo_dole.jpg"
                    alt="Partners Logo"
                    width={92}
                    height={92}
                  />
                </Box>
              </Box>

              <Box>
                <Image
                  src="/icons/arrow_right_partners.svg"
                  alt="Arrow left"
                  width={24}
                  height={24}
                />
              </Box>
            </Box>
          </Box>

          <Box mb="148px">
            <Heading
              textAlign="center"
              m="0"
              as="h3"
              lineHeight="42.56px"
              fontSize="32px"
              fontWeight="700">
              Why Students Love Persona
            </Heading>

            <Box display="flex" gap="20px" mt="40px">
              <Box width="387px">
                <Box
                  position="relative"
                  bg="#ECF7FC"
                  textAlign="center"
                  padding="48px"
                  borderRadius="12px">
                  <span style={{ fontSize: '20px' }}>''</span>
                  <Text m="0" lineHeight="21.28px" fontWeight="400" fontSize="16px">
                    When our designs need an expert opinion or approval, I know I can rely on your
                    agency Thank you for all your help-I will be recommending you to everyone
                  </Text>
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-15px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}>
                    <Image
                      src="/icons/arrow_down_blue.svg"
                      alt="Arrow"
                      width={22.5}
                      height={15.7}
                    />
                  </span>
                </Box>

                <Box
                  paddingTop="48px"
                  textAlign="center"
                  display="flex"
                  gap="8px"
                  flexDirection="column"
                  alignItems="center">
                  <Image src="/icons/students_feed.png" alt="Feed" width={64} height={64} />

                  <UnorderedList
                    lineHeight="21.28px"
                    fontSize="16px"
                    margin="0"
                    listStyleType="none">
                    <ListItem fontWeight="700">Name Surname</ListItem>
                    <ListItem fontWeight="400">Desinger</ListItem>
                  </UnorderedList>
                </Box>
              </Box>

              <Box width="387px">
                <Box
                  position="relative"
                  bg="#ECF7FC"
                  textAlign="center"
                  padding="48px"
                  borderRadius="12px">
                  <span style={{ fontSize: '20px' }}>''</span>
                  <Text m="0" lineHeight="21.28px" fontWeight="400" fontSize="16px">
                    When our designs need an expert opinion or approval, I know I can rely on your
                    agency Thank you for all your help-I will be recommending you to everyone
                  </Text>
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-15px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}>
                    <Image
                      src="/icons/arrow_down_blue.svg"
                      alt="Arrow"
                      width={22.5}
                      height={15.7}
                    />
                  </span>
                </Box>

                <Box
                  paddingTop="48px"
                  textAlign="center"
                  display="flex"
                  gap="8px"
                  flexDirection="column"
                  alignItems="center">
                  <Image src="/icons/students_feed.png" alt="Feed" width={64} height={64} />

                  <UnorderedList
                    lineHeight="21.28px"
                    fontSize="16px"
                    margin="0"
                    listStyleType="none">
                    <ListItem fontWeight="700">Name Surname</ListItem>
                    <ListItem fontWeight="400">Desinger</ListItem>
                  </UnorderedList>
                </Box>
              </Box>

              <Box width="387px">
                <Box
                  position="relative"
                  bg="#ECF7FC"
                  textAlign="center"
                  padding="48px"
                  borderRadius="12px">
                  <span style={{ fontSize: '20px' }}>''</span>
                  <Text m="0" lineHeight="21.28px" fontWeight="400" fontSize="16px">
                    When our designs need an expert opinion or approval, I know I can rely on your
                    agency Thank you for all your help-I will be recommending you to everyone
                  </Text>
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-15px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}>
                    <Image
                      src="/icons/arrow_down_blue.svg"
                      alt="Arrow"
                      width={22.5}
                      height={15.7}
                    />
                  </span>
                </Box>

                <Box
                  paddingTop="48px"
                  textAlign="center"
                  display="flex"
                  gap="8px"
                  flexDirection="column"
                  alignItems="center">
                  <Image src="/icons/students_feed.png" alt="Feed" width={64} height={64} />

                  <UnorderedList
                    lineHeight="21.28px"
                    fontSize="16px"
                    margin="0"
                    listStyleType="none">
                    <ListItem fontWeight="700">Name Surname</ListItem>
                    <ListItem fontWeight="400">Desinger</ListItem>
                  </UnorderedList>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            margin=" 0 auto 60px"
            border="1px solid #F3F4F6"
            width="154px"
            height="53px"
            display="flex"
            justifyContent="center"
            alignItems="center">
            <Link lineHeight="21.28px" fontSize="16px" fontWeight="400">
              Explore courses
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
