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
    <FormControl isInvalid={isInvalid}>
      <FormLabel className={classes.formLabel} fontWeight={600} marginBottom={4}>
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
          borderRadius={6}
          height="40px"
          width={336}
          boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.05)"
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
          _invalid={{
            border: '1px solid #DF1414',
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
        <FormHelperText
          className={classes.formLabel}
          fontWeight={400}
          color="#5b5b5b"
          marginTop={4}>
          {formHelperText}
        </FormHelperText>
      ) : (
        <FormErrorMessage
          className={classes.formLabel}
          color="#DF1414"
          fontWeight={400}
          marginTop={4}>
          {formErrorMessage}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default memo(FormInput);
