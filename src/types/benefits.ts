export type BenefitType = {
  id: number;
  icon: string;
  title: string;
  information: string;
};

export const benefitData: BenefitType[] = [
  {
    id: 1,
    icon: '/images/public_available/benefits_icon1.webp',
    title: 'Creativity and Innovation',
    information:
      'Education encourages creativity and innovation, allowing kids to express themselves through coding, design, and digital projects.',
  },
  {
    id: 2,
    icon: '/images/public_available/benefits_icon2.webp',
    title: 'Team Collaboration',
    information:
      'Many IT projects involve teamwork, teaching kids the importance of collaboration, communication, and collective problem-solving.',
  },
  {
    id: 3,
    icon: '/images/public_available/benefits_icon3.webp',
    title: 'Critical Thinking Skills',
    information: `Learning IT professions enhances kids' critical thinking abilities as they solve problems, debug code, and navigate complex tasks.`,
  },
  {
    id: 4,
    icon: '/images/public_available/benefits_icon4.webp',
    title: 'Future-Ready Skills',
    information:
      'It equips kids with skills essential for the future job market, preparing them for careers in technology and other industries driven by digital innovation.',
  },
];
