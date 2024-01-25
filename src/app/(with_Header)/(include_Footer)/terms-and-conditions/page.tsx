'use client';
import React, { useCallback, useState } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

const TermsAndConditions = ({ searchParams }: { searchParams: { selected: number } }) => {
  const [selectedTab, setSelectedTab] = useState(+searchParams?.selected || 0);

  const handleTabChange = useCallback((index: number) => {
    setSelectedTab(index);
  }, []);

  return (
    <Container maxW="1200px" p="0">
      <Box
        backgroundColor="#F6FCFF"
        height="255px"
        width="100%"
        padding="10px 16px"
        display={{ base: 'block', sm: 'none' }}>
        <Flex height="235px" alignItems="center" justifyContent="center">
          <Heading fontSize="28px" fontStyle="normal" fontWeight={600} lineHeight="normal">
            Terms & Conditions
          </Heading>
        </Flex>
      </Box>

      <Box m={{ base: '36px 0 36px', lg: '64px 0 148px' }} px={{ base: '16px', xl: '0' }}>
        <Tabs
          display="flex"
          gap="20px"
          id="terms_and_conditions_tabs"
          justifyContent={{ base: 'center', lg: 'space-between' }}
          flexWrap={{ base: 'wrap-reverse', lg: 'nowrap' }}
          index={selectedTab}
          onChange={handleTabChange}>
          <TabList
            flexDirection="column"
            width={{ base: '100%', lg: '388px' }}
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
              NAVIGATION ON THIS SITE
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
              ACCOUNTS
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
              USE OF THE CONTENT
            </Tab>

            <Tab
              textAlign="left"
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
              PROTECTION OF THE SITE CONTENT /IP/
            </Tab>

            <Tab
              textAlign="left"
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
              USE OF PBA.AM PLATFORM AT YOUR OWN RISK
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
              PERSONAL DATA
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
              SUBSCRIPTION
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
              MISCELLANEOUS LEGAL TERMS
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
              RESPONSIBILITY
            </Tab>
            <Tab
              textAlign="left"
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
              GOVERNING LAW AND JURISDICTION ATTRIBUTION
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
              UPDATING THE TERMS
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
              HOW TO CONTACT US
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
              PRIVACY POLICY
            </Tab>
            <Tab
              textAlign="left"
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
              PAYMENTS, CREDITS and REFUND POLICY
            </Tab>
            <Tab
              textAlign="left"
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
              COOKIES POLICY
            </Tab>
          </TabList>

          <TabPanels padding="0">
            <TabPanel padding="0" color="#222" fontStyle="normal">
              <Heading
                fontSize={{ base: '24px', lg: '44px' }}
                lineHeight="normal"
                fontWeight="700"
                textAlign={{ base: 'center', lg: 'start' }}
                margin=" 0 0 16px 0">
                NAVIGATION ON THE SITE
              </Heading>
              <Text margin="0" lineHeight="22px" fontSize="16px" fontWeight="400">
                <Text fontWeight={700} margin=" 0 0 16px 0">
                  1.1 Access to the Site
                </Text>
                <Text>
                  Necessary Hardware And Software to access Internet and this Site are under sole
                  liability of the users. The Company reserves the right, in its absolute
                  discretion, to suspend or terminate access or navigation to all or part of the
                  Site and/or its content and/or the available services without prior notice and
                  without entitling any user to claim any indemnity or compensation.
                  <br /> It is forbidden to modify the software or any element of it or to use a
                  modified version of the software, in order to obtain unauthorized access to the
                  Site.
                </Text>
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  1.2. Links
                </Text>
                <Text>
                  The Site may include links to other websites or other internet sources. As the
                  Company cannot control these websites and external sources, the Company cannot be
                  held responsible for the provision or display of these websites and external
                  sources, and may not be held liable for the content, advertising, products,
                  services or any other material available on or from these websites or external
                  sources. Furthermore, the Company cannot be held responsible for any demonstrated
                  or alleged harm or losses resulting from (directly or indirectly) or in relation
                  to the use of, or the fact of having had confidence in, the content, goods or
                  services available on these websites or external sources.
                </Text>
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  1.3. User Conduct
                </Text>
                Each user warrants:
                <UnorderedList margin="0 0 0 45px">
                  <ListItem>
                    to use the Site for user’s personal and lawful use only, excluding therefore any
                    other commercial use without the prior written consent of the Company,
                  </ListItem>
                  <ListItem>
                    to provide, when relevant, personal data being true, up-to-date and accurate.
                  </ListItem>
                </UnorderedList>
                When using the Site, users must behave responsibly, lawfully, with courtesy and
                respectful towards other users, the Company, its subsidiaries, affiliates and third
                parties.
                <br />
                User must notably refrain from:
                <UnorderedList margin="0 0 0 45px">
                  <ListItem>
                    uploading, displaying, sending by e-mail or by any other mean any file
                    containing viruses, codes, text files, software or similar items which could
                    disrupt, interrupt, destroy, damage or limit functionalities of any software,
                    hardware or telecommunication material,
                  </ListItem>
                  <ListItem>
                    disrupting or interrupting the Site, its servers or networks connected to the
                    Site, or infringing the related requirements, procedures or rules,
                  </ListItem>
                  <ListItem>
                    infringing (including any attempt) the Site functioning, notably by exposing the
                    Site to viruses, creating an overload of consultation of the Site or its
                    servers, sending "spams" or overloading the Site messaging system,
                  </ListItem>
                  <ListItem>
                    consulting privileged or non public information or accessing a server or account
                    for which the user is not expressly granted access to,
                  </ListItem>
                  <ListItem>
                    trying to assess or test the Site vulnerability, breaching security or
                    authentication measures of the Site without the prior written consent of the
                    Company,
                  </ListItem>
                  <ListItem>
                    conducting any illegal activity or any other activity likely to infringe rights
                    of the Company, its subsidiaries, affiliates, providers (including technical
                    providers and contractors), customers and third parties, as well as refrain from
                    encouraging thirds to do so,
                  </ListItem>
                  <ListItem>
                    uploading, displaying, posting, sending by e-mail or by any other mean any
                    unsolicited or non-authorised commercial or promotional content, junk mails,
                    spasm, chains or any other solicitation,
                  </ListItem>
                  <ListItem>
                    uploading, displaying, sending by e-mail or by any other mean any illegal,
                    detrimental, defamatory, offensive, racist, vulgar, obscene, threatening,
                    violent, against decency, infringing third parties rights, chocking or
                    disparaging content or the like,
                  </ListItem>
                </UnorderedList>
                <Text>
                  Each user must comply with any and all applicable regulations, laws and rules
                  related to user's behavior on the Internet and transmission of technical data.
                  <br />
                  When relevant, the Company reserves the right in its absolute discretion to
                  terminate or withdraw any user's access to the Site without notice in case of
                  breach of the user's obligations under these Terms & Conditions and/or ancillary
                  documentation, without prejudice to claim damages to such defaulting user.
                </Text>
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  1.4. User generated content (when applicable)
                </Text>
                <Text>
                  Users are solely liable of any content they may post or upload onto the Site and
                  the consequences of disclosing, broadcasting, forwarding or making available such
                  content. The Company does not adhere or approve any content, opinion, suggestion
                  or notice generated by users and the Company declines any and all responsibility
                  and liability in respect of any such content to the fullest extent permitted by
                  applicable law. <br />
                  However, the Company reserves the right, but not the obligation, to monitor use of
                  the Site and to remove any content which, in its sole discretion, would breach
                  these Terms & Conditions, may be offensive, illegal or otherwise objectionable in
                  any way. <br />
                  User accepts that the Company may freely and peacefully use, at no cost and
                  without any restriction, any content posted onto the Site in order to be displayed
                  on the Site as well as to be displayed, reproduced on any other medium whatsoever,
                  in the entire world, for the promotion and advertising of the Company, its
                  products and services.
                </Text>
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  1.5. Report of inappropriate content
                </Text>
                <Text>
                  Users can report to the Company any inappropriate content by contacting via
                  “Contact” section.
                </Text>
              </Text>
            </TabPanel>

            <TabPanel padding="0" color="#222" fontStyle="normal">
              <Heading
                fontWeight="700"
                fontSize={{ base: '24px', lg: '44px' }}
                lineHeight="normal"
                textAlign={{ base: 'center', lg: 'start' }}
                margin=" 0 0 16px 0">
                ACCOUNTS
              </Heading>
              <Text lineHeight="22px" fontSize="16px" fontWeight="400" margin="0">
                You need an account for most activities on our platform, including to purchase and
                access content or to submit content for publication. When setting up and maintaining
                your account, you must provide and continue to provide accurate and complete
                information, including a valid email address. You have complete responsibility for
                your account and everything that happens on your account, including for any harm or
                damage (to us or anyone else) caused by someone using your account without your
                permission. This means you need to be careful with your password.
                <br />
                You may not transfer your account to someone else or use someone else's account. If
                you contact us to request access to an account, we will not grant you such access
                unless you can provide us with the information that we need to prove you are the
                owner of that account. In the event of the death of a user, the account of that user
                will be closed. You may not share your account login credentials with anyone else.
                You are responsible for what happens with your account and PBA.am will not intervene
                in disputes between students or trainers who have shared account login credentials.
                You must notify us immediately upon learning that someone else may be using your
                account without your permission (or if you suspect any other breach of security) by
                contacting our Support Team. We may request some information from you to confirm
                that you are indeed the owner of your account.
                <br /> Students and trainers must be at least 18 years of age to create an account
                on PBA.am and use the Services. If you are younger than 18 but above the required
                age for consent to use online services where you live (for example, 13 in the US or
                16 in Ireland), you may not set up an account, but we encourage you to invite a
                parent or guardian to open an account and help you access content that is
                appropriate for you. If you are below this age of consent to use online services,
                you may not create a PBA.am account. If we discover that you have created an account
                that violates these rules, we will terminate your account. Under our Trainer Terms,
                you may be requested to verify your identity before you are authorized to submit
                content for publication on PBA.am. <br />
                Persona is NOT responsible for submission of not right information on the platform
                users while creating account. <br />
                You can terminate your account at any time. Check our Privacy Policy to see what
                happens when you crate or terminate your account.
              </Text>
            </TabPanel>

            <TabPanel padding="0" color="#222" fontStyle="normal">
              <Heading
                fontWeight="700"
                fontSize={{ base: '24px', lg: '44px' }}
                lineHeight="normal"
                textAlign={{ base: 'center', lg: 'start' }}
                margin=" 0 0 16px 0">
                USE OF THE CONTENT
              </Heading>

              <Text lineHeight="22px" fontSize="16px" fontWeight="400">
                Under our Instructor Terms, when instructors publish content on Udemy, they grant
                Udemy a license to offer a license to the content to students. This means that we
                have the right to sublicense the content to enrolled students. As a student, when
                you enroll in a course or other content, whether it's free or paid content, you are
                getting a license from Udemy to view the content via the Udemy platform and
                Services, and Udemy is the licensor of record. Content is licensed, and not sold, to
                you. This license does not give you any right to resell the content in any manner
                (including by sharing account information with a purchaser or illegally downloading
                the content and sharing it on torrent sites).
                <br /> In legal, more complete terms, Udemy grants you (as a student) a limited,
                non-exclusive, non-transferable license to access and view the content for which you
                have paid all required fees, solely for your personal, non-commercial, educational
                purposes through the Services, in accordance with these Terms and any conditions or
                restrictions associated with the particular content or feature of our Services. All
                other uses are expressly prohibited. You may not reproduce, redistribute, transmit,
                assign, sell, broadcast, rent, share, lend, modify, adapt, edit, create derivative
                works of, sublicense, or otherwise transfer or use any content unless we give you
                explicit permission to do so in a written agreement signed by a Udemy authorized
                representative. This also applies to content you can access via any of our APIs.
                <br /> We generally give a lifetime access license to our students when they enroll
                in a course or other content. However, we reserve the right to revoke any license to
                access and use any content at any point in time in the event where we decide or are
                obligated to disable access to the content due to legal or policy reasons, for
                example, if the course or other content you enrolled in is the object of a copyright
                complaint, or if we determine it violates our Trust & Safety Guidelines. This
                lifetime access license does not apply to enrollments via Subscription Plans or to
                add-on features and services associated with the course or other content you enroll
                in. For example, instructors may decide at any time to no longer provide teaching
                assistance or Q&A services in association with the content. To be clear, the
                lifetime access is to the course content but not to the instructor.
                <br /> Instructors may not grant licenses to their content to students directly, and
                any such direct license shall be null and void and a violation of these Terms.
              </Text>
            </TabPanel>

            <TabPanel padding="0" color="#222" fontStyle="normal">
              <Heading
                fontWeight="700"
                fontSize={{ base: '24px', lg: '44px' }}
                lineHeight="normal"
                textAlign={{ base: 'center', lg: 'start' }}
                margin=" 0 0 16px 0">
                PROTECTION OF THE SITE CONTENT /IP/
              </Heading>
              <Text lineHeight="22px" fontSize="16px" fontWeight="400">
                The Site and each of its elements (including all text, images, web pages, sound,
                video, designs, trademarks, logos and other material on or accessible via the Site)
                as well as any software required to be used in relation to the former, data bases
                and newsletters (the "Content"), may contain confidential information that is
                protected by intellectual property rights or other legislations.
                <br />
                Unless otherwise expressly stated on the Site, the Company exclusively owns all
                intellectual property rights related to the Content and the Company does not grant
                any user with any license or other right other than a right to view the Site.
                <br />
                The reproduction of the Content (in whole or in part) of the Site is authorized for
                the sole purpose of information for a personal and private use. Any reproduction or
                use or other exploitation of Content for any other purposes (whatever the manner or
                the kind) is expressly prohibited.
                <br />
                Users must not copy, modify, create derivative pieces of work, assemble, decompile,
                assign, sub-licence or transfer in any way any content of the Site or any material
                (including software) related to the Site.
                <br />
                Among other things, you must not:
                <UnorderedList margin="0 0 0 45px">
                  <ListItem>
                    in any way reproduce, copy, modify, create derive works, build, reconstruct,
                    distribute, transmit, show, publicly display, publish, sell, ascribe to
                    themselves or anyone else, sublicense, make available to third parties and sell
                    Protected Elements, whether in whole or in part;
                  </ListItem>
                  <ListItem>
                    fully or partially modify or alter Protected Elements in order, for example, to
                    gain unauthorized access to the Site and connect to it by any means other than
                    through the interface connections provided for this purpose on the Company Site.
                  </ListItem>
                  <ListItem>
                    All trademarks used on this Site as well as associated logos, forms, labels and
                    other intellectual property relating to this website belongs to “Persona Group”
                    LLC (hereafter: Persona). “Persona” trademarks should not be used in connection
                    with goods or services not associated with them, as well as in ways which may
                    lead to misunderstandings or disparage and discredit “Persona”. All other
                    trademarks belong to their respective owners, who may or may not be accountable
                    to, associated with or financed by “Persona”.
                  </ListItem>
                  <ListItem>
                    You acknowledge and agree that we have no responsibility for the accuracy or
                    availability of information provided on websites which you can go to from links
                    on the Site ("Linked Sites").{' '}
                  </ListItem>
                </UnorderedList>
              </Text>
            </TabPanel>

            <TabPanel padding="0" color="#222" fontStyle="normal">
              <Heading
                fontWeight="700"
                fontSize={{ base: '24px', lg: '44px' }}
                lineHeight="normal"
                textAlign={{ base: 'center', lg: 'start' }}
                margin=" 0 0 16px 0">
                USE OF PBA.AM PLATFORM AT YOUR OWN RISK
              </Heading>
              <Text lineHeight="22px" fontSize="16px" fontWeight="400">
                Our platform do not review or edit the content that has been submitted by the
                trainers who don't have a signed agreement with our Company, and we are not in a
                position to determine the legality of such content. We do not exercise any editorial
                control over the content that is available on the platform and, as such, do not
                guarantee in any manner the reliability, validity, accuracy, or truthfulness of the
                content. If you access content, you rely on any information provided by a trainer at
                your own risk.
                <br />
                By using the Platform, you may be exposed to content that you consider offensive,
                indecent, or objectionable. PBA.am has no responsibility to keep such content from
                you and no liability for your access or enrollment in any course or other content,
                to the extent permissible under applicable law. This also applies to any content
                relating to health, wellness, and physical exercise. You acknowledge the inherent
                risks and dangers in the strenuous nature of these types of content, and by
                accessing such content you choose to assume those risks voluntarily, including risk
                of illness, bodily injury, disability, or death. You assume full responsibility for
                the choices you make before, during, and after your access to the content.
                <br />
                When you interact directly with a student or a trainer, you must be careful about
                the types of personal information that you share. While we restrict the types of
                information trainers may request from students, we do not control what students and
                trainers do with the information they obtain from other users on the platform. You
                should not share your email or other personal information about you for your safety.
                <br />
                We do not hire or employ all trainers nor are we responsible or liable for any
                interactions involved between trainers and students. We are not liable for disputes,
                claims, losses, injuries, or damage of any kind that might arise out of or relate to
                the conduct of trainers or students.
                <br />
                When you use our Platform, you will find links to other websites that we don't own
                or control. We are not responsible for the content or any other aspect of these
                third-party sites, including their collection of information about you. You should
                also read their terms and conditions and privacy policies.
              </Text>
            </TabPanel>

            <TabPanel padding="0" color="#222" fontStyle="normal">
              <Heading
                fontWeight="700"
                fontSize={{ base: '24px', lg: '44px' }}
                lineHeight="normal"
                textAlign={{ base: 'center', lg: 'start' }}
                margin=" 0 0 16px 0">
                PERSONAL DATA
              </Heading>
              <Text lineHeight="22px" fontSize="16px" fontWeight="400">
                The Company ensures the protection of personal information disclosed by users of the
                Site.
                <br />
                The Company invites users to consult of Private Policy which indicates the
                provisions implemented to guarantee the treatment of personal data. Collection,
                processing, use, transmission, keeping and protection of users' personal information
                are governed by the Privacy & Cookies Policy.
              </Text>
            </TabPanel>

            <TabPanel padding="0" color="#222" fontStyle="normal">
              <Heading
                fontWeight="700"
                fontSize={{ base: '24px', lg: '44px' }}
                lineHeight="normal"
                textAlign={{ base: 'center', lg: 'start' }}
                margin=" 0 0 16px 0">
                SUBSCRIPTION
              </Heading>

              <Text lineHeight="22px" fontSize="16px" fontWeight="400">
                <Text>
                  This section covers additional terms that apply to your use of our
                  subscription-based collections as a student (“Subscription Plans”). By using a
                  Subscription Plan, you agree to the additional terms in this section.
                </Text>
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  7.1 Subscription Plans
                </Text>
                <Text>
                  During your subscription to a Subscription Plan, you get a limited, non-exclusive,
                  non-transferable license from us to access and view the content included in that
                  Subscription Plan via the Services. With the exception of the lifetime access
                  license grant, the terms included in the “Content Enrollment and Access” section
                  above apply to enrollments via Subscription Plans.
                  <br />
                  Your Subscription Plan may also include access to interactive environments, such
                  as workspaces, call with the Trainer (“Interactive Sessions”). <br />
                  The subscription that you purchase or renew determines the scope, features, and
                  price of your access to a Subscription Plan. You may not transfer, assign, or
                  share your subscription with anyone else.
                  <br />/ We reserve the right to revoke any license to use the content in our
                  Subscription Plans for legal or policy reasons at any time and at our sole
                  discretion, such as if we no longer have the right to offer the content through a
                  Subscription Plan. Additional information on our right to revoke is included in
                  the “Content Enrollment and Access” section.
                </Text>
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  7.2 Account Management
                </Text>
                <Text>
                  You may cancel your subscription by following the steps outlined on our Payments
                  Page. If you cancel your subscription to a Subscription Plan, your access to that
                  Subscription Plan will automatically end on the last day of your billing period.
                  On cancellation, you will not be entitled to receive a refund or credit of any
                  fees already paid for your subscription, unless otherwise required by applicable
                  law. For clarity, cancellation of a subscription does not terminate your PBA.am
                  account /Profile/.
                </Text>
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  7.3 Free Trials & Renewals
                </Text>
                <Text>
                  Your subscription may start with a free trial. The duration of the free trial
                  period of your subscription will be specified during sign-up. PBA.am determines
                  free trial eligibility at our sole discretion and may limit access, eligibility,
                  or duration. We reserve the right to terminate the free trial and suspend your
                  subscription if we determine that you aren't eligible.
                  <br />
                  We will charge the subscription fee for your next billing cycle at the end of the
                  free trial period. Your subscription will automatically renew according to your
                  subscription settings (e.g., monthly or annually) unless you cancel your
                  subscription prior to the end of the free trial period. For more information on
                  how to view applicable fees and dates of your free trial period, visit our
                  Payments Page.
                </Text>
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  7.4 Payments and Billing
                </Text>
                <Text>
                  The subscription fee will be listed at the time of your purchase. You can visit
                  our Payments Page to learn more about where to find the fees and dates applicable
                  to your subscription. We may also be required to add taxes to your subscription
                  fee as described in the “Payments, Credits, and Refunds” section above. Payments
                  are non-refundable and there are no refunds or credits for partially used periods,
                  unless otherwise required by applicable law. Depending on where you are located,
                  you may qualify for a refund. See our Refund Policy for Subscription Plans for
                  additional information.
                  <br />
                  To subscribe to a Subscription Plan, you must provide a payment method. By
                  subscribing to a Subscription Plan and providing your billing information during
                  checkout, you grant us and our payment service providers the right to process
                  payment for the then-applicable fees via the payment method we have on record for
                  you. At the end of each subscription term, we will automatically renew your
                  subscription for the same length of term and process your payment method for
                  payment of the then-applicable fees.
                  <br />
                  In the event that we update your payment method using information provided by our
                  payment service providers (as described in the “Payments, Credits, and Refunds”
                  section above), you authorize us to continue to charge the then-applicable fees to
                  your updated payment method.
                  <br />
                  If we are unable to process payment through the payment method we have on file for
                  you, or if you file a chargeback disputing charges made to your payment method and
                  the chargeback is granted, we may suspend or terminate your subscription.
                  <br />
                  We reserve the right to change our Subscription Plans or adjust pricing for our
                  Services at our sole discretion. Any price changes or changes to your subscription
                  will take effect following notice to you, except as otherwise required by
                  applicable law.
                </Text>
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  7.5 Interactive Session Restrictions
                </Text>
                <Text>
                  You may not do any of the following while accessing or using the Interactive
                  Sessions:
                  <br />
                  use the Interactive Sessions for any purpose other than to perform the activities
                  as instructed by PBA.am's labs;
                  <br />
                  provide web, database, or forum access, or engage in cryptocurrency mining, on or
                  through the Interactive Sessions;
                  <br />
                  exceed the usage limitations outlined on by your Plan;
                  <br />
                  access or use the Interactive Sessions in any commercial production environment;
                  <br />
                  take any action in the Interactive Sessions that results in a disruption or
                  interference of our Services or the stability of our infrastructure; <br />
                  or use any data or information other than simulated, anonymous, non-personal,
                  non-live data or information when accessing or using the Interactive Sessions.
                </Text>
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  7.6 Subscription Disclaimers
                </Text>
                <Text>
                  We make no guarantees as to the availability of any specific content in any
                  Subscription Plan or as to any minimum amount of content in any Subscription Plan.
                  At any point in the future, we reserve the right to offer or cease to offer
                  additional features to any Subscription Plan, or to otherwise modify or terminate
                  a Subscription Plan at our sole discretion. We have no responsibility to preserve
                  or store the content inputted by you in connection with your use of any
                  Subscription Plan. These disclaimers are in addition to those listed in the
                  “Disclaimers” section below.
                </Text>
              </Text>
            </TabPanel>

            <TabPanel padding="0" color="#222" fontStyle="normal">
              <Heading
                fontWeight="700"
                fontSize={{ base: '24px', lg: '44px' }}
                lineHeight="normal"
                textAlign={{ base: 'center', lg: 'start' }}
                margin=" 0 0 16px 0">
                MISCELLANEOUS LEGAL TERMS
              </Heading>
              <Text lineHeight="22px" fontSize="16px" fontWeight="400">
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  8.1 Binding Agreement
                </Text>
                <Text>
                  You agree that by registering, accessing, or using our Platform, you are agreeing
                  to enter into a legally binding contract with Persona Group LLC. If you do not
                  agree to these Terms, do not register, access, or otherwise use any of our
                  Services.
                  <br />
                  If you are an trainer accepting these Terms and using our Services on behalf of a
                  company, organization, government, or other legal entity, you represent and
                  warrant that you are authorized to do so.
                  <br />
                  Any version of these Terms in a language other than English is provided for
                  convenience and you understand and agree that the English language will control if
                  there is any conflict.
                  <br />
                  These Terms (including any agreements and policies linked from these Terms)
                  constitute the entire agreement between you and us (which include, if you are an
                  instructor, the Trainer Terms and the Payments Policy).
                  <br />
                  If any part of these Terms is found to be invalid or unenforceable by applicable
                  law, then that provision will be deemed superseded by a valid, enforceable
                  provision that most closely matches the intent of the original provision and the
                  remainder of these Terms will continue in effect.
                  <br />
                  Even if we are delayed in exercising our rights or fail to exercise a right in one
                  case, it doesn't mean we waive our rights under these Terms, and we may decide to
                  enforce them in the future. If we decide to waive any of our rights in a
                  particular instance, it doesn't mean we waive our rights generally or in the
                  future.
                </Text>
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  8.2 Disclaimers
                </Text>
                <Text>
                  It may happen that our platform is down, either for planned maintenance or because
                  something goes down with the site. It may happen that one of our instructors is
                  making misleading statements in their content. It may also happen that we
                  encounter security issues. These are just examples. You accept that you will not
                  have any recourse against us in any of these types of cases where things don't
                  work out right. In legal, more complete language, the Services and their content
                  are provided on an “as is” and “as available” basis. We (and our affiliates,
                  suppliers, partners, and agents) make no representations or warranties about the
                  suitability, reliability, availability, timeliness, security, lack of errors, or
                  accuracy of the Services or their content, and expressly disclaim any warranties
                  or conditions (express or implied), including implied warranties of
                  merchantability, fitness for a particular purpose, title, and non-infringement. We
                  (and our affiliates, suppliers, partners, and agents) make no warranty that you
                  will obtain specific results from use of the Services. Your use of the Services
                  (including any content) is entirely at your own risk. Some jurisdictions don't
                  allow the exclusion of implied warranties, so some of the above exclusions may not
                  apply to you.
                  <br />
                  We may decide to cease making available certain features of the Services at any
                  time and for any reason. Under no circumstances will the Company or its
                  affiliates, suppliers, partners or agents be held liable for any damages due to
                  such interruptions or lack of availability of such features.
                  <br />
                  We are not responsible for delay or failure of our performance of any of the
                  Services caused by events beyond our reasonable control, like an act of war,
                  hostility, or sabotage; natural disaster; electrical, internet, or
                  telecommunication outage; or government restrictions.
                </Text>
              </Text>
            </TabPanel>

            <TabPanel padding="0" color="#222" fontStyle="normal">
              <Heading
                fontWeight="700"
                fontSize={{ base: '24px', lg: '44px' }}
                lineHeight="normal"
                textAlign={{ base: 'center', lg: 'start' }}
                margin=" 0 0 16px 0">
                RESPONSIBILITY
              </Heading>
              <Text lineHeight="22px" fontSize="16px" fontWeight="400">
                <Text>
                  The Company endeavors to ensure as far as possible, that the information provided
                  on this Site is correct and up-to-date. However, the Company cannot guarantee the
                  correctness, accuracy or exhaustiveness of the information provided on the Site.
                  <br />
                  The Company allows free access to the Site and declines all responsibility and may
                  not be held liable in any case:
                </Text>
                <UnorderedList margin="0 0 0 45px">
                  <ListItem>
                    for any interruption in provision of the Site or services accessible via the
                    Site,
                  </ListItem>
                  <ListItem>
                    for the occurrence of bugs, viruses and similar technical issues adversely
                    affecting your ability to access this Site,
                  </ListItem>
                  <ListItem>
                    for any inaccuracy, isolated and unforeseen error or omission relating to
                    information or Content available on the Site,
                  </ListItem>
                  <ListItem>
                    for any damage resulting from a fraudulent intrusion by a third party,
                  </ListItem>
                  <ListItem>
                    and more generally, for any direct or indirect or consequential harm, loss or
                    damage, whatever the cause, origin, nature or
                  </ListItem>
                  <ListItem>
                    consequences, which may occur as a result of any type of access to the Site or
                    any inability to access it or the credit given to any piece of information
                    coming directly or indirectly from the latter.
                  </ListItem>
                  <ListItem>
                    For disadvantages due to technical errors, including non-receipt of orders.
                  </ListItem>
                </UnorderedList>
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  9.1. Restrictions on Use
                </Text>
                <Text>
                  Access to the Site is provided on a temporary basis, and we reserve the right to
                  close or change the Site without notice. We will not be liable if for some reason
                  the Site becomes unavailable for any period. It is forbidden to modify, copy,
                  reproduce, distribute, republish, upload, post or transmit any material from this
                  Site without the prior written consent of “Persona”. “Persona” owns all
                  intellectual property rights to the Site and any materials posted on it. All
                  rights reserved. The use of this Site or access to it does not transfer to you any
                  rights, including intellectual property rights; all rights, powers and revenues
                  associated with the Site remain the property of “Persona”. Materials are posted on
                  the Site for exclusively lawful purposes.
                </Text>
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  9.2. Limitation of Liability
                </Text>
                <Text>
                  To the extent defined by law, “Persona” hereby disclaims any liability for any
                  loss (including, without limitation, direct, indirect or consequential damages or
                  loss, lost profit, loss of revenue, loss of goodwill, suspension of business, loss
                  of data or information, as well as penalties, regardless of whether “Persona” was
                  expressly informed of the possibility of such loss or damage), harm or damage of
                  any kind as a result of illegal actions, breach of contract, or other reasons
                  resulting from the use of the Site, access to it or the inability to use the Site
                  or any materials posted on it or on linked websites, or also caused by the
                  failure, error, interruption, defect or delay in operation of the Site by a
                  computer virus or loss of connection. Materials posted on the Site may contain
                  inaccuracies and typographical errors. Materials are posted on the Site in their
                  original state and without any guarantee, whether express or implied. “Persona”,
                  to the fullest extent permitted by law, disclaims any liability for negligence and
                  gives no promises or warranties, express or implied (whether by law, case law,
                  trade customs, etc.), including, without limitation, warranties of
                  merchantability, fitness for a particular purpose or non-infringement of any
                  rights. “Persona” does not guarantee and does not promise uninterrupted or
                  error-free operation of the Site, the correctness or reliability of the content,
                  or the absence of viruses or other harmful components on the Site or the server.
                  “Persona” does not assume any liability for the use of the information contained
                  on the Site or its credibility in terms of accuracy, reliability or other
                  characteristics. All costs of necessary maintenance, repair or correction rest
                  with you (not Company).
                </Text>
              </Text>
            </TabPanel>

            <TabPanel padding="0" color="#222" fontStyle="normal">
              <Heading
                fontWeight="700"
                fontSize={{ base: '24px', lg: '44px' }}
                lineHeight="normal"
                textAlign={{ base: 'center', lg: 'start' }}
                margin=" 0 0 16px 0">
                GOVERNING LAW AND JURISDICTION ATTRIBUTION
              </Heading>
              <Text lineHeight="22px" fontSize="16px" fontWeight="400">
                <Text fontWeight={700} margin=" 0 0 16px 0">
                  10.1 Legislation
                </Text>
                <Text>
                  These Terms & Conditions are governed by Armenian law.
                  <br />
                  Unless imperative legal provision to the contrary, users and the Company hereby
                  irrevocably submit to the exclusive jurisdiction of the competent courts of
                  Yerevan, Armenia any claim or matter arising under or in connection with the
                  Content or use of the Site, including in case of guarantee, plurality of
                  defendants or summary proceedings.
                  <br />
                  “Persona”, which controls and manages this website from Armenia, does not
                  guarantee that these materials are appropriate or available for use in other
                  countries.
                  <br />
                  No action, regardless of form, arising out of or relating to this Agreement may be
                  brought by either party more than one year after the cause of action has accrued,
                  except where this limitation cannot be imposed by law.
                  <br />
                  Any notice or other communication to be given hereunder will be in writing and
                  given by registered or certified mail return receipt requested, or email (by us to
                  the email associated with your account or by you to one of our official emails).
                </Text>
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  10.2 Mandatory Informal Dispute Resolution Process
                </Text>
                <Text>
                  Before filing a claim against each other, you and Persona must first participate
                  in the informal dispute resolution process described in this section.
                  <br />
                  The claiming party shall send to the other a short, written statement (“Claim
                  Statement”) with their full name, mailing address, and email address explaining:
                  (a) the nature and details of the Dispute; and (b) a proposal for resolving it
                  (including any money being claimed and how that amount was calculated). Sending a
                  Claim Statement tolls the running of any applicable statute of limitations for a
                  60-day period beginning on the date the Claim Statement is received. You should
                  send your Claim Statement to Persona by email to claims@pba.am. Persona will send
                  Claim Statements and respond to you at the email address associated with your
                  PBA.am account, unless you request otherwise.
                  <br />
                  When either of us receives a Claim Statement, the parties will attempt in good
                  faith to resolve it informally. If we're unable to resolve it within 60 days from
                  receipt, then we each have the right to initiate a formal claim against the other
                  in small claims court or individual arbitration, subject to the terms of this
                  Dispute Resolution Agreement.
                  <br />
                  Failure to complete this process is a material breach of the Terms, and no court
                  or arbitrator shall have jurisdiction to hear or resolve any Disputes between you
                  and Persona.
                </Text>
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  10.3 Small Claims
                </Text>
                <Text>
                  Disputes raised but not resolved through the mandatory informal dispute resolution
                  process can be brought in small claims court in: (a) Yerevan, Armenia; or (b)
                  another place we both agree on. We each waive the right to bring any Disputes
                  between us, in courts other than small claims court, including courts of general
                  or special jurisdiction.
                </Text>
              </Text>
            </TabPanel>

            <TabPanel padding="0" color="#222" fontStyle="normal">
              <Heading
                fontWeight="700"
                fontSize={{ base: '24px', lg: '44px' }}
                lineHeight="normal"
                textAlign={{ base: 'center', lg: 'start' }}
                margin=" 0 0 16px 0">
                UPDATING THE TERMS
              </Heading>
              <Text lineHeight="22px" fontSize="16px" fontWeight="400">
                From time to time, we may update these Terms to clarify our practices or to reflect
                new or different practices (such as when we add new features), and PERSONA reserves
                the right in its sole discretion to modify and/or make changes to these Terms at any
                time. If we make any material change, we will notify you using prominent means, such
                as by email notice sent to the email address specified in your account or by posting
                a notice through our Services. Modifications will become effective on the day they
                are posted unless stated otherwise.
                <br />
                Your continued use of our Platform after changes become effective shall mean that
                you accept those changes. Any revised Terms shall supersede all previous Terms.
              </Text>
            </TabPanel>

            <TabPanel padding="0" color="#222" fontStyle="normal">
              <Heading
                fontWeight="700"
                fontSize={{ base: '24px', lg: '44px' }}
                lineHeight="normal"
                textAlign={{ base: 'center', lg: 'start' }}
                margin=" 0 0 16px 0">
                HOW TO CONTACT US
              </Heading>
              <Text lineHeight="22px" fontSize="16px" fontWeight="400">
                The best way to get in touch with us is to contact our Support Team via email or
                Phone in the Contact section. We'd love to hear your questions, concerns, and
                feedback about our Platform.
                <br />
                Learn with Persona, Work WorldWide!
              </Text>
            </TabPanel>

            <TabPanel padding="0" color="#222" fontStyle="normal">
              <Heading
                fontWeight="700"
                fontSize={{ base: '24px', lg: '44px' }}
                lineHeight="normal"
                textAlign={{ base: 'center', lg: 'start' }}
                margin=" 0 0 16px 0">
                Privacy policy
              </Heading>
              <Text lineHeight="22px" fontSize="16px" fontWeight="400" margin="0">
                We, the PBA team, respect your privacy and recognize your need for appropriate
                protection and management of your personal data that you have directly and
                voluntarily entrusted us. We have developed this Privacy Policy in order to protect
                your personal data in accordance with the National Laws and International
                Conventions.
                <br />
                Personal data refers to all types of personal information, sensitive personal
                information and privileged information. Personal information refers to “any
                information, whether recorded in a material from or not, from which the identity of
                an individual is apparent or can be reasonably and directly ascertained by the
                entity holding the information, or when put together with other information would
                directly and certainly identify an individual”. This Privacy Policy tells you how we
                process (meaning, how we collect, use, share, and retain) and protect your personal
                data. It also tells you what steps you can take if you want us to change how we use
                your personal data, or if you want us to stop using your personal data.
                <Text fontWeight={700} margin=" 16px 0 8px 0">
                  1. What Personal Data do we gather about you and how do we collect it?
                </Text>
                We collect information from and about you as described in the following categories:
                <br />
                <Text as="span" fontWeight={700}>
                  Contact information.
                </Text>
                This includes your name and street address. It also includes your phone number and
                email address.
                <br />
                <Text as="span" fontWeight={700}>
                  Feedback information.{' '}
                </Text>
                This includes any information you voluntarily share with us about your experience
                with our products or services.
                <br />
                <Text as="span" fontWeight={700}>
                  Demographic information.{' '}
                </Text>
                We may collect information like your gender, age, or birth date. We may also collect
                your zip code and location.
                <br />
                <Text as="span" fontWeight={700}>
                  Employer information.{' '}
                </Text>
                If you register on one of our sites, we may collect the name of your employer and
                job title. We may also collect your work email and work phone number.
                <br />
                <Text as="span" fontWeight={700}>
                  Site Usage information.{' '}
                </Text>
                If you use our website, we may collect information about the browser you are using.
                We may look at what site you came from, or what site you visit when you leave us. We
                may collect information about how long you stay on the site and the content you
                view. We may collect IP addresses. We may also collect device identifiers. This
                might include your operating system.
                <br /> We use information as disclosed and described here.
                <Text fontWeight={700} margin=" 16px 0 8px 0">
                  Why do we collect your personal data?
                </Text>
                To enable us to comply with our corporate policies with respect to our customers, as
                well as with regulatory requirements being observed Persona Group LLC, it is
                important that PBA collects, uses, stores and retains your personal data when it is
                reasonable and necessary for a declared and specific purpose.
                <br /> In general, we are using your data for any of the following purposes:
                <UnorderedList margin="0 0 0 45px">
                  <ListItem>
                    To provide information about our products and services which may be of interest
                    to you;
                  </ListItem>
                  <ListItem>
                    To perform functions necessary to deliver the services, goods and other products
                    offered by the PBA;
                  </ListItem>
                  <ListItem>
                    To conduct research and analysis (through surveys or polls) in order to improve
                    customer experience/satisfaction;
                  </ListItem>
                  <ListItem>
                    To respond to specific complaints, enquiries, requests or manage future
                    interactive user function it may be necessary to ask for personal information;
                  </ListItem>
                  <ListItem>
                    To provide customer care activities, monitor our quality and security, and
                    provide services timely and efficiently;
                  </ListItem>
                  <ListItem>To generate statistical insights; </ListItem>
                  <ListItem>
                    To comply with legal and regulatory requirements or obligations; and,
                  </ListItem>
                  <ListItem>
                    To perform such other processing or disclosure that may be required under law or
                    regulations.
                  </ListItem>
                </UnorderedList>
                Other uses by nature of our transactions
                <br />
                In addition to the general uses mentioned above, we may use your personal
                information to process your transactions with us, in any of the following
                situations:
                <Text margin="0 0 0 20px">
                  A. When you want to become a part/student/trainer of PBA:
                </Text>
                <UnorderedList margin="0 0 0 65px">
                  <ListItem>
                    To document the commencement of your employment with Persona Group LLC;
                  </ListItem>
                  <ListItem>
                    To comply with our obligations under law and as required by Government Agencies;
                  </ListItem>
                  <ListItem>
                    To inform and consider you for future job opportunities that may be of interest
                    to you;
                  </ListItem>
                  <ListItem>
                    To provide services to clients for which you are involved or endorsed as team
                    member/practitioner;
                  </ListItem>
                  <ListItem>To engage independent contractors for the company;</ListItem>
                  <ListItem>
                    For information processing such as payroll, benefits application, and tax
                    processing of the company's Finance and Accounting;
                  </ListItem>
                  <ListItem>For enlistment of stockholder</ListItem>
                  <ListItem>
                    For performance evaluation and career development of the employees including
                    training and compliance monitoring;
                  </ListItem>
                  <ListItem>For demographics and data analytics; and,</ListItem>
                  <ListItem>
                    For marketing and sales initiatives such as PBA publications, events, and
                    business programs and projects.
                  </ListItem>
                </UnorderedList>
                <Text margin="0 0 0 20px">
                  B. When you are a participant in the marketing initiatives of PBA:
                </Text>
                <UnorderedList margin="0 0 0 65px">
                  <ListItem>
                    To notify and update you (through call, text or email) about our complimentary,
                    commercial and promotional advertisements, loyalty and rewards offers, exclusive
                    invites, discounts, surveys, and other direct marketing that we deemed relevant
                    and beneficial to you based on your preference and interest initially provided
                    to us or made aware of, with which you can opt-out anytime should you prefer not
                    to receive these notifications;
                  </ListItem>
                  <ListItem>
                    During events, such as product launching, sponsorships and activations, we may
                    obtain your personal information or take a picture of attendees which may be
                    used for documentation and reporting for internal purposes. Also, we may use
                    these pictures for our promotional activities and advertisements in social media
                    pages and websites. We assure you that we treat all of our customers'
                    information confidential and we will prevent any unauthorized disclosure of it
                    by our employees or any third party; and,
                  </ListItem>
                  <ListItem>
                    To implement various marketing initiatives to promote our products and to
                    provide incentives to our loyal customers.
                  </ListItem>
                </UnorderedList>
                <Text margin="0 0 0 20px">
                  C. When you become an investor of “Persona Group” LLC:
                </Text>
                <UnorderedList margin="0 0 0 65px">
                  <ListItem>
                    To generate shareholders information in the preparation of financial reports as
                    mandated by the law; and
                  </ListItem>
                  <ListItem>
                    For computation of payout of company's profit to shareholder during dividend
                    declaration.
                  </ListItem>
                </UnorderedList>
                <Text fontWeight={700} margin=" 16px 0 8px 0">
                  What type of personal data we collect?
                </Text>
                The common type of data collected by ”Persona Group” LLC from you, generally
                includes the following:
                <UnorderedList margin="0 0 0 45px">
                  <ListItem>
                    Basic personal information such as full name, nickname, home addresses/billing
                    address/shipping address, e-mail address, employment information, telephone,
                    other personal contact numbers, username and password;
                  </ListItem>
                  <ListItem>
                    Sensitive personal information such as age, nationality, marital status, gender,
                    health, education and government issued identification document which includes,
                    but not limited to identity (ID) cards, licenses, social security number;
                  </ListItem>
                  <ListItem>
                    Employment record such as educational background, employment history,
                    certifications, trainings attended, resume and income information of your
                    previous jobs; and
                  </ListItem>
                  <ListItem>
                    Financial details such as credit history, bank account, credit card, and debit
                    card information you have provided as a result of our transaction.
                  </ListItem>
                </UnorderedList>
                Please note that you are responsible for ensuring that all such personal data you
                submit to ”Persona Group” LLC is accurate, complete and up-to-date.
                <Text fontWeight={700} margin=" 16px 0 8px 0">
                  How we collect, acquire or generate your data?
                </Text>
                We collect data when you:
                <UnorderedList margin="0 0 0 45px">
                  <ListItem>Open your user /registering as a Student or Trainer/;</ListItem>
                  <ListItem>Fill-out our forms and submit necessary documents;</ListItem>
                  <ListItem>
                    Submit information through any form on our digital platforms or contact us
                    through any of our social media accounts;
                  </ListItem>
                  <ListItem>Purchase or avail of any of our products and promos;</ListItem>
                  <ListItem>
                    Respond to surveys, promotions, and other marketing and sales initiatives;
                  </ListItem>
                  <ListItem>
                    Provide personal information in relation to inquiries, requests, and complaints;
                  </ListItem>
                  <ListItem>Subscribe to our newsletter by indicating your email address;</ListItem>
                  <ListItem>
                    Disclose your personal information through phone calls, emails, SMSs or verbal
                    communication with our authorized representatives; and,
                  </ListItem>
                  <ListItem>
                    When you transact with an investment broker and/or with our accredited stock
                    transfer agent.
                  </ListItem>
                </UnorderedList>
                <Text fontWeight={700} margin=" 16px 0 8px 0">
                  Is ”Persona Group” LLC using web analytics?
                </Text>
                Our website may use cookies. Thus, we do not retain any information based from your
                visits on our website.
                <Text fontWeight={700} margin=" 16px 0 8px 0">
                  What about the links to third-party websites?
                </Text>
                We do not provide any personal data to third party websites or advertisers, and
                therefore, we will not accept responsibility for their privacy practices. PBA's
                Privacy Policy does not apply to such other sites or to the use that those entities
                make of your information. ”Persona Group” LLC has no control over the content
                displayed on such sites, nor over the measures, if any, that are taken by such sites
                to protect the privacy of your information.
                <Text fontWeight={700} margin=" 16px 0 8px 0">
                  Who we share your personal data with?
                </Text>
                As a general rule, we do not share your data to third party except in limited
                circumstances as noted below:
                <br />
                By giving your consent, you authorize ”Persona Group” LLC to disclose your personal
                data to accredited/affiliated third parties or independent/non-affiliated third
                parties, whether local or foreign in any of the following circumstances:
                <UnorderedList margin="0 0 0 45px">
                  <ListItem>
                    As necessary for the proper execution of processes related to the declared
                    purposes in this Privacy Policy.
                  </ListItem>
                  <ListItem>
                    The use or disclosure is reasonably necessary, required or authorized by or
                    under law (such as for criminal investigation, as requested by court of law).
                  </ListItem>
                </UnorderedList>
                This means we might provide your personal data to the following:
                <UnorderedList margin="0 0 0 45px">
                  <ListItem>
                    Our affiliates, subsidiaries, partner companies, organizations, or agencies
                    including their sub-contractors or prospective business partners that act as our
                    service providers and contractors;
                  </ListItem>
                  <ListItem>Law enforcement and government agencies;</ListItem>
                  <ListItem>
                    All third parties with which we share this personal data are required to use
                    your personal data in a manner that is consistent with this Privacy Policy.
                  </ListItem>
                </UnorderedList>
                However, these companies may only use such personal data for the purposes disclosed
                in this Privacy Policy and may not use it for any other purpose.
                <Text fontWeight={700} margin=" 16px 0 8px 0">
                  What is our Privacy Policy regarding children?
                </Text>
                Our Site is intended for children who are interested in our educational courses. So
                we do knowingly collect personal data from Minors. You must be at least 13 years old
                to create an account and engage in activities and transactions on our platform or do
                it with legal representative. We urge parents to be vigilant in regularly monitoring
                and supervising their children's on-line activities.
                <Text fontWeight={700} margin=" 16px 0 8px 0">
                  How we protect your personal data?
                </Text>
                We take reasonable steps to make sure that your personal data we collect, use or
                disclose are accurate, complete, and up-to-date. We strictly enforce our Privacy
                Policy within ”Persona Group” LLC and we have implemented technological,
                organizational and physical security measures to protect your personal data that we
                hold, from loss, misuse, modification, unauthorized or accidental access or
                disclosure, alteration or destruction. We put in effect safeguards such as the
                following:
                <UnorderedList margin="0 0 0 45px">
                  <ListItem>
                    We keep and protect your personal data using a secured server behind a firewall,
                    deploying encryption on computing devices and physical security controls.
                  </ListItem>
                  <ListItem>
                    We restrict access to your personal data only to qualified and authorized
                    personnel who hold your personal data with strict confidentiality.
                  </ListItem>
                  <ListItem>
                    Any personal data that you provide on this Site is initially processed and
                    stored by ”Persona Group” LLC. Using a secured connection, only authorized
                    ”Persona Group” LLC personnel can then access and download your personal data
                    from the system.
                  </ListItem>
                  <ListItem>
                    We reveal only the last four digits of your credit card numbers when confirming
                    an order. Of course, we transmit the entire credit card number to the
                    appropriate credit card company during order processing.
                  </ListItem>
                  <ListItem>
                    It is important for you to protect against unauthorized access to your password
                    and to your computer. Be sure to sign-off when finished using a shared computer.
                  </ListItem>
                </UnorderedList>
                <Text fontWeight={700} margin=" 16px 0 8px 0">
                  Where and how long do we keep your personal data?
                </Text>
                In general, the data will be kept in accordance with the following retention
                standards:
                <OrderedList margin="0 0 0 45px">
                  <ListItem>
                    If the data subject has an existing contract and transaction with ”Persona
                    Group” LLC, information will be retained all throughout the contract period and
                    10 years after its completion.
                  </ListItem>
                  <ListItem>
                    If the data subject has no existing contract but has existing transaction with
                    ”Persona Group” LLC, information will be retained during the transaction and 10
                    years after its fulfillment.
                  </ListItem>
                  <ListItem>
                    If the data subject has no existing contract and transaction with ”Persona
                    Group” LLC, information will be retained for a retention period of 10 years.
                  </ListItem>
                </OrderedList>
                Data collected will be retained in accordance with retention limit set by ”Persona
                Group” LLC standards, industry standards and laws and regulations, unless you
                request your data to be deleted in our database immediately. Once deleted, the data
                will be completely removed from all the storage location.
                <Text fontWeight={700} margin=" 16px 0 8px 0">
                  What if there are changes in our Privacy Policy?
                </Text>
                From time to time, it may be necessary for ”Persona Group” LLC to change this
                Privacy Policy. If we change our Privacy Policy, we will post the revised version
                here and it will take effect immediately, so we suggest that you check here
                periodically for the most up-to-date version of our Privacy Policy. Rest assured,
                however, that any changes will not be retroactively applied and will not alter how
                we handle previously collected personal data without obtaining your consent, unless
                required by law.
                <Text fontWeight={700} margin=" 16px 0 8px 0">
                  How you can access, correct and update the personal data we have about you?
                </Text>
                To exercise your rights which include right to access, modify, erase and object to
                processing your personal data within a reasonable time after such request or should
                you have any inquiries, feedbacks on this Privacy Policy, and/or complaints to
                “Persona Group” LLC, you may reach us through our “Connect with Us” menu in this
                website.
              </Text>
            </TabPanel>

            <TabPanel padding="0" color="#222" fontStyle="normal">
              <Heading
                fontWeight="700"
                fontSize={{ base: '24px', lg: '44px' }}
                lineHeight="normal"
                textAlign={{ base: 'center', lg: 'start' }}
                margin=" 0 0 16px 0">
                PAYMENTS, CREDITS and REFUND POLICY
              </Heading>
              <Text lineHeight="22px" fontSize="16px" fontWeight="400">
                <Text fontWeight={700} margin=" 16px 0 8px 0">
                  1. Payment through our Platform
                </Text>
                Our Platform has been designed for 2 types of Services:
                <br />
                - Online Courses bought via our Platform /Subscription Plans/, and
                <br />- Offline Courses bought at Persona Business Academy in person.
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  1.1 Payment for OFFLINE courses
                </Text>
                All offline courses bought in person at Persona Business Academy can be paid via our
                platform. For each offline course PBA.am will design special payment plan that will
                be billed from your card attached for every 12 classes. <br />
                Your Offline course plan billing date is the day we charge your card, and this date
                will apply for every offline 12 classes automatically, if you don't cancel your
                contract with Persona before the Billing Date. If by the Day of your Billing Date
                you have no enough money for the billing and we fail to charge your Card, we will
                leave extra 7 days for you to PAY the fee, after which, if we won't succeed of
                charging your Card again, you WON'T be ALLOWED to the classes and your contract will
                be terminated.
                <br />
                If you have paid the fee, but want to TERMINATE the agreement, the money paid won't
                be returned back if you have participated in any course. The paid fee can be
                returned back, if your course has been not started yet.
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  1.2 SUBSCRIPTION Pricing
                </Text>
                We don't charge fees for navigation on our PBA.am platform, but if you want to have
                an ACCESS to our COURSES or Post your own Course as a Trainer, we offer different
                SUBSCRIPTION Plans.
                <br />
                The prices of content on Persona are determined based on the terms of the Trainer
                Terms and our Promotions Policy. In some instances, the price of content offered on
                the Persona website may not be exactly the same as the price offered on our mobile
                or other applications, due to mobile platform providers' pricing systems and their
                policies around implementing sales and promotions.
                <br />
                We occasionally run promotions and sales for our content, during which certain
                content is available at discounted prices for a set period of time. The price
                applicable to the content will be the price at the time you complete your purchase
                of the content (at checkout). Any price offered for particular content may also be
                different when you are logged into your account from the price available to users
                who aren't registered or logged in, because some of our promotions are available
                only to new or registered users.
                <br />
                If you are a student located in a country where use and sales tax, goods and
                services tax, or value added tax is applicable to consumer sales, we are responsible
                for collecting and remitting that tax to the proper tax authorities. Depending on
                your location, the price you see may include such taxes, or tax may be added at
                checkout.
                <br />
                Your SUBSCRIPTION plan billing date is the day we charge your card, and this date
                will apply for each month automatically, if you don't cancel your Subscription
                before the Billing Date. If by the Day of your Billing Date you have no enough money
                for the billing and we fail to charge your Card, we will leave extra 7 days for you
                to PAY the fee, after which, if we won't succeed of charging your Card again, the
                Subscription will be AUTOMATICALLY CANCELED. <br />
                If we offer FREE TRIAL period for any of Subscription Plans, the Auto-charge will
                apply on the day of the end of that period and that day will apply for the date of
                further charges as a Subscription Plan start date, and if we won't be able to CHARGE
                your Card and make a Billing, then the Trial Period will end with no activation of
                Subscription plan.
                <br />
                Almost ALL our Subscription Plans are monthly. You can CANCEL the Subscription any
                time and be able to USE the Platform till the next BILLING DATE, after which you
                won't have an ACCESS to the Platform courses and services any more.
                <br />
                Please see also point 7 in Term of Use about SUBSCRIPTION section.
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  2. Payments
                </Text>
                You agree to pay the fees for content that you purchase, and you authorize us to
                charge your debit or credit card or process other means of payment (such as PayPal,
                direct debit, or mobile wallet) for those fees. PERSONA works with payment service
                providers to offer you the most convenient payment methods and to keep your payment
                information secure. We may update your payment methods using information provided by
                our payment service providers. Check out our Privacy Policy for more details.
                <br />
                When you make a purchase, you agree not to use an invalid or unauthorized payment
                method. If your payment method fails and you still get access to the content you are
                enrolling in, you agree to pay us the corresponding fees within 30 days of
                notification from us. We reserve the right to disable access to any content for
                which we have not received adequate payment.
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  3. Refunds and Refund Credits
                </Text>
                If the content you purchased is not what you were expecting, we have a GUARANTEE
                7-days Period, during which days, you can request, within 7 days of your purchase of
                the content, that PBA.am apply a refund to your Card or Account Credit. This refund
                option does not apply to Subscription Plan purchases with short period time less
                than 1 month. We reserve the right to apply your refund as a refund credit or a
                refund to your original payment method, at our discretion, depending on capabilities
                of our payment service providers, the platform from which you purchased your content
                (website, mobile or TV app), and other factors. No refund is due to you if you
                request it after the 7-day guarantee time limit has passed. However, if the content
                you previously purchased is disabled for legal or policy reasons, you are entitled
                to a refund beyond this 7-day limit. Persona also reserves the right to refund
                students beyond the 7-day limit in cases of suspected or confirmed account fraud.
                <br />
                The amount of money to be refunded will be calculated based on the days already used
                and the price for each day till the day when the person cancels the subscription,
                and the price for already used days will be deducted from the total price of
                Subscription Plan. The total Refund will be made for the days after Cancellation
                Date. <br />
                To request a refund, you should CANCEL your SUBSCRIPTION during 7-days Guarantee
                Period. As detailed in the Trainer Terms, trainers agree that students have the
                right to receive these refunds.
                <br />
                If we decide to issue refund credits to your account, they will be automatically
                applied towards your next content purchase on our website or mobile app. <br />
                At our discretion, if we believe you are abusing our refund policy, such as if
                you've consumed a significant portion of the content that you want to refund or if
                you've previously refunded the content, we reserve the right to deny your refund,
                restrict you from other future refunds, ban your account, and/or restrict all future
                use of the Services. If we ban your account or disable your access to the content
                due to your violation of these Terms or our Policies, you will not be eligible to
                receive a refund.
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  4. Gift and Promotional Codes
                </Text>
                PBA.am or our partners may offer gift and promotional codes to students. Certain
                codes may be redeemed for gift or promotional credits applied to your PBA.am
                account, which then may be used to purchase eligible content on our platform,
                subject to the terms included with your codes. Other codes may be directly
                redeemable for specific content. <br />
                These codes and credits, as well as any promotional value linked to them, may expire
                if not used within the period specified in your PBA.am account. Gift and promotional
                codes offered by Persona may not be refunded for cash, unless otherwise specified in
                the terms included with your codes or as required by applicable law. Gift and
                promotional codes offered by a partner are subject to that partner's refund
                policies. If you have multiple saved credit amounts, Persona may determine which of
                your credits to apply to your purchase.
              </Text>
            </TabPanel>

            <TabPanel padding="0" color="#222" fontStyle="normal">
              <Heading
                fontWeight="700"
                fontSize={{ base: '24px', lg: '44px' }}
                lineHeight="normal"
                textAlign={{ base: 'center', lg: 'start' }}
                margin=" 0 0 16px 0">
                COOKIES POLICY
              </Heading>
              <Text lineHeight="22px" fontSize="16px" fontWeight="400">
                We collect personal information about users over time and across different websites
                when you use this website. We also have third parties that collect personal
                information this way. To do this, we use several common tracking tools. These may
                include browser cookies. We may also use web beacons, flash cookies, and similar
                technologies. <br />
                Our vendors or third parties may place and use these tools on our sites or apps.
                <br />
                Before using our Website, please read carefully this Cookie Policy (including the
                Privacy Policy). If you do not agree to this Cookies Policy or the Privacy Policy,
                do not use our Website.
                <br />
                We reserve the right to make changes to this Cookies Policy or the Privacy Policy at
                any time. <br />
                You are invited to regularly read this Cookies Policy or the Privacy Policy to make
                sure you are aware of any change and how your Personal Data may be used.
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  1. What is a cookie?
                </Text>
                When you visit any website, it may store or retrieve information on your browser,
                mostly in the form of cookies. This information might be about you, your preferences
                or your device and is mostly used to make the site work as you expect it to. The
                information does not usually directly identify you, but it can give you a more
                personalized web experience. Because we respect your right to privacy, you can
                choose not to allow some types of cookies. Click on the different category headings
                to find out more and change our default settings. However, blocking some types of
                cookies may impact your experience of the site and the services we are able to
                offer.
                <br />
                Cookies are small text files or pieces of information that are stored on your
                computer or mobile device (such as a smartphone or tablet) when you visit our
                Website. A cookie will usually contain the name of the website/application from
                which the cookie has come from, the duration of the cookie (i.e. how long the cookie
                will remain on your device), and a value, which is usually a randomly generated
                unique number.
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  2. Why do we use cookies?
                </Text>
                We use cookies to make our Website easier to use and to better tailor our Website
                and our products to your interests and needs. Cookies can do this because our
                Website can read and write these files, enabling them to recognise you and remember
                important information that will make your use of our Website more convenient (for
                example by remembering preference settings).
                <br />
                Cookies may also be used to help speed up your future activities and experience on
                our Website. We also use cookies to compile anonymous, aggregated statistics that
                allow us to understand how users use our Website and to help us improve the
                structure and content of our Website.
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  3. What are the different types of cookies?
                </Text>
                The types of cookies that we may use can be either session or persistent, or first
                party or third party cookies.
                <UnorderedList margin="0 0 0 45px">
                  <ListItem>
                    <Text fontWeight={700}>Always Active Cookies</Text>
                    These cookies are necessary for the website to function and cannot be switched
                    off in our systems. They are usually only set in response to actions made by you
                    which amount to a request for services, such as setting your privacy
                    preferences, verifying that you are above the minimum legal age to purchase
                    alcohol, shopping cart functionality or filling in forms. You can set your
                    browser to block or alert you about these cookies, but some parts of the site
                    will not then work. These cookies do not store directly identifiable personal
                    information.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight={700}>Performance Cookies</Text>
                    These cookies allow us to count visits and traffic sources so we can measure and
                    improve the performance of our site. They help us to know which pages are the
                    most and least popular and see how visitors move around the site. All
                    information these cookies collect is aggregated and therefore anonymous. If you
                    do not allow these cookies we will not know when you have visited our site, and
                    will not be able to monitor its performance.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight={700}>Targeting Cookies</Text>
                    These cookies may be set through our site by our advertising partners (including
                    DoubleClick, YouTube, Google, Facebook, Instagram, WeChat). They may be used by
                    those companies to build a profile of your interests and show you relevant ads
                    on other sites. They do not store directly identifiable personal information,
                    but are based on uniquely identifying your browser and internet device. If you
                    do not allow these cookies, you will experience less targeted advertising and
                    although the amount of ads you see will not decrease, they will only be less
                    relevant to you.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight={700}>Persistent cookies</Text>
                    These cookies are used to save your login name information and remember your
                    settings for future logins to our Website. A persistent cookie is a cookie
                    stored as a file on your computer, and it remains there when you close your web
                    browser. The cookie can be read by the Website that created it when you visit it
                    again.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight={700}>Session ID cookies</Text>
                    These cookies are used to enable certain features of our Website and services,
                    to better understand how you interact with our Website and to monitor aggregate
                    usage and web traffic routing. Unlike persistent cookies, session cookies are
                    deleted from your computer when you close your browser. They usually store an
                    anonymous session identifier on your computer allowing you to browse a website /
                    application (for example) without having to log in to each page.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight={700}>First party cookies</Text>
                    These cookies are our own cookies, which we use to improve your experience. They
                    are associated with a useґs Personal Data. No third party has access to the
                    information we collect through our own cookies.
                  </ListItem>
                  <ListItem>
                    <Text fontWeight={700}>Third party cookies</Text>
                    These are cookies placed on our Website by third parties to provide their
                    services, including advertising cookies. They set cookies (third party cookies)
                    on your device on our behalf when you visit our Website to allow them to deliver
                    the services they are providing. You will find more information about these
                    cookies in their privacy policies. You will find below a list of the different
                    types of cookies we use on our Website. To the extent information collected
                    through cookies constitutes Personal Data.
                  </ListItem>
                </UnorderedList>
                <Text fontWeight={700} margin=" 8px 0 8px 0">
                  a) Essential Cookies
                </Text>
                Essential cookies are first party cookies which are strictly necessary for our
                Website to work and to use its services and features. Without these cookies, our
                Website will not perform as smoothly for you as we would like it to and we may not
                be able to provide the Website or certain services or features thereof you request.
                <br />
                We also use technical cookies which allow our Website to remember choices you make
                (such as your user name, language or the region you are in) for customization and
                personalization purposes. These cookies do not gather any information about you that
                will be used for advertising purposes or to remember your browsing history on the
                internet.
                <br />
                These cookies are necessary to the operation of our Website, are considered as
                non-privacy intrusive cookies improving internet experience and therefore they do
                not necessitate consent and you cannot opt-out to their use.
                <Text fontWeight={700} margin=" 8px 0 8px 0">
                  b) Social Media Plug-in Cookies
                </Text>
                We use buttons to enable sharing of pages with social networking sites. These
                buttons may place a third party cookie on your device, which could gather usage
                information.
                <br />
                Our Website uses the following social media cookies: Facebook, Instagram, YouTube,
                WeChat.
                <Text fontWeight={700} margin=" 8px 0 8px 0">
                  c)Analytics Cookies
                </Text>
                Our Website may also use Google Analytics cookies. These third party cookies collect
                information about how you use and move around our Website. For example, these will
                keep track of what pages are most visited, Internet protocol (IP) addresses, browser
                type, internet service provider (ISP), referring/exit pages, operating system,
                date/time stamp, and clickstream data. We use this information to analyze trends, to
                administer the Website, to track users' movements around our Website and to gather
                demographic information about our user base as a whole. Our Website may use the
                following analytical cookies: Google, Yandex.
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  4.How long are cookies stored?
                </Text>
                Cookies will have a maximum retention period after being placed on the user’s
                terminal as required by applicable law.
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  5. Why We Use Tracking Tools /Cookies/
                </Text>
                We use tracking tools for many reasons, including to engage in interest-based
                advertising. Interest-based advertising or “online behavioral advertising” is
                serving advertising content to you based on information gathered from you over time
                across multiple sites or other platforms. It includes serving ads to you after you
                leave our website, encouraging you to return. It also includes serving ads we think
                are relevant based on your browsing habits or online activities. These ads might be
                served on websites. They might also be served in emails. We might serve these ads,
                or third parties may serve ads. They might be about our products or other companies'
                products.
                <br />
                We may also use tracking tools:
                <UnorderedList margin="0 0 0 35px">
                  <ListItem>To recognize new or past website visitors.</ListItem>
                  <ListItem>
                    To improve our website and to better understand your visits on our platforms.
                  </ListItem>
                  <ListItem>To integrate with third party social media websites.</ListItem>
                  <ListItem>
                    To observe your behaviors and browsing activities over time across multiple
                    websites or other platforms.
                  </ListItem>
                  <ListItem>
                    To better understand the interests of our customers and our website visitors.
                  </ListItem>
                </UnorderedList>
                How We Gather Information For Interest-Based Advertising
                <br />
                We use information you make available to us when you interact with us, our
                affiliates, and other third parties to decide what content is relevant to you. We
                gather this information using the tracking tools described above. For example, we or
                our partners might look at your purchases or browsing behaviors. We or our partners
                might also look at your location. We might look at these activities on our platforms
                or the platforms of others.
                <br />
                We work with third parties who help gather this information. These third parties
                might link your name or email address to other information they collect. That might
                include past purchases made offline or online. Or, it might include online usage
                information.
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  6. How to control cookies on our Website?
                </Text>
                Except for cookies which qualify as essential, the cookies described above will be
                installed on your computer only if you continue your browsing after having read the
                banner appearing on the home page.
                <br />
                You can also control how your browser uses cookies and your browser's “Help”
                function should be able to tell you how to do this. Please note that depending on
                the cookies you turn off or disable, you may not be able to login to your account,
                view content or use other features of our Website and may find that parts of our
                Website either do not function at all or behave unexpectedly.
                <br />
                If you use different devices to view and access our Website (e.g. your computer,
                smartphone, tablet etc.) you will need to ensure that each browser on each device is
                adjusted to suit your cookie preferences.
                <Text fontWeight={700} margin=" 16px 0 16px 0">
                  7. How to contact us?
                </Text>
                If you have any questions, comments, or concerns about our use of cookies please{' '}
                <Text as="span" fontWeight={700}>
                  contact us.
                </Text>
              </Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
