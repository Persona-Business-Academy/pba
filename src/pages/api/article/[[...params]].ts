import { Body, Catch, createHandler, Post, ValidationPipe } from 'next-api-decorators';
import { exceptionHandler } from '@/lib/prisma/error';
import { ArticleResolver } from '@/lib/prisma/resolvers/article';
import { ArticleApplicantFormValidation } from '@/utils/validation/article';

@Catch(exceptionHandler)
class ContactUsHandler {
  @Post('/apply')
  _createArticleApplicant(@Body(ValidationPipe) body: ArticleApplicantFormValidation) {
    return ArticleResolver.createArticleApplicant(body);
  }
}

export default createHandler(ContactUsHandler);
