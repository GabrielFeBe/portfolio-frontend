import React from 'react'
import Link from 'next/link'

export default function LinkGit() {
  return (
    <div className="flex  w-24  items-center justify-between">
      <Link href="https://github.com/GabrielFeBe" target="_blank">
        <div className="h-10 w-10 transform-gpu rounded-lg bg-[url('../assets/github.svg')] bg-cover p-2 transition-transform hover:scale-hover-grow" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/gabriel-fernandes-453813264/"
        target="_blank"
      >
        <div className="h-10 w-10 transform-gpu rounded-lg bg-[url('../assets/linkedin.svg')] bg-cover p-2 transition-transform hover:scale-hover-grow" />
      </Link>
    </div>
  )
}
