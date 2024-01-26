import { OfflineCourse } from '@prisma/client';
import { NotFoundException } from 'next-api-decorators';
import { OnlineCoursesQueryParams } from '@/types/queryParams';
import { SkillLevelType } from '@/utils/models/common';
import prisma from '..';

type GroupedCourses = {
  [key: string]: OfflineCourse[];
};

export class OfflineCoursesResolver {
  static async getOfflineCourseList(queryParams: OnlineCoursesQueryParams) {
    const { limit = 10, offset = 0, q, title, duration, ...rest } = queryParams;

    const conditions = [];

    if (title) {
      conditions.push({
        id: {
          in: title.split(',').map(id => +id),
        },
      });
    }

    if (duration) {
      conditions.push({
        totalDuration: {
          in: duration.split(',').map(id => +id),
        },
      });
    }

    if (rest['skill-level']) {
      conditions.push({
        courseLevel: {
          in: rest['skill-level'].split(','),
        },
      });
    }

    if (rest['skill-level']) {
      const skillLevels = rest['skill-level'].split(',') as SkillLevelType[];

      conditions.push({
        courseLevel: {
          in: skillLevels,
        },
      });
    }

    if (q) {
      conditions.push({ title: { contains: q } });
    }

    const whereClause = conditions.length > 0 ? { OR: conditions } : {};

    return prisma.offlineCourse.findMany({
      where: { forKids: false, ...whereClause },
      skip: offset,
      take: limit,
    });
  }
  static async getOfflineCourseById(id: number) {
    const offlineCourse = await prisma.offlineCourse.findUnique({
      where: { id, forKids: false },
      include: {
        OfflineCourseInstructors: true,
        OfflineCourseVideo: true,
        comments: true,
      },
    });

    if (!offlineCourse) {
      throw new NotFoundException('Offline course with provided id does not exist');
    }

    const courseInstructors = await prisma.instructor.findMany({
      where: {
        id: { in: offlineCourse.OfflineCourseInstructors.map(({ instructorId }) => instructorId) },
      },
    });

    const course = { ...offlineCourse, courseInstructors };
    return course;
  }

  static async getOfflineCourseListNames() {
    return prisma.offlineCourse.findMany({
      where: {
        forKids: false,
      },
      select: {
        id: true,
        title: true,
      },
    });
  }

  static async getOfflineCourseGroupedList() {
    const courses = await prisma.offlineCourse.findMany({
      where: {
        forKids: false,
      },
    });

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
      where: {
        forKids: false,
      },
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
      where: {
        forKids: false,
      },
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
