import { Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import InputSearchIcon from '/public/icons/search_icon.svg';
import useQueryParams from '@/hooks/useQueryParam';
import React, { useCallback, useState } from 'react';
import { montserrat } from '@/utils/constants/fonts';

const SearchInput = () => {
  const { addSingleSearchParam } = useQueryParams();

  const [search, setSearch] = useState('');

  const searchCourseHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      addSingleSearchParam({ filterBy: 'q', value: e.target.value });
    },
    [addSingleSearchParam],
  );

  return (
    <Flex width="794px" margin="0 auto" flexDirection="column" alignItems="center">
      <Text
        className={montserrat.className}
        fontSize="44px"
        fontWeight={700}
        color="#222222"
        marginBottom="16px">
        Courses
      </Text>
      <Text fontSize="16px" fontWeight={400} color="#222222" marginBottom="32px">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying.
      </Text>
      <InputGroup>
        <Input
          placeholder="What are you looking for?"
          borderRadius="12px"
          border="1px solid #F9FAFB"
          background="#FFF"
          color="#C0C0C0"
          fontSize="16px"
          fontWeight={400}
          padding="12px 16px"
          value={search}
          onChange={searchCourseHandler}
        />
        <InputRightElement width="45px">{<InputSearchIcon />}</InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default SearchInput;
