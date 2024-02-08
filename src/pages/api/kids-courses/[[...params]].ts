import {
  Body,
  Catch,
  createHandler,
  Get,
  Param,
  Post,
  Query,
  ValidationPipe,
} from 'next-api-decorators';
import { exceptionHandler } from '@/lib/prisma/error';
import { KidsCourseResolver } from '@/lib/prisma/resolvers/kids-courses';
import type { OnlineCoursesQueryParams } from '@/types/queryParams';
import { RequestAnotherTimeValidation } from '@/utils/validation/offline-course';

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
  _getKidsCourseById(@Param('title') title: string) {
    return KidsCourseResolver.getKidsCourseById(title);
  }
  @Post('/:offlineCourseId/request-time')
  _requestAnotherTime(
    @Param('offlineCourseId') offlineCourseId: string,
    @Body(ValidationPipe) body: RequestAnotherTimeValidation,
  ) {
    return KidsCourseResolver.requestAnotherTimeApplicantForOfflineCourse(offlineCourseId, body);
  }
}

export default createHandler(OfflineCourseHandler);
