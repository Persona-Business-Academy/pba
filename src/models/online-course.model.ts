import { Prisma } from '@prisma/client';
import { OnlineCoursesResolver } from '@/lib/prisma/resolvers/online-courses';

export type OnlineCourseListModel = Prisma.PromiseReturnType<
  typeof OnlineCoursesResolver.getOnlineCourseList
>;

export type OnlineCourseItemModel = Prisma.PromiseReturnType<
  typeof OnlineCoursesResolver.getOnlineCourseById
>;
