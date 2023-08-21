import { Body, createHandler, Post, ValidationPipe } from 'next-api-decorators';
import { signUp } from '@/lib/prisma/resolvers';
import { SignUpValidation } from '@/validation';

class ReportHandler {
  @Post()
  _signUp(@Body(ValidationPipe) body: SignUpValidation) {
    return signUp(body);
  }
}

export default createHandler(ReportHandler);
