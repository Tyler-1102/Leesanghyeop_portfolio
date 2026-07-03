import type { MetadataRoute } from 'next'
import { site_url } from '@/config/siteConfig'
import { getAllBlogs } from '@/lib/blogs'
import { getAllProjectSlugs } from '@/lib/projectDetails'

/**
 * Google's limit is 50,000 URLs per sitemap
 *
 * https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps
 * https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  console.log('sitemap start')
  let blogs = await getAllBlogs()

  const sitemapList: MetadataRoute.Sitemap = [] // final result

  const baseUrl = site_url || 'http://localhost:3000'
  const sitemapRoutes: MetadataRoute.Sitemap = [
    {
      url: '', // home
      lastModified: new Date(),
    },
    {
      url: 'projects',
      lastModified: new Date(),
    },
    {
      url: 'about',
      lastModified: new Date(),
    },
    {
      url: 'en',
      lastModified: new Date(),
    },
    {
      url: 'en/about',
      lastModified: new Date(),
    },
    {
      url: 'en/projects',
      lastModified: new Date(),
    },
    {
      url: 'blogs',
      lastModified: new Date(),
    },
  ]

  for (const route of sitemapRoutes) {
    // console.log(`sitemap, url:${site_url}/${route.url}`);
    sitemapList.push({
      url: `${baseUrl}/${route.url}`,
      lastModified: new Date(route.lastModified || new Date()).toISOString(),
    })
  }

  for (const blog of blogs) {
    sitemapList.push({
      url: `${baseUrl}/blogs/${blog.slug}`,
      lastModified: new Date(blog.date).toISOString(),
    })
  }

  const projectSlugs = await getAllProjectSlugs()
  for (const slug of projectSlugs) {
    sitemapList.push({
      url: `${baseUrl}/projects/${slug}`,
      lastModified: new Date().toISOString(),
    })
  }

  console.log('sitemap end, size:', sitemapList.length)
  return sitemapList
}
