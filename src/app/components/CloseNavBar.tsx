'use client'
import { SidebarClose, SidebarOpen } from 'lucide-react'
import React, { ReactNode, useState } from 'react'

interface Props {
  children: ReactNode
}

export default function CloseNavBar({ children }: Props) {
  const [closed, setClosed] = useState(false)

  console.log(closed)
  return (
    <div>
      <div
        className={`nav-bar transition-all ${
          closed ? 'h-20' : 'h-0'
        } flex items-center justify-between overflow-hidden duration-500 ease-in-out`}
      >
        <button onClick={() => setClosed((closed) => !closed)}>
          <SidebarClose />
        </button>
        {children}
      </div>
      {!closed && (
        <button
          className={`nav-bar transition-all ${
            !closed ? 'h-20' : 'h-0'
          } duration-3000 overflow-hidden ease-in-out`}
          onClick={() => setClosed((closed) => !closed)}
        >
          <SidebarOpen />
        </button>
      )}
    </div>
  )
}
