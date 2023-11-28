import React, { FC } from 'react';
import { Box, Button } from '@chakra-ui/react';
import RemoveIcon from 'public/icons/remove.svg';

type RemovableButtonProps = {
  children: string;
  filterId: number;
  removeFilterHandler: (id: number) => void;
};

const RemovableButton: FC<RemovableButtonProps> = ({ children, removeFilterHandler, filterId }) => {
  return (
    <Button
      width="134px"
      height="38px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderRadius="6px"
      border="1px solid #F3F4F6"
      backgroundColor="#fff"
      _hover={{
        bg: '#fff',
      }}
      _focus={{
        bg: '#fff',
      }}
      px={16}>
      {children}
      <Box as="span" onClick={removeFilterHandler.bind(null, filterId)}>
        <RemoveIcon />
      </Box>
    </Button>
  );
};

export default RemovableButton;
