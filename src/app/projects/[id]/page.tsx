import { api } from '@/lib/api'
import Project from '@/types/Projects'
import React from 'react'
import StatementBall from '@/app/components/StatementBall'
import ProjectPage from '@/app/components/projectsC/ProjectPage'
import Link from 'next/link'
import { cookies } from 'next/headers'

export default async function SpecificProject({
  params,
}: {
  params: { id: string }
}) {
  const token = cookies().get('token')?.value

  const respose = await api.get(`/posts/${params.id}`)
  const project: Project = respose.data

  return (
    <main>
      <StatementBall orange="P" rest="rojeto" bgColor="bg-customGray" />
      <div className="flex flex-1 items-center justify-center">
        <ProjectPage project={project} />
      </div>
      {token && (
        <Link
          href={`/editing/${params.id}`}
          className="hover:mix-blend fixed bottom-0 right-0 inline-block rounded-full  bg-gradient-to-r from-customOrange to-customRed px-5 py-3 text-center text-sm leading-none text-black transition duration-300 hover:opacity-70 sm:w-44"
        >
          Editar
        </Link>
      )}
    </main>
  )
}
