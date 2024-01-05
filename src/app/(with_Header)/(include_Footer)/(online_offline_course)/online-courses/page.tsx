'use client';
import { FC, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { OnlineCourseService } from '@/api/services/OnlineCourseService';

type OnlineCoursesProps = {};

const OnlineCourses: FC<OnlineCoursesProps> = () => {
  const params = useSearchParams()!;
  const searchParams = useMemo(() => new URLSearchParams(params), [params]);

  const queryString = useMemo(() => {
    let queryStr = ``;
    searchParams.forEach((value, key) => {
      queryStr += `${key}=${value}&`;
    });
    return queryStr;
  }, [searchParams]);

  const { data, isLoading } = useQuery({
    queryKey: ['online-courses'],
    queryFn: () => OnlineCourseService.getOnlineCourseList(''),
  });

  return <>Online Courses</>;
};

export default OnlineCourses;
