export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'

// personal info
export const name = '이상협'
export const headline = '인사를 더 잘하려고 IT와 AI를 배웠습니다.'
export const introduction =
  '심리학을 공부하고 노무사 시험을 준비하면서 사람과 제도 사이의 일을 가까이 봤습니다. SSAFY에서는 개발과 AI를 배웠습니다. 그 경험을 HR 업무를 더 정확하게 운영하는 데 쓰고 싶습니다. 제 관심은 기술 자체보다 현장에서 반복되는 문제를 줄이는 쪽에 있습니다.'
export const email = '7176ryu@naver.com'
export const githubUsername = 'Tyler-1102'

// about page
export const aboutMeHeadline =
  'HR을 좋아해서, HR에 필요한 기술까지 익히고 있는 이상협입니다.'
export const aboutParagraphs = [
  '저에게 인사는 서류를 처리하는 일보다, 사람이 조직 안에서 덜 불안하게 일하도록 기준을 세우고 운영을 챙기는 일에 가깝습니다. 심리학을 공부하면서 사람의 동기와 조직 행동에 관심을 갖게 됐습니다. 노무사 수험 과정에서는 근로기준법, 임금, 근로계약, 휴가 같은 인사노무의 기본기를 익혔습니다.',
  'SSAFY에 간 것도 개발자로 방향을 바꾸려는 선택은 아니었습니다. 앞으로 HR 담당자도 데이터를 읽고 반복되는 업무를 정리하며 AI 도구를 제대로 써야 한다고 느꼈기 때문입니다.',
  '대표 프로젝트인 NOTAV에서는 근무 기록을 급여·수당 계산, AI 노무 상담, 문서 관리로 이어지게 만들었습니다. 그 과정에서 HR Tech는 기술을 보여주기 위한 말이 아니라, 근로자와 담당자가 덜 헷갈리게 도와주는 방식이라는 걸 배웠습니다.',
  '저는 기술을 앞세우기보다 HR 업무를 더 낫게 만드는 도구로 쓰고 싶습니다. 현장의 말, 노동법의 기준, 데이터의 정확성, 사람을 향한 관심을 함께 가져가는 HR 담당자로 성장하고 싶습니다.',
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
