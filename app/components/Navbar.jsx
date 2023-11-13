import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from './dojo-logo.png'

export default function Navbar() {
  return (
    <nav>
        <Image src={logo} alt='CampDesk' width={60} placeholder='blur' />
        <h1>Camp Desk</h1>
        <Link href='/'>Dashboard</Link>
        <Link href='/tickets'>Tickets</Link>
    </nav>
  )
}
