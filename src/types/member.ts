export type MemberType = {
  id: number;
  avatarSrc: string;
  firstName: string;
  lastName: string;
  position: string;
  biography: string;
  enrolledStudents: number;
  graduatedStudents: number;
};

export const exLeadershipData: MemberType[] = [
  {
    id: 1,
    firstName: 'Tigran',
    lastName: 'Harutyunyan',
    enrolledStudents: 0,
    graduatedStudents: 0,
    avatarSrc: '/images/public_available/tigran_harutyunyan.webp',

    position: 'Co-Founder',
    biography:
      ' Tigran Harutyunyan is an Entrepreneur and Startuper with many IT projects, also Digital Marketing Specialist working for many Armenian companies.His  first goal is to create company or startup which can help people to make easier their life, reaching theirneeds in the field of technology and innovation.He has a large experience as a Executor Director leading teams, also as a Digital Marketing specialist in the platforms such as Facebook, Instagram, LinkedIn, Google, Youtube.',
  },
  {
    id: 2,
    firstName: 'Liana',
    avatarSrc: '/images/public_available/lian_manusajyan.webp',
    lastName: 'Manusajyan',
    enrolledStudents: 0,
    graduatedStudents: 0,
    position: 'Co-founder',
    biography: 'Liana Manusajyan biography',
  },
];

export const teachersData: MemberType[] = [
  ...exLeadershipData,
  {
    id: 5,
    enrolledStudents: 0,
    avatarSrc: '/images/public_available/gagik_tamamyan.webp',
    graduatedStudents: 0,
    firstName: 'Gagik',
    lastName: 'Tamamyan',
    position: 'SMM/DM Specialist',
    biography: ` 
    Gagik Tamamyan has worked with a number of companies in the fields of digital marketing and social media marketing and simultaneously taught at Persona Business Academy. 
    Freelance projects: 
    iStyle.am - Facebook and Instagram professional ads, Google ads, Manychat automation 
    Parenting School Armenia (Deep Parenting) - Facebook and Instagram professional ads, Google ads, YouTube channel promotion 
    iCellStore - Facebook and Instagram professional ads, Manychat automation 
    Ecocleaning Armenia - Facebook and Instagram professional ads, Reel making, Content creation 
    Kub Armenia - Facebook and Instagram professional ads, Content creation, Manychat automation 
    I am Wooden - Facebook and Instagram professional ads, Manychat automation 
      
    He has also been teaching at Perosna Business Academy for about 4 years as SMM specialist and has graduated 50+ students. `,
  },
  {
    id: 6,
    firstName: 'Julieta',
    lastName: 'Asatryan',
    enrolledStudents: 0,
    avatarSrc: '/images/public_available/julieta.webp',

    graduatedStudents: 0,
    position: 'HRM Specialist',
    biography: `Julieta Asatryan worked in human resources management with a number of companies and simultaneously taught at Persona Business Academy.
    Certifications and trainings: 
    • "The right people - Science and art of attracting and retaining / Svetlana Ivanova 
     • "Ennegram Practice ICTA Professional Course" • "Interview: Rational or emotional?" 
     • "HR accounting/BDG" 
      
    Projects 
     7 years specialized in the HoReCa sector, 2000+ recruitments, 100+ trainings, team building programs 
     HR head of F&B direction of Galaxy group of companies (Santafe, Paul Armenia, Cofix, Prepa) 
     Head of HR of Santafe, Pahest 33 & Paul Armenia companies within the Galaxy group 
    HR manager of Santafe, Pahest 33 companies within the Galaxy group 
     Breavis Research And Communications Companies as  Interviewer 
     Market Research And Consulting Companies as Quality Control Officer 
     International Marketing Research Companies as Interviewer 
     
    Julieta has also been teaching at Perosna Business Academy for about 3 years as SMM specialist and has graduated 30+ students. `,
  },
  {
    id: 7,
    firstName: 'Narek',
    enrolledStudents: 0,
    avatarSrc: '/images/public_available/narek_boshyan.webp',
    graduatedStudents: 0,
    lastName: 'Boshyan',
    position: 'Full-Stack Developer',
    biography: `Narek Bosyan's biography `,
  },
];

export const teamData: MemberType[] = [
  {
    id: 8,
    firstName: 'Arman',
    lastName: 'Grigoryan',
    position: 'Graphic Designer',
    biography: 'Arman biography',
    enrolledStudents: 0,
    avatarSrc: '/images/public_available/arman.webp',
    graduatedStudents: 0,
  },
  {
    id: 9,
    firstName: 'Daniela',
    lastName: 'Zanazanyan',
    position: 'Content Creator',
    biography: 'Daniela biography',
    enrolledStudents: 0,
    avatarSrc: '/images/public_available/dani.webp',
    graduatedStudents: 0,
  },
];

export const pbaTeam: Array<MemberType> = teachersData.concat(teamData);
