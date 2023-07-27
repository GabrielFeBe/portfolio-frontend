'use client'
import { LucideAlignJustify, Minimize } from 'lucide-react'
import React, { ReactNode, useState } from 'react'

interface Props {
  children: ReactNode
}

export default function CloseNavBar({ children }: Props) {
  const [closed, setClosed] = useState(false)

  console.log(closed)
  return (
    <div className="bg-customGray">
      <div
        className={`nav-bar transition-all ${
          closed ? 'h-20' : 'h-0'
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
      {!closed && (
        <button
          className={`transition-all ${
            !closed
              ? 'flex h-[64px] w-[64px] items-center justify-center'
              : 'h-0 w-0'
          } duration-3000 ml-3 overflow-hidden rounded-full bg-gradient-to-r from-customOrange to-customRed ease-in-out`}
          onClick={() => setClosed((closed) => !closed)}
        >
          <LucideAlignJustify />
        </button>
      )}
    </div>
  )
}
