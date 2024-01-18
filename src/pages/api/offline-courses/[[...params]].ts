import { Catch, createHandler, Get, Param, Query } from 'next-api-decorators';
import { exceptionHandler } from '@/lib/prisma/error';
import { OfflineCoursesResolver } from '@/lib/prisma/resolvers/offline-courses';
import type { OnlineCoursesQueryParams } from '@/types/queryParams';

@Catch(exceptionHandler)
class OfflineCourseHandler {
  @Get('/list')
  _getOfflineCoursesList(@Query() queryParams: OnlineCoursesQueryParams) {
    return OfflineCoursesResolver.getOfflineCourseList(queryParams);
  }

  @Get('/list/names')
  _getOfflineCoursesListNames() {
    return OfflineCoursesResolver.getOfflineCourseListNames();
  }

  @Get('/grouped/list')
  _getOfflineCoursesListGroup() {
    return OfflineCoursesResolver.getOfflineCourseGroupedList();
  }

  @Get('/skills/list')
  _getOfflineCourseSkillList() {
    return OfflineCoursesResolver.getOfflineCourseSkillsList();
  }

  @Get('/durations/list')
  _getOfflineCourseDurationList() {
    return OfflineCoursesResolver.getOfflineCourseDurationsList();
  }

  @Get('/:id')
  _getOfflineCourseById(@Param('id') id: string) {
    return OfflineCoursesResolver.getOfflineCourseById(+id);
  }
}

export default createHandler(OfflineCourseHandler);
