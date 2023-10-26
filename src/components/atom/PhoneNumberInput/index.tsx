import React, { FC, Fragment, memo, useEffect, useState } from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from '@chakra-ui/react';
import { Country } from 'country-state-city';
console.log(Country.getAllCountries());

type PhoneNumberInputProps = {
  value: string;
  size: number;
  country: string;
  options: any[];
  onChange: () => void;
  placeholder: string;
  rest: any;
};

const PhoneNumberInput: FC<PhoneNumberInputProps> = ({
  value,
  country,
  options,
  onChange,
  placeholder,
  rest,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<any>(Country.getCountryByCode('AM'));
  const [number, setNumber] = useState('');

  useEffect(() => {}, []);

  const onCountryChange = (e: any) => {
    setSelectedCountry(Country.getCountryByCode(e.target.value));
  };

  const onPhoneNumberChange = (e: any) => {
    setNumber(e.target.value);
  };

  console.log(selectedCountry, 'selectedCountry');

  return (
    <FormControl>
      <FormLabel fontWeight={600} marginBottom={4} lineHeight="20px" fontSize={14} color="#222">
        Phone Number
      </FormLabel>
      <InputGroup {...rest} height="37px">
        <InputLeftElement width="62px" borderRight="1px solid #C0C0C0">
          <Select
            height="100%"
            opacity={0}
            position="absolute"
            value={selectedCountry}
            onChange={onCountryChange}>
            {Country.getAllCountries().map(country => (
              <Fragment key={country.phonecode}>
                <option value={country.isoCode}>{country.name}</option>
              </Fragment>
            ))}
          </Select>
          <Flex pl={2} width="100%" alignItems="center">
            <Box mr="4px" width="50%" flex={1}>
              {selectedCountry?.flag}
            </Box>
          </Flex>
        </InputLeftElement>
        <Input
          pl="4rem"
          type="number"
          border="1px solid #C0C0C0"
          value={number}
          pattern="[0-9]"
          placeholder={placeholder}
          onChange={onPhoneNumberChange}
        />
      </InputGroup>
    </FormControl>
  );
};

export default memo(PhoneNumberInput);
