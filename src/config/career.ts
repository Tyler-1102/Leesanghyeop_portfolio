// career
export type CareerItemType = {
  company: string
  title: string
  image?: string
  logo: string
  start: string
  end: string
}

export const careerList: Array<CareerItemType> = [
  {
    company: '공터영어 수지성복점',
    title: '파트타임 영어강사 및 학생관리 | 학습 데이터, 출결, 신규 등록 관리',
    logo: 'teacher',
    start: '2023.12',
    end: '2024.09',
  },
  {
    company: '세미산업(주)',
    title: '생산 공정팀 사원 | 생산 및 물류 업무, 출고·재고 관리,노사협의 참여',
    logo: 'factory',
    start: '2021.03',
    end: '2023.04',
  },
  {
    company: '한국과학기술정보연구원(KISTI)',
    title: '데이터구축참여자 | R&D 데이터 정제 및 품질 검수',
    logo: 'database',
    start: '2020.09',
    end: '2020.12',
  },
]
