import React, { FC, ReactNode } from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import { ButtonSizeEnum } from '@/enums/components';

type Props = {
  children: ReactNode;
  size?: ButtonSizeEnum;
  isDisabled?: boolean;
};

const Button: FC<Props> = ({ children, size = ButtonSizeEnum.md, isDisabled }) => {
  return (
    <ChakraButton
      size={size}
      bg="#3CB4E7"
      color="#FFFFFF"
      _hover={{
        bg: 'blue.400',
        color: '#FFFFFF',
      }}
      _focus={{
        bg: 'blue.500',
        color: '#FFFFFF',
      }}
      _focusVisible={{
        bg: 'blue.500',
        color: '#FFFFFF',
      }}
      _disabled={{
        bg: 'grey.50',
        color: 'grey.200',
        cursor: 'not-allowed',
      }}
      isDisabled={isDisabled}>
      {children}
    </ChakraButton>
  );
};

export default Button;
