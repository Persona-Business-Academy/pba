import React, { FC, memo, ReactNode } from 'react';
import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react';
import { ButtonSizeEnum } from '@/enums/components';

interface SharedButtonProps extends ButtonProps {
  children: ReactNode;
  size?: ButtonSizeEnum;
  isDisabled?: boolean;
}

const Button: FC<SharedButtonProps> = ({
  children,
  size = ButtonSizeEnum.md,
  isDisabled,
  ...props
}) => {
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
      isDisabled={isDisabled}
      {...props}>
      {children}
    </ChakraButton>
  );
};

export default memo(Button);
