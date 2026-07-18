import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/layout/SimpleLayout'

import {
  hrProjectHeadLine,
  hrProjectIntro,
  hrProjects,
  projectHeadLine,
  projectIntro,
  projectPageHeadLine,
  projectPageIntro,
  projects,
} from '@/config/infoConfig'

import { ProjectCard } from '@/components/project/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects',
  description: projectPageIntro,
}

export default function Projects() {
  return (
    <SimpleLayout title={projectPageHeadLine} intro={projectPageIntro}>
      <section aria-labelledby="hr-experience-heading">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            People &amp; Organization
          </p>
          <h2
            id="hr-experience-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl"
          >
            {hrProjectHeadLine}
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
            {hrProjectIntro}
          </p>
        </div>
        <ul role="list" className="mt-8 grid grid-cols-1 pb-16">
          {hrProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="hr-tech-heading"
        className="border-t border-muted pt-14"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Technology for HR
          </p>
          <h2
            id="hr-tech-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl"
          >
            {projectHeadLine}
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
            {projectIntro}
          </p>
        </div>
        <ul role="list" className="mt-8 grid grid-cols-1 pb-12">
          <ProjectCard project={projects[0]} />
        </ul>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-12 pb-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.slice(1).map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </ul>
      </section>
    </SimpleLayout>
  )
}
