import { ArticleApplicantFormValidation } from '@/utils/validation/article';
import $apiClient from '..';

export class ArticleService {
  static createArticleApplicant(input: ArticleApplicantFormValidation): Promise<boolean> {
    return $apiClient.post('/article/apply', input);
  }
}
