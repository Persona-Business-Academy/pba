import { SkillLevel, Topic } from '@prisma/client';

export type QueryParams = {
  'front-end': boolean;
  'back-end': boolean;
  'graphic-design': boolean;
  'ui-ux-design': boolean;
  beginner: boolean;
  intermediate: boolean;
  advanced: boolean;
  100: boolean;
  200: boolean;
  300: boolean;
};

export type OnlineCoursesQueryParams = {
  offset?: number;
  limit?: number;
  q?: string;
  duration?: string;
  topic?: Topic;
  'skill-level'?: SkillLevel;
};
