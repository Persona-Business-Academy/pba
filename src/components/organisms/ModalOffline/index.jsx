import { Box, Button, Text } from '@chakra-ui/react';

const ModalOffline = ({ closeModal }) => {
  return (
    <Box
      position="absolute"
      display="flex"
      bg="white"
      flexDirection="column"
      left="0"
      top="0"
      zIndex={1000}
      height="100vh"
      padding="0 10px"
      width="100%"
      gap="10px">
      <Box width="20px" height="20px" marginLeft="auto">
        <Button width="100%" padding="0" cursor="pointer" onClick={() => closeModal(false)}>
          X
        </Button>
      </Box>

      <Box fontWeight="600" lineHeight="20px" fontSize="14px">
        <Text>Skill</Text>
        <Text>Duration</Text>
      </Box>
    </Box>
  );
};

export default ModalOffline;
