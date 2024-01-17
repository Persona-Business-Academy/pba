export type MemberType = {
  id: number;
  avatarSrc: string;
  firstName: string;
  lastName: string;
  position: string;
  biography: string;
  enrolledStudents: number;
  graduatedStudents: number;
  linkedinAccount: string;
};

export const exLeadershipData: MemberType[] = [
  {
    id: 1,
    firstName: 'Tigran',
    lastName: 'Harutyunyan',
    enrolledStudents: 0,
    graduatedStudents: 0,
    avatarSrc: '/images/public_available/tigran_harutyunyan.webp',
    position: `SMM/DM Specialist, Co-Founder`,
    linkedinAccount: 'https://www.linkedin.com/in/tigran-harutyunyan-394baa197/',
    biography: `Tigran Harutyunyan is an entrepreneur and startuper with many IT projects, also Digital Marketing Specialist working for many Armenian companies. His first goal is to create company or startup which can help people to make easier their life, reaching their needs in the field of technology and innovation.He has a large experience as a Executor Director leading teams, also as a Digital Marketing specialist in the platforms such as Facebook, Instagram, LinkedIn, Google, Youtube. Has extensive experience in various projects such as
    - Persona Media Group LLC/Co-Founder
    -NIFNAF Entertainment Media/News company/Co-Founder
    -Persona Business Academy-pba.am/CEO-Founder
    -Persona News America-personanews.us/CEO-Founder
    Along with work, he also teaches in the academy both online and offline platforms and has more than 200 + successfully graduated students`,
  },
  {
    id: 2,
    firstName: 'Liana',
    avatarSrc: '/images/public_available/lian_manusajyan.webp',
    lastName: 'Manusajyan',
    enrolledStudents: 45,
    graduatedStudents: 43,
    position: 'Head of Legal & Branding Department, Co-Founder',
    linkedinAccount: 'https://www.linkedin.com/in/liana-manusajyan-it-tech-lawyer-bb617b13b/',
    biography: `Liana Manusajyan is a Co-Founder & Head of Legal & Branding Department at PBA, Owner of Manusajyan Business & Law firm, Entrepreneur and Licensed Attorney having in portfolio more than 9 years of experience as Business/IT/IP/Tech Lawyer in doing legal consultations, court representations, document making, contracts, NDAs, negotiations, ADR /alternative disputeresolution/ working for many Armenian and foreign companies.   
    She has a large experience in leading teams, using E-Platforms.  
    Liana has extensive experience in various projects such as  
    -Manusajyan Business & Law Firm Founder, CEO, Licensed Advocate in International law,Business/IT/IP/Tech law   
    -Persona Business Academy, Co- Founder, Lawyer, Business Law & ADR trainer   
    - European University in Armenia, Business Law trainer Have a Leadership Certificate from School for Young Leaders, IVLP /USG/ Alumni  
    Along with work, he also teaches in the academy both online and offline platforms and has more than 40+ successfully graduated students`,
  },
];

export const teachersData: MemberType[] = [
  ...exLeadershipData,
  {
    id: 5,
    enrolledStudents: 158,
    avatarSrc: '/images/public_available/gagik_tamamyan.webp',
    graduatedStudents: 135,
    firstName: 'Gagik',
    lastName: 'Tamamyan',
    position: 'SMM/DM Specialist',
    linkedinAccount: 'https://www.linkedin.com/in/gag-tamamyan-72659a166/',
    biography: ` 
    Gagik Tamamyan has worked with a number of companies in the fields of Digital Marketing and Social Media Marketing and simultaneously taught at Persona Business Academy. He  has taught both offline and online versions. Has extensive experience in various projects such as
-Istyle.am - FB and Instagram professional ads, google ads, many chat automation --Parenting School Armeni (Deep Parenting) - FB and Instagram professional ads, google Ads, Youtube Chanel promotion
-iCellstore - FB and Instagram professional ads, many chat automation  
-Ecocleaning Armenia - FB and Instagram professional ads, reel making, content creation 
-Kub Armenia - FB and Instagram professional ads, content creation, many chat automation  
-I am wooden - - FB and Instagram professional ads, many chat automation 
Along with work, he also teaches in the academy both online and offline platforms and has more than 100 + successfully graduated students. `,
  },
  {
    id: 6,
    firstName: 'Julieta',
    lastName: 'Asatryan',
    enrolledStudents: 75,
    avatarSrc: '/images/public_available/julieta.webp',

    graduatedStudents: 68,
    position: 'HRM Specialist',
    linkedinAccount: 'https://www.linkedin.com/in/julieta-asatryan-3a7033150/',
    biography: `Julieta Asatryan  has worked with a number of companies in the field of Human Resource Management and simultaneously taught at Persona Business Academy. She  has taught both offline and online versions.Has extensive experience in the field of human resources 
    • From September 2023 until now – HR head of F&B direction of Galaxy group of companies (Santafe, Paul Armenia, Cofix, Prepa)  
    • August 2022 - 2022 HRM manager of Santafe, Pahest 33 & Paul Armenia companies within the Galaxy group 
    • From March 2018 to 2022, HR manager of Santafe, Pahest 33 companies within the Galaxy group  
    • 2017-2018 Breavis Research And Communications Companies – Interviewer 
    Along with work, he also teaches in the academy both online and offline platforms and has more than 50+ successfully graduated students. `,
  },
  {
    id: 7,
    firstName: 'Narek',
    lastName: 'Boshyan',
    enrolledStudents: 169,
    graduatedStudents: 145,
    avatarSrc: '/images/public_available/narek_boshyan.webp',
    position: 'Full-Stack Developer',
    linkedinAccount: 'https://www.linkedin.com/in/boshyan-narek/',
    biography: `Narek Boshyan is a seasoned full-stack developer deeply passionate about software engineering. Narek is specializing in React.js, Redux, Next.js, Node.js, Nest.js, and an array of other leading-edge technologies. His experience in the field spans across various roles, including contributions at companies like CodeInno, Iguan Systems, Upwork, and his current engagement at Persona Business Academy and BeeWeb. These experiences have been instrumental in refining his skills and honing his  expertise in crafting robust and innovative digital solutions.  
    Along with work, he also teaches in the academy both online and offline platforms and has more than 40+ successfully graduated students. `,
  },
];

export const teamData: MemberType[] = [
  {
    id: 8,
    firstName: 'Arman',
    lastName: 'Grigoryan',
    position: 'Graphic Designer',
    linkedinAccount: '',
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
    linkedinAccount: '',
    biography: 'Daniela biography',
    enrolledStudents: 0,
    avatarSrc: '/images/public_available/dani.webp',
    graduatedStudents: 0,
  },
];

export const pbaTeam: Array<MemberType> = teachersData.concat(teamData);
