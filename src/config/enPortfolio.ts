import type { ProjectItemType } from './projects'

export const enName = 'Sanghyeop Lee'
export const enHeadline = 'I learned IT and AI to do HR better.'
export const enIntroduction =
  'My starting point is HR. I studied psychology and labor law because I wanted to understand people, systems, and the standards that keep work fair. SSAFY gave me the technical tools to turn repeated HR problems into clearer workflows.'

export const enProofPoints = [
  {
    label: 'HR Foundation',
    title: 'A people-and-policy perspective',
    description:
      'Psychology and labor-law study shaped how I read organizational behavior, employment standards, wages, contracts, and leave.',
  },
  {
    label: 'Tech Leverage',
    title: 'Turning work into systems',
    description:
      'At SSAFY, I practiced translating complex procedures into service flows with Python, Django, Vue, React, and generative AI.',
  },
  {
    label: 'Field Sense',
    title: 'Operational awareness',
    description:
      'Production, education operations, and data review taught me how small input errors and unclear schedules can disrupt real work.',
  },
]

export const enStorySteps = [
  {
    period: '01',
    title: 'Interest in HR',
    description:
      'I became interested in HR while thinking about what helps people work with less uncertainty inside an organization.',
  },
  {
    period: '02',
    title: 'Labor Attorney Exam Study',
    description:
      'Studying labor standards, wages, contracts, and leave taught me that HR needs accurate standards as much as empathy.',
  },
  {
    period: '03',
    title: 'SSAFY and AI Skills',
    description:
      'I joined SSAFY because future HR work will require data literacy, system thinking, and a practical understanding of AI tools.',
  },
  {
    period: '04',
    title: 'Connecting It to HR Tech',
    description:
      'In NOTAV, I connected attendance records, payroll calculations, AI labor consultation, and document management in one HR workflow.',
  },
]

export const enCapabilityNotes = [
  'Careful attitude toward core HR operations such as onboarding, attendance, leave, payroll, and documentation',
  'Habit of organizing repeated questions and processes into manuals, templates, and prompts',
  'A working style that turns exceptions from the field into the next improvement point',
]

export const enProjectHeadLine = 'Projects Reframed Through HR'
export const enProjectIntro =
  'I present these projects less as a developer portfolio and more as evidence that I can understand people-related problems and move them into workable systems.'

export const enProjects: Array<ProjectItemType> = [
  {
    name: 'NOTAV | HR Tech Labor Management Service',
    description:
      'An HR Tech project that connects part-time work records to weekly holiday pay, night and overtime allowances, annual leave, severance pay, AI labor consultation, and document handling. I focused on making legal standards usable inside an actual workflow.',
    link: { href: 'github.com/Hyeongnnin/moonsong', label: 'NOTAV Repository' },
    date: '2025.11 - 2025.12',
    category: ['HR Tech'],
    techStack: ['Django', 'Vue 3', 'TypeScript', 'LangChain', 'OpenAI API'],
    tags: ['HR Tech', 'Labor Law', 'AI Consultation', 'Payroll'],
  },
  {
    name: 'AI RADAR | Job Impact Analysis Service',
    description:
      'A service that collects news, papers, and GitHub data to show AI trends and their impact by occupation. It organizes automation potential, future skills, and human-centered work into comparable items.',
    link: {
      href: 'github.com/Tyler-1102/AIRadar',
      label: 'AI RADAR Repository',
    },
    date: '2026.02 - 2026.03',
    category: ['Data / AI'],
    techStack: ['Python', 'FastAPI', 'Claude', 'Spark', 'Kafka', 'Airflow'],
    tags: ['Job Impact', 'AI Trend', 'Prompt Design'],
  },
  {
    name: 'E-roun | Child Cognitive Training Platform',
    description:
      'A platform that connects children’s cognitive training records with counselors’ review and training assignment work. The dashboard focuses on response speed, solving time, and changes by area rather than simple right-or-wrong results.',
    link: { href: 'github.com/Tyler-1102/E_roun', label: 'E-roun Repository' },
    date: '2026.04 - 2026.05',
    category: ['People Data'],
    techStack: ['React Native', 'Expo', 'React', 'TypeScript', 'Recharts'],
    tags: ['People Growth', 'Dashboard', 'User Feedback'],
  },
  {
    name: 'Kookmin University Big Data Analysis Competition',
    description:
      'A data analysis project that identified co-movement patterns between trade items and forecasted future transaction amounts. I organized customs data from 2022 to 2025 and reached the top 16.5% on DACON using LightGBM.',
    link: { href: 'github.com/Tyler-1102', label: 'GitHub Profile' },
    date: '2025.11 - 2025.12',
    category: ['Data Analysis'],
    techStack: ['Python', 'Pandas', 'LightGBM'],
    tags: ['Data Cleaning', 'Forecasting', 'Top 16.5%'],
  },
]

export const enGithubProjects: Array<ProjectItemType> = [
  {
    name: 'NOTAV',
    description:
      'An HR Tech project that connects attendance, payroll calculations, labor consultation, and HR documents.',
    link: { href: 'github.com/Hyeongnnin/moonsong', label: 'NOTAV' },
  },
  {
    name: 'AI RADAR',
    description:
      'A project that explains AI trends through job changes and future capability needs.',
    link: { href: 'github.com/Tyler-1102/AIRadar', label: 'AI RADAR' },
  },
  {
    name: 'E-roun',
    description:
      'A dashboard that turns child training records into information counselors can actually use.',
    link: { href: 'github.com/Tyler-1102/E_roun', label: 'E-roun' },
  },
]

export const enAboutMeHeadline =
  'I am building HR capability with practical IT and AI skills.'

export const enAboutParagraphs = [
  'To me, HR is not just paperwork. It is the work of building standards, reducing uncertainty, and helping people operate inside an organization with more trust. Psychology gave me an interest in motivation and organizational behavior, and labor-law study gave me a foundation in employment standards, wages, contracts, and leave.',
  'I did not join SSAFY to move away from HR. I joined because I believe future HR professionals need to read data, organize repeated work, and use AI tools with judgment.',
  'In NOTAV, I connected work records to payroll, allowances, AI labor consultation, and document management. That experience made HR Tech feel less like a buzzword and more like a way to reduce confusion for both employees and HR managers.',
  'My goal is to become an HR professional who can understand field language, legal standards, data accuracy, and people at the same time.',
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
    company: 'Semi Industry Co., Ltd.',
    title:
      'Production Process Team | Scheduling, shipment, inventory, and cross-team coordination',
    logo: 'factory',
    start: '2021.03',
    end: '2023.04',
  },
  {
    company: 'Gongteo English Suji Seongbok',
    title:
      'English Instructor and Student Management | Learning data, attendance, and enrollment operations',
    logo: 'teacher',
    start: '2023.12',
    end: '2024.09',
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
    major:
      'B.A. in Psychology | Foundation in industrial and organizational psychology',
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
