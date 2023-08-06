import Project from '@/types/Projects'
import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image'
import ptBr from 'dayjs/locale/pt-br'
import { StarIcon } from 'lucide-react'

dayjs.locale(ptBr)

interface Props {
  project: Project
}

export default function ProjectPage({ project }: Props) {
  return (
    <div className="flex h-[558px] w-[1202px] items-center justify-center rounded-20 bg-gradient-to-r from-customOrange to-customRed">
      <div className="w-[1200px] rounded-20 bg-customGray">
        <h1 className="ml-2">{project.title}</h1>
        <div className="ml-2">{`Publicado: ${dayjs(project.createdAt).format(
          'D[ de ]MMMM[, ]YYYY',
        )}`}</div>
        <div className="mt-2 flex w-full items-center justify-center">
          <Image
            src={project.projectImage}
            alt="project"
            width={250}
            height={250}
            className="h-[500px] w-1/2 rounded-20"
            quality={100}
          />
          <div className="relative ml-3 flex h-[500px] w-1/2 flex-col">
            <h3>Descrição</h3>
            <span>{project.projectDescription}</span>
            <span>{`Linguagem mais usada: ${project.mainLanguage}`}</span>
            <a
              href={project.repositoryLink}
              target="_blank"
              rel="noreferrer"
              className="text-gradient hover:text-gradient mt-2"
            >
              Link para o repositorio
            </a>

            {project.isFavorite && (
              <div className="absolute bottom-1 right-1">
                <StarIcon color="yellow" fill="yellow" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
