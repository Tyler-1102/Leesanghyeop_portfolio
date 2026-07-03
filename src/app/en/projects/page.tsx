import type { Metadata } from 'next'

import { SimpleLayout } from '@/components/layout/SimpleLayout'
import { ProjectCard } from '@/components/project/ProjectCard'
import {
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
      <ul role="list" className="grid grid-cols-1 pb-12">
        <ProjectCard project={enProjects[0]} />
      </ul>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-8 gap-y-12 pb-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {enProjects.slice(1).map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
    </SimpleLayout>
  )
}
