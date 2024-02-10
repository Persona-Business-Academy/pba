import { FC } from 'react';
import { redirect } from 'next/navigation';
import ArticlePage from '@/components/templates/ArticlePage';
import { articlesData } from '@/utils/constants/articles';
import { HOMEPAGE_ROUTE } from '@/utils/constants/routes';

type ArticlePageProps = {
  params: { articleId: string };
};

const Article: FC<ArticlePageProps> = ({ params: { articleId } }) => {
  const article = articlesData.find(article => article.id === +articleId);

  if (!article) {
    redirect(HOMEPAGE_ROUTE);
  }

  return <ArticlePage {...article} />;
};

export default Article;
