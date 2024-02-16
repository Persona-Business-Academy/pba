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
  founder?: string;
};

export const homePageTrainersData = [
  {
    id: 17,
    firstName: 'Tigran',
    lastName: 'Manukyan',
    position: 'SMM/DM Specialist',
    linkedinAccount: 'https://www.linkedin.com/in/anna-mergeryan-11034716a/',
    biography: `Tigran Manukyan has worked with a number of companies in the fields of Digital Marketing and Social Media Marketing and simultaneously taught at Persona Business Academy. He has taught both offline and online versions. Has extensive experience in various projects such as 
 
      -Profmet LLC/Yerevan Pipe Plant as a chief development officer 
      - US Armenia TV / Armflix TV Streaming Platform  as a chief executive officer 
      - KPI Consulting - Marketing Agency as a Head of Marketing 
      - EcoVille / Solar Energy Company as a PR & Event Manager / Marketing Specialist 
      - Kamar Business Center as a Sales & Marketing Manager / CRM Manager, Technical Control Manager 
 
Along with work, he also teaches in the academy both online and offline platforms and has more than 150 + successfully graduated students.`,
    avatarSrc: '/images/persona/manukyan.svg',
    enrolledStudents: 100,
    graduatedStudents: 80,
  },
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
    position: 'Software Engineer',
    linkedinAccount: 'https://www.linkedin.com/in/boshyan-narek/',
    biography: `Narek Boshyan is a seasoned full-stack developer deeply passionate about software engineering. Narek is specializing in React.js, Redux, Next.js, Node.js, Nest.js, and an array of other leading-edge technologies. His experience in the field spans across various roles, including contributions at companies like CodeInno, Iguan Systems, Upwork, and his current engagement at Persona Business Academy and BeeWeb. These experiences have been instrumental in refining his skills and honing his  expertise in crafting robust and innovative digital solutions.  
    Along with work, he also teaches in the academy both online and offline platforms and has more than 40+ successfully graduated students. `,
  },
];

export const exLeadershipData: MemberType[] = [
  {
    id: 1,
    firstName: 'Tigran',
    lastName: 'Harutyunyan',
    enrolledStudents: 0,
    graduatedStudents: 0,
    avatarSrc: '/images/public_available/tigran_harutyunyan.webp',
    position: `SMM/DM Specialist`,
    founder: `, Co-founder`,
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
    position: 'Business Law Specialist',
    founder: `, Co-founder`,
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
  ...homePageTrainersData,
  {
    id: 16,
    firstName: 'Arayik',
    lastName: 'Paturyan',
    position: 'Project/product Management Specialist',
    linkedinAccount: 'https://www.linkedin.com/in/anna-mergeryan-11034716a/',
    biography: `Arayik Paturyan is a seasoned Project/Product Manager with a rich professional history. Having successfully led projects at tech companies like Sber Health,Mit (Medico - intech),Bitget,Shark Software, Arayik specializes in Agile methodologies and utilizes tools such as Jira,Asana,Trello,Monday.com to streamline project workflows. His strategic mindset and effective communication skills have not only driven successful product launches but also fostered cross-functional collaboration. Arayik's expertise lies in risk management, stakeholder engagement, and fostering innovation. Arayik's expertise teaches students the importance of communication, strategic planning, and utilizing project management tools to drive success.His lessons revolve around effective team management, agile methodologies, and leveraging project management tools for enhanced productivity. Students can gain insights into practical project management, honing skills crucial for success in the dynamic tech industry.`,
    avatarSrc: '/images/persona/Arayik.webp',
    enrolledStudents: 0,
    graduatedStudents: 0,
  },
];

export const teamData: MemberType[] = [
  {
    id: 11,
    firstName: 'Hayk',
    lastName: 'Kyutneryan ',
    enrolledStudents: 0,
    graduatedStudents: 0,
    avatarSrc: '/images/public_available/Hayk_team_member.webp',
    position: 'Software Engineer',
    linkedinAccount: 'https://www.linkedin.com/in/kyutneryan/',
    biography: `Hayk Kyutneryan is a self-taught engineer with 3+ years of experience in developing web and mobile applications using React.js(Next.js), React Native, Node.js Hands on experience in creating components documentation using React.js Exceptional problem-solving, decision-making capabilities and debugging Capable of quickly learning and delivering solutions as an individual and as part of a team Experience in working with remote teams.`,
  },

  {
    id: 9,
    firstName: 'Asya',
    lastName: 'Harutyunyan',
    enrolledStudents: 0,
    graduatedStudents: 0,
    avatarSrc: '/images/public_available/Asya_team_member.webp',
    position: 'Software Engineer',
    linkedinAccount: 'https://www.linkedin.com/in/asya-harutyunyan-8221a7299/',
    biography: `Asya Harutyunyan is a dynamic Front-End Developer with a diverse educational background. Having initially pursued studies in tourism at Yerevan State College of Humanities, she later transitioned to Brusov State University, specializing in social sciences and service. Eager for fresh opportunities and new interests, Asya bravely shifted her focus to the captivating world of development.
    Embarking on her programming journey, Asya began her initial steps in the world of coding, choosing Persona Business Academy as her starting point to learn and enhance her skills. During the course, she delved into fundamental technologies such as HTML, CSS, JavaScript, and React.js. Asya also eagerly took on the challenges of mastering Next.js and TypeScript. Now, she's dedicated to gaining more experience in React.js and Next.js by exploring various online resources.
    Currently, she is working with the PBA team on developing the educational website pba.am. Asya is characterized by her rapid learning ability, making her a dynamic individual who is always prepared to embrace new knowledge and seize fresh opportunities in the constantly evolving field of development.`,
  },
  {
    id: 10,
    firstName: 'Levon',
    lastName: 'Aslanyan',
    enrolledStudents: 0,
    graduatedStudents: 0,
    avatarSrc: '/images/public_available/Levon_team_member.webp',
    position: 'Software Engineer',
    linkedinAccount: 'https://www.linkedin.com/in/levon-aslanyan-4b093525b/',
    biography: ` 
    Levon Aslanyan is a dynamic Front-End Developer who embarked on an unconventional educational journey. Choosing to dive into the world of programming, Levon kickstarted his coding adventure at Persona Business Academy, where he meticulously studied HTML, CSS, JavaScript, and React.js. His passion for technology and innovation led him to master advanced technologies like Next.js and TypeScript, showcasing his dedication to staying ahead in the fast-paced field of development. 
    Currently, Levon is an integral part of the PBA team, contributing his skills to enhance the educational website pba.am. His rapid learning ability and adaptability make him a valuable asset, always ready to tackle new challenges and explore emerging trends in the dynamic realm of development. Levon's unique educational background highlights his commitment to acquiring practical knowledge and showcases his ability to thrive in the ever-evolving field of front-end development.`,
  },
  {
    id: 8,
    firstName: 'Narek',
    lastName: 'Boshyan',
    enrolledStudents: 0,
    graduatedStudents: 0,
    avatarSrc: '/images/public_available/Narek_team_member_img.webp',
    position: 'Software Engineer',
    linkedinAccount: 'https://www.linkedin.com/in/boshyan-narek/',
    biography: `Narek Boshyan is a seasoned full-stack developer deeply passionate about software engineering. Narek is specializing in React.js, Redux, Next.js, Node.js, Nest.js, and an array of other leading-edge technologies. His experience in the field spans across various roles, including contributions at companies like CodeInno, Iguan Systems, Upwork, and his current engagement at Persona Business Academy and BeeWeb. These experiences have been instrumental in refining his skills and honing his  expertise in crafting robust and innovative digital solutions.  
    Along with work, he also teaches in the academy both online and offline platforms and has more than 40+ successfully graduated students. `,
  },
  {
    id: 12,
    firstName: 'Daniela',
    lastName: 'Zanazanyan',
    position: 'Content Creator',
    linkedinAccount: 'https://www.linkedin.com/in/daniela-zanazanyan-609a3528b/',
    biography:
      'Daniela Zanazanyan is a passionate and results-driven Social Media Marketing Specialist with a knack for turning digital spaces into engaging communities. With 3+  years of experience in the ever-evolving world of social media, I thrive on creating dynamic strategies that elevate brands and connect them with their audience.She received the SMM scholarship at Persona  Business Academy, where after graduating with honors,went to work as a content specialist.In addition to working with content, she also creates video content and is customer support manager.In parallel, she is engaged in the promotion of several other business pages, as well as the creation of a strategic plan.',
    enrolledStudents: 0,
    avatarSrc: '/images/public_available/dani.webp',
    graduatedStudents: 0,
  },
  {
    id: 13,
    firstName: 'Arman',
    lastName: 'Grigoryan',
    position: 'Graphic Designer',
    linkedinAccount: 'https://www.linkedin.com/in/arman-grigoryan-820164283/ ',
    biography: `Arman Grigoryan is the creative mind of the PBA family, he is the graphic and animation designer of our team. At the moment, he is working on the development of graphic elements and animations for the pba.am website.With a palette of creativity and a canvas of pixels, he embark on a journey to craft designs that captivate, communicate, and inspire.Armed with a degree in senior graphic designer and backed by 2+ years of hands-on experience, he has honed his skills in the art of design. From branding to print, digital to experiential, he has had the privilege of bringing diverse concepts to life, each project adding layers to his tapestry of design expertise.`,
    enrolledStudents: 0,
    avatarSrc: '/images/public_available/arman.webp',
    graduatedStudents: 0,
  },

  {
    id: 14,
    firstName: 'Hripsime ',
    lastName: 'Melkonyan ',
    position: 'Business Development Specialist ',
    linkedinAccount: 'https://www.linkedin.com/in/hripsime-melkonyan-b36a70197',
    biography: `Hripsime Melkonyan is a passionate and results-driven Social Media Marketing Manager with over 5 years of experience in the dynamic world of Digital Marketing. Hripsime's career started with cooperation with German Nexgeon GmbH and Partner companies in Armenia. She worked as a Content Marketing Manager and later as a Campaign Manager at "Performance Media Technology", a partner of Nexgeon GmbH. During almost 4 years of work, she became the position of Digital Marketing Team Lead, managing the marketing activities of the entire team. Being the Digital Marketing Team Lead of the German Nexgeon GmbH, she continued the cooperation with the "Internet Leaders" Partner company of Nexgeon GmbH in Armenia, continuing to manage the Content Marketing, Social Media Marketing, and Affiliate Marketing departments. In addition to working experience with 17 European countries, Hripsime has worked with a number of businesses in Armenia as a freelance Social Media Marketing Manager.`,
    enrolledStudents: 0,
    avatarSrc: '/images/public_available/Rippi_team_member.webp',
    graduatedStudents: 0,
  },
  {
    id: 15,
    firstName: 'Anna',
    lastName: 'Mergeryan',
    position: 'UI/UX Designer',
    linkedinAccount: 'https://www.linkedin.com/in/anna-mergeryan-11034716a/',
    biography: `Anna Meregeryan, is a UX/UI designer and a key member of our team who played a pivotal role in crafting the user experience and interface for our e-learning platform across web and mobile platforms. With a keen understanding of user-centric design principles, Anna seamlessly translated complex educational concepts into intuitive and visually appealing interfaces.  
    Anna demonstrated exceptional creativity in balancing aesthetics with functionality, resulting in a design that engages and guides learners effectively.  
    As a creative Graphic and UX/UI Designer, Anna thrives on transforming ideas into visually compelling experiences that resonate with audiences. With a keen eye for detail and a deep understanding of user-centric design principles, she specialize in creating intuitive and engaging interfaces that elevate user experiences. With long experience in the industry, Anna has had the privilege of collaborating with diverse clients and teams to deliver impactful design solutions across various platforms. From conceptualization to execution, she approach each project with creativity, empathy, and a focus on achieving measurable results.`,
    avatarSrc: '/images/public_available/Anna_team_member.webp',
    enrolledStudents: 0,
    graduatedStudents: 0,
  },
];

export const pbaTeam: Array<MemberType> = teachersData.concat(teamData);
