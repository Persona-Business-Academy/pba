import OnlineOfflineCourseList from '@/components/organisms/OnlineOfflineCoursesList';
import { CourseFilterProvider } from '@/contexts/CourseFilterContext';

export default function CoursesFilterLayout({ children }: { children: React.ReactNode }) {
  return (
    <CourseFilterProvider>
      <OnlineOfflineCourseList> {children} </OnlineOfflineCourseList>
    </CourseFilterProvider>
  );
}
