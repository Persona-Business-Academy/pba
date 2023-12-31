import React, { FC, memo, useCallback } from 'react';
import {
  Avatar,
  Box,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import Link from 'next/link';
import { User } from 'next-auth';
import { signOut } from 'next-auth/react';
import { HOMEPAGE_ROUTE, linkItems, LOGOUT_ID } from '@/utils/constants/routes';

type Props = {
  user: User;
};

const ProfileMenu: FC<Props> = ({ user }) => {
  const signOutHandler = useCallback(() => signOut({ callbackUrl: HOMEPAGE_ROUTE }), []);

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar
          name={`${user?.firstName} `}
          src="avatar url"
          bg="#F3F4F6"
          color="#C0C0C0"
          cursor="pointer"
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody padding="16px 21px">
          <Flex flexDirection="column">
            {linkItems.map(({ id, href, name, icon: Icon }) => (
              <Box
                key={id}
                {...(id === LOGOUT_ID ? { onClick: signOutHandler } : { as: Link, href })}
                style={{ textDecoration: 'none' }}
                _focus={{ boxShadow: 'none' }}
                borderRadius="9px"
                margin={0}
                padding="16px 0 16px 24px"
                _hover={{
                  bg: '#F3F4F6',
                  color: '#222',
                }}
                height="52px">
                <Flex
                  align="center"
                  p="4"
                  mx="4"
                  height="100%"
                  borderRadius="lg"
                  role="group"
                  cursor="pointer"
                  display="flex"
                  gap="10px">
                  <Icon />
                  {name}
                </Flex>
              </Box>
            ))}
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default memo(ProfileMenu);
