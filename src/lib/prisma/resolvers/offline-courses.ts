import { NotFoundException } from 'next-api-decorators';
import { OnlineCoursesQueryParams } from '@/types/queryParams';
import prisma from '..';

export class OfflineCoursesResolver {
  static async getOfflineCourseList(queryParams: OnlineCoursesQueryParams) {
    const { topic, limit = 10, offset = 0, q } = queryParams;
    const conditions = [];

    if (topic) {
      conditions.push({ topic });
    }
    if (q) {
      conditions.push({ name: { contains: q } });
    }

    const whereClause = conditions.length > 0 ? { OR: conditions } : {};

    const offlineCourses = await prisma.offlineCourse.findMany({
      where: whereClause,
      skip: offset,
      take: limit,
    });

    return offlineCourses;
  }
  static async getOfflineCourseById(id: number) {
    const offlineCourse = await prisma.offlineCourse.findUnique({
      where: { id },
      include: {
        OfflineCourseInstructors: true,
      },
    });

    if (!offlineCourse) {
      throw new NotFoundException('Offline course with provided id does not exist');
    }

    const courseInstructors = await prisma.instructor.findMany({
      where: {
        id: { in: offlineCourse.OfflineCourseInstructors.map(({ id }) => id) },
      },
    });

    const course = { ...offlineCourse, courseInstructors };

    console.log(course);
    return course;
  }
}
