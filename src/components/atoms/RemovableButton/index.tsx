import React, { FC, memo, useCallback } from 'react';
import { Box, Button } from '@chakra-ui/react';
import RemoveIcon from 'public/icons/remove.svg';
import useQueryParams from '@/hooks/useQueryParam';

type RemovableButtonProps = {
  children: string;
  filterId: number;
  filterBy: string;
  value: string;
};

const RemovableButton: FC<RemovableButtonProps> = ({ children, filterId, filterBy, value }) => {
  const { removeQueryParam } = useQueryParams();

  const removeQueryFilterHandler = useCallback(() => {
    removeQueryParam({ value, filterBy });
  }, []);

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
      <Box as="span" onClick={removeQueryFilterHandler}>
        <RemoveIcon />
      </Box>
    </Button>
  );
};

export default memo(RemovableButton);
