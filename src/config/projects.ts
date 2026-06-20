// projects
export const projectHeadLine = 'HR 관점으로 다시 본 프로젝트들'
export const projectIntro =
  '기술을 얼마나 썼는지보다, 어떤 사람의 문제를 어떤 흐름으로 풀었는지를 먼저 보이게 정리했습니다.'

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  date?: string
  logo?: string
  category?: string[]
  tags?: string[]
  image?: string
  techStack?: string[]
  gitStars?: number
  gitForks?: number
}

export const projects: Array<ProjectItemType> = [
  {
    name: 'NOTAV | HR Tech 노무관리 서비스',
    description:
      '파트타임 근로자의 근무 기록을 주휴수당, 야간·연장수당, 연차, 퇴직금 계산과 AI 노무 상담까지 이어지게 만든 HR Tech 프로젝트입니다. 법 기준을 단순히 소개하는 데서 그치지 않고 입력한 근무 기록이 계산과 상담 화면으로 이어지도록 설계했습니다.',
    link: { href: 'github.com/Hyeongnnin/moonsong', label: 'NOTAV Repository' },
    date: '2025.11 - 2025.12',
    category: ['HR Tech'],
    techStack: ['Django', 'Vue 3', 'TypeScript', 'LangChain', 'OpenAI API'],
    tags: ['HR Tech', 'Labor Law', 'AI 상담', 'Payroll'],
  },
  {
    name: 'AI RADAR | 직무 영향도 분석 서비스',
    description:
      '뉴스, 논문, GitHub 데이터를 모아 AI 기술 흐름과 직업별 영향을 보여주는 서비스입니다. 직무별 자동화 가능성, 앞으로 필요한 역량, 사람이 계속 맡아야 할 일을 비교 가능한 항목으로 정리했습니다.',
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
    name: '이로운 | 아동 인지훈련 플랫폼',
    description:
      '아동의 인지훈련 기록과 상담사의 결과 확인·훈련 배정 업무를 연결한 서비스입니다. 정답 여부만 보여주는 대신 반응속도, 풀이 시간, 영역별 변화처럼 상담에 쓸 수 있는 정보를 화면에 담았습니다.',
    link: { href: 'github.com/Tyler-1102/E_roun', label: 'E-roun Repository' },
    date: '2026.04 - 2026.05',
    category: ['People Data'],
    techStack: ['React Native', 'Expo', 'React', 'TypeScript', 'Recharts'],
    tags: ['People Growth', 'Dashboard', 'User Feedback'],
  },
  {
    name: '국민대 빅데이터 분석 경진대회',
    description:
      '무역 품목 간 공행성 관계를 찾고 미래 거래금액을 예측한 데이터 분석 프로젝트입니다. 2022~2025년 통관 데이터를 월 단위로 정리하고 LightGBM 모델로 DACON 상위 16.5%를 기록했습니다.',
    link: { href: 'github.com/Tyler-1102', label: 'GitHub Profile' },
    date: '2025.11 - 2025.12',
    category: ['Data Analysis'],
    techStack: ['Python', 'Pandas', 'LightGBM'],
    tags: ['Data Cleaning', 'Forecasting', 'Top 16.5%'],
  },
]

export const githubProjects: Array<ProjectItemType> = [
  {
    name: 'NOTAV',
    description:
      '근태, 급여 계산, 노무 상담을 한 흐름으로 묶은 HR Tech 프로젝트입니다.',
    link: { href: 'github.com/Hyeongnnin/moonsong', label: 'NOTAV' },
  },
  {
    name: 'AI RADAR',
    description:
      'AI 기술 흐름을 직무 변화와 필요한 역량 관점에서 정리한 프로젝트입니다.',
    link: { href: 'github.com/Tyler-1102/AIRadar', label: 'AI RADAR' },
  },
  {
    name: 'E-roun',
    description:
      '아동 훈련 기록을 상담사가 읽기 쉬운 대시보드로 옮긴 프로젝트입니다.',
    link: { href: 'github.com/Tyler-1102/E_roun', label: 'E-roun' },
  },
]
