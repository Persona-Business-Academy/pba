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
import { OfflineCoursesResolver } from '@/lib/prisma/resolvers/offline-courses';
import type { OnlineCoursesQueryParams } from '@/types/queryParams';
import { ApplyOfflineCourseFormValidation } from '@/utils/validation/apply-offline-course';
import { RequestAnotherTimeValidation } from '@/utils/validation/offline-course';

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

  @Get('/:title')
  _getOfflineCourseById(@Param('title') title: string) {
    return OfflineCoursesResolver.getOfflineCourseById(title);
  }

  @Post('/:offlineCourseId/apply')
  _applyToOfflineCourse(
    @Param('offlineCourseId') offlineCourseId: string,
    @Body(ValidationPipe) body: ApplyOfflineCourseFormValidation,
  ) {
    return OfflineCoursesResolver.createApplicantForOfflineCourse(offlineCourseId, body);
  }
  @Post('/:offlineCourseId/request-time')
  _requestAnotherTime(
    @Param('offlineCourseId') offlineCourseId: string,
    @Body(ValidationPipe) body: RequestAnotherTimeValidation,
  ) {
    return OfflineCoursesResolver.requestAnotherTimeApplicantForOfflineCourse(
      offlineCourseId,
      body,
    );
  }
}

export default createHandler(OfflineCourseHandler);
