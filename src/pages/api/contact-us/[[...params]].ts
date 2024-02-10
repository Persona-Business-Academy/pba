import { Body, Catch, createHandler, Post, ValidationPipe } from 'next-api-decorators';
import { exceptionHandler } from '@/lib/prisma/error';
import { ContactUsResolver } from '@/lib/prisma/resolvers/contact-us';
import { ContactUsApplicantFormValidation } from '@/utils/validation/contact-us';

@Catch(exceptionHandler)
class ContactUsHandler {
  @Post('/apply')
  _createContactUsApplicant(@Body(ValidationPipe) body: ContactUsApplicantFormValidation) {
    return ContactUsResolver.createContactUsApplicant(body);
  }
}

export default createHandler(ContactUsHandler);
