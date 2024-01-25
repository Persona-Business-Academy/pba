import { Prisma } from '@prisma/client';
import { KidsCourseResolver } from '@/lib/prisma/resolvers/kids-courses';

export type KidsCourseListModel = Prisma.PromiseReturnType<
  typeof KidsCourseResolver.getKidsCourseList
>;

export type KidsCourseListNamesModel = Prisma.PromiseReturnType<
  typeof KidsCourseResolver.getOfflineCourseListNames
>;

export type KidsCourseGroupListModel = Prisma.PromiseReturnType<
  typeof KidsCourseResolver.getKidsCourseGroupedList
>;

export type KidsCourseItemModel = Prisma.PromiseReturnType<
  typeof KidsCourseResolver.getKidsCourseById
>;

export type KidsCourse = KidsCourseListModel extends (infer SingleType)[] ? SingleType : never;
