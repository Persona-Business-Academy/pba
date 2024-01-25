import React, { FC } from 'react';
import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';

type ArticleCardItemProps = {};

const ArticleCardItem: FC<ArticleCardItemProps> = () => {
  return (
    <Box maxW="386px" borderRadius="6px" overflow="hidden">
      <Image
        width={386}
        height={316}
        src="/images/public_available/article_image_tab.jpg"
        alt="Article image"
      />
      <UnorderedList
        boxShadow="lg"
        color="#222222"
        borderRadius="6px"
        bg="#fff"
        dropShadow="30px 10px 4px #4444dd"
        listStyleType="none"
        position="relative"
        zIndex="2"
        margin="-51px 17px 13px 17px"
        padding=" 24px"
        maxW="351.9px">
        <ListItem lineHeight="21.28px" fontSize="16px" fontWeight="700" mb="8px">
          How to teach in every subject...
        </ListItem>
        <ListItem mb="16px" lineHeight="21.28px" fontSize="16px" fontWeight="400">
          Did you know that there are apps already on your iPad that will enable all students to
          better engage with and develop their literacy skills?
        </ListItem>
        <ListItem display="flex" alignItems="center" gap="20px" textDecoration="underline">
          <Image
            width={24}
            height={24}
            alt="Heart Favorite icon"
            src="/icons/heart_icon_article.svg"
          />
          Read full article
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default ArticleCardItem;
