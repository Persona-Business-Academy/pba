import React, { FC, memo, useState } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import Image from 'next/image';
import classes from './index.module.scss';

type Props = {
  isInvalid?: boolean;
  formLabelName?: string;
  value?: string;
  handleInputChange?: (_event: React.ChangeEvent<HTMLInputElement>) => void;
  formHelperText?: string;
  formErrorMessage?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  isRequired?: boolean;
  isReadOnly?: boolean;
  name: string;
};

const FormInput: FC<Props> = ({
  isInvalid,
  name,
  value,
  handleInputChange,
  formHelperText,
  formErrorMessage,
  type,
  formLabelName,
  placeholder,
  isRequired,
  isReadOnly,
}) => {
  const [isPasswordType, setIsPasswordType] = useState(false);

  return (
    <FormControl isInvalid={isInvalid} id={name}>
      <FormLabel className={classes.formLabel}>
        {formLabelName} {isRequired && <span>*</span>}
      </FormLabel>
      <InputGroup>
        <Input
          type={type}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
          _focus={{
            border: '1px solid #3cb4e7',
          }}
          _focusVisible={{
            border: '1px solid #3cb4e7',
          }}
          _readOnly={{
            bg: 'violet.50',
            color: 'violet.200',
            border: '1px solid grey.100',
          }}
          _placeholder={{
            color: 'grey.100',
            fontSize: 16,
            fontWeight: 400,
            fontStyle: 'normal',
          }}
        />
        {type === 'password' && (
          <InputRightElement>
            {isPasswordType ? (
              <Image
                width={20}
                height={20}
                alt="eye"
                src={'/icons/eye_open.svg'}
                onClick={() => setIsPasswordType(false)}
              />
            ) : (
              <Image
                width={20}
                height={20}
                alt="eye"
                src={'/icons/eye_closed.svg'}
                onClick={() => setIsPasswordType(true)}
              />
            )}
          </InputRightElement>
        )}
      </InputGroup>
      {!isInvalid ? (
        <FormHelperText>{formHelperText}</FormHelperText>
      ) : (
        <FormErrorMessage>{formErrorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default memo(FormInput);
