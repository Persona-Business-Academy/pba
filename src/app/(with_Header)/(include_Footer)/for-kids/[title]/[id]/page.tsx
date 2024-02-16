import React from 'react';
import { redirect } from 'next/navigation';
import { KidsCourseService } from '@/api/services/KidsCourseService';
import KidsCoursePage from '@/components/templates/KidsCoursePage';
import { HOMEPAGE_ROUTE } from '@/utils/constants/routes';

const KidsCourse = async ({ params: { id } }: { params: { id: string } }) => {
  const kidsCourse = await KidsCourseService.getKidsCourseItem(id);

  if (!kidsCourse) {
    return redirect(HOMEPAGE_ROUTE);
  }

  return <KidsCoursePage kidsCourse={kidsCourse} />;
};

export default KidsCourse;
