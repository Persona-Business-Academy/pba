'use client';
import { FC, useMemo } from 'react';
import { Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { OfflineCourseService } from '@/api/services/OfflineCourseService';
import { Loading } from '@/components/atoms';
import OfflineCourseItem from '@/components/molecules/OfflineCourseItem';
import { OFFLINE_COURSES_ROUTE } from '@/utils/constants/routes';

type OnlineCoursesProps = {};

const OfflineCourses: FC<OnlineCoursesProps> = () => {
  const params = useSearchParams()!;
  const searchParams = useMemo(() => new URLSearchParams(params), [params]);

  const queryString = useMemo(() => {
    let queryStr = ``;
    searchParams.forEach((value, key) => {
      queryStr += `${key}=${value.toUpperCase()}&`;
    });
    return queryStr;
  }, [searchParams]);

  const { data, isLoading } = useQuery({
    queryKey: ['offline-courses'],
    queryFn: () => OfflineCourseService.getOfflineCourseList(queryString),
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
