import { ApplicantType } from '@prisma/client';
import { NotFoundException } from 'next-api-decorators';
import { ApplyJobFormValidation } from '@/utils/validation/apply-job';
import prisma from '..';

export class JobResolver {
  static async createJobApplicant(jobId: number, data: ApplyJobFormValidation) {
    const { name, email, attachment, motivationLetter, phoneNumber } = data;

    const job = await prisma.job.findUnique({
      where: {
        id: jobId,
      },
    });

    if (!job) {
      throw new NotFoundException('Job with provided id does not exist');
    }

    return prisma.applicant.create({
      data: {
        name,
        email,
        attachment,
        motivationLetter,
        phoneNumber,
        for: ApplicantType.JOB_APPLICANT,
        Job: {
          connect: {
            id: job.id,
          },
        },
      },
    });
  }

  static async getJobList() {
    return prisma.job.findMany();
  }

  static async getJobById(id: number) {
    return prisma.job
      .findUnique({
        where: {
          id,
        },
      })
      .then(res => {
        if (!res) {
          throw new NotFoundException('Job does not exists');
        }
        return res;
      });
  }
}
