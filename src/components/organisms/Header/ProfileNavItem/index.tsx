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
import { segoe } from '@/constants/fonts';
import { linkItems } from '@/constants/routes';

type ProfileNavItemProps = {
  user: User;
};

const ProfileNavItem: FC<ProfileNavItemProps> = ({ user }) => {
  return (
    <AccordionItem>
      <AccordionButton>
        <Flex flex={6} textAlign="left" gap="8px">
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
          {linkItems.map(child => (
            <AccordionItem key={child.id}>
              <AccordionButton
                {...(child.href ? { as: Link, href: child.href } : { onClick: () => {} })}>
                <Box as="span" flex="1" textAlign="left">
                  {child.name}
                </Box>
              </AccordionButton>
            </AccordionItem>
          ))}
        </Accordion>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default memo(ProfileNavItem);
