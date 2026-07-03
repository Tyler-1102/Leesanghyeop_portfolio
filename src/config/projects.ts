// projects
export const projectHeadLine = 'HR을 더 잘하기 위해 만든 프로젝트들'
export const projectIntro =
  '저에게 기술은 HR의 도구입니다. 급여 산정의 정확성, 직무의 변화, 구성원의 성장 — 인사담당자가 매일 마주하는 질문을 직접 풀어보며, AI와 데이터를 HR 현장에 쓰는 법을 익혔습니다.'

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
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

export const projects: Array<ProjectItemType> = [
  {
    name: 'NOTAV | HR Tech 노무관리 서비스',
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
