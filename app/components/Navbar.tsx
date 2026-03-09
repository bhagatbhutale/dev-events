"use client"

import Image from 'next/image'
import Link from 'next/link'
import posthog from 'posthog-js'


const Navbar = () => {
  return (
  <header>
    <nav>
        <Link href="/" className='logo' onClick={() => posthog.capture("logo_clicked")}>
        <Image src="/icons/logo.png" alt='logo' height={25} width={25} />
        <p>DevEvent</p>
        </Link>
        <ul>
            <Link href="/" onClick={() => posthog.capture("nav_link_clicked", { label: "Home" })}>Home</Link>
            <Link href="/" onClick={() => posthog.capture("nav_link_clicked", { label: "Event" })}>Event</Link>
            <Link href="/" onClick={() => posthog.capture("nav_link_clicked", { label: "Create Event" })}>Create Event</Link>
        </ul>
    </nav>
  </header>
  )
}

export default Navbar
