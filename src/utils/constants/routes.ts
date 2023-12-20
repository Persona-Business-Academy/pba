import AchievementsIcon from 'public/icons/achievements_icon.svg';
import CoursesIcon from 'public/icons/courses_icon.svg';
import HelpIcon from 'public/icons/help_icon.svg';
import LogoutIcon from 'public/icons/logout_icon.svg';
import PaymentsIcon from 'public/icons/payments_icon.svg';
import PbaCreditIcon from 'public/icons/pba_credit_icon.svg';
import ProfileIcon from 'public/icons/profile_icon.svg';
import SubscriptionIcon from 'public/icons/subscription_icon.svg';
import WishlistIcon from 'public/icons/wishlist_icon.svg';
import { NavItem } from '@/utils/models/header';

export const HOMEPAGE_ROUTE = '/';
export const SIGN_IN_ROUTE = '/signin';
export const SIGN_UP_ROUTE = '/signup';
export const FORGOT_PASSWORD_ROUTE = '/forgot-password';
export const PROFILE_ROUTE = '/profile';
export const COURSES_ROUTE = `${PROFILE_ROUTE}/courses`;
export const ACHIEVEMENTS_ROUTE = `${PROFILE_ROUTE}/achievements`;
export const SUBSCRIPTION_ROUTE = `${PROFILE_ROUTE}/subscription`;
export const WISHLIST_ROUTE = `${PROFILE_ROUTE}/wishlist`;
export const PBA_CREDIT_ROUTE = `${PROFILE_ROUTE}/pba-credit`;
export const PAYMENTS_ROUTE = `${PROFILE_ROUTE}/payments`;
export const HELP_ROUTE = `${PROFILE_ROUTE}/help`;
export const PRICING_ROUTE = '/pricing';
export const ABOUT_ROUTE = '/about';
export const CONTACT_US_ROUTE = '/contact-us';
export const TERMS_AND_CONDITIONS_ROUTE = '/terms-and-conditions';
export const LEADERSHIP_ROUTE = '/leadership';
export const CAREERS_ROUTE = '/careers';
export const INDIVIDUALS_ROUTE = '/individuals';
export const ONLINE_COURSES_ROUTE = '/online-courses';
export const OFFLINE_COURSES_ROUTE = '/offline-courses';
export const FOR_KIDS_ROUTE = '/for-kids';
export const VIDEO_COURSES_ROUTE = '/video-courses';
export const ARTICLES_ROUTE = '/articles';

interface LinkItemProps {
  name: string;
  icon: string;
  id: number;
  href?: string;
}
export const linkItems: Array<LinkItemProps> = [
  { id: 1, name: 'Profile', icon: ProfileIcon, href: PROFILE_ROUTE },
  { id: 2, name: 'Courses', icon: CoursesIcon, href: COURSES_ROUTE },
  { id: 3, name: 'Achievements', icon: AchievementsIcon, href: ACHIEVEMENTS_ROUTE },
  { id: 4, name: 'Subscription', icon: SubscriptionIcon, href: SUBSCRIPTION_ROUTE },
  { id: 5, name: 'Wishlist', icon: WishlistIcon, href: WISHLIST_ROUTE },
  { id: 6, name: 'PBA credit', icon: PbaCreditIcon, href: PBA_CREDIT_ROUTE },
  { id: 7, name: 'Payments', icon: PaymentsIcon, href: PAYMENTS_ROUTE },
  { id: 8, name: 'Help', icon: HelpIcon, href: HELP_ROUTE },
  { id: 9, name: 'Log out', icon: LogoutIcon },
];

export const LOGOUT_ID = 9;

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'For Individuals',
    href: ONLINE_COURSES_ROUTE,
    children: [
      {
        id: 1,
        label: 'Development',
        subLabels: [
          {
            subLabelName: 'HTML & CSS',
            children: [],
          },
          {
            subLabelName: 'Javascript',
            children: [],
          },
          {
            subLabelName: 'React.js',
            children: [],
          },
          {
            subLabelName: 'Node.js',
            children: [],
          },
        ],
      },
      {
        id: 2,
        label: 'Design',
        subLabels: [
          {
            subLabelName: 'UI/UX Design',
            children: [],
          },
          {
            subLabelName: 'Graphic Design',
            children: [],
          },
          {
            subLabelName: 'Motion Design',
            children: [],
          },
        ],
      },
      {
        id: 3,
        label: 'Marketing',
        subLabels: [
          {
            subLabelName: 'Social Media Marketing',
            children: [],
          },
          {
            subLabelName: 'Digital Marketing',
            children: [],
          },
          {
            subLabelName: 'Email Marketing',
            children: [],
          },
          {
            subLabelName: 'Google Marketing',
            children: [],
          },
          {
            subLabelName: 'Web Masters',
            children: [],
          },
        ],
      },
      {
        id: 4,
        label: 'Management',
        subLabels: [
          {
            subLabelName: 'HRM',
            children: [],
          },
          {
            subLabelName: 'Project Management',
            children: [],
          },
        ],
      },
      {
        id: 5,
        label: 'Other',
        subLabels: [
          {
            subLabelName: 'Quality Assurance',
            children: [],
          },
        ],
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
        subLabels: [
          {
            subLabelName: 'HTML',
            children: [],
          },
          {
            subLabelName: 'CSS',
            children: [],
          },
          {
            subLabelName: 'JS',
            children: [],
          },
        ],
      },
      {
        id: 2,
        label: 'Design',
        subLabels: [
          {
            subLabelName: 'UI/UX Design',
            children: [],
          },
          {
            subLabelName: 'Graphic Design',
            children: [],
          },
        ],
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
    label: 'Video Courses',
    href: '' && VIDEO_COURSES_ROUTE,
    children: [
      {
        id: 1,
        label: 'Marketing',
        subLabels: [
          {
            subLabelName: ' Social Media Marketing',
            children: [],
          },
          {
            subLabelName: 'Digital Marketing',
            children: [],
          },
          {
            subLabelName: 'Google Marketing',
            children: [],
          },
          {
            subLabelName: 'Google Ads',
            children: [],
          },
          {
            subLabelName: 'Google Analytics',
            children: [],
          },
          {
            subLabelName: 'GTM',
            children: [],
          },
          {
            subLabelName: 'Google AdSense',
            children: [],
          },
          {
            subLabelName: 'Email Marketing',
            children: [],
          },
          {
            subLabelName: 'Email Marketing',
            children: [],
          },
          {
            subLabelName: 'Mailchimp Marketing',
            children: [],
          },
        ],
      },
      {
        id: 2,
        label: 'Programming',
        subLabels: [
          {
            subLabelName: 'Front End Development',
            children: [],
          },
          {
            subLabelName: 'Html & CSS',
            children: [],
          },
          {
            subLabelName: 'JavaScript',
            children: [],
          },
          {
            subLabelName: 'React JS',
            children: [],
          },
          {
            subLabelName: 'Node JS',
            children: [],
          },
        ],
      },
      {
        id: 3,
        label: 'Human Resource Management',
        subLabels: [],
      },
      {
        id: 3,
        label: 'Business Law',
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
    label: 'Pricing',
    href: PRICING_ROUTE,
    children: [],
    featuredItems: [],
  },
  {
    label: 'Articles',
    href: ARTICLES_ROUTE,
    children: [],
    featuredItems: [],
  },
];
