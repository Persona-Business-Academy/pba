import React, { memo } from 'react';
import { Box } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Box
      opacity={0.8}
      backgroundImage="url(/icons/loading.gif)"
      backgroundRepeat="no-repeat"
      backgroundColor="white"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="800px"
    />
  );
};

export default memo(Loading);
