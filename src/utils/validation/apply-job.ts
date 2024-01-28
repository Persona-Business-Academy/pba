import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ApplyJobFormValidation {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Phone is required' })
  phoneNumber: string;

  @IsString()
  // @IsNotEmpty({ message: 'Attachment is required' })
  attachment?: string;

  @IsString()
  @IsNotEmpty({ message: 'Motivation later is required' })
  motivationLetter: string;
}
