import { ApplicantType } from '@prisma/client';
import { NotFoundException } from 'next-api-decorators';
import { OfflineCourse } from '@/models/offline-course.model';
import { OnlineCoursesQueryParams } from '@/types/queryParams';
import { RequestAnotherTimeValidation } from '@/utils/validation/offline-course';
import prisma from '..';

type GroupedCourses = {
  [key: string]: OfflineCourse[];
};

export class KidsCourseResolver {
  static async getKidsCourseList(queryParams: OnlineCoursesQueryParams) {
    const { limit = 10, offset = 0, q } = queryParams;

    const conditions = [];

    if (q) {
      conditions.push({ title: { contains: q } });
    }

    const whereClause = conditions.length > 0 ? { OR: conditions } : {};

    return prisma.offlineCourse.findMany({
      where: {
        forKids: true,
        ...whereClause,
      },
      skip: offset,
      take: limit,
    });
  }

  static async getOfflineCourseListNames() {
    return prisma.offlineCourse.findMany({
      where: {
        forKids: true,
      },
      select: {
        id: true,
        title: true,
        topic: true,
      },
    });
  }

  static async getKidsCourseById(id: number) {
    const offlineCourse = await prisma.offlineCourse.findUnique({
      where: { id, forKids: true },
      include: {
        OfflineCourseInstructors: true,
        OfflineCourseVideo: true,
        TimeLine: true,
      },
    });

    if (!offlineCourse) {
      throw new NotFoundException('Kids course with provided id does not exist');
    }

    const courseInstructors = await prisma.instructor.findMany({
      where: {
        id: { in: offlineCourse.OfflineCourseInstructors.map(({ instructorId }) => instructorId) },
      },
    });

    const course = { ...offlineCourse, courseInstructors };

    return course;
  }

  static async getKidsCourseGroupedList() {
    const courses = await prisma.offlineCourse.findMany({
      where: {
        forKids: true,
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
  static async requestAnotherTimeApplicantForOfflineCourse(
    offlineCourseId: string,
    data: RequestAnotherTimeValidation,
  ) {
    const { name, email, phoneNumber, startTime, endTime, notes } = data;

    return prisma.applicant.create({
      data: {
        name,
        email,
        phoneNumber,
        courseDesiredStartTime: startTime,
        courseDesiredEndTime: endTime,
        message: notes,
        for: ApplicantType.OFFLINE_COURSE_APPLICANT,
        OfflineCourse: {
          connect: {
            id: +offlineCourseId,
          },
        },
      },
    });
  }
}
