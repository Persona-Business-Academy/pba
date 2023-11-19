import React, { FC, memo } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { User } from 'next-auth';
import { segoe } from '@/utils/constants/fonts';
import { linkItems, PROFILE_ROUTE } from '@/utils/constants/routes';

type ProfileNavItemProps = {
  user: User;
};

const ProfileNavItem: FC<ProfileNavItemProps> = ({ user }) => {
  return (
    <AccordionItem pl={8}>
      <AccordionButton display="flex">
        <Flex flex={6} textAlign="left" gap="8px" as={Link} href={PROFILE_ROUTE}>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Flex flexDirection="column" gap="4px">
            <Text
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={segoe.className}
              fontSize="14px"
              fontWeight={600}
              lineHeight="20px">
              {user?.firstName} {user?.lastName}
            </Text>
            <Text color="#5B5B5B" className={segoe.className} fontSize="14px" fontWeight={400}>
              My Profile
            </Text>
          </Flex>
        </Flex>
        <Box flex={1}>
          <AccordionIcon />
        </Box>
      </AccordionButton>
      <AccordionPanel pb={0} bg="#F9FAFB" pt={0}>
        <Accordion allowToggle>
          {linkItems.map(({ href, name, icon: Icon, id }) => (
            <AccordionItem key={id}>
              <AccordionButton {...(href ? { as: Link, href } : { onClick: () => {} })}>
                <Flex as="span" flex="1" textAlign="left" pl="24px" alignItems="center" gap="8px">
                  <Icon />
                  {name}
                </Flex>
              </AccordionButton>
            </AccordionItem>
          ))}
        </Accordion>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default memo(ProfileNavItem);
