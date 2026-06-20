'use client'

import { HashIcon } from 'lucide-react'
import { ArrowUpRight } from '@phosphor-icons/react'
import { ProjectItemType } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import { Favicon } from 'favicon-stealer'

export function ProjectCard({
  project,
  titleAs,
}: {
  project: ProjectItemType
  titleAs?: keyof React.JSX.IntrinsicElements
}) {
  const utmLink = `https://${project.link.href}${utm_source ? `?utm_source=${utm_source}` : ''}`
  let Component = titleAs ?? 'h2'
  return (
    <li className="group relative flex h-full flex-col items-start">
      <div className="relative flex h-full w-full flex-col justify-between rounded-lg border border-muted-foreground/20 p-5 shadow-sm transition-all group-hover:scale-[1.02] group-hover:bg-muted/5 group-hover:shadow-md">
        <div className="">
          <div className="flex flex-col items-start justify-center gap-4 sm:flex-row sm:items-center sm:justify-start">
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full">
              <Favicon
                url={project.link.href}
                src={project.logo}
                alt={`${project.name} logo`}
              />
            </div>
            <div>
              <Component className="text-base font-semibold">
                {project.name}
              </Component>
              {project.date && (
                <p className="mt-1 text-xs text-muted-foreground">
                  {project.date}
                </p>
              )}
            </div>
          </div>
          <p className="relative z-10 ml-2 mt-2 text-sm text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="relative z-10 ml-1 mt-auto pt-4">
          {project.techStack && project.techStack.length > 0 && (
            <p className="mb-3 text-xs font-medium text-zinc-600 dark:text-zinc-300">
              {project.techStack.join(' · ')}
            </p>
          )}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-2">
              {project.tags.map((tag, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center space-x-0.5"
                >
                  <HashIcon className="icon-scale h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{tag}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <Link
          href={utmLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20"
        >
          <ArrowUpRight
            size={32}
            weight="duotone"
            className="absolute right-4 top-4 h-4 w-4 group-hover:cursor-pointer group-hover:text-primary"
          />
        </Link>
      </div>
    </li>
  )
}
