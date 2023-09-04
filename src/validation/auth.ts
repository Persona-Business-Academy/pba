import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class SignUpValidation {
  @IsString()
  @IsNotEmpty({ message: 'First name is required' })
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: 'Last name is required' })
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @Length(6, 20)
  password: string;
}

export class ForgotPasswordStep1Validation {
  @IsEmail()
  email: string;
}

export class ForgotPasswordStep2Validation {
  @IsString()
  @IsNotEmpty()
  @Length(4)
  otpPassword: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}

export class ForgotPasswordStep3Validation {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 20)
  newPassword: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 20)
  confirmPassword: string;
}
