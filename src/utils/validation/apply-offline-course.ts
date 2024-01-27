import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ApplyOfflineCourseFormValidation {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Phone is required' })
  phoneNumber: string;
}
