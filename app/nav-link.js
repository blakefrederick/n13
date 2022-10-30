"use client"

import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

export default function NavLink({ href, children }) {
    // Workaround warning: https://github.com/vercel/next.js/issues/41878#issuecomment-1293402215
    let layoutSegments = useSelectedLayoutSegments();
    let segment = layoutSegments[0];
    if (segment === undefined) segment = "";
    let active = href === `/${segment}`

    return (
        <Link className={active ? 'underline' : ''} href={href}>{children}</Link>
    )
}