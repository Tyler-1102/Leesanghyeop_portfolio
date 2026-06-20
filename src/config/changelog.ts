// changelog
export const changelogHeadLine = 'Portfolio Changelog'
export const changelogIntro =
  '이상협 HR 포트폴리오로 전환하며 정리한 변경 사항입니다.'

// changelog
export type ChangelogItemType = {
  date: string
  content: Array<{
    title: string
    description: string
  }>
}

export const changelogList: Array<ChangelogItemType> = [
  {
    date: '2026-06-19',
    content: [
      {
        title: 'HR 중심 메시지 재정의',
        description:
          '기존 개발자 템플릿을 이상협의 HR x IT 포트폴리오로 재구성하고, 인사 관심, 노무사 수험, SSAFY, HR Tech 프로젝트로 이어지는 커리어 서사를 반영했습니다.',
      },
      {
        title: '프로젝트 설명 재배치',
        description:
          'NOTAV를 대표 프로젝트로 배치하고 AI RADAR, 이로운, 데이터 분석 프로젝트를 HR·조직·사람 데이터 관점으로 다시 설명했습니다.',
      },
      {
        title: '템플릿 잔여 요소 정리',
        description:
          '원저자 이름, 예시 소셜 링크, 테스트 블로그, 숨은 sitemap 항목을 제거하거나 개인 포트폴리오에 맞게 정리했습니다.',
      },
    ],
  },
]
