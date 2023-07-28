import React from 'react'
import Link from 'next/link'
import { cookies } from 'next/headers'
import CloseNavBar from './CloseNavBar'
import Sair from './Sair'

export default function NavBar() {
  const token = cookies().get('token')?.value

  return (
    <CloseNavBar>
      <div>
        <Link
          href="/adding"
          className="hover:mix-blend inline-block w-44 self-center rounded-full bg-gradient-to-r from-customOrange to-customRed px-5 py-3 text-center text-sm leading-none text-black transition duration-300 hover:opacity-70"
        >
          Add New Project
        </Link>
        {!token ? (
          <Link
            href="/login"
            className="hover:mix-blend inline-block w-44 self-center rounded-full bg-gradient-to-r from-customOrange to-customRed px-5 py-3 text-center text-sm leading-none text-black transition duration-300 hover:opacity-70"
          >
            Login
          </Link>
        ) : (
          <Sair></Sair>
        )}
        <Link
          href="/"
          className="hover:mix-blend inline-block w-44 self-center rounded-full bg-gradient-to-r from-customOrange to-customRed px-5 py-3 text-center text-sm leading-none text-black transition duration-300 hover:opacity-70"
        >
          Home
        </Link>
      </div>
    </CloseNavBar>
  )
}
