'use client'
import { LucideAlignJustify, Minimize } from 'lucide-react'
import React, { ReactNode, useState } from 'react'

interface Props {
  children: ReactNode
}

export default function CloseNavBar({ children }: Props) {
  const [closed, setClosed] = useState(false)

  return (
    <div className="bg-customGray">
      <div
        className={`nav-bar transition-all ${
          closed ? 'h-52 sm:h-20' : 'h-0'
        } flex items-center justify-between overflow-hidden duration-500 ease-in-out`}
      >
        <button
          className="ml-3 flex h-[64px] w-[64px] items-center justify-center rounded-full bg-gradient-to-r from-customOrange to-customRed"
          onClick={() => setClosed((closed) => !closed)}
        >
          <Minimize />
        </button>
        {children}
      </div>

      <div
        className={`nav-bar transition-all ${
          !closed ? 'h-20' : 'h-0'
        } flex items-center justify-between overflow-hidden duration-500 ease-in-out`}
      >
        <button
          className="ml-3 flex h-[64px] w-[64px] items-center justify-center rounded-full bg-gradient-to-r from-customOrange to-customRed"
          onClick={() => setClosed((closed) => !closed)}
        >
          <LucideAlignJustify />
        </button>
      </div>
    </div>
  )
}
