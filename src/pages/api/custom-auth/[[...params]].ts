import { Body, Catch, createHandler, Post, ValidationPipe } from 'next-api-decorators';
import { exceptionHandler } from '@/lib/prisma/error';
import { AuthResolver } from '@/lib/prisma/resolvers';
import {
  ForgotPasswordStep1Validation,
  ForgotPasswordStep2Validation,
  ForgotPasswordStep3Validation,
  SignUpValidation,
} from '@/validation';

@Catch(exceptionHandler)
class AuthHandler {
  @Post('/signup')
  _signUp(@Body(ValidationPipe) body: SignUpValidation) {
    return AuthResolver.signUp(body);
  }
  @Post('/forgot-password-first-step')
  _forgotPasswordStep1(@Body(ValidationPipe) body: ForgotPasswordStep1Validation) {
    return AuthResolver.forgotPasswordStep1(body);
  }
  @Post('/forgot-password-second-step')
  _forgotPasswordStep2(@Body(ValidationPipe) body: ForgotPasswordStep2Validation) {
    return AuthResolver.forgotPasswordStep2(body);
  }
  @Post('/forgot-password-third-step')
  _forgotPasswordStep3(@Body(ValidationPipe) body: ForgotPasswordStep3Validation) {
    return AuthResolver.forgotPasswordStep3(body);
  }
}

export default createHandler(AuthHandler);
