"use client"

import Link from 'next/link'
import { email, phone } from '@/config/infoConfig'
import { CustomIcon } from '@/components/shared/CustomIcon'


export default function SocialLinks() {
  return (
    <div>
      <div className="mt-6">
        <Link
          href={`tel:${phone.replace(/-/g, '')}`}
          className="group flex flex-row ml-3 justify-start items-center text-md font-medium transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        >
          <CustomIcon name="phone" size={22} />
          <span className="ml-4">{phone}</span>
        </Link>
      </div>
      <div className="mt-8 border-t pt-8 ">
        <Link
          href={`mailto:${email}`}
          className="group flex flex-row ml-3 justify-start items-center text-md font-medium transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        >
          <CustomIcon name="email" size={22} />
          <span className="ml-4">{email}</span>
        </Link>
      </div>
    </div>

  )
}

