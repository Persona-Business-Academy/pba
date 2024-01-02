import OnlineOfflineCourseList from '@/components/organisms/OnlineOfflineCoursesList';

export default function CoursesFilterLayout({ children }: { children: React.ReactNode }) {
  return <OnlineOfflineCourseList> {children} </OnlineOfflineCourseList>;
}
