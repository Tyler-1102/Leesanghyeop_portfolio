import type { ProjectItemType } from './projects'

export const enName = 'Sanghyeop Lee'
export const enHeadline = 'I learned IT and AI to do HR better.'
export const enIntroduction =
  'I built my HR foundation by studying psychology and labor law. Working on a manufacturing floor and taking part in labor-management councils showed me how much HR matters in practice, and building HR Tech projects at SSAFY — where I learned software development and AI — gave me a clear goal: making HR more efficient. Drawing on hands-on field experience and AI skills, I want to grow into an HR professional who gives employees reliable support.'

export const enProofPoints = [
  {
    label: 'HR Foundation',
    title: 'A people-and-policy perspective',
    description:
      'Psychology and labor-law study shaped how I read organizational behavior, employment standards, wages, contracts, and leave.',
  },
  {
    label: 'Tech Leverage',
    title: 'Turning repetitive work into systems',
    description:
      'After learning software development and AI at SSAFY, I built an HR Tech service that connects attendance, payroll calculation, and AI-powered labor consultation — hands-on practice in making HR work more efficient.',
  },
  {
    label: 'Field Sense',
    title: 'Operational awareness',
    description:
      'Over two years on a manufacturing floor — including labor-management council participation — plus education operations and data review taught me how small errors can disrupt real work.',
  },
]

export const enCapabilityNotes = [
  'Careful attitude toward core HR operations such as onboarding, attendance, leave, payroll, and documentation',
  'Habit of organizing repeated questions and processes into manuals, templates, and prompts',
  'A working style that turns exceptions from the field into the next improvement point',
]

export const enProjectHeadLine = 'HR X IT Projects'
export const enProjectIntro =
  'Through the technical skills I built at SSAFY, I tackled the questions HR practitioners face every day — payroll accuracy, changing jobs, employee growth — and learned how to bring AI and data into real HR work.'

export const enProjects: Array<ProjectItemType> = [
  {
    name: 'NOTAV | HR Tech Labor Management Service',
    description:
      '"Is my paycheck calculated correctly?", "Who is entitled to severance pay?", "I want labor advice that fits my situation." — this project started from three questions part-time workers actually ask. Enter your work conditions and records, and the service diagnoses at a glance whether you meet minimum wage and qualify for weekly holiday pay, annual leave, and severance, with estimated amounts. I translated labor-law standards into calculation logic, verified edge cases like past-midnight shifts, and designed the AI consultation to answer from the user\'s actual work records. Full-stack development, legal-standard review, and final presentation.',
    link: { href: 'github.com/Hyeongnnin/moonsong', label: 'NOTAV Repository' },
    date: '2025.11 - 2025.12',
    category: ['HR Tech'],
    techStack: ['Django', 'Vue 3', 'TypeScript', 'LangChain', 'OpenAI API'],
    tags: ['Payroll Calculation', 'Labor Law', 'AI Consultation'],
  },
  {
    name: 'AI RADAR | Job Impact Analysis Service',
    description:
      'For a service analyzing how AI changes occupations, I designed the prompts and data structure for job-impact analysis: breaking each occupation into core tasks and structuring automation scenarios, remaining human strengths, and future skills with news and paper evidence — the same skeleton as HR job analysis and competency modeling.',
    link: {
      href: 'github.com/Tyler-1102/AIRadar',
      label: 'AI RADAR Repository',
    },
    date: '2026.02 - 2026.03',
    category: ['Data / AI'],
    techStack: ['Python', 'Claude', 'Prompt Engineering'],
    tags: ['Job Analysis', 'Competency Modeling', 'Prompt Design'],
  },
  {
    name: 'E-roun | Child Cognitive Training Platform',
    description:
      'A service that turns children\'s game-like cognitive training into growth data counselors can use. It records response speed and focus alongside correctness, separates per-session and cumulative views, and keeps the AI report as a decision-support tool for counselors. As the front-end developer, I applied feedback from 8 child users and 19 counselor comments — the project won an Excellence Award at SSAFY.',
    link: { href: 'github.com/Tyler-1102/E_roun', label: 'E-roun Repository' },
    date: '2026.04 - 2026.05',
    category: ['People Data'],
    techStack: ['React Native', 'Expo', 'React', 'TypeScript', 'Recharts'],
    tags: ['Growth Data', 'User Feedback', 'Excellence Award'],
  },
  {
    name: 'Kookmin University Big Data Analysis Competition',
    description:
      'Analyzed co-movement between trade items with lagged correlation and forecasted future transaction amounts with LightGBM, reaching the top 16.5% on DACON. End-to-end solo work, from preprocessing to modeling — my foundation for handling HR data.',
    link: {
      href: 'github.com/Tyler-1102/kookmin_bigdata',
      label: 'Kookmin Bigdata Repository',
    },
    date: '2025.11 - 2025.12',
    category: ['Data Analysis'],
    techStack: ['Python', 'Pandas', 'LightGBM'],
    tags: ['HR Analytics Basics', 'Top 16.5%'],
  },
]

export const enAboutMeHeadline =
  'An HR professional who cares for both people and standards.'

export const enAboutParagraphs = [
  'To me, HR is not paperwork. It is the work of setting standards and running operations so people can work with less anxiety inside an organization. I studied psychology to understand motivation and organizational behavior, and built my labor-law fundamentals — labor standards, wages, contracts, and leave — through the labor attorney exam curriculum.',
  'I worked on a manufacturing floor for over two years and took part in labor-management councils. I saw first-hand where company standards and the language of the field meet — and where they clash — and how closely HR operations like payroll, attendance, and scheduling touch employees\' daily lives. Knowing the employee\'s side is where my HR begins.',
  'Since college I have mentored children and teenagers for more than 380 hours, and taught about 30 students at an English academy while managing attendance and progress records. Growth comes from steady attention and good records, not one-off events — an attitude I want to bring to onboarding, training, and culture work.',
  'I also refuse to compromise on precision. Reviewing research data at KISTI showed me how small input errors shake trust in an entire operation, and building NOTAV — a service that diagnoses eligibility for weekly holiday pay, annual leave, and severance — sharpened my labor-law knowledge into practical judgment. Accurate standards, efficient operations, and reliable support for employees: that is the HR professional I am becoming.',
]

export const enStrengths = [
  {
    title: 'HR and Labor-Law Foundation',
    description:
      'I have studied labor standards, wages, contracts, leave, payroll, allowances, and the operational logic behind HR work.',
  },
  {
    title: 'Careful Data Handling',
    description:
      'KISTI data review, SSAFY projects, and ADsP study taught me how much small input errors affect trust in operations.',
  },
  {
    title: 'User-Centered Communication',
    description:
      'Teaching English and mentoring children trained me to explain at the other person’s level and revise based on feedback.',
  },
]

export const enTimeline = [
  'Studied psychology and became interested in motivation and behavior inside organizations.',
  'Studied for the labor attorney exam and learned that HR depends on standards, responsibility, and empathy.',
  'Built IT and AI skills at SSAFY to reduce repeated work and operational exceptions in HR.',
  'Connected work records, calculations, consultation, and documents through the NOTAV project.',
]

export const enExperienceList = [
  {
    company: 'Gongteo English Suji Seongbok',
    title:
      'Part-time English Instructor and Student Management | Learning data, attendance, and enrollment operations',
    logo: 'teacher',
    start: '2023.12',
    end: '2024.09',
  },
  {
    company: 'Semi Industry Co., Ltd.',
    title:
      'Production Process Team | Labor-management council participation, scheduling, shipment, and inventory',
    logo: 'factory',
    start: '2021.03',
    end: '2023.04',
  },
  {
    company: 'KISTI',
    title:
      'Content Curation Center Temporary Staff | R&D data cleaning and quality review',
    logo: 'database',
    start: '2020.09',
    end: '2020.12',
  },
]

export const enLearningList = [
  {
    school: 'SSAFY 14th Python Track',
    major: 'Python, Django, Vue, React, generative AI, and four team projects',
    logo: 'code',
    start: '2025.07',
    end: '2026.05',
  },
  {
    school: 'Ajou University',
    major: 'B.A. in Psychology',
    logo: 'college',
    start: '2018.03',
    end: '2021.02',
  },
  {
    school: 'Labor Attorney Exam and HR Study',
    major:
      'Labor standards, wages, employment contracts, leave, and HR management basics',
    logo: 'scales',
    start: 'Career',
    end: 'Focus',
  },
]
