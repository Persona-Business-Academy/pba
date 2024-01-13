import React, { FC } from 'react';
import { Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

type MovableButtonProps = {
  href: string;
  btnText: string;
};

const MovableButton: FC<MovableButtonProps> = ({ href, btnText }) => {
  return (
    <Text
      color="#FF6131"
      fontSize="16px"
      _hover={{
        color: '#E6572C',
      }}
      fontWeight="700"
      lineHeight="21.28px"
      as={Link}
      href={href}
      margin="0"
      display="flex"
      alignItems="center"
      gap="8px"
      sx={{
        '&>img': {
          marginLeft: '8px',
        },
        '&:hover > img': {
          transform: 'translateX(12px)',
        },
      }}>
      {btnText}
      <Image
        src="/icons/not_found_icon.svg"
        alt="Arrow icon"
        width={24}
        height={24}
        style={{
          transition: 'all 0.3s',
        }}
      />
    </Text>
  );
};

export default MovableButton;
