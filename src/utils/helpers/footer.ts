import { OfflineCourseListNamesModel } from '@/models/offline-course.model';
import {
  ABOUT_ROUTE,
  ARTICLES_ROUTE,
  CAREERS_ROUTE,
  CONTACT_US_ROUTE,
  FOR_KIDS_ROUTE,
  INDIVIDUALS_ROUTE,
  LEADERSHIP_ROUTE,
  OFFLINE_COURSES_ROUTE,
  TERMS_AND_CONDITIONS_ROUTE,
} from '@/utils/constants/routes';

export const footerData = (offlineCourseListNames: OfflineCourseListNamesModel) => [
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
      {
        name: 'Careers',
        href: CAREERS_ROUTE,
      },
    ],
  },
  {
    rowTitle: 'Categories',
    subNavigation: [
      {
        name: 'For Individuals',
        href: INDIVIDUALS_ROUTE,
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
    subNavigation: offlineCourseListNames.map(course => ({
      name: course.title,
      href: `${OFFLINE_COURSES_ROUTE}/${course.id}`,
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
        name: 'Become a Teacher',
        href: TERMS_AND_CONDITIONS_ROUTE,
      },
      {
        name: 'Job Position',
        href: TERMS_AND_CONDITIONS_ROUTE,
      },
    ],
  },
];
