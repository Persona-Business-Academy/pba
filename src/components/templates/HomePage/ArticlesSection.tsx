import React, { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const ArticleItem = dynamic(() => import('@/components/molecules/ArticleItem'));

type ArticlesSectionProps = {};

const ArticlesSection: FC<ArticlesSectionProps> = () => {
  return (
    <Box mb={{ base: '36px', lg: '148px' }}>
      <Heading
        textAlign="center"
        margin={{
          base: '0 0 16px 0',
        }}
        as="h3"
        color="#222222"
        fontWeight="700"
        fontSize={{ base: '24px', lg: '32px' }}
        lineHeight={{
          base: '31.92px',
          lg: '42.56px',
        }}>
        Only Qualified Articles
      </Heading>

      <Box
        display="flex"
        flexWrap="wrap"
        gap="40px 20px"
        justifyContent={{
          base: 'center',
        }}
        padding="0">
        {Array.from({ length: 4 }, (_, i) => ({
          id: i,
          articleTitle: 'How to Build a Design System if youre...',
          articleDescription:
            'Its always hard to be the only person in a company who is responsible for product design. Your day can be insanely...',
          articleDate: 'March 01, 2021',
          viewCount: 440,
        })).map((article, i) => (
          <ArticleItem {...article} key={i} />
        ))}
      </Box>
    </Box>
  );
};

export default ArticlesSection;
