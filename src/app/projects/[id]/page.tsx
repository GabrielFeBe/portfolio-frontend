import { api } from '@/lib/api'
import Project from '@/types/Projects'
import React from 'react'
import StatementBall from '@/app/components/StatementBall'
import ProjectPage from '@/app/components/projectsC/ProjectPage'

export default async function SpecificProject({
  params,
}: {
  params: { id: string }
}) {
  const respose = await api.get(`/posts/${params.id}`)
  const project: Project = respose.data
  console.log(project)

  return (
    <main>
      <StatementBall orange="P" rest="rojeto" bgColor="bg-customGray" />
      <div className="flex flex-1 items-center justify-center">
        <ProjectPage project={project} />
      </div>
    </main>
  )
}
