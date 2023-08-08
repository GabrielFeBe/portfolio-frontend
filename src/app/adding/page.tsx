'use client'
import React from 'react'
import AddingNewProject from '../components/AddingNewProject'
import StatementBall from '../components/StatementBall'

export default function CreatingPost() {
  return (
    <main className="mt-10">
      <StatementBall orange="A" rest="dd Project" bgColor="customGray" />
      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        <AddingNewProject />
      </div>
    </main>
  )
}
