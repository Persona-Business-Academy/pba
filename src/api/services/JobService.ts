import { Job, JobListModel } from '@/models/careers.model';
import { ApplyJobFormValidation } from '@/utils/validation/apply-job';
import $apiClient from '..';

export class JobService {
  static createJobApplicant(jobId: number, jobinput: ApplyJobFormValidation): Promise<boolean> {
    return $apiClient.post(`/job/${jobId}/applicant`, jobinput);
  }
  static getJobList(): Promise<JobListModel> {
    return $apiClient.get(`/job/list`);
  }
  static getJobById(id: string): Promise<Job> {
    return $apiClient.get(`/job/${id}`);
  }
  static getPreSignedUrl(imageKey: string): Promise<{ url: string }> {
    return $apiClient.post('job/get-presigned-url', { imageKey });
  }
}
