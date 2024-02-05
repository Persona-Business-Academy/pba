import React from 'react';
import { KidsCourseService } from '@/api/services/KidsCourseService';
import KidsCoursePage from '@/components/templates/KidsCoursePage';


const KidsCourse = async ({ params: { id } }: { params: { id: string } }) => {
  const kidsCourse = await KidsCourseService.getKidsCourseItem(id);

  return <KidsCoursePage kidsCourse={kidsCourse} />
};

export default KidsCourse;
