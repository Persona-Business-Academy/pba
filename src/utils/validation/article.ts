import { IsEmail, IsNotEmpty } from 'class-validator';

export class ArticleApplicantFormValidation {
  @IsEmail()
  @IsNotEmpty({ message: 'Email is required' })
  email: string;
}
