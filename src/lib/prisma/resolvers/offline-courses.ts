import { OfflineCourse } from '@prisma/client';
import { NotFoundException } from 'next-api-decorators';
import { OnlineCoursesQueryParams } from '@/types/queryParams';
import prisma from '..';

type GroupedCourses = {
  [key: string]: OfflineCourse[];
};

export class OfflineCoursesResolver {
  static async getOfflineCourseList(queryParams: OnlineCoursesQueryParams) {
    const { topic, limit = 10, offset = 0, q, ...rest } = queryParams;

    const conditions = [];

    if (rest['skill-level']) {
      conditions.push({
        courseLevel: rest['skill-level'],
      });
    }

    if (topic) {
      conditions.push({
        id: {
          in: topic.split(',').map(id => +id),
        },
      });
    }

    if (q) {
      conditions.push({ name: { contains: q } });
    }

    const whereClause = conditions.length > 0 ? { OR: conditions } : {};

    console.log(topic, whereClause.OR);

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
    return course;
  }

  static async getOfflineCourseListNames() {
    return prisma.offlineCourse.findMany({
      select: {
        id: true,
        title: true,
      },
    });
  }

  static async getOfflineCourseGroupedList() {
    const courses = await prisma.offlineCourse.findMany();

    const groupedCourses = courses.reduce((group: GroupedCourses, course: OfflineCourse) => {
      const { topic } = course;
      group[topic] = group[topic] || [];
      group[topic].push(course);
      return group;
    }, {});

    return groupedCourses;
  }

  static async getOfflineCourseSkillsList() {
    // Fetch all course levels from the database
    const courses = await prisma.offlineCourse.findMany({
      select: {
        id: true,
        courseLevel: true,
      },
    });

    const courseLevels = courses.reduce(
      (acc: Array<Pick<OfflineCourse, 'id' | 'courseLevel'>>, cur) => {
        const existingCourseLevel = acc.find(course => course.courseLevel === cur.courseLevel);
        if (!existingCourseLevel) {
          acc.push(cur);
        }
        return acc;
      },
      [],
    );

    return courseLevels;
  }

  static async getOfflineCourseDurationsList() {
    const courses = await prisma.offlineCourse.findMany({
      select: {
        id: true,
        totalDuration: true,
      },
    });

    const courseDurations = courses.reduce(
      (acc: Array<Pick<OfflineCourse, 'id' | 'totalDuration'>>, cur) => {
        const existingCourseLevel = acc.find(course => course.totalDuration === cur.totalDuration);
        if (!existingCourseLevel) {
          acc.push(cur);
        }
        return acc;
      },
      [],
    );

    return courseDurations;
  }
}
