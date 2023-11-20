import { User } from '@prisma/client';
import { Body, Catch, createHandler, Get, Post } from 'next-api-decorators';
import { CurrentUser } from '@/lib/prisma/decorators/current-user.decorator';
import { exceptionHandler } from '@/lib/prisma/error';
import { AuthMiddleware } from '@/lib/prisma/middlewares/auth-middleware';

@Catch(exceptionHandler)
@AuthMiddleware()
class UserHandler {
  @Post('/update-profile')
  async _updateUserProfile(@Body() body: any) {
    console.log(body, '--------------------');
    // return UserResolver.updateUserProfile(body, user);
  }

  @Get('/get-me')
  async _getMe(@CurrentUser() user: User) {
    return user;
  }
}

export default createHandler(UserHandler);
