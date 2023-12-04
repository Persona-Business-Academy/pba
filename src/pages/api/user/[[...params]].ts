import * as client from '@prisma/client';
import { Body, Catch, createHandler, Post } from 'next-api-decorators';
import { CurrentUser } from '@/lib/prisma/decorators/current-user.decorator';
import { exceptionHandler } from '@/lib/prisma/error';
import { AuthMiddleware } from '@/lib/prisma/middlewares/auth-middleware';
import { UserResolver } from '@/lib/prisma/resolvers';

@Catch(exceptionHandler)
@AuthMiddleware()
class UserHandler {
  @Post('/update-profile')
  async _updateUserProfile(@Body() body: any, @CurrentUser() user: client.User) {
    return UserResolver.updateUserProfile(body, user);
  }
}

export default createHandler(UserHandler);
