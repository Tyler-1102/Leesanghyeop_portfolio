import Image from 'next/image'

import { Container } from '@/components/layout/Container'
import SocialLinks from '@/components/home/SocialLinks'
import profileImage from '@/images/sanghyeop.jpg'
import { headline, introduction } from '@/config/infoConfig'

const proofPoints = [
  {
    label: 'HR Foundation',
    title: '사람과 제도를 함께 보는 관점',
    description:
      '심리학 전공과 노무사 수험을 거치며 조직 행동, 근로기준법, 임금, 계약, 휴가의 기본기를 쌓았습니다.',
  },
  {
    label: 'Tech Leverage',
    title: '반복 업무를 시스템으로 바꾸는 힘',
    description:
      'SSAFY에서 개발과 AI를 배우고, 근태·급여 계산·AI 노무 상담을 하나로 묶은 HR Tech 서비스를 직접 만들며 업무 효율화를 연습했습니다.',
  },
  {
    label: 'Field Sense',
    title: '현장을 이해하는 운영 감각',
    description:
      '제조현장에서 2년간 근무하며 노사협의에 참여했고, 교육 운영과 데이터 검수를 거치며 작은 입력 오류가 일 전체를 흔들 수 있다는 걸 배웠습니다.',
  },
]

export default function Home() {
  return (
    <Container className="mt-10">
      <section className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_0.78fr] md:items-center">
        <div className="md:pt-10">
          <h1
            aria-label={headline}
            className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl"
          >
            <span className="block">안녕하세요.</span>
            <span className="block">이상협입니다.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-muted-foreground sm:text-base">
            {introduction}
          </p>
          <SocialLinks className="md:mt-8" />
        </div>

        <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-lg border border-muted shadow-sm md:max-w-none">
          <Image
            src={profileImage}
            alt="벚꽃 아래에 서 있는 이상협"
            priority
            sizes="(min-width: 768px) 34vw, 92vw"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </section>

      <section className="mt-14 grid grid-cols-1 gap-6 border-y border-muted py-8 md:grid-cols-3">
        {proofPoints.map((point) => (
          <div key={point.label}>
            <p className="text-xs font-semibold uppercase text-primary">
              {point.label}
            </p>
            <h2 className="mt-3 text-base font-semibold text-zinc-900 dark:text-zinc-100">
              {point.title}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {point.description}
            </p>
          </div>
        ))}
      </section>

    </Container>
  )
}
