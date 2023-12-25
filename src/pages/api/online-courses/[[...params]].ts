import { Catch, createHandler, Get, Param, Query } from 'next-api-decorators';
import { exceptionHandler } from '@/lib/prisma/error';
import { OnlineCoursesResolver } from '@/lib/prisma/resolvers/online-courses';
import type { OnlineCoursesQueryParams } from '@/types/queryParams';

@Catch(exceptionHandler)
class AuthHandler {
  @Get('/list')
  _getOnlineCoursesList(@Query() queryParams: OnlineCoursesQueryParams) {
    return OnlineCoursesResolver.getOnlineCourseList(queryParams);
  }
  @Get('/:id')
  _getOnlineCourseById(@Param('id') id: string) {
    return OnlineCoursesResolver.getOnlineCourseById(+id);
  }
}

export default createHandler(AuthHandler);
