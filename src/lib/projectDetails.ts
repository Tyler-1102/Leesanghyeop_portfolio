import { compileMDX } from 'next-mdx-remote/rsc'
import { promises as fs } from 'fs'
import path from 'path'
import glob from 'fast-glob'
import { mdxComponents } from '@/components/shared/MdxComponents'

export type ProjectHighlight = {
  value: string
  label: string
}

export type ProjectDetailMeta = {
  slug: string
  title: string
  subtitle: string
  date: string
  role: string
  team?: string
  github: string
  techStack?: string[]
  highlights?: ProjectHighlight[]
}

const CONTENT_DIR = 'src/content/projects'

export async function getAllProjectSlugs(): Promise<string[]> {
  const files = await glob('*.mdx', { cwd: `./${CONTENT_DIR}` })
  return files.map((file) => file.replace(/\.mdx$/, ''))
}

export async function getProjectDetail(slug: string) {
  const filePath = path.join(process.cwd(), CONTENT_DIR, `${slug}.mdx`)
  try {
    const source = await fs.readFile(filePath, 'utf-8')
    const { content, frontmatter } = await compileMDX({
      source,
      components: mdxComponents,
      options: { parseFrontmatter: true },
    })
    return {
      meta: { slug, ...frontmatter } as ProjectDetailMeta,
      content,
    }
  } catch (error) {
    console.error(`Failed to load project detail: ${slug}`, error)
    return null
  }
}
