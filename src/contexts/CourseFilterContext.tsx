'use client';

import React, {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';

export type Course = {
  id: number;
  name: string;
  value: string;
  filterBy: 'duration' | 'title' | 'skill-level';
};

type CourseFilterState = {
  courseNames: Course[];
  setCourseNameHandler: (course: Course) => void;
  removeCourseNameHandler: (courseId: number) => void;
};

const CourseFilterContext = createContext<CourseFilterState | undefined>(undefined);

export const CourseFilterProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [courseNames, setCourseNames] = useState<Course[]>([]);

  const setCourseNameHandler = useCallback((course: Course) => {
    setCourseNames(prevCourseNames => [...prevCourseNames, course]);
  }, []);

  const removeCourseNameHandler = useCallback((courseId: number) => {
    setCourseNames(prevCourseNames => prevCourseNames.filter(({ id }) => id !== courseId));
  }, []);

  return (
    <CourseFilterContext.Provider
      value={{
        courseNames,
        setCourseNameHandler,
        removeCourseNameHandler,
      }}>
      {children}
    </CourseFilterContext.Provider>
  );
};

export const useCourseFilter = (): CourseFilterState => {
  const context = useContext(CourseFilterContext);

  if (!context) {
    throw new Error('useCourseFilter must be used within a CourseFilterProvider');
  }

  return context;
};
