'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Languages } from 'lucide-react'

import { Button } from '@/components/ui/button'

function getLanguageHref(pathname: string, isEnglish: boolean) {
  if (isEnglish) {
    return pathname.replace(/^\/en/, '') || '/'
  }

  if (pathname === '/') return '/en'
  if (pathname === '/about') return '/en/about'
  if (pathname === '/projects') return '/en/projects'

  return '/en'
}

export function LanguageSwitch() {
  const pathname = usePathname()
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/')
  const href = getLanguageHref(pathname, isEnglish)
  const label = isEnglish ? '한국어 포트폴리오 보기' : 'View English portfolio'

  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className="relative"
      title={label}
    >
      <Link href={href} aria-label={label}>
        <Languages className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">{label}</span>
      </Link>
    </Button>
  )
}
