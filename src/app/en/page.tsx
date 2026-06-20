import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRightIcon } from 'lucide-react'

import { Container } from '@/components/layout/Container'
import SocialLinks from '@/components/home/SocialLinks'
import { ProjectCard } from '@/components/project/ProjectCard'
import { CustomIcon } from '@/components/shared/CustomIcon'
import profileImage from '@/images/sanghyeop.jpg'
import {
  enCapabilityNotes,
  enExperienceList,
  enHeadline,
  enIntroduction,
  enLearningList,
  enProjectHeadLine,
  enProjectIntro,
  enProjects,
  enProofPoints,
  enStorySteps,
} from '@/config/enPortfolio'

export const metadata: Metadata = {
  title: 'English Portfolio',
  description: enIntroduction,
  alternates: {
    canonical: '/en',
    languages: {
      'ko-KR': '/',
      'en-US': '/en',
    },
  },
}

function CredentialList({
  title,
  items,
}: {
  title: string
  items: Array<{
    company?: string
    school?: string
    title?: string
    major?: string
    logo: string
    start: string
    end: string
  }>
}) {
  return (
    <div className="rounded-lg border border-muted p-6 shadow-sm">
      <h2 className="text-sm font-semibold">{title}</h2>
      <ol className="mt-6 space-y-4">
        {items.map((item) => (
          <li
            key={`${item.company ?? item.school}-${item.start}`}
            className="flex gap-4"
          >
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-muted bg-background shadow-md">
              <CustomIcon name={item.logo} />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Name</dt>
              <dd className="w-full flex-none text-sm font-medium">
                {item.company ?? item.school}
              </dd>
              <dt className="sr-only">Description</dt>
              <dd className="text-xs text-muted-foreground">
                {item.title ?? item.major}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd className="ml-auto text-xs text-muted-foreground">
                {item.start} - {item.end}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function EnglishHome() {
  return (
    <Container className="mt-10">
      <section className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_0.78fr] md:items-center">
        <div className="md:pt-10">
          <p className="text-sm font-semibold uppercase text-primary">
            HR x IT Portfolio
          </p>
          <h1
            aria-label={enHeadline}
            className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl"
          >
            <span className="block">I learned IT and AI</span>
            <span className="block">to do HR better.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-muted-foreground sm:text-base">
            {enIntroduction}
          </p>
          <SocialLinks className="md:mt-8" />
        </div>

        <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-lg border border-muted shadow-sm md:max-w-none">
          <Image
            src={profileImage}
            alt="Sanghyeop Lee standing under cherry blossoms"
            priority
            sizes="(min-width: 768px) 34vw, 92vw"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </section>

      <section className="mt-14 grid grid-cols-1 gap-6 border-y border-muted py-8 md:grid-cols-3">
        {enProofPoints.map((point) => (
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

      <section className="my-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase text-primary">
            Career Narrative
          </p>
          <h2 className="mt-3 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Technology is how I make HR work clearer.
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            My projects involve software, but my direction is HR. I use
            technology to understand people, policies, and operations more
            precisely.
          </p>
        </div>
        <ol className="space-y-4">
          {enStorySteps.map((step) => (
            <li
              key={step.period}
              className="grid grid-cols-[3rem_1fr] gap-4 rounded-lg border border-muted p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                {step.period}
              </div>
              <div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto my-4 flex max-w-xl flex-col gap-6 border-t border-muted py-10 lg:max-w-none">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 md:text-5xl">
          {enProjectHeadLine}
        </h2>
        <p className="mb-6 max-w-2xl text-base text-muted-foreground">
          {enProjectIntro}
        </p>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2"
        >
          {enProjects.slice(0, 4).map((project) => (
            <ProjectCard key={project.name} project={project} titleAs="h3" />
          ))}
        </ul>
      </section>

      <section className="my-8 grid max-w-xl grid-cols-1 gap-10 border-t border-muted py-10 lg:max-w-none lg:grid-cols-2">
        <div className="space-y-10">
          <CredentialList title="Experience" items={enExperienceList} />
          <CredentialList title="Learning" items={enLearningList} />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase text-primary">
            How I Work
          </p>
          <h2 className="mt-3 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Accurate standards, plain language, and field awareness.
          </h2>
          <ul className="mt-6 space-y-4">
            {enCapabilityNotes.map((note) => (
              <li
                key={note}
                className="rounded-lg border border-muted p-5 text-sm text-muted-foreground"
              >
                {note}
              </li>
            ))}
          </ul>
          <Link
            href="/en/about"
            className="mt-8 flex flex-row items-center text-sm font-semibold text-primary hover:underline"
          >
            More about me
            <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
          </Link>
        </div>
      </section>
    </Container>
  )
}
