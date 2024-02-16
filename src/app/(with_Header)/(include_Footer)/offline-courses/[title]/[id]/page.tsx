import React from 'react';
import { redirect } from 'next/navigation';
import { OfflineCourseService } from '@/api/services/OfflineCourseService';
import OfflineCoursePage from '@/components/templates/OfflineCoursePage';
import { HOMEPAGE_ROUTE } from '@/utils/constants/routes';

const OfflineCourse = async ({ params: { id } }: { params: { id: string } }) => {
  const offlineCourse = await OfflineCourseService.getOfflineCourseItem(id);

  if (!offlineCourse) {
    return redirect(HOMEPAGE_ROUTE);
  }

  return <OfflineCoursePage offlineCourse={offlineCourse} />;
};

export default OfflineCourse;
