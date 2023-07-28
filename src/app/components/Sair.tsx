'use client'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

import React from 'react'

export default function Sair() {
  const router = useRouter()
  return (
    <button
      onClick={() => {
        Cookies.remove('token')
        router.refresh()
      }}
      className="hover:mix-blend inline-block w-44 self-center rounded-full bg-gradient-to-r from-customOrange to-customRed px-5 py-3 text-center text-sm leading-none text-black transition duration-300 hover:opacity-70"
    >
      Sair
    </button>
  )
}
