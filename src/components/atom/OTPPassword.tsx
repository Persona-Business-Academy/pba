import { FC, memo } from 'react';
import { HStack, PinInput, PinInputField } from '@chakra-ui/react';

interface Props {
  onChange: () => void;
}

const OTPPassword: FC<Props> = ({ onChange }) => {
  return (
    <HStack>
      <PinInput otp mask={false} placeholder="" onChange={onChange}>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </HStack>
  );
};

export default memo(OTPPassword);
