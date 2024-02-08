import React from 'react';
import { KidsCourseService } from '@/api/services/KidsCourseService';
import KidsCoursePage from '@/components/templates/KidsCoursePage';

const KidsCourse = async ({ params: { title } }: { params: { title: string } }) => {
  const kidsCourse = await KidsCourseService.getKidsCourseItem(title);

  return <KidsCoursePage kidsCourse={kidsCourse} />;
};

export default KidsCourse;
