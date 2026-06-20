import type { Metadata } from 'next'

import { SimpleLayout } from '@/components/layout/SimpleLayout'
import { ProjectCard } from '@/components/project/ProjectCard'
import { GithubProjectCard } from '@/components/project/GithubProjectCard'
import { CustomIcon } from '@/components/shared/CustomIcon'
import {
  enGithubProjects,
  enProjectHeadLine,
  enProjectIntro,
  enProjects,
} from '@/config/enPortfolio'

export const metadata: Metadata = {
  title: 'Projects',
  description: enProjectIntro,
  alternates: {
    canonical: '/en/projects',
    languages: {
      'ko-KR': '/projects',
      'en-US': '/en/projects',
    },
  },
}

export default function EnglishProjects() {
  return (
    <SimpleLayout title={enProjectHeadLine} intro={enProjectIntro}>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-8 gap-y-12 pb-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {enProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
      <div className="mx-auto my-4 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
        <h2 className="mb-4 flex flex-row items-center justify-start gap-2 text-xl font-semibold md:text-3xl">
          <CustomIcon name="github" size={28} />
          Repository Evidence
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground">
          I place development work as evidence that supports my HR capability.
          Each repository shows how domain understanding was moved into
          features, data, and screen flows.
        </p>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-3"
        >
          {enGithubProjects.map((project) => (
            <GithubProjectCard
              key={project.name}
              project={project}
              titleAs="h3"
            />
          ))}
        </ul>
      </div>
    </SimpleLayout>
  )
}
