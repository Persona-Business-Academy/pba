import { Prisma } from '@prisma/client';
import { OfflineCoursesResolver } from '@/lib/prisma/resolvers/offline-courses';

export type OfflineCourseListModel = Prisma.PromiseReturnType<
  typeof OfflineCoursesResolver.getOfflineCourseList
>;

export type OfflineCourseListNamesModel = Prisma.PromiseReturnType<
  typeof OfflineCoursesResolver.getOfflineCourseListNames
>;

export type OfflineCourseListGroupedModel = Prisma.PromiseReturnType<
  typeof OfflineCoursesResolver.getOfflineCourseGroupedList
>;

export type OfflineCourseSkillsListModel = Prisma.PromiseReturnType<
  typeof OfflineCoursesResolver.getOfflineCourseSkillsList
>;

export type OfflineCourseDurationsListModel = Prisma.PromiseReturnType<
  typeof OfflineCoursesResolver.getOfflineCourseDurationsList
>;

export type OfflineCourseItemModel = Prisma.PromiseReturnType<
  typeof OfflineCoursesResolver.getOfflineCourseById
>;

export type OfflineCourse = OfflineCourseListModel extends (infer SingleType)[]
  ? SingleType
  : never;
