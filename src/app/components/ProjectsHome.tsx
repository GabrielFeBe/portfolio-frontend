import Project from '@/types/Projects'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  projects: Project[]
}

export default function ProjectsHome({ projects }: Props) {
  return (
    <div className="grid h-[1000px] bg-customSlate sm:h-[1200px] sm:grid-cols-1 lg:h-[594px] lg:grid-cols-2">
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
            className="mt-10 flex w-5/6 flex-1 flex-col pl-20"
          >
            <h2 className="text-xl">{project.title}</h2>
            <Link
              href={`/projects/${project.id}`}
              className="relative mt-2 max-w-screen-sm transition duration-1000 hover:scale-hover-grow-foto sm:h-1/2"
            >
              <Image
                src={project.projectImage}
                alt="project"
                width={1916}
                height={974}
                className="sm:h-full sm:w-full"
                quality={100}
              />
              <div className="border-gradient absolute left-0 top-0 h-full w-full bg-slate-950 opacity-50 hover:border-2" />
            </Link>
            <a
              className="text-gradient hover:text-gradient mt-2"
              href={project.repositoryLink}
              target="_blank"
              rel="noreferrer"
            >
              Link do repositorio no GitHub
            </a>
            <span className="xg:text-sm mt-2 h-1/3 max-w-screen-sm text-xs lg:text-xs">{`Descrição: ${text}`}</span>
          </div>
        )
      })}
    </div>
  )
}
