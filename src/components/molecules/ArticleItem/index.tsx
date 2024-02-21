import React, { FC, memo } from 'react';
import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import Link from 'next/link';
import { ARTICLES_ROUTE } from '@/utils/constants/routes';
import { generateCourseName } from '@/utils/helpers/courses';

type ArticleItemProps = {
  id: number;
  title: string;
  description: string;
  date: string;
};

const ArticleItem: FC<ArticleItemProps> = ({ title, description, date, id }) => {
  return (
    <Box
      as={Link}
      href={`${ARTICLES_ROUTE}/${generateCourseName(title)}/${id}`}
      flexGrow="1"
      flexBasis={{
        base: '500px',
        sm: '590px',
      }}
      border="1px solid"
      borderRadius="8px"
      borderColor="#F3F4F6"
      color="#333333"
      transition="box-shadow  0.3s, color 0.3s"
      _hover={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', cursor: 'pointer', color: '#3CB3E5' }}
      padding="24px">
      <UnorderedList listStyleType="none" margin="0" borderBottom="1px solid #858585" pb="32px">
        <ListItem fontWeight="700" color="inherit" fontSize="16px" lineHeight="21.28px" mb="8px">
          {title}
        </ListItem>
        <ListItem
          color="#333333"
          fontSize="16px"
          lineHeight="21.28px"
          fontWeight="400"
          maxHeight="44px"
          overflow="hidden"
          display="-webkit-box"
          sx={{
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
          }}>
          {description}
        </ListItem>
      </UnorderedList>

      <UnorderedList
        m="16px 0 0 0 "
        color="#333333"
        listStyleType="none"
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <ListItem fontSize="16px" lineHeight="21.28px" fontWeight="400">
          {date}
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default memo(ArticleItem);
