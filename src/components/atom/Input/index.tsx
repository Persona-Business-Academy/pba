'use client';
import React, { FC, memo } from 'react';
import { Input } from '@chakra-ui/react';

type Props = {};

const Button: FC<Props> = () => {
  return (
    <>
      <Input />
    </>
  );
};

export default memo(Button);
