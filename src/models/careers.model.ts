import { Prisma } from '@prisma/client';
import { JobResolver } from '@/lib/prisma/resolvers/job';

export type JobListModel = Prisma.PromiseReturnType<typeof JobResolver.getJobList>;
export type Job = Prisma.PromiseReturnType<typeof JobResolver.getJobById>;
