import React from 'react'
import Link from 'next/link'
import { cookies } from 'next/headers'
import CloseNavBar from './CloseNavBar'

export default function NavBar() {
  const token = cookies().get('token')?.value
  return (
    <CloseNavBar>
      <div>
        <Link
          href="/adding"
          className="inline-block w-44 self-center rounded-full bg-green-500 px-5 py-3 text-center text-sm leading-none text-black hover:bg-green-600"
        >
          Add New Project
        </Link>
        {!token && (
          <Link
            href="/login"
            className="inline-block w-44 self-center rounded-full bg-green-500 px-5 py-3 text-center text-sm leading-none text-black hover:bg-green-600"
          >
            Login
          </Link>
        )}
        <Link
          href="/"
          className="inline-block w-44 self-center rounded-full bg-green-500 px-5 py-3 text-center text-sm leading-none text-black hover:bg-green-600"
        >
          Home
        </Link>
      </div>
    </CloseNavBar>
  )
}
