import React from 'react';
import { OfflineCourseService } from '@/api/services/OfflineCourseService';
import OfflineCoursePage from '@/components/templates/OfflineCoursePage';

const OfflineCourse = async ({ params: { title } }: { params: { title: string } }) => {
  const offlineCourse = await OfflineCourseService.getOfflineCourseItem(title);
  return <OfflineCoursePage offlineCourse={offlineCourse} />;
};

export default OfflineCourse;
