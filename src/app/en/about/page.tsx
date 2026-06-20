import type { Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/layout/Container'
import SocialLinks from '@/components/about/SocialLinks'
import profileImage from '@/images/sanghyeop.jpg'
import {
  enAboutMeHeadline,
  enAboutParagraphs,
  enStrengths,
  enTimeline,
} from '@/config/enPortfolio'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Sanghyeop Lee, an HR-oriented candidate building practical IT and AI capability.',
  alternates: {
    canonical: '/en/about',
    languages: {
      'ko-KR': '/about',
      'en-US': '/en/about',
    },
  },
}

export default function EnglishAbout() {
  return (
    <Container className="mt-16 sm:mt-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <section>
          <p className="text-sm font-semibold uppercase text-primary">
            About Sanghyeop
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {enAboutMeHeadline}
          </h1>
          <div className="mt-8 space-y-6 text-base text-zinc-600 dark:text-zinc-400">
            {enAboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <aside className="space-y-8">
          <div className="overflow-hidden rounded-lg border border-muted shadow-sm">
            <Image
              src={profileImage}
              alt="Sanghyeop Lee standing under cherry blossoms"
              sizes="(min-width: 1024px) 32vw, 92vw"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <div className="rounded-lg border border-muted p-6">
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              Career Story
            </h2>
            <ol className="mt-5 space-y-4">
              {enTimeline.map((item, index) => (
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
              I am interested in making HR operations clearer with practical
              technology.
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
          {enStrengths.map((strength) => (
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
