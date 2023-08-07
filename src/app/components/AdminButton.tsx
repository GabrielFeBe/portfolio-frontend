'use client'

import Cookies from 'js-cookie'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function AdminButton() {
  const router = useRouter()

  return (
    <button
      className="hover:mix-blend fixed bottom-0 right-0 inline-block rounded-full  bg-gradient-to-r from-customOrange to-customRed px-5 py-3 text-center text-sm leading-none text-black transition duration-300 hover:opacity-70 sm:w-44"
      onClick={() => {
        Cookies.set('token', 'admin', { expires: 7 })
        router.push('/adding')
        router.refresh()
      }}
    >
      Admin Button
    </button>
  )
}
