// education
export type EducationItemType = {
  school: string
  major: string
  image?: string
  logo: string
  start: string
  end: string
}

export const educationList: Array<EducationItemType> = [
  {
    school: '삼성청년SW·AI아카데미 14기 Python 트랙',
    major: 'Python, Django, Vue, React, 생성형 AI, 팀 프로젝트 4회',
    logo: 'code',
    start: '2025.07',
    end: '2026.05',
  },
  {
    school: '아주대학교',
    major: '심리학과 졸업 | 산업·조직심리학 기반 형성',
    logo: 'college',
    start: '2018.03',
    end: '2021.02',
  },
  {
    school: '노무사 수험 및 인사노무 학습',
    major: '근로기준법, 임금, 근로계약, 휴가, 노무관리 기초',
    logo: 'scales',
    start: 'Career',
    end: 'Focus',
  },
]
