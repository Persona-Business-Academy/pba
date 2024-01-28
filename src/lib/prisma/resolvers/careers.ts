import prisma from '..';

export class CareersResolver {
  static async getJobList() {
    return prisma.job.findMany();
  }
}
