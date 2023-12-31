import React, { FC, memo } from 'react';
import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';

type ArticleItemProps = {
  articleTitle: string;
  articleDescription: string;
  articleDate: string;
  viewCount: number;
};

const ArticleItem: FC<ArticleItemProps> = ({
  articleTitle,
  articleDescription,
  articleDate,
  viewCount,
}) => {
  return (
    <Box
      flexGrow="1"
      maxW={{ base: '500px', xl: '590px' }}
      border="1px solid"
      borderRadius="8px"
      borderColor="#F3F4F6"
      color="#333333"
      transition="box-shadow  0.3s, color 0.3s"
      _hover={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', cursor: 'pointer', color: '#3CB3E5' }}
      padding="24px">
      <UnorderedList listStyleType="none" margin="0" borderBottom="1px solid #858585" pb="32px">
        <ListItem fontWeight="700" color="inherit" fontSize="16px" lineHeight="21.28px" mb="8px">
          {articleTitle}
        </ListItem>
        <ListItem color="#333333" fontSize="16px" lineHeight="21.28px" fontWeight="400">
          {articleDescription}
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
          {articleDate}
        </ListItem>

        <ListItem
          fontSize="16px"
          lineHeight="21.28px"
          fontWeight="400"
          display="flex"
          alignItems="center"
          gap="8px">
          <span>
            <Image src="/icons/eye_icon.svg" alt="Eye" width={16} height={11.3} />
          </span>
          {viewCount}
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default memo(ArticleItem);
