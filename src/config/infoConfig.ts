export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = '이상협'
export const headline = '포트폴리오'
export const introduction =
  '심리학을 공부하고 인사노무를 익히며 HR의 기본을 다졌습니다. 제조현장에서 생산직으로 근무하며 노사협의에 참여한 경험을 통해 인사 업무의 중요성을 체감했고, SSAFY에서 개발과 AI를 배우며 HR Tech 프로젝트를 수행하면서 더 효율적인 HR을 만들고 싶다는 목표가 생겼습니다. 현장 경험과 AI 활용 역량을 바탕으로 구성원을 든든하게 지원하는 HR 전문가로 성장하고자 합니다.'
export const email = 'hyeop7285@gmail.com'
export const phone = '010-9927-7285'
export const githubUsername = 'Tyler-1102'

// about page
export const aboutMeHeadline =
  '사람과 기준을 함께 챙기는 인사담당자, 이상협입니다.'
export const aboutParagraphs = [
  '저에게 인사는 서류를 처리하는 일이 아니라, 구성원이 조직 안에서 덜 불안하게 일하도록 기준을 세우고 운영을 챙기는 일입니다. 심리학을 전공하며 사람의 동기와 조직 행동을 공부했고, 노무사 수험 과정에서 근로기준법, 임금, 근로계약, 휴가 같은 인사노무의 기본기를 다졌습니다.',
  '제조현장에서 2년여 생산직으로 근무하며 노사협의에 참여했습니다. 회사의 기준과 현장의 언어가 어디서 만나고 어디서 어긋나는지 직접 봤고, 급여·근태·일정 같은 인사 운영이 구성원의 하루에 얼마나 가까이 닿아 있는지 체감했습니다. 구성원의 입장을 아는 것이 제 HR의 출발점입니다.',
  '대학 시절부터 380시간 넘게 아동·청소년 교육 멘토링을 이어왔고, 영어학원에서는 약 30명의 학생을 지도하며 출결과 성취도를 관리했습니다. 사람의 성장은 일회성 이벤트가 아니라 꾸준한 관심과 기록에서 만들어진다는 걸 배웠습니다. 온보딩, 교육, 조직문화 업무에 이 태도를 그대로 가져가고 싶습니다.',
  '정확함도 놓치지 않으려 합니다. KISTI에서 연구 데이터를 정제·검수하며 작은 입력 오류가 전체 신뢰를 흔드는 것을 봤고, 주휴수당·연차·퇴직금 수급 여부를 진단하는 서비스 NOTAV를 직접 만들며 인사노무 지식을 실무 감각으로 벼렸습니다. 기준은 정확하게, 운영은 효율적으로, 구성원은 든든하게 — 그런 HR 담당자로 성장하겠습니다.',
]

// blog
export const blogHeadLine = 'HR Thinking Notes'
export const blogIntro =
  '인사, 노무, 데이터, AI를 공부하며 남겨둔 짧은 생각들입니다.'

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
  external?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/Tyler-1102',
    external: true,
  },
]

// https://simpleicons.org/
export const techIcons = [
  'python',
  'django',
  'vuedotjs',
  'react',
  'typescript',
  'javascript',
  'postgresql',
  'openai',
  'apacheairflow',
  'apachekafka',
  'apachespark',
  'pandas',
  'docker',
  'git',
  'github',
  'figma',
  'notion',
  'microsoftoffice',
]
