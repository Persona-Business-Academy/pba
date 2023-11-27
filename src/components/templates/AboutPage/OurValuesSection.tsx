import React, { FC } from 'react';
import { Box, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';

type OurValuesSectionProps = {};

const OurValuesSection: FC<OurValuesSectionProps> = () => {
  return (
    <Box>
      <Box maxW="804px" margin="0 auto 40px" textAlign="center" color="#000000">
        <Heading margin="0 0 8px 0" fontSize="32px" lineHeight="42.56px" fontWeight="700">
          Our Values
        </Heading>
        <Text fontSize="16px" fontWeight="400" lineHeight="21.28px" margin="0">
          Our five key values guide everything we do, from the way we build relationships with
          schools and families to the way we work together behind the scenes to make things happen.
        </Text>
      </Box>

      <Box
        maxW="1200px"
        margin="0 auto"
        pb={{ base: '36px', xl: '148px' }}
        gap="20px"
        display="flex"
        flexWrap="wrap"
        justifyContent="center">
        <Box mt={{ base: '0px', xl: '40px' }}>
          <Box
            bg="#fff"
            width={{ base: '347px', xl: '386px' }}
            margin="0 auto"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mb="22px"
            padding={{ base: '64px 17px', xl: '82.24px 39px 134px' }}>
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
                display={{ base: 'none', xl: 'block' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </ListItem>
            </UnorderedList>
          </Box>

          <Box
            bg="#fff"
            width={{ base: '347px', xl: '386px' }}
            margin="0 auto"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding={{ base: '64px 17px', xl: '82.24px 39px 134px' }}>
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
                display={{ base: 'none', xl: 'block' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.{' '}
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>

        <Box>
          <Box
            bg="#fff"
            width={{ base: '347px', xl: '386px' }}
            margin="0 auto"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mb="22px"
            padding={{ base: '64px 17px', xl: '82.24px 39px 134px' }}>
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
                display={{ base: 'none', xl: 'block' }}
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
            width={{ base: '347px', xl: '386px' }}
            margin="0 auto"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding={{ base: '64px 17px', xl: '82.24px 39px 134px' }}>
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
                display={{ base: 'none', xl: 'block' }}
                lineHeight="21.28px"
                fontSize="16px"
                fontWeight="400"
                color="#5B5B5B">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>

        <Box mt={{ base: '0px', xl: '40px' }}>
          <Box
            bg="#fff"
            width={{ base: '347px', xl: '386px' }}
            margin="0 auto"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mb="22px"
            padding={{ base: '64px 17px', xl: '82.24px 39px 134px' }}>
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
                display={{ base: 'none', xl: 'block' }}
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
            width={{ base: '347px', xl: '386px' }}
            margin="0 auto"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding={{ base: '64px 17px', xl: '82.24px 39px 134px' }}>
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
  );
};

export default OurValuesSection;
