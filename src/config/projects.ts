// projects
export const projectPageHeadLine = 'Projects'
export const projectPageIntro =
  '사람이 조직에 합류하고, 일하는 방식을 익히고, 더 나은 성과를 내기까지의 과정을 개선한 경험을 정리했습니다. HR 실무 경험과 기술을 활용해 HR의 문제를 풀어본 프로젝트를 함께 담았습니다.'

export const hrProjectHeadLine = 'HR 경험'
export const hrProjectIntro =
  '구성원의 적응과 업무 수행을 돕기 위해 문제를 관찰하고, 교육과 운영 기준으로 전환한 경험입니다.'

export const projectHeadLine = 'HR X IT 프로젝트'
export const projectIntro =
  'SSAFY에서 기술 습득을 통해 급여 산정의 정확성, 직무의 변화, 구성원의 성장 — 인사담당자가 매일 마주하는 질문을 직접 풀어보며, AI와 데이터를 HR 현장에 쓰는 법을 익혔습니다.'

export type ProjectItemType = {
  name: string
  description: string
  link?: { href: string; label: string }
  slug?: string
  date?: string
  logo?: string
  category?: string[]
  tags?: string[]
  image?: string
  techStack?: string[]
  gitStars?: number
  gitForks?: number
}

export const hrProjects: Array<ProjectItemType> = [
  {
    name: '신규 팀원 온보딩 개선 | 협업 업무 표준화',
    description:
      '6인 개발 프로젝트에 합류한 신규 팀원 1명이 Jira 업무 순서와 GitHub Desktop 기반 협업 절차를 어려워하는 상황을 관찰했습니다. 옆에서 업무 흐름을 직접 교육한 뒤, 실제 질문을 바탕으로 Jira 이슈 생성부터 브랜치·MR·머지까지의 절차와 팀 규칙을 매뉴얼로 재작성해 Discord에 공유했습니다. 적용 대상자의 긍정적 피드백은 확인했으며, 반복 질문 감소와 독립 수행까지 걸린 시간은 현재 추가 확인이 필요합니다.',
    slug: 'team-onboarding',
    date: '2026.03',
    category: ['Onboarding'],
    tags: ['온보딩·교육', '업무 표준화', '피드백 기반 개선'],
  },
]

export const projects: Array<ProjectItemType> = [
  {
    name: 'NOTAV | 아르바이트 통합 관리 플랫폼',
    description:
      '"내 급여, 맞게 계산된 걸까?", "퇴직금은 누가 받고 누가 안 받는 거야?", "내 상황에 맞는 편리한 노무상담을 받고 싶어." — 아르바이트 근로자의 질문에서 시작했습니다. 근무 조건과 기록을 입력하면 최저임금 충족 여부, 주휴수당·연차·퇴직금을 받을 수 있는지와 예상 금액까지 한눈에 진단해주는 서비스입니다. 근로기준법 기준을 직접 정리해 계산 로직으로 옮기고 자정을 넘는 근무 같은 예외까지 검증했으며, AI 상담은 사용자의 실제 근로 기록을 근거로 개인화된 답을 하도록 설계했습니다. 풀스택 개발·법 기준 검수·발표 담당.',
    link: { href: 'github.com/Hyeongnnin/moonsong', label: 'NOTAV Repository' },
    slug: 'notav',
    date: '2025.11 - 2025.12',
    category: ['HR Tech'],
    techStack: ['Django', 'Vue 3', 'TypeScript', 'LangChain', 'OpenAI API'],
    tags: ['급여·수당 산정', '근로기준법', 'AI 노무상담'],
  },
  {
    name: 'AI RADAR | 직무 영향도 분석 서비스',
    description:
      "AI가 직무를 어떻게 바꾸는지 분석하는 서비스에서 '직업별 AI 영향 분석'의 프롬프트와 데이터 구조를 설계했습니다. 직업을 핵심업무 단위로 분해하고, 업무별 자동화 시나리오·사람에게 남는 강점·앞으로 필요한 역량을 뉴스·논문 근거와 함께 구조화했습니다.",
    link: {
      href: 'github.com/Tyler-1102/AIRadar',
      label: 'AI RADAR Repository',
    },
    slug: 'ai-radar',
    date: '2026.02 - 2026.03',
    category: ['Data / AI'],
    techStack: ['Python', 'Claude', 'Prompt Engineering'],
    tags: ['직무분석', '역량 모델링', 'AI 프롬프트 설계'],
  },
  {
    name: '이로운 | 아동 인지훈련 플랫폼',
    description:
      '아동이 놀이처럼 수행한 인지훈련 기록을 상담사가 쓸 수 있는 성장 데이터로 바꾼 서비스입니다. 정답 여부만이 아니라 반응속도·집중도까지 기록해 회차별 분석과 누적 변화를 나눠 보여주고, AI 리포트는 상담사의 판단을 돕는 보조 도구로 설계했습니다. 6인 팀에서 프론트엔드 리더, 발표 업무를 맡았고 SSAFY 내 우수상을 받았습니다.',
    link: { href: 'github.com/Tyler-1102/E_roun', label: 'E-roun Repository' },
    slug: 'e-roun',
    date: '2026.04 - 2026.05',
    category: ['People Data'],
    techStack: ['React Native', 'Expo', 'React', 'TypeScript', 'Recharts'],
    tags: ['교육·성장 데이터', '피드백 반영', '우수상'],
  },
  {
    name: '국민대 빅데이터 분석 경진대회',
    description:
      'AI 모델 구축 경험을 위해 4인 팀으로 본 대회에 참가하여 모델 구축 업무를 맡았습니다. 무역 품목 간 공행성을 시차 상관관계로 분석하고 LightGBM으로 미래 거래액을 예측해 DACON 상위 16.5%를 기록했습니다.',
    link: {
      href: 'github.com/Tyler-1102/kookmin_bigdata',
      label: 'Kookmin Bigdata Repository',
    },
    slug: 'kookmin-bigdata',
    date: '2025.11 - 2025.12',
    category: ['Data Analysis'],
    techStack: ['Python', 'Pandas', 'LightGBM'],
    tags: ['HR Analytics 기초', '상위 16.5%'],
  },
]
