'use client';

import React, { FC } from 'react';
import { Container } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const WelcomeSection = dynamic(() => import('./WelcomeSection'));
const LogInSection = dynamic(() => import('./LogInSection'));
// const AboutAuthor = dynamic(() => import('./AboutAuthor'));
// const ReadArticles = dynamic(() => import('./ReadArticles'));

type ArticlePageProps = {
  id: number;
  title: string;
  description: string;
};

const ArticlePage: FC<ArticlePageProps> = ({ title, description }) => {
  return (
    <>
      <WelcomeSection title={title} />

      <Container
        display="flex"
        flexDirection="column"
        maxWidth={1320}
        px={{ base: '16px', xl: '0' }}
        gap={{ base: '36px', md: '80px', xl: '148px' }}>
        <LogInSection description={description} />

        {/* <AboutAuthor /> */}

        {/* <ReadArticles /> */}

        {/* <Flex
          as="section"
          flexDirection="column"
          maxW="506px"
          margin="0 auto"
          mb={{ base: '36px', md: '80px', xl: '148px' }}>
          <Heading
            className={segoe.className}
            mb={{ base: '16px', md: '32px' }}
            lineHeight="normal"
            fontStyle="normal"
            color="#222222"
            fontSize={{ base: '28px', sm: '32px' }}
            fontWeight={700}
            textAlign="center">
            Subscribe to get our Newsletter
          </Heading>
          <InputGroup
            width="100%"
            height="46px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            border="1px solid #C0C0C0"
            padding="4px 4px 4px 16px"
            borderRadius="12px"
            outline="none">
            <Input
              height="100%"
              border="none"
              outline="none"
              _focusVisible={{ border: 'none' }}
              lineHeight="normal"
              fontSize="16px"
              fontWeight={400}
              placeholder="Your Email"
              _placeholder={{ color: '#DEDEDE' }}
            />

            <Button
              borderRadius="6px"
              p="12px 24px"
              lineHeight="14px"
              fontSize="14px"
              fontWeight={600}>
              Subscribe
            </Button>
          </InputGroup>
        </Flex> */}
      </Container>
    </>
  );
};

export default ArticlePage;
