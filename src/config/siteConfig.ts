// site config
export const utm_source = process.env.NEXT_PUBLIC_UTM_SOURCE
export const site_url = process.env.NEXT_PUBLIC_SITE_URL || ''

// navigation config
type NavItemType = {
  name: string
  href: string
}

export const footerItems: Array<NavItemType> = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Notes',
    href: '/blogs',
  },
]

export const navItems: Array<NavItemType> = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Notes',
    href: '/blogs',
  },
]

export const enNavItems: Array<NavItemType> = [
  {
    name: 'Home',
    href: '/en',
  },
  {
    name: 'About',
    href: '/en/about',
  },
  {
    name: 'Projects',
    href: '/en/projects',
  },
  {
    name: 'Notes',
    href: '/blogs',
  },
]
