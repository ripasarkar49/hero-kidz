import Link from 'next/link'
import React, { Children } from 'react'

export default function Navlink() {
      const path=usePathname();
  return (
  
    <Link href={href} className={`${path.startsWith(href) && 'text-primary'} 'text-base-content'}`}>{Children}</Link>
  )
}
