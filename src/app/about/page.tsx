import { type Metadata } from 'next'
import Image from 'next/image'

import { aboutMeHeadline, aboutParagraphs } from '@/config/infoConfig'
import { Container } from '@/components/layout/Container'
import SocialLinks from '@/components/about/SocialLinks'
import profileImage from '@/images/sanghyeop.jpg'

export const metadata: Metadata = {
  title: 'About',
  description:
    'HR을 더 잘하고 싶어 IT와 AI를 익힌 이상협의 포트폴리오 소개입니다.',
}

const strengths = [
  {
    title: 'HR·노무 도메인 이해',
    description:
      '근로기준법, 임금, 근로계약, 휴가, 급여·수당 산정 기준을 공부했습니다. NOTAV 프로젝트에서는 그 기준을 실제 서비스 로직으로 옮겼습니다.',
  },
  {
    title: '데이터를 꼼꼼히 보는 습관',
    description:
      'KISTI 데이터 정제, SSAFY 프로젝트, ADsP 학습을 거치며 작은 입력 오류와 예외 처리가 업무 신뢰도에 얼마나 큰 영향을 주는지 배웠습니다.',
  },
  {
    title: '사용자 중심 커뮤니케이션',
    description:
      '영어강사와 아동 멘토링을 하며 상대의 수준과 상황에 맞춰 설명하고 피드백을 받아 계속 고치는 연습을 해왔습니다.',
  },
]

const timeline = [
  '심리학 전공으로 사람의 동기와 조직 내 행동에 관심을 갖게 되었습니다.',
  '노무사 수험 공부를 하며 HR은 선의만이 아니라 기준과 책임으로 움직인다는 점을 배웠습니다.',
  'SSAFY에서 개발과 AI를 익히며 HR 업무의 반복과 예외를 줄일 방법을 고민했습니다.',
  'NOTAV 프로젝트에서는 근로 기록, 계산, 상담, 문서 흐름을 직접 연결해봤습니다.',
]

export default function About() {
  return (
    <Container className="mt-16 sm:mt-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <section>
          <p className="text-sm font-semibold uppercase text-primary">
            About Sanghyeop
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {aboutMeHeadline}
          </h1>
          <div className="mt-8 space-y-6 text-base text-zinc-600 dark:text-zinc-400">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <aside className="space-y-8">
          <div className="overflow-hidden rounded-lg border border-muted shadow-sm">
            <Image
              src={profileImage}
              alt="벚꽃 아래에 서 있는 이상협"
              sizes="(min-width: 1024px) 32vw, 92vw"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <div className="rounded-lg border border-muted p-6">
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              Career Story
            </h2>
            <ol className="mt-5 space-y-4">
              {timeline.map((item, index) => (
                <li key={item} className="grid grid-cols-[2rem_1fr] gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {index + 1}
                  </span>
                  <p className="text-sm text-muted-foreground">{item}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              Contact
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              HR 현장의 불편을 기술로 조금 더 정확하게 풀어내는 일에 관심이
              있습니다.
            </p>
            <SocialLinks />
          </div>
        </aside>
      </div>

      <section className="mt-16 border-t border-muted pt-10">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Core Strengths
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {strengths.map((strength) => (
            <li
              key={strength.title}
              className="rounded-lg border border-muted p-5"
            >
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {strength.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {strength.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  )
}
