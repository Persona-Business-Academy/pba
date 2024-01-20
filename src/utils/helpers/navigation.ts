'use client';
import { Topic } from '@prisma/client';
import { KidsCourseGroupListModel } from '@/models/kids-course.model';
import { OfflineCourseListGroupedModel } from '@/models/offline-course.model';
import {
  ABOUT_ROUTE,
  ARTICLES_ROUTE,
  CONTACT_US_ROUTE,
  FOR_KIDS_ROUTE,
  OFFLINE_COURSES_ROUTE,
} from '../constants/routes';
import { NavItem } from '../models/header';

export const getNavigationItems = (
  courseData: OfflineCourseListGroupedModel,
  forKids: KidsCourseGroupListModel,
): NavItem[] => [
  {
    label: 'For Individuals',
    href: OFFLINE_COURSES_ROUTE,
    children: [
      {
        id: 1,
        label: 'Development',
        subLabels: courseData[Topic.DEVELOPMENT],
      },
      {
        id: 2,
        label: 'Design',
        subLabels: courseData[Topic.DESIGN],
      },
      {
        id: 3,
        label: 'Marketing',
        subLabels: courseData[Topic.DIGITAL_MARKETING],
      },
      {
        id: 4,
        label: 'Management',
        subLabels: courseData[Topic.MANAGEMENT],
      },
    ],
    featuredItems: [
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
    ],
  },
  {
    label: 'For Kids',
    href: FOR_KIDS_ROUTE,
    children: [
      {
        id: 1,
        label: 'Development',
        subLabels: forKids[Topic.DEVELOPMENT],
      },
      {
        id: 2,
        label: 'Design',
        subLabels: forKids[Topic.DESIGN],
      },
      {
        id: 3,
        label: 'Robotics',
        subLabels: [],
      },
    ],
    featuredItems: [
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
      {
        categoryName: 'Graphic Design',
        imgPath: '/images/public_available/featured_example.jpg',
      },
    ],
  },
  {
    label: 'Articles',
    href: ARTICLES_ROUTE,
    children: [],
    featuredItems: [],
  },
  {
    label: 'About',
    href: ABOUT_ROUTE,
    children: [],
    featuredItems: [],
  },
  {
    label: 'Contact Us',
    href: CONTACT_US_ROUTE,
    children: [],
    featuredItems: [],
  },
];
