import { type Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { Container } from '@/components/layout/Container'
import { CustomIcon } from '@/components/shared/CustomIcon'
import { getAllProjectSlugs, getProjectDetail } from '@/lib/projectDetails'
import { projects } from '@/config/projects'
import { utm_source } from '@/config/siteConfig'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const detail = await getProjectDetail(slug)
  if (!detail) {
    return { title: 'Project not found' }
  }
  return {
    title: detail.meta.title,
    description: detail.meta.subtitle,
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const detail = await getProjectDetail(slug)

  if (!detail) {
    notFound()
  }

  const { meta, content } = detail
  const githubUrl = `https://${meta.github}${utm_source ? `?utm_source=${utm_source}` : ''}`

  const detailProjects = projects.filter((project) => project.slug)
  const currentIndex = detailProjects.findIndex(
    (project) => project.slug === slug,
  )
  const prevProject = currentIndex > 0 ? detailProjects[currentIndex - 1] : null
  const nextProject =
    currentIndex >= 0 && currentIndex < detailProjects.length - 1
      ? detailProjects[currentIndex + 1]
      : null

  return (
    <Container className="mt-16 sm:mt-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/projects"
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
        >
          <ChevronLeftIcon className="mr-1 h-4 w-4" />
          모든 프로젝트
        </Link>

        <header className="mt-8">
          <h1 className="text-3xl font-bold leading-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            {meta.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{meta.subtitle}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
            <span>{meta.date}</span>
            {meta.team && (
              <>
                <span className="text-muted-foreground/40">|</span>
                <span>{meta.team}</span>
              </>
            )}
            <span className="text-muted-foreground/40">|</span>
            <span>{meta.role}</span>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-muted px-4 py-2 text-sm font-medium transition hover:border-primary hover:text-primary"
            >
              <CustomIcon name="github" size={18} />
              GitHub 저장소
            </Link>
          </div>
        </header>

        {meta.highlights && meta.highlights.length > 0 && (
          <section className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {meta.highlights.map((highlight) => (
              <div
                key={highlight.value}
                className="rounded-lg border border-muted p-5"
              >
                <p className="text-xl font-bold text-primary">
                  {highlight.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {highlight.label}
                </p>
              </div>
            ))}
          </section>
        )}

        <div className="prose mt-10 max-w-none dark:prose-invert">
          {content}
        </div>

        {meta.techStack && meta.techStack.length > 0 && (
          <section className="mt-12 border-t border-muted pt-8">
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              Tech Stack
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {meta.techStack.join(' · ')}
            </p>
          </section>
        )}

        <nav className="mt-12 flex items-stretch justify-between gap-4 border-t border-muted pt-8">
          {prevProject?.slug ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex max-w-[48%] items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <ChevronLeftIcon className="h-4 w-4 shrink-0" />
              <span className="truncate">{prevProject.name}</span>
            </Link>
          ) : (
            <span />
          )}
          {nextProject?.slug ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex max-w-[48%] items-center gap-2 text-right text-sm text-muted-foreground hover:text-primary"
            >
              <span className="truncate">{nextProject.name}</span>
              <ChevronRightIcon className="h-4 w-4 shrink-0" />
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </Container>
  )
}
