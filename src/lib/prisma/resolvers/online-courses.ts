import { NotFoundException } from 'next-api-decorators';
import { OnlineCoursesQueryParams } from '@/types/queryParams';
import prisma from '..';

export class OnlineCoursesResolver {
  static async getOnlineCourseList(queryParams: OnlineCoursesQueryParams) {
    const { topic, limit = 10, offset = 0, q } = queryParams;
    const conditions = [];

    if (topic) {
      conditions.push({ topic });
    }
    if (q) {
      conditions.push({ name: { contains: q } });
    }

    const whereClause = conditions.length > 0 ? { OR: conditions } : {};

    const onlineCourses = await prisma.onlineCourse.findMany({
      where: whereClause,
      skip: offset,
      take: limit,
    });

    return onlineCourses;
  }
  static async getOnlineCourseById(id: number) {
    return prisma.onlineCourse.findUnique({ where: { id } }).then(existingOnlineCourse => {
      if (!existingOnlineCourse) {
        throw new NotFoundException('Online course with provided id does not exist');
      }
      return existingOnlineCourse;
    });
  }
}
