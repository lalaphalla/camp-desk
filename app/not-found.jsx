import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main>
        <p>Your page try to find not found.</p>
        <Link href='/'>Go to Dashboard</Link>
    </main>
  )
}
