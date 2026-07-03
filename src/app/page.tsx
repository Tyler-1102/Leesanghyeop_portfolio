import Link from 'next/link'
import Image from 'next/image'
import { ChevronRightIcon } from 'lucide-react'

import { Container } from '@/components/layout/Container'
import Career from '@/components/home/Career'
import Education from '@/components/home/Education'
import SocialLinks from '@/components/home/SocialLinks'
import { BlogCard } from '@/components/home/BlogCard'
import { ProjectCard } from '@/components/project/ProjectCard'
import { getAllBlogs, type BlogType } from '@/lib/blogs'
import profileImage from '@/images/sanghyeop.jpg'
import {
  blogHeadLine,
  blogIntro,
  headline,
  introduction,
  projectHeadLine,
  projectIntro,
  projects,
} from '@/config/infoConfig'

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

const capabilityNotes = [
  '입퇴사, 근태, 휴가, 급여 같은 기본 HR 운영을 꼼꼼하게 배우고 처리하는 태도',
  '반복되는 문의와 처리 절차를 매뉴얼, 템플릿, 프롬프트로 정리하는 습관',
  '현장의 예외를 그냥 넘기지 않고 다음 개선 포인트로 남기는 방식',
]

export default async function Home() {
  const blogList = (await getAllBlogs()).slice(0, 2)

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

      <section className="my-8 grid max-w-xl grid-cols-1 gap-10 py-6 lg:max-w-none lg:grid-cols-2">
        <div className="space-y-10">
          <Career />
          <Education />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase text-primary">
            How I Work
          </p>
          <h2 className="mt-3 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            기준은 정확하게, 설명은 현장 언어로 하려고 합니다.
          </h2>
          <ul className="mt-6 space-y-4">
            {capabilityNotes.map((note) => (
              <li
                key={note}
                className="rounded-lg border border-muted p-5 text-sm text-muted-foreground"
              >
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto my-4 flex max-w-xl flex-col gap-6 border-t border-muted py-10 lg:max-w-none">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 md:text-5xl">
          {projectHeadLine}
        </h2>
        <p className="mb-6 max-w-2xl text-base text-muted-foreground">
          {projectIntro}
        </p>
        <ul role="list" className="grid grid-cols-1">
          <ProjectCard project={projects[0]} titleAs="h3" />
        </ul>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.slice(1).map((project) => (
            <ProjectCard key={project.name} project={project} titleAs="h3" />
          ))}
        </ul>
      </section>

      {blogList.length > 0 && (
        <section className="my-8 border-t border-muted py-10">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 md:text-5xl">
            {blogHeadLine}
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            {blogIntro}
          </p>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-10 lg:max-w-none lg:grid-cols-2">
            {blogList.map((blog: BlogType) => (
              <BlogCard key={blog.slug} blog={blog} titleAs="h3" />
            ))}
          </div>
          <Link
            href="/blogs"
            className="mt-8 flex flex-row items-center text-sm font-semibold text-primary hover:underline"
          >
            Read more notes
            <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
          </Link>
        </section>
      )}
    </Container>
  )
}
