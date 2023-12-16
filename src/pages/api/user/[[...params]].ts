import { Body, Catch, createHandler, Post, ValidationPipe } from 'next-api-decorators';
import { User } from 'next-auth';
import { CurrentUser } from '@/lib/prisma/decorators/current-user.decorator';
import { exceptionHandler } from '@/lib/prisma/error';
import { AuthMiddleware } from '@/lib/prisma/middlewares/auth-middleware';
import { UserResolver } from '@/lib/prisma/resolvers';
import { ChangePasswordValidation, UserProfileFormValidation } from '@/utils/validation';

@Catch(exceptionHandler)
@AuthMiddleware()
class UserHandler {
  @Post('/update-profile')
  updateUserProfile(
    @Body(ValidationPipe) body: UserProfileFormValidation,
    @CurrentUser() user: NonNullable<User>,
  ) {
    return UserResolver.updateUserProfile(body, user);
  }

  @Post('/update-password')
  changeUserPassword(
    @Body(ValidationPipe) body: ChangePasswordValidation,
    @CurrentUser() user: NonNullable<User>,
  ) {
    return UserResolver.changeUserPassword(body, user);
  }
}

export default createHandler(UserHandler);
