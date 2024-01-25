'use client';
import { FC } from 'react';
import { Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { OfflineCourseService } from '@/api/services/OfflineCourseService';
import { Loading } from '@/components/atoms';
import OfflineCourseItem from '@/components/molecules/OfflineCourseItem';
import { Course, useCourseFilter } from '@/contexts/CourseFilterContext';
import { OFFLINE_COURSES_ROUTE } from '@/utils/constants/routes';

type OnlineCoursesProps = {
  searchParams: {
    [key: string]: string;
  };
};

const OfflineCourses: FC<OnlineCoursesProps> = ({ searchParams }) => {
  const { courseNames } = useCourseFilter();

  const groupedCourses = courseNames.reduce(
    (group: any, course: Course) => {
      group[course.filterBy] += (group[course.filterBy] ? ',' : '') + course.value;
      return group;
    },
    {
      'skill-level': '',
      duration: '',
      title: '',
    },
  );


  const { data, isLoading } = useQuery({
    queryKey: ['offline-courses', searchParams, groupedCourses],
    queryFn: () =>
      OfflineCourseService.getOfflineCourseList({ ...searchParams, ...groupedCourses }),
  });

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && data && data?.length > 0 ? (
        data?.map(offlineCourse => (
          <Link key={offlineCourse.id} href={`${OFFLINE_COURSES_ROUTE}/${offlineCourse.id}`}>
            <OfflineCourseItem courseData={offlineCourse} />
          </Link>
        ))
      ) : (
        <Text fontWeight="400" fontSize="16px" lineHeight="21.28px" as="span" margin="0">
          No Data
        </Text>
      )}
    </>
  );
};

export default OfflineCourses;
