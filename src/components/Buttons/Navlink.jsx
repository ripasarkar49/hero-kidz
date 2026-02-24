"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { Children } from 'react'

export default function Navlink({ href, children }) {
      const path=usePathname()
  return (
  
    <Link href={href} className={`${path.startsWith(href) ? 'text-primary' : 'text-base-content'}`}>{children}</Link>
  )
}
