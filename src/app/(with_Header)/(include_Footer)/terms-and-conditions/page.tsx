'use client';
import React, { FC } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';

type Props = {};

const TermsAndConditions: FC<Props> = () => {
  return (
    <Container maxW="1200px">
      <Box m={{ base: '36px 0 36px', lg: '64px 0 148px', xl: '64px 0 148px' }}>
        <Tabs
          display="flex"
          gap="20px"
          id="terms_and_conditions_tabs"
          justifyContent={{ base: 'center', lg: 'space-between', xl: 'space-between' }}
          flexWrap={{ base: 'wrap-reverse', lg: 'nowrap', xl: 'nowrap' }}>
          <TabList
            flexDirection="column"
            width={{ base: '100%', lg: '387px', xl: '387px' }}
            fontWeight="700"
            gap={4}
            border="none">
            <Tab
              width="100%"
              justifyContent="flex-start"
              padding="16px"
              _selected={{
                bg: '#F3F4F6',
              }}
              fontSize="16px"
              lineHeight="21.28px"
              color="#5B5B5B"
              borderBottom="none"
              bg="#F9FAFB">
              How to make online payment
            </Tab>

            <Tab
              width="100%"
              justifyContent="flex-start"
              padding="16px"
              fontSize="16px"
              color="#5B5B5B"
              lineHeight="21.28px"
              borderBottom="none"
              bg="#F9FAFB"
              _selected={{
                bg: '#F3F4F6',
              }}>
              Help cneter
            </Tab>

            <Tab
              width="100%"
              justifyContent="flex-start"
              padding="16px"
              color="#5B5B5B"
              fontSize="16px"
              lineHeight="21.28px"
              bg="#F9FAFB"
              borderBottom="none"
              _selected={{
                bg: '#F3F4F6',
              }}>
              Lorem ispum
            </Tab>

            <Tab
              width="100%"
              justifyContent="flex-start"
              padding="16px"
              fontSize="16px"
              lineHeight="21.28px"
              color="#5B5B5B"
              borderBottom="none"
              bg="#F9FAFB"
              _selected={{
                bg: '#F3F4F6',
              }}>
              Lorem ispum
            </Tab>

            <Tab
              width="100%"
              justifyContent="flex-start"
              padding="16px"
              fontSize="16px"
              lineHeight="21.28px"
              borderBottom="none"
              color="#5B5B5B"
              bg="#F9FAFB"
              _selected={{
                bg: '#F3F4F6',
              }}>
              Lorem ispum
            </Tab>

            <Tab
              width="100%"
              justifyContent="flex-start"
              padding="16px"
              fontSize="16px"
              lineHeight="21.28px"
              borderBottom="none"
              color="#5B5B5B"
              _selected={{
                bg: '#F3F4F6',
              }}
              bg="#F9FAFB">
              Lorem ispum
            </Tab>

            <Tab
              width="100%"
              justifyContent="flex-start"
              padding="16px"
              fontSize="16px"
              lineHeight="21.28px"
              borderBottom="none"
              color="#5B5B5B"
              _selected={{
                bg: '#F3F4F6',
              }}
              bg="#F9FAFB">
              Lorem ispum
            </Tab>
          </TabList>

          <TabPanels padding="0">
            <TabPanel padding="0">
              <Heading
                as="h2"
                fontSize={{ base: '24px', lg: '44px', xl: '44px' }}
                lineHeight={{ base: '31.92px', lg: '53.64px', xl: '53.64px' }}
                fontWeight="700"
                color="#212122"
                textAlign={{ base: 'center', lg: 'start', xl: 'start' }}
                margin=" 0 0 16px 0">
                Terms & Conditions
              </Heading>
              <Flex flexDirection="column" gap="8px">
                <Text
                  as="p"
                  margin="0"
                  lineHeight={{ base: '18.75px', lg: '21.28px', xl: '21.28px' }}
                  fontSize="16px"
                  fontWeight="400">
                  These terms and conditions outline the rules and regulations for the use of
                  Wriggles Website, located at www.wriggle.ie. By accessing this website we assume
                  you accept these terms and conditions. Do not continue to use Wriggle if you do
                  not agree to take all of the terms and conditions stated on this page. The
                  following terminology applies to these Terms and Conditions, Privacy Statement and
                  Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you,
                  the person log on this website and compliant to the Companys terms and conditions.
                  “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”,
                  “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to
                  the offer, acceptance and consideration of payment necessary to undertake the
                  process of our assistance to the Client in the most appropriate manner for the
                  express purpose of meeting the Clients needs in respect of provision of the
                  Companys stated services, in accordance with and subject to, prevailing law of
                  Netherlands. Any use of the above terminology or other words in the singular,
                  plural, capitalization and/or he/she or they, are taken as interchangeable and
                  therefore as referring to same.These terms and conditions outline the rules and
                  regulations for the use of Wriggles Website, located at www.wriggle.ie. By
                  accessing this website we assume you accept these terms and conditions. Do not
                  continue to use Wriggle if you do not agree to take all of the terms and
                  conditions stated on this page. The following terminology applies to these Terms
                  and Conditions, Privacy Statement and Disclaimer Notice and all Agreements:
                  “Client”, “You” and “Your” refers to you, the person log on this website and
                  compliant to the Companys terms and conditions. “The Company”, “Ourselves”, “We”,
                  “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both
                  the Client and ourselves. All terms refer to the offer, acceptance and
                  consideration of payment necessary to undertake the process of our assistance to
                  the Client in the most appropriate manner for the express purpose of meeting the
                  Clients needs in respect of provision of the Companys stated services, in
                  accordance with and subject to, prevailing law of Netherlands. Any use of the
                  above terminology or other words in the singular, plural, capitalization and/or
                  he/she or they, are taken as interchangeable and therefore as referring to
                  same.These terms and conditions outline the rules and regulations for the use of
                  Wriggles Website, located at www.wriggle.ie.
                </Text>

                <Text
                  lineHeight={{ base: '18.75px', lg: '21.28px', xl: '21.28px' }}
                  fontSize="16px"
                  fontWeight="400"
                  as="p"
                  margin="0">
                  By accessing this website we assume you accept these terms and conditions. Do not
                  continue to use Wriggle if you do not agree to take all of the terms and
                  conditions stated on this page. The following terminology applies to these Terms
                  and Conditions, Privacy Statement and Disclaimer Notice and all Agreements:
                  “Client”, “You” and “Your” refers to you, the person log on this website and
                  compliant to the Companys terms and conditions. “The Company”, “Ourselves”, “We”,
                  “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both
                  the Client and ourselves. All terms refer to the offer, acceptance and
                  consideration of payment necessary to undertake the process of our assistance to
                  the Client in the most appropriate manner for the express purpose of meeting the
                  Clients needs in respect of provision of the Companys stated services, in
                  accordance with and subject to, prevailing law of Netherlands. Any use of the
                  above terminology or other words in the singular, plural, capitalization and/or
                  he/she or they, are taken as interchangeable and therefore as referring to same.
                </Text>
              </Flex>
            </TabPanel>

            <TabPanel>
              <Heading
                as="h2"
                fontWeight="700"
                fontSize={{ base: '24px', lg: '44px', xl: '44px' }}
                lineHeight={{ base: '31.92px', lg: '53.64px', xl: '53.64px' }}
                color="#212122"
                textAlign={{ base: 'center', lg: 'start', xl: 'start' }}
                margin=" 0 0 16px 0">
                Where does it come from?
              </Heading>
              <Text
                lineHeight={{ base: '18.75px', lg: '21.28px', xl: '21.28px' }}
                fontSize="16px"
                fontWeight="400"
                as="p"
                margin="0">
                These terms and conditions outline the rules and regulations for the use of Wriggles
                Website, located at www.wriggle.ie. By accessing this website we assume you accept
                these terms and conditions. Do not continue to use Wriggle if you do not agree to
                take all of the terms and conditions stated on this page. The following terminology
                applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and
                all Agreements: “Client”, “You” and “Your” refers to you, the person log on this
                website and compliant to the Companys terms and conditions. “The Company”,
                “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or
                “Us”, refers to both the Client and ourselves. All terms refer to the offer,
                acceptance and consideration of payment necessary to undertake the process of our
                assistance to the Client in the most appropriate manner for the express purpose of
                meeting the Clients needs in respect of provision of the Companys stated services,
                in accordance with and subject to, prevailing law of Netherlands. Any use of the
                above terminology or other words in the singular, plural, capitalization and/or
                he/she or they, are taken as interchangeable and therefore as referring to
                same.These terms and conditions outline the rules and regulations for the use of
                Wriggles Website, located at www.wriggle.ie. By accessing this website we assume you
                accept these terms and conditions. Do not continue to use Wriggle if you do not
                agree to take all of the terms and conditions stated on this page. The following
                terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer
                Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log
                on this website and compliant to the Companys terms and conditions. “The Company”,
                “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or
                “Us”, refers to both the Client and ourselves. All terms refer to the offer,
                acceptance and consideration of payment necessary to undertake the process of our
                assistance to the Client in the most appropriate manner for the express purpose of
                meeting the Clients needs in respect of provision of the Companys stated services,
                in accordance with and subject to, prevailing law of Netherlands. Any use of the
                above terminology or other words in the singular, plural, capitalization and/or
                he/she or they, are taken as interchangeable and therefore as referring to
                same.These terms and conditions outline the rules and regulations for the use of
                Wriggles Website, located at www.wriggle.ie. By accessing this website we assume you
                accept these terms and conditions. Do not continue to use Wriggle if you do not
                agree to take all of the terms and conditions stated on this page. The following
                terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer
                Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log
                on this website and compliant to the Companys terms and conditions. “The Company”,
                “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or
                “Us”, refers to both the Client and ourselves. All terms refer to the offer,
                acceptance and consideration of payment necessary to undertake the process of our
                assistance to the Client in the most appropriate manner for the express purpose of
                meeting the Clients needs in respect of provision of the Companys stated services,
                in accordance with and subject to, prevailing law of Netherlands. Any use of the
                above terminology or other words in the singular, plural, capitalization and/or
                he/she or they, are taken as interchangeable and therefore as referring to same.
              </Text>
            </TabPanel>

            <TabPanel>
              <Heading
                as="h2"
                fontWeight="700"
                fontSize={{ base: '24px', lg: '44px', xl: '44px' }}
                lineHeight={{ base: '31.92px', lg: '53.64px', xl: '53.64px' }}
                color="#212122"
                textAlign={{ base: 'center', lg: 'start', xl: 'start' }}
                margin=" 0 0 16px 0">
                Terms & Conditions
              </Heading>
              <Flex flexDirection="column" gap="8px">
                <Text
                  as="p"
                  margin="0"
                  lineHeight={{ base: '18.75px', lg: '21.28px', xl: '21.28px' }}
                  fontSize="16px"
                  fontWeight="400">
                  These terms and conditions outline the rules and regulations for the use of
                  Wriggles Website, located at www.wriggle.ie. By accessing this website we assume
                  you accept these terms and conditions. Do not continue to use Wriggle if you do
                  not agree to take all of the terms and conditions stated on this page. The
                  following terminology applies to these Terms and Conditions, Privacy Statement and
                  Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you,
                  the person log on this website and compliant to the Companys terms and conditions.
                  “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”,
                  “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to
                  the offer, acceptance and consideration of payment necessary to undertake the
                  process of our assistance to the Client in the most appropriate manner for the
                  express purpose of meeting the Clients needs in respect of provision of the
                  Companys stated services, in accordance with and subject to, prevailing law of
                  Netherlands. Any use of the above terminology or other words in the singular,
                  plural, capitalization and/or he/she or they, are taken as interchangeable and
                  therefore as referring to same.These terms and conditions outline the rules and
                  regulations for the use of Wriggles Website, located at www.wriggle.ie. By
                  accessing this website we assume you accept these terms and conditions. Do not
                  continue to use Wriggle if you do not agree to take all of the terms and
                  conditions stated on this page. The following terminology applies to these Terms
                  and Conditions, Privacy Statement and Disclaimer Notice and all Agreements:
                  “Client”, “You” and “Your” refers to you, the person log on this website and
                  compliant to the Companys terms and conditions. “The Company”, “Ourselves”, “We”,
                  “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both
                  the Client and ourselves. All terms refer to the offer, acceptance and
                  consideration of payment necessary to undertake the process of our assistance to
                  the Client in the most appropriate manner for the express purpose of meeting the
                  Clients needs in respect of provision of the Companys stated services, in
                  accordance with and subject to, prevailing law of Netherlands. Any use of the
                  above terminology or other words in the singular, plural, capitalization and/or
                  he/she or they, are taken as interchangeable and therefore as referring to
                  same.These terms and conditions outline the rules and regulations for the use of
                  Wriggles Website, located at www.wriggle.ie.
                </Text>

                <Text
                  lineHeight={{ base: '18.75px', lg: '21.28px', xl: '21.28px' }}
                  fontSize="16px"
                  fontWeight="400"
                  as="p"
                  margin="0">
                  By accessing this website we assume you accept these terms and conditions. Do not
                  continue to use Wriggle if you do not agree to take all of the terms and
                  conditions stated on this page. The following terminology applies to these Terms
                  and Conditions, Privacy Statement and Disclaimer Notice and all Agreements:
                  “Client”, “You” and “Your” refers to you, the person log on this website and
                  compliant to the Companys terms and conditions. “The Company”, “Ourselves”, “We”,
                  “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both
                  the Client and ourselves. All terms refer to the offer, acceptance and
                  consideration of payment necessary to undertake the process of our assistance to
                  the Client in the most appropriate manner for the express purpose of meeting the
                  Clients needs in respect of provision of the Companys stated services, in
                  accordance with and subject to, prevailing law of Netherlands. Any use of the
                  above terminology or other words in the singular, plural, capitalization and/or
                  he/she or they, are taken as interchangeable and therefore as referring to same.
                </Text>
              </Flex>
            </TabPanel>

            <TabPanel>
              <Heading
                as="h2"
                fontWeight="700"
                fontSize={{ base: '24px', lg: '44px', xl: '44px' }}
                lineHeight={{ base: '31.92px', lg: '53.64px', xl: '53.64px' }}
                color="#212122"
                textAlign={{ base: 'center', lg: 'start', xl: 'start' }}
                margin=" 0 0 16px 0">
                Terms & Conditions
              </Heading>
              <Text
                lineHeight={{ base: '18.75px', lg: '21.28px', xl: '21.28px' }}
                fontSize="16px"
                fontWeight="400"
                as="p"
                margin="0">
                These terms and conditions outline the rules and regulations for the use of Wriggles
                Website, located at www.wriggle.ie. By accessing this website we assume you accept
                these terms and conditions. Do not continue to use Wriggle if you do not agree to
                take all of the terms and conditions stated on this page. The following terminology
                applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and
                all Agreements: “Client”, “You” and “Your” refers to you, the person log on this
                website and compliant to the Companys terms and conditions. “The Company”,
                “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or
                “Us”, refers to both the Client and ourselves. All terms refer to the offer,
                acceptance and consideration of payment necessary to undertake the process of our
                assistance to the Client in the most appropriate manner for the express purpose of
                meeting the Clients needs in respect of provision of the Companys stated services,
                in accordance with and subject to, prevailing law of Netherlands. Any use of the
                above terminology or other words in the singular, plural, capitalization and/or
                he/she or they, are taken as interchangeable and therefore as referring to
                same.These terms and conditions outline the rules and regulations for the use of
                Wriggles Website, located at www.wriggle.ie. By accessing this website we assume you
                accept these terms and conditions. Do not continue to use Wriggle if you do not
                agree to take all of the terms and conditions stated on this page. The following
                terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer
                Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log
                on this website and compliant to the Companys terms and conditions. “The Company”,
                “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or
                “Us”, refers to both the Client and ourselves. All terms refer to the offer,
                acceptance and consideration of payment necessary to undertake the process of our
                assistance to the Client in the most appropriate manner for the express purpose of
                meeting the Clients needs in respect of provision of the Companys stated services,
                in accordance with and subject to, prevailing law of Netherlands. Any use of the
                above terminology or other words in the singular, plural, capitalization and/or
                he/she or they, are taken as interchangeable and therefore as referring to
                same.These terms and conditions outline the rules and regulations for the use of
                Wriggles Website, located at www.wriggle.ie. By accessing this website we assume you
                accept these terms and conditions. Do not continue to use Wriggle if you do not
                agree to take all of the terms and conditions stated on this page. The following
                terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer
                Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log
                on this website and compliant to the Companys terms and conditions. “The Company”,
                “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or
                “Us”, refers to both the Client and ourselves. All terms refer to the offer,
                acceptance and consideration of payment necessary to undertake the process of our
                assistance to the Client in the most appropriate manner for the express purpose of
                meeting the Clients needs in respect of provision of the Companys stated services,
                in accordance with and subject to, prevailing law of Netherlands. Any use of the
                above terminology or other words in the singular, plural, capitalization and/or
                he/she or they, are taken as interchangeable and therefore as referring to same.
              </Text>
            </TabPanel>

            <TabPanel>
              <Heading
                as="h2"
                fontWeight="700"
                fontSize={{ base: '24px', lg: '44px', xl: '44px' }}
                lineHeight={{ base: '31.92px', lg: '53.64px', xl: '53.64px' }}
                color="#212122"
                textAlign={{ base: 'center', lg: 'start', xl: 'start' }}
                margin=" 0 0 16px 0">
                Terms & Conditions
              </Heading>
              <Text
                as="p"
                margin="0"
                lineHeight={{ base: '18.75px', lg: '21.28px', xl: '21.28px' }}
                fontSize="16px"
                fontWeight="400">
                These terms and conditions outline the rules and regulations for the use of Wriggles
                Website, located at www.wriggle.ie. By accessing this website we assume you accept
                these terms and conditions. Do not continue to use Wriggle if you do not agree to
                take all of the terms and conditions stated on this page. The following terminology
                applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and
                all Agreements: “Client”, “You” and “Your” refers to you, the person log on this
                website and compliant to the Companys terms and conditions. “The Company”,
                “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or
                “Us”, refers to both the Client and ourselves. All terms refer to the offer,
                acceptance and consideration of payment necessary to undertake the process of our
                assistance to the Client in the most appropriate manner for the express purpose of
                meeting the Clients needs in respect of provision of the Companys stated services,
                in accordance with and subject to, prevailing law of Netherlands. Any use of the
                above terminology or other words in the singular, plural, capitalization and/or
                he/she or they, are taken as interchangeable and therefore as referring to
                same.These terms and conditions outline the rules and regulations for the use of
                Wriggles Website, located at www.wriggle.ie. By accessing this website we assume you
                accept these terms and conditions. Do not continue to use Wriggle if you do not
                agree to take all of the terms and conditions stated on this page. The following
                terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer
                Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log
                on this website and compliant to the Companys terms and conditions. “The Company”,
                “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or
                “Us”, refers to both the Client and ourselves. All terms refer to the offer,
                acceptance and consideration of payment necessary to undertake the process of our
                assistance to the Client in the most appropriate manner for the express purpose of
                meeting the Clients needs in respect of provision of the Companys stated services,
                in accordance with and subject to, prevailing law of Netherlands. Any use of the
                above terminology or other words in the singular, plural, capitalization and/or
                he/she or they, are taken as interchangeable and therefore as referring to
                same.These terms and conditions outline the rules and regulations for the use of
                Wriggles Website, located at www.wriggle.ie. By accessing this website we assume you
                accept these terms and conditions. Do not continue to use Wriggle if you do not
                agree to take all of the terms and conditions stated on this page. The following
                terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer
                Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log
                on this website and compliant to the Companys terms and conditions. “The Company”,
                “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or
                “Us”, refers to both the Client and ourselves. All terms refer to the offer,
                acceptance and consideration of payment necessary to undertake the process of our
                assistance to the Client in the most appropriate manner for the express purpose of
                meeting the Clients needs in respect of provision of the Companys stated services,
                in accordance with and subject to, prevailing law of Netherlands. Any use of the
                above terminology or other words in the singular, plural, capitalization and/or
                he/she or they, are taken as interchangeable and therefore as referring to same.
              </Text>
            </TabPanel>

            <TabPanel>
              <Heading
                as="h2"
                fontWeight="700"
                fontSize={{ base: '24px', lg: '44px', xl: '44px' }}
                lineHeight={{ base: '31.92px', lg: '53.64px', xl: '53.64px' }}
                color="#212122"
                textAlign={{ base: 'center', lg: 'start', xl: 'start' }}
                margin=" 0 0 16px 0">
                Terms & Conditions
              </Heading>
              <Text
                as="p"
                margin="0"
                lineHeight={{ base: '18.75px', lg: '21.28px', xl: '21.28px' }}
                fontSize="16px"
                fontWeight="400">
                These terms and conditions outline the rules and regulations for the use of Wriggles
                Website, located at www.wriggle.ie. By accessing this website we assume you accept
                these terms and conditions. Do not continue to use Wriggle if you do not agree to
                take all of the terms and conditions stated on this page. The following terminology
                applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and
                all Agreements: “Client”, “You” and “Your” refers to you, the person log on this
                website and compliant to the Companys terms and conditions. “The Company”,
                “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or
                “Us”, refers to both the Client and ourselves. All terms refer to the offer,
                acceptance and consideration of payment necessary to undertake the process of our
                assistance to the Client in the most appropriate manner for the express purpose of
                meeting the Clients needs in respect of provision of the Companys stated services,
                in accordance with and subject to, prevailing law of Netherlands. Any use of the
                above terminology or other words in the singular, plural, capitalization and/or
                he/she or they, are taken as interchangeable and therefore as referring to
                same.These terms and conditions outline the rules and regulations for the use of
                Wriggles Website, located at www.wriggle.ie. By accessing this website we assume you
                accept these terms and conditions. Do not continue to use Wriggle if you do not
                agree to take all of the terms and conditions stated on this page. The following
                terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer
                Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log
                on this website and compliant to the Companys terms and conditions. “The Company”,
                “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or
                “Us”, refers to both the Client and ourselves. All terms refer to the offer,
                acceptance and consideration of payment necessary to undertake the process of our
                assistance to the Client in the most appropriate manner for the express purpose of
                meeting the Clients needs in respect of provision of the Companys stated services,
                in accordance with and subject to, prevailing law of Netherlands. Any use of the
                above terminology or other words in the singular, plural, capitalization and/or
                he/she or they, are taken as interchangeable and therefore as referring to
                same.These terms and conditions outline the rules and regulations for the use of
                Wriggles Website, located at www.wriggle.ie. By accessing this website we assume you
                accept these terms and conditions. Do not continue to use Wriggle if you do not
                agree to take all of the terms and conditions stated on this page. The following
                terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer
                Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log
                on this website and compliant to the Companys terms and conditions. “The Company”,
                “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or
                “Us”, refers to both the Client and ourselves. All terms refer to the offer,
                acceptance and consideration of payment necessary to undertake the process of our
                assistance to the Client in the most appropriate manner for the express purpose of
                meeting the Clients needs in respect of provision of the Companys stated services,
                in accordance with and subject to, prevailing law of Netherlands. Any use of the
                above terminology or other words in the singular, plural, capitalization and/or
                he/she or they, are taken as interchangeable and therefore as referring to same.
              </Text>
            </TabPanel>

            <TabPanel>
              <Heading
                as="h2"
                fontWeight="700"
                fontSize={{ base: '24px', lg: '44px', xl: '44px' }}
                lineHeight={{ base: '31.92px', lg: '53.64px', xl: '53.64px' }}
                color="#212122"
                textAlign={{ base: 'center', lg: 'start', xl: 'start' }}
                margin=" 0 0 16px 0">
                Terms & Conditions
              </Heading>

              <Flex flexDirection="column" gap="8px">
                <Text
                  as="p"
                  margin="0"
                  lineHeight={{ base: '18.75px', lg: '21.28px', xl: '21.28px' }}
                  fontSize="16px"
                  fontWeight="400">
                  These terms and conditions outline the rules and regulations for the use of
                  Wriggles Website, located at www.wriggle.ie. By accessing this website we assume
                  you accept these terms and conditions. Do not continue to use Wriggle if you do
                  not agree to take all of the terms and conditions stated on this page. The
                  following terminology applies to these Terms and Conditions, Privacy Statement and
                  Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you,
                  the person log on this website and compliant to the Companys terms and conditions.
                  “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”,
                  “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to
                  the offer, acceptance and consideration of payment necessary to undertake the
                  process of our assistance to the Client in the most appropriate manner for the
                  express purpose of meeting the Clients needs in respect of provision of the
                  Companys stated services, in accordance with and subject to, prevailing law of
                  Netherlands. Any use of the above terminology or other words in the singular,
                  plural, capitalization and/or he/she or they, are taken as interchangeable and
                  therefore as referring to same.These terms and conditions outline the rules and
                  regulations for the use of Wriggles Website, located at www.wriggle.ie. By
                  accessing this website we assume you accept these terms and conditions. Do not
                  continue to use Wriggle if you do not agree to take all of the terms and
                  conditions stated on this page. The following terminology applies to these Terms
                  and Conditions, Privacy Statement and Disclaimer Notice and all Agreements:
                  “Client”, “You” and “Your” refers to you, the person log on this website and
                  compliant to the Companys terms and conditions. “The Company”, “Ourselves”, “We”,
                  “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both
                  the Client and ourselves. All terms refer to the offer, acceptance and
                  consideration of payment necessary to undertake the process of our assistance to
                  the Client in the most appropriate manner for the express purpose of meeting the
                  Clients needs in respect of provision of the Companys stated services, in
                  accordance with and subject to, prevailing law of Netherlands. Any use of the
                  above terminology or other words in the singular, plural, capitalization and/or
                  he/she or they, are taken as interchangeable and therefore as referring to
                  same.These terms and conditions outline the rules and regulations for the use of
                  Wriggles Website, located at www.wriggle.ie.
                </Text>

                <Text
                  as="p"
                  margin="0"
                  lineHeight={{ base: '18.75px', lg: '21.28px', xl: '21.28px' }}
                  fontSize="16px"
                  fontWeight="400">
                  By accessing this website we assume you accept these terms and conditions. Do not
                  continue to use Wriggle if you do not agree to take all of the terms and
                  conditions stated on this page. The following terminology applies to these Terms
                  and Conditions, Privacy Statement and Disclaimer Notice and all Agreements:
                  “Client”, “You” and “Your” refers to you, the person log on this website and
                  compliant to the Companys terms and conditions. “The Company”, “Ourselves”, “We”,
                  “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both
                  the Client and ourselves. All terms refer to the offer, acceptance and
                  consideration of payment necessary to undertake the process of our assistance to
                  the Client in the most appropriate manner for the express purpose of meeting the
                  Clients needs in respect of provision of the Companys stated services, in
                  accordance with and subject to, prevailing law of Netherlands. Any use of the
                  above terminology or other words in the singular, plural, capitalization and/or
                  he/she or they, are taken as interchangeable and therefore as referring to same.
                </Text>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
