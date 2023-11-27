import React, { FC } from 'react';
import { Button } from '@chakra-ui/react';
import RemoveIcon from 'public/icons/remove.svg';

type RemovableButtonProps = {
  text: string;
};

const RemovableButton: FC<RemovableButtonProps> = ({ text }) => {
  return (
    <Button
      width="134px"
      height="38px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={16}>
      {text}
      <RemoveIcon />
    </Button>
  );
};

export default RemovableButton;
