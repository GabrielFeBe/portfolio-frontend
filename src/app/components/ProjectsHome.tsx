import Project from '@/types/Projects'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  projects: Project[]
}

export default function ProjectsHome({ projects }: Props) {
  return (
    <div className="min-h-3/6-screen grid grid-cols-2 bg-customSlate">
      {projects.map((project: Project) => {
        const { projectDescription } = project
        const text = projectDescription
          .split(' ')
          .slice(0, 70)
          .join(' ')
          .concat('...')

        return (
          <div
            key={project.projectImage}
            className="mt-3 flex w-5/6 flex-1 flex-col pl-20"
          >
            <h2>{project.title}</h2>
            <Link
              href={`/project/${project.id}`}
              className="relative h-1/2 max-w-screen-sm"
            >
              <Image
                src={project.projectImage}
                alt="project"
                width={250}
                height={250}
                className="h-full w-full"
              />
              <div className="border-gradient absolute left-0 top-0 h-full w-full bg-slate-950 opacity-50 hover:border-2" />
            </Link>
            <span className="h-1/3 max-w-screen-sm">{text}</span>
          </div>
        )
      })}
    </div>
  )
}
