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
import { useRouter } from 'next/navigation';
import { User } from 'next-auth';
import { signOut } from 'next-auth/react';
import { LinkItems, SIGN_IN_ROUTE } from '@/constants/routes';

type Props = {
  user: User;
};

const ProfileMenu: FC<Props> = ({ user }) => {
  const router = useRouter();

  const signOutHandler = useCallback(() => {
    signOut({ callbackUrl: SIGN_IN_ROUTE, redirect: false }).then(
      res => res && router.push(SIGN_IN_ROUTE),
    );
  }, [router]);

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
            {LinkItems.map(({ href, name, icon: Icon }) => (
              <Box
                key={href}
                as={Link}
                style={{ textDecoration: 'none' }}
                _focus={{ boxShadow: 'none' }}
                borderRadius="9px"
                href={href}
                margin={0}
                {...(href === SIGN_IN_ROUTE ? { onClick: signOutHandler } : {})}
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
