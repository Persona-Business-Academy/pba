import { ApplicantType } from '@prisma/client';
import { ArticleApplicantFormValidation } from '@/utils/validation/article';
import prisma from '..';

export class ArticleResolver {
  static async createArticleApplicant(data: ArticleApplicantFormValidation) {
    const { email } = data;

    return prisma.applicant.create({
      data: {
        email,
        for: ApplicantType.ARTICLE_APPLICANT,
      },
    });
  }
}
