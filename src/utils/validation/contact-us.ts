import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ContactUsApplicantFormValidation {
  @IsString()
  @IsNotEmpty({ message: 'First name is required' })
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: 'Last name is required' })
  lastName: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Phone is required' })
  phoneNumber: string;

  @IsString()
  @IsNotEmpty({ message: 'Company is required' })
  company: string;

  @IsString()
  @IsNotEmpty({ message: 'Company is required' })
  message: string;
}
