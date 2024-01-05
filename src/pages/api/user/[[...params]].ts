import { Body, Catch, createHandler, Post, ValidationPipe } from 'next-api-decorators';
import { User } from 'next-auth';
import { CurrentUser } from '@/lib/prisma/decorators/current-user.decorator';
import { exceptionHandler } from '@/lib/prisma/error';
import { AuthMiddleware } from '@/lib/prisma/middlewares/auth-middleware';
import { UserResolver } from '@/lib/prisma/resolvers';
import {
  ChangePasswordValidation,
  GetPresignedUrlInput,
  UserProfileFormValidation,
} from '@/utils/validation';

@Catch(exceptionHandler)
@AuthMiddleware()
class UserHandler {
  @Post('/update-profile')
  updateUserProfile(
    @Body(ValidationPipe) input: UserProfileFormValidation,
    @CurrentUser() user: NonNullable<User>,
  ) {
    return UserResolver.updateUserProfile(input, user);
  }

  @Post('/update-password')
  changeUserPassword(
    @Body(ValidationPipe) input: ChangePasswordValidation,
    @CurrentUser() user: NonNullable<User>,
  ) {
    return UserResolver.changeUserPassword(input, user);
  }

  @Post('/get-presigned-url')
  getPreSignedUrl(
    @Body(ValidationPipe) input: GetPresignedUrlInput,
    @CurrentUser() user: NonNullable<User>,
  ) {
    return UserResolver.getPreSignedUrl(input, user);
  }
}

export default createHandler(UserHandler);
