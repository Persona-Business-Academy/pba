import { Catch, createHandler, Get, Param, Query } from 'next-api-decorators';
import { exceptionHandler } from '@/lib/prisma/error';
import { KidsCourseResolver } from '@/lib/prisma/resolvers/kids-courses';
import type { OnlineCoursesQueryParams } from '@/types/queryParams';

@Catch(exceptionHandler)
class OfflineCourseHandler {
  @Get('/list')
  _getKidsCourseList(@Query() queryParams: OnlineCoursesQueryParams) {
    return KidsCourseResolver.getKidsCourseList(queryParams);
  }

  @Get('/list/names')
  _getKidsCourseListNames() {
    return KidsCourseResolver.getOfflineCourseListNames();
  }

  @Get('/grouped/list')
  _getKidsCourseListGroup() {
    return KidsCourseResolver.getKidsCourseGroupedList();
  }

  @Get('/:id')
  _getKidsCourseById(@Param('id') id: string) {
    return KidsCourseResolver.getKidsCourseById(+id);
  }
}

export default createHandler(OfflineCourseHandler);
