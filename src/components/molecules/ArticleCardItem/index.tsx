import React, { FC } from 'react';
import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { ARTICLES_ROUTE } from '@/utils/constants/routes';

type ArticleCardItemProps = {
  id: number;
  title: string;
  description: string;
  date: string;
};

const ArticleCardItem: FC<ArticleCardItemProps> = ({ title, description, id }) => {
  return (
    <Box
      maxW="386px"
      borderRadius="6px"
      overflow="hidden"
      as={Link}
      href={`${ARTICLES_ROUTE}/${id}`}>
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
          {title}
        </ListItem>
        <ListItem
          mb="16px"
          lineHeight="21.28px"
          fontSize="16px"
          fontWeight="400"
          maxHeight="44px"
          overflow="hidden"
          display="-webkit-box"
          sx={{
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
          }}>
          {description}
        </ListItem>
        <ListItem display="flex" alignItems="center" gap="20px" textDecoration="underline">
          Read full article
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default ArticleCardItem;
