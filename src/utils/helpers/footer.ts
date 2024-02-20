import { KidsCourseListNamesModel } from '@/models/kids-course.model';
import { OfflineCourseListNamesModel } from '@/models/offline-course.model';
import {
  ABOUT_ROUTE,
  ARTICLES_ROUTE,
  CAREERS_ROUTE,
  CONTACT_US_ROUTE,
  FOR_KIDS_ROUTE,
  LEADERSHIP_ROUTE,
  OFFLINE_COURSES_ROUTE,
} from '@/utils/constants/routes';

export const footerData = (
  offlineCourseListNames: OfflineCourseListNamesModel,
  kidsCourseListNames: KidsCourseListNamesModel,
) => [
  {
    rowTitle: 'Company',
    subNavigation: [
      {
        name: 'About Us',
        href: ABOUT_ROUTE,
      },
      {
        name: 'Contact Us',
        href: CONTACT_US_ROUTE,
      },
      {
        name: 'Leadership',
        href: LEADERSHIP_ROUTE,
      },
    ],
  },
  {
    rowTitle: 'Categories',
    subNavigation: [
      {
        name: 'For Individuals',
        href: OFFLINE_COURSES_ROUTE,
      },
      {
        name: 'For Kids',
        href: FOR_KIDS_ROUTE,
      },
      {
        name: 'Articles',
        href: ARTICLES_ROUTE,
      },
    ],
  },
  {
    rowTitle: 'Offline Courses',
    subNavigation: offlineCourseListNames
      .filter(course => [7, 11, 9, 8, 6].includes(course.id))
      .map(course => ({
        name: course.title,
        href: `${OFFLINE_COURSES_ROUTE}/${course.title.replaceAll(' ', '-')}/${course.id}`,
      })),
  },
  {
    rowTitle: 'For Kids',
    subNavigation: kidsCourseListNames.map(course => ({
      name: course.title,
      href: `${FOR_KIDS_ROUTE}/${course.title.replaceAll(' ', '-')}/${course.id}`,
    })),
  },
  {
    rowTitle: 'Community',
    subNavigation: [
      {
        name: 'Partners',
        href: ABOUT_ROUTE,
      },
      {
        name: 'Job Position',
        href: CAREERS_ROUTE,
      },
      {
        name: 'Careers',
        href: CAREERS_ROUTE,
      },
    ],
  },
];
