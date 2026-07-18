// ---------------------------------------------------------------------------
// AX 직무 지원용 포트폴리오 데이터 (F&F MLB — AX 전환형 인턴)
//
// 주의: 이 파일은 /print-ax 인쇄 라우트에서만 사용됩니다.
// 사이트 본문(infoConfig / projects / career / education / MDX)은 변경하지 않으며,
// AX 직무에 맞춘 문구는 오직 이 파일 안에서만 재구성합니다.
// ---------------------------------------------------------------------------

export const axProfile = {
  name: '이상협',
  role: 'AX role candidate',
  email: '7176ryu@naver.com',
  github: 'github.com/Tyler-1102',
  headline:
    '데이터로 예측하고, AI로 반복을 줄이고, 리포트로 설득합니다.',
  summary:
    'SSAFY에서 Python·데이터 분석·생성형 AI를 익히며 4회의 팀 프로젝트를 수행했습니다. 무역 거래 데이터로 미래 거래액을 예측(LightGBM, DACON 상위 16.5%)했고, 근로기준법 계산 로직을 자동화한 서비스를 풀스택으로 만들었으며, AI 프롬프트로 직무·트렌드를 구조화해 분석했습니다. 프로젝트를 수행하며 AI 기술을 통해서 사람들의 불편함을 해소하고 더욱 효율화를 추구할 수 있는 방법을 찾는 것이 너무 즐거웠습니다. 현업에서도 비즈니스 효율을 극대화하고 구성원들을 편하게 할 수 있도록 돕는 AX 실무자가 되겠습니다.',
}

// F&F AX 채용 요구사항 ↔ 나의 근거 매핑 (현재 렌더에서는 미사용, 보관용)
export const axRequirementMap: Array<{
  requirement: string
  evidence: string
  proof: string
}> = [
  {
    requirement: 'AI·데이터 기반 카테고리 운영 (판매예측·리오더·재고)',
    evidence:
      '무역 품목 간 공행성을 시차 상관관계로 분석하고 LightGBM으로 미래 거래액을 예측했습니다.',
    proof: '국민대 빅데이터 · DACON 상위 16.5%',
  },
  {
    requirement: '판매/재고/트렌드 데이터 분석 및 인사이트 도출',
    evidence:
      '시계열 전처리 → 분석 기준 설정 → 모델링 → 결과 정리까지 데이터 분석 전 과정 수행. 생산현장에서 출고·재고 관리 실무 경험',
    proof: '국민대 빅데이터 · 세미산업 재고관리',
  },
  {
    requirement: 'Excel·Python·SQL 활용 데이터 시각화 및 리포트 작성',
    evidence:
      'Python·Pandas 분석, Recharts로 회차별/누적 성장 데이터 시각화, PostgreSQL 데이터 모델링, ADsP 취득',
    proof: '이로운 · NOTAV · ADsP',
  },
  {
    requirement: '반복 업무 자동화 스크립트 (Python 등)',
    evidence:
      '수당 산정 기준을 계산 로직으로 자동화하고, 산정 정책을 코드에서 분리해 기준 변경 시 파일만 수정하면 되는 구조 설계',
    proof: 'NOTAV · Django',
  },
  {
    requirement: 'AI 툴을 활용한 업무 효율화',
    evidence:
      '뉴스·논문 데이터를 프롬프트에 주입해 근거 기반 분석을 생성하는 AI 파이프라인 설계. AI 리포트를 판단 보조 도구로 자리매김',
    proof: 'AI RADAR · 이로운 AI 리포트',
  },
]

export type AxProject = {
  name: string
  subtitle: string
  date: string
  role: string
  team?: string
  github: string
  techStack: string[]
  axAngle: string // 이 프로젝트가 AX와 만나는 핵심 한 줄
  highlights: Array<{ value: string; label: string }>
  problem: string
  contributions: Array<{ title: string; body: string }>
  images: Array<{ src: string; caption: string }> // 화면 캡처 + 캡션
  axFit: string // "AX 실무와 만나는 지점"
}

export const axProjects: Array<AxProject> = [
  {
    name: '이로운 | 데이터 기록·리포트 플랫폼',
    subtitle: '아동용 인지훈련과 상담사 전용 시각화된 성장 데이터를 제공하는 앱웹 서비스',
    date: '2026.04 - 2026.05',
    team: '6인 팀',
    role: '프론트엔드 리더 · 발표',
    github: 'github.com/Tyler-1102/E_roun',
    techStack: ['React Native', 'Expo', 'React', 'TypeScript', 'Recharts'],
    axAngle:
      '정답 여부 너머의 수행 데이터를 기록하고 Recharts로 시각화 — 데이터 시각화·리포트 작성',
    highlights: [
      { value: '우수상', label: 'SSAFY 자율프로젝트(삼성전자)' },
      { value: '19건', label: '실사용 피드백 반영' },
      { value: '단일/누적 분리', label: '회차 분석과 장기 추세를 분리 시각화' },
    ],
    problem:
      '보통의 인지훈련 앱의 활동 결과는 대부분 "맞았다/틀렸다"로만 남습니다. 하지만 인지훈련이 아동의 성장을 이끌기 위해선, 아동을 교육하는 분들이 참고할 반응속도, 집중도 같은 과정 데이터가 함께 필요합니다. 이로운은 아동이 태블릿에서 놀이처럼 훈련을 수행하고, 아동을 돌보는 상담사는 그 기록을 대시보드에서 성장 데이터로 확인하는 통합 관리 서비스입니다.',
    contributions: [
      {
        title: '검사가 아니라 놀이처럼 느껴지는 훈련 흐름',
        body: '아동용 앱에서 주의력·기억력·언어·문제해결 4개 영역의 게임형 훈련 화면을 만들었습니다. 아이가 "검사받는다"는 느낌을 받지 않도록 훈련 사이의 동선과 스탬프 보상 구조까지 설계해, 자연스럽게 데이터가 쌓이도록 했습니다.',
      },
      {
        title: '상담사가 실제로 쓰는 데이터 시각화 대시보드',
        body: '프론트엔드 리더로서 상담사 웹을 설계했습니다. 아동 목록, 훈련 일정, 문항별 결과(선택한 답·정답·집중도·반응속도), 누적 통계, 영역별 변화 흐름을 Recharts로 시각화해, 여러 지표가 한 화면에서 한눈에 읽히도록 구성했습니다.',
      },
      {
        title: '단일 회차와 누적 추세의 분리',
        body: '"오늘 이 아이가 어땠나"와 "몇 달간 어떻게 변해왔나"는 다른 질문입니다. 단일 회차 분석과 누적 변화 분석을 화면에서 분리해, 당일 상담과 장기 성장 관리를 서로 다른 관점으로 볼 수 있게 했습니다.',
      },
      {
        title: 'AI 리포트를 판단의 보조 도구로',
        body: 'AI 회차 리포트가 정답 여부만이 아니라 집중도·반응속도 같은 정량 데이터를 근거로 작성되게 하되, "상담사 판단의 대체"가 아니라 "판단을 돕는 보조 도구"로 명확히 자리매김했습니다. AI를 어디까지 신뢰하고 어디서 사람이 개입할지 선을 정한 경험입니다.',
      },
      {
        title: '두 차례 배포와 실사용 피드백 반영',
        body: '실제 아동 8명이 사용하고 상담사 피드백 19건을 받아, 1·2차 배포를 거치며 화면 흐름과 결과 확인 방식을 개선했습니다. 만든 사람의 가정과 현장의 실제 사용이 어떻게 다른지 배웠고, 이 과정을 발표로 정리해 SSAFY 자율프로젝트 우수상을 받았습니다.',
      },
    ],
    images: [
      {
        src: '/images/projects/e-roun/training-map.jpg',
        caption:
          '주의력·기억력·언어·문제해결 4개 영역을 놀이공원 맵으로 구성 — 검사가 아니라 놀이처럼 느껴지게 한 시작 화면',
      },
      {
        src: '/images/projects/e-roun/game-attention.png',
        caption:
          '주의력 GO/NO-GO 게임 — "늑대는 눌러요! 토끼는 기다려요!" 반응 억제를 놀이 규칙으로 바꿨습니다',
      },
      {
        src: '/images/projects/e-roun/game-memory.png',
        caption: '기억력 훈련 — 별의 위치를 기억했다가 같은 자리를 누르는 게임',
      },
      {
        src: '/images/projects/e-roun/game-language.png',
        caption: '언어 훈련 — 이야기 속 단서를 보고 상황에 맞는 답을 고르는 게임',
      },
      {
        src: '/images/projects/e-roun/game-problem.png',
        caption: '문제해결 훈련 — 패턴의 규칙을 찾아 빈칸을 채우는 게임',
      },
      {
        src: '/images/projects/e-roun/focus-chart.png',
        caption:
          '문항별 집중도·반응속도 그래프(Recharts) — 정답 여부 너머의 수행 과정을 데이터로 보여줍니다',
      },
      {
        src: '/images/projects/e-roun/ai-report.png',
        caption:
          'AI 회차 총평과 영역별 분석 — 정량 데이터를 근거로 작성되며, 상담사의 판단을 돕는 보조 도구로 설계했습니다',
      },
    ],
    axFit:
      '본 서비스를 사용하는 상담사 선생님과 아동들이 편한 서비스를 만들고자, 1,2차 배포 및 총 19번의 상담사 피드백을 수집 및 반영했습니다. 여러 지표를 한 화면에서 읽히게 시각화하고, 단기와 장기를 분리해 보여주며, AI 리포트를 실무자의 판단 보조로 설계했습니다.',
  },
  {
    name: 'AI RADAR | 직무·트렌드 영향도 분석 서비스',
    subtitle: '뉴스·논문·GitHub 데이터를 자동 수집·분석해 트렌드와 영향을 구조화한 서비스',
    date: '2026.02 - 2026.03',
    team: '6인 팀',
    role: '데이터 분석 · AI 프롬프트 설계',
    github: 'github.com/Tyler-1102/AIRadar',
    techStack: ['Python', 'Claude', 'Prompt Engineering'],
    axAngle:
      'AI 도구로 쏟아지는 데이터에서 근거 기반 인사이트를 뽑아 같은 형식으로 구조화 — 트렌드 분석·리포트 자동화',
    highlights: [
      { value: '근거 기반', label: '뉴스·논문 키워드 데이터로 분석을 뒷받침' },
      { value: '스키마 설계', label: '분석 결과를 항상 같은 형식으로 구조화' },
      { value: '자동 파이프라인', label: '수집 → 프롬프트 주입 → 구조화 출력' },
    ],
    problem:
      'AI 관련 뉴스와 데이터는 매일 쏟아지지만, 정작 "AI의 발전이 내 직업에는 어떤 영향을 미치지?", "미디어에 잘 나오지 않는, 지금 개발되고 논의되는 최신 AI 기술은 뭐지?"라는 질문에 실제 데이터 기반으로 답해주는 곳은 많지 않다고 생각했습니다. AI RADAR는 뉴스·논문·GitHub 데이터를 자동 수집·분석해 AI 기술 흐름과 직무별 영향을 보여주는 서비스이고, 저는 데이터 분석과 AI 프롬프트 엔지니어링을 맡았습니다.',
    contributions: [
      {
        title: '직업을 핵심업무 단위로 분해',
        body: '"AI가 직업을 대체한다" 같은 명확하지 않은 분석을 지양하고, 직업을 핵심업무(core task) 단위로 분해하고, 업무 하나하나에 대해 AI의 영향을 분석하도록 데이터 구조를 설계했습니다. 덕분에 "이 직업의 어떤 업무가, 어느 수준까지, 어떤 도구로 자동화되는가"까지 구체적으로 답할 수 있습니다.',
      },
      {
        title: '출력 스키마 설계 — 항상 같은 형식의 리포트',
        body: '분석 결과가 실행할 때마다 흔들리지 않도록 출력 스키마를 설계했습니다. 단계별 자동화 시나리오, 자동화 효과, 사람에게 남는 강점, 앞으로 필요한 역량, 추천 도구, 근거 수준까지 — 서로 다른 직업과 업무를 같은 기준으로 나란히 비교할 수 있습니다.',
      },
      {
        title: '근거 기반 분석 — 추측이 아니라 데이터로',
        body: '분석이 그럴듯한 추측이 되지 않도록, 최근 1개월의 뉴스 키워드와 논문 연구 분야 데이터를 프롬프트에 주입해 실제 데이터에 기반한 결과가 나오게 했습니다. AI 예측 트렌드를 실제 시장 동향과 비교하는 백테스팅으로 분석의 신뢰도를 검증했습니다.',
      },
      {
        title: '최신 AI 트렌드 워드클라우드 시각화',
        body: '뉴스·논문·GitHub에서 지금 많이 언급되는 기술 용어를 수집·정제해 주간 키워드 레이더로 시각화하고, Airflow 기반으로 주기적으로 자동 갱신되게 구성했습니다. 트렌드를 사람이 찾아다니는 것이 아니라, 시스템이 정기 리포트로 전달하는 구조입니다.',
      },
    ],
    images: [
      {
        src: '/images/projects/ai-radar/main.png',
        caption:
          '뉴스·논문·GitHub 데이터를 자동 수집해 기술 흐름을 보여주는 메인 화면',
      },
      {
        src: '/images/projects/ai-radar/job-impact.png',
        caption:
          '핵심업무 단위 영향 분석 — 제가 설계한 프롬프트와 데이터 구조가 만들어내는 표준화된 리포트 화면',
      },
      {
        src: '/images/projects/ai-radar/keyword-radar.png',
        caption: '주간 기술 키워드 레이더 — 소스별로 떠오르는 트렌드를 시각화',
      },
      {
        src: '/images/projects/ai-radar/dashboard.png',
        caption:
          'AI 예측 트렌드와 실제 시장 동향을 비교하는 백테스팅 — 분석을 추측이 아닌 데이터로 검증',
      },
    ],
    axFit:
      'AI 도구를 "그럴듯한 문장 생성기"가 아니라 근거 데이터를 넣어 표준화된 인사이트를 뽑는 파이프라인으로 다뤄본 경험입니다. AI 툴로 업무를 효율화하고, 트렌드 데이터에서 인사이트를 도출해 일관된 리포트로 만드는 AX 업무에 그대로 이어집니다.',
  },
  {
    name: 'NOTAV | 노무 기준 자동 진단 서비스',
    subtitle:
      '아르바이트 통합 관리 플랫폼',
    date: '2025.11 - 2025.12',
    role: '풀스택 개발 · 근로기준법 기준 정리·검수 · 발표 (기여도 50%)',
    github: 'github.com/Hyeongnnin/moonsong',
    techStack: ['Django', 'Vue 3', 'TypeScript', 'LangChain', 'OpenAI API'],
    axAngle:
      '사람이 손으로 반복하던 복잡한 계산·판정을 규칙 엔진으로 자동화하고, 예외까지 테스트 코드로 검증 — 반복 업무 자동화의 실전 사례',
    highlights: [
      {
        value: '6종 자동진단',
        label: '최저임금 · 주휴수당 · 야간·연장수당 · 연차 · 퇴직금 · 5인 기준',
      },
      {
        value: '법 조항별 검증',
        label: '자정 넘는 근무, 다중 사업장 등 예외 케이스 테스트',
      },
      {
        value: '개인화 AI 상담',
        label: '실제 근로 기록을 근거로 답하는 AI 에이전트',
      },
    ],
    problem:
      '아르바이트 근로자는 자신의 권리를 확인하기 어렵습니다. "내 급여, 맞게 계산된 걸까?", "퇴직금은 누가 받고 누가 안 받는 거야?" — 법 조문은 어렵고, 검색 결과는 내 상황과 다르고, 전문가 상담은 문턱이 높습니다. NOTAV는 근무 조건과 기록을 입력하면 최저임금 충족 여부, 주휴수당·연차·퇴직금을 받을 수 있는지와 예상 금액까지 한눈에 자동 진단하고, 그 기록이 AI 상담과 근로 문서 관리로 이어지는 서비스입니다. 사람이 매번 손으로 하던 복잡한 계산과 판정을 규칙 엔진으로 자동화했습니다.',
    contributions: [
      {
        title: '복잡한 기준을 계산 로직으로 자동화',
        body: '주휴수당의 요건(주 15시간 이상 + 소정근로일 개근), 주휴시간 산정 방식(소정근로시간 ÷ 소정근로일), 2025년 최저임금 검증, 야간·연장수당 가산, 퇴직금의 평균임금 산정까지 — 법과 노무 자료에서 기준을 직접 정리·검수하고 계산 로직으로 구현했습니다. 사람마다 다른 근무 조건을 입력 한 번으로 동시 진단하는 자동화입니다.',
      },
      {
        title: '예외 케이스까지 테스트 코드로 검증',
        body: '계산이 틀리기 쉬운 경계 상황 — 자정을 넘는 근무, 여러 사업장에서 일하는 경우, 근무 취소 — 을 연차·주휴수당·야간근무·퇴직금 항목별 테스트 코드로 검증했습니다. "자동화된 계산기는 대충 맞으면 안 된다"는 기준으로 만들었습니다.',
      },
      {
        title: '기준과 시스템의 분리 — 변경에 강한 구조',
        body: '수당 산정 기준을 코드에 심지 않고 별도 정책 파일로 분리했습니다. 법이 개정되면 정책 파일만 수정하면 되는 구조로, 기준 관리와 시스템을 분리해 운영 기준 변경에 강한 자동화를 설계했습니다.',
      },
      {
        title: '실데이터를 조회하는 개인화 AI 상담',
        body: 'AI 상담이 일반론으로 답하지 않도록, 사용자의 근로 계약 정보와 최근 급여 계산 내역을 직접 조회하는 도구를 가진 에이전트로 설계했습니다. "저번 달 월급 얼마였어?"라고 물으면 실제 기록을 근거로 답합니다.',
      },
      {
        title: '문서 작성·PDF 자동화',
        body: '이력서 등 근로 관련 서류를 직접 작성하고 실시간 미리보기로 확인한 뒤 PDF로 내려받는 기능을 구현했습니다(jsPDF·html2canvas). 기록에서 문서까지 한 흐름으로 이어지는 업무 자동화입니다.',
      },
    ],
    images: [
      {
        src: '/images/projects/notav/dashboard.png',
        caption:
          '근무 캘린더와 월별 통계 — 일한 시간, 주휴수당, 야간 가산, 급여 예상액이 자동 계산되고, 오른쪽 진단 요약에서 수당별 수급 여부를 한눈에 확인',
      },
      {
        src: '/images/projects/notav/work-info.png',
        caption:
          '사업장 규모(5인 이상 여부), 시급, 공제 방식, 근로 시작일 등 진단의 기준이 되는 근로 조건 입력 화면',
      },
      {
        src: '/images/projects/notav/schedule-form.png',
        caption:
          '요일별 근무·휴게시간 입력 폼 — 자정을 넘는 익일 근무까지 입력하면 계약상 주 소정근로시간이 자동 계산',
      },
      {
        src: '/images/projects/notav/work-record.png',
        caption:
          '날짜별 근로기록 관리 — 22시~06시 근무는 50% 가산수당이 자동 적용되고, 출결 상태가 주휴수당 개근 요건 판단에 연결',
      },
      {
        src: '/images/projects/notav/diagnosis.png',
        caption:
          '주휴수당·가산수당 수급 여부를 요건별(근로자 요건 · 주 15시간 · 개근)로 진단하고, 못 받는 이유까지 데이터로 설명',
      },
      {
        src: '/images/projects/notav/consultation.png',
        caption:
          '사용자의 실제 근로 기록을 근거로 답하는 AI 상담 — 일반론이 아닌 개인화 응답',
      },
      {
        src: '/images/projects/notav/documents.png',
        caption:
          '근로 관련 서류를 작성하고 실시간 미리보기로 확인한 뒤 PDF로 내려받는 문서 자동화 기능',
      },
    ],
    axFit:
      '복잡한 기준을 찾아 검수하고, 계산 로직으로 자동화하고, 예외를 테스트로 검증하고, 기준이 바뀌어도 견디도록 로직과 정책을 분리한 경험입니다. 수작업으로 반복되던 계산·판정·문서 작성을 시스템으로 옮기는 과정 전체를 직접 설계했다는 점에서, 반복 업무를 자동화하고 AI로 효율화하는 AX 업무의 실전 근거입니다.',
  },
  {
    name: '국민대 빅데이터 분석 경진대회',
    subtitle: '무역 품목 간 공행성을 찾아 미래 거래액을 예측한 데이터 분석 프로젝트',
    date: '2025.11 - 2025.12',
    team: '4인 팀',
    role: 'AI 모델 구축',
    github: 'github.com/Tyler-1102/kookmin_bigdata',
    techStack: ['Python', 'Pandas', 'LightGBM'],
    axAngle:
      '선행 지표로 미래 수요를 예측하는 문제 — 판매예측·리오더·재고 운영의 골격',
    highlights: [
      { value: '상위 16.5%', label: 'DACON 리더보드' },
      { value: '3,539쌍', label: '유의미한 공행성 후보쌍 도출' },
      { value: '8개월', label: '최대 시차 상관관계 분석' },
    ],
    problem:
      '어떤 품목의 거래가 늘면, 몇 달 뒤 따라 움직이는 품목이 있습니다. 이 대회는 무역 거래 데이터에서 품목 간 공행성(co-movement)을 찾아, 한 품목의 흐름으로 다른 품목의 미래 거래액을 예측하는 과제였습니다. 저는 실제 데이터로 예측 모델을 다뤄보기 위해 4인 팀으로 참가해 AI 모델 구축을 맡았습니다.',
    contributions: [
      {
        title: '시계열 전처리 — 믿을 수 있는 데이터만 남기기',
        body: '수만 건의 원시 거래 내역을 품목별 월간 거래액으로 집계하고 연월 기준 시계열로 변환했습니다. 거래 이력이 너무 적어 예측이 신뢰할 수 없는 품목은 별도 기준으로 걸러내, 모델이 노이즈가 아닌 실제 신호를 학습하도록 데이터 품질을 먼저 확보했습니다.',
      },
      {
        title: '시차(lag) 상관관계 분석 — 무엇이 무엇을 앞서는가',
        body: '"A 품목이 오르면 몇 달 뒤 B 품목이 오른다"는 선행·후행 관계를 찾기 위해, 최대 8개월까지 시차를 적용한 상관관계 분석을 수행했습니다. 상관계수 임계값 기준을 세워 우연한 상관을 걸러내고, 유의미한 공행성 후보쌍 3,539개를 도출했습니다.',
      },
      {
        title: 'LightGBM 예측 모델 구축',
        body: 'LightGBM 회귀 모델로 품목별 미래 거래액을 예측하고, 그 예측값을 앞서 찾은 공행성 후보쌍과 결합해 최종 제출 데이터를 만들었습니다. 선행 지표(공행성) + 수치 예측(회귀)을 함께 쓰는 구조로, DACON 리더보드 상위 16.5%를 기록했습니다.',
      },
    ],
    images: [],
    axFit:
      '데이터 정제 → 선행 지표 발굴 → 예측 모델링 → 결과 검증까지, 수요 예측의 전 과정을 직접 수행한 경험입니다. "어떤 신호를 보고, 무엇이 얼마나 팔릴지 예측하는가"는 판매예측·리오더·재고 운영의 핵심 질문과 같으며, AX 직무의 카테고리 운영에 직접 활용할 수 있는 역량입니다.',
  },
]

export const axCareer: Array<{
  company: string
  title: string
  start: string
  end: string
  axNote?: string
}> = [
  {
    company: '세미산업(주)',
    title: '생산 공정팀 사원 | 생산·물류, 출고·재고 관리, 노사협의 참여',
    start: '2021.03',
    end: '2023.04',
    axNote: '출고·재고 흐름을 현장에서 직접 다룰 수 있는 경험이었습니다.',
  },
  {
    company: '한국과학기술정보연구원(KISTI)',
    title: '데이터구축참여자 | R&D 데이터 정제 및 품질 검수',
    start: '2020.09',
    end: '2020.12',
    axNote: '작은 입력 오류가 전체 신뢰를 흔든다는 데이터 품질 감각을 습득했습니다.',
  },
  {
    company: '공터영어 수지성복점',
    title: '파트타임 영어강사 | 학습 데이터·출결·신규 등록 관리',
    start: '2023.12',
    end: '2024.09',
    axNote: '약 30여명의 학생의 출결·성취 데이터를 기록·관리하며 데이터 운영 습관을 형성했습니다.',
  },
]

export const axEducation: Array<{
  school: string
  major: string
  start: string
  end: string
}> = [
  {
    school: '삼성청년SW·AI아카데미 14기 Python 트랙',
    major: 'Python, 데이터 분석, 생성형 AI, 팀 프로젝트 4회',
    start: '2025.07',
    end: '2026.05',
  },
  {
    school: '아주대학교',
    major: '심리학과 졸업',
    start: '2018.03',
    end: '2021.02',
  },
]

// 각 프로젝트에서 본인이 실제로 맡은 역할 기준으로 정리 (팀원 담당 인프라는 제외)
export const axSkills: Array<{ group: string; items: string }> = [
  {
    group: '데이터 분석·예측',
    items:
      'Python · pandas · numpy · 시계열 전처리·시차(lag) 상관분석 · LightGBM 회귀 기반 수요·거래액 예측 · SQL(PostgreSQL) · Jupyter',
  },
  {
    group: '생성형 AI·에이전트',
    items:
      '프롬프트 엔지니어링(분류·요약·키워드 추출) · 구조화 출력 스키마 설계(일관된 리포트 형식 보장) · 근거 데이터 주입(그라운딩)으로 추측성 답변 방지 · Tool Calling 기반 AI 에이전트(LangChain — 실데이터 조회 후 응답) · Claude·OpenAI API',
  },
  {
    group: '시각화·리포트 자동화',
    items:
      'Recharts 대시보드(단일 회차/누적 추세 분리 설계) · AI 리포트 자동 생성 파이프라인 · jsPDF·html2canvas 문서 자동화',
  },
  {
    group: '업무 자동화·개발',
    items:
      '반복 판정·계산의 규칙 엔진화(로직·정책 파일 분리로 기준 변경에 대응) · Django·DRF·JWT · Vue 3·React·React Native·TypeScript·Vite',
  },
  {
    group: '협업·커뮤니케이션',
    items:
      'SSAFY 팀 프로젝트 4회 · 프론트엔드 리더 · 대표 발표 다수 · 실사용자 피드백 19건 반영 개선',
  },
]

export const axCertifications: Array<{ name: string; detail: string; date: string }> = [
  { name: '데이터분석 준전문가(ADsP)', detail: '한국데이터산업진흥원', date: '2023.03' },
  { name: 'TOEIC', detail: '940 / 990', date: '2024.12' },
  { name: 'OPIc (영어)', detail: 'Intermediate Mid 3', date: '2026.03' },
]
