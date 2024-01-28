import { Body, Catch, createHandler, Get, Param, Post, ValidationPipe } from 'next-api-decorators';
import { exceptionHandler } from '@/lib/prisma/error';
import { CareersResolver } from '@/lib/prisma/resolvers/careers';
import { JobResolver } from '@/lib/prisma/resolvers/job';
import { ApplyJobFormValidation } from '@/utils/validation/apply-job';

@Catch(exceptionHandler)
class JobHandler {
  @Get('/list')
  _getJobList() {
    return CareersResolver.getJobList();
  }

  @Get('/:jobId')
  _getJobById(@Param('jobId') jobId: string) {
    return JobResolver.getJobById(+jobId);
  }

  @Post('/:jobId/applicant')
  _createJobApplicant(
    @Param('jobId') jobId: string,
    @Body(ValidationPipe) input: ApplyJobFormValidation,
  ) {
    return JobResolver.createJobApplicant(+jobId, input);
  }
}

export default createHandler(JobHandler);
