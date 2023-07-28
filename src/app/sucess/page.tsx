'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Sucess() {
  const router = useRouter()
  useEffect(() => {
    const delay = 3000
    const redirectTimer = setTimeout(() => {
      router.push('/')
    }, delay)

    return () => clearTimeout(redirectTimer)
  }, [router])

  return (
    <main className="flex min-h-screen min-w-full flex-1 items-center justify-center bg-customGray">
      <h1 className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-5xl font-bold text-transparent ">
        Você enviou um email com sucesso
      </h1>
    </main>
  )
}
