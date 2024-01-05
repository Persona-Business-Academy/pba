import { Prisma } from '@prisma/client';
import { OfflineCoursesResolver } from '@/lib/prisma/resolvers/offline-courses';

export type OfflineCourseListModel = Prisma.PromiseReturnType<
  typeof OfflineCoursesResolver.getOfflineCourseList
>;

export type OfflineCourseItemModel = Prisma.PromiseReturnType<
  typeof OfflineCoursesResolver.getOfflineCourseById
>;

export type OfflineCourse = OfflineCourseListModel extends (infer SingleType)[]
  ? SingleType
  : never;
