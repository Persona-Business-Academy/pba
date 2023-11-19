import React, { FC, memo } from 'react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

type PhoneNumberInputProps = {
  value: string;
  country: string;
  onChange: () => void;
  placeholder: string;
  rest: any;
};

const PhoneNumberInput: FC<PhoneNumberInputProps> = ({ onChange, value }) => {
  return (
    <FormControl>
      <FormLabel fontWeight={600} marginBottom={4} lineHeight="20px" fontSize={14} color="#222">
        Phone Number
      </FormLabel>
      <PhoneInput
        country="am"
        value={value}
        onChange={onChange}
        inputStyle={{
          width: '100%',
          height: 40,
          borderRadius: 6,
          boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
          border: '1px solid rgb(226, 232, 240)',
          paddingLeft: 56,
        }}
        buttonStyle={{
          backgroundColor: 'transparent',
          width: 50,
          display: 'flex',
          justifyContent: 'center',
        }}
      />
    </FormControl>
  );
};

export default memo(PhoneNumberInput);
