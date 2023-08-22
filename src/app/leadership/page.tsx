'use client';
import React, { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import classes from './page.module.scss';

type Props = {};

const Leadership: FC<Props> = () => {
  return (
    <>
      <Image
        src="/images/landing/leadership_main.png"
        width={1200}
        height={591}
        alt="Leadership_image"
      />
      <Flex
        justifyContent={{
          base: 'center',
          sm: 'flex-start',
        }}
        alignItems="center">
        <h1 className={classes.header}> Heading </h1>
        <h1 className={classes.middle}> Heading </h1>
      </Flex>

      <Text>
        This is a paragraph created using the Chakra UI Text component. Chakra UI provides a set of
        flexible and customizable components for building beautiful user interfaces.
      </Text>
    </>
  );
};

export default Leadership;
