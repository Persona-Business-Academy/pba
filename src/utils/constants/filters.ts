import { Topic } from '@prisma/client';

export const CACHE_CONFIG = {
  cacheTime: 3600000,
  staleTime: 3600000,
  refetchOnWindowFocus: false,
};

interface CategoryListItem {
  id: number;
  title: string;
  value: string;
}

export interface TopicHandlerItem {
  id: number;
  label: string;
  categoryList: CategoryListItem[];
}

export const topicHandler = (courseData: any): TopicHandlerItem[] => [
  {
    id: 1,
    label: 'Development',
    categoryList: (courseData[Topic.DEVELOPMENT] || []).map((course: CategoryListItem) => ({
      id: course.id,
      title: course.title,
      value: course.title,
    })),
  },
  {
    id: 2,
    label: 'Design',
    categoryList: (courseData[Topic.DESIGN] || []).map((course: CategoryListItem) => ({
      id: course.id,
      title: course.title,
      value: course.title,
    })),
  },
  {
    id: 3,
    label: 'Marketing',
    categoryList: (courseData[Topic.DIGITAL_MARKETING] || []).map((course: CategoryListItem) => ({
      id: course.id,
      title: course.title,
      value: course.title.toLowerCase(),
    })),
  },
  {
    id: 4,
    label: 'Management',
    categoryList: (courseData[Topic.MANAGEMENT] || []).map((course: CategoryListItem) => ({
      id: course.id,
      title: course.title,
      value: course.title.toLowerCase(),
    })),
  },
];
