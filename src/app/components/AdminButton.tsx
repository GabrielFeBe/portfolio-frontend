'use client'

import Cookies from 'js-cookie'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function AdminButton() {
  const router = useRouter()

  return (
    <button
      className="font-alt fixed bottom-0 right-0 inline-block w-44 self-center rounded-full bg-green-500 px-5 py-3 text-sm uppercase leading-none text-black hover:bg-green-600"
      onClick={() => {
        Cookies.set('token', 'admin', { expires: 7 })
        router.push('/adding')
      }}
    >
      Admin Button
    </button>
  )
}
