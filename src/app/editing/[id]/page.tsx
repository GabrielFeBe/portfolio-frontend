import StatementBall from '@/app/components/StatementBall'
import { api } from '@/lib/api'
import Project from '@/types/Projects'
import React from 'react'
import Editing from '../../components/Editing'

export default async function page({ params }: { params: { id: string } }) {
  const respose = await api.get(`/posts/${params.id}`)
  const project: Project = respose.data
  return (
    <main className="mt-10">
      <StatementBall orange="E" rest="dit Project" bgColor="customGray" />
      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        <Editing project={project} />
        {/* For edit */}
      </div>
    </main>
  )
}
