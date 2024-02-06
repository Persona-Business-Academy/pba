import React from 'react';
import { OfflineCourseService } from '@/api/services/OfflineCourseService';
import OfflineCoursePage from '@/components/templates/OfflineCoursePage';

const OfflineCourse = async ({ params: { id } }: { params: { id: string } }) => {
  const offlineCourse = await OfflineCourseService.getOfflineCourseItem(id);
  return <OfflineCoursePage offlineCourse={offlineCourse} />;
};

export default OfflineCourse;
