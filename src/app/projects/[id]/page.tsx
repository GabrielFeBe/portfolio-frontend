import { api } from '@/lib/api'
import Project from '@/types/Projects'
import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image'
import ptBr from 'dayjs/locale/pt-br'

dayjs.locale(ptBr)

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
      <h1>{project.title}</h1>
      <div>{`Publicado: ${dayjs(project.createdAt).format(
        'D[ de ]MMMM[, ]YYYY',
      )}`}</div>
      <div className="flex min-h-4/6-screen w-full items-center justify-center">
        <Image
          src={project.projectImage}
          alt="project"
          width={250}
          height={250}
          className="h-full w-1/2"
        />
        <div className="flex min-h-4/6-screen w-1/2">
          {project.projectDescription}
        </div>
      </div>
    </main>
  )
}
