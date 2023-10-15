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
    <div className="mt-10 flex h-[778px] w-[302px] items-center justify-center rounded-20 bg-gradient-to-r from-customOrange to-customRed sm:h-[1080px] sm:w-[604px] xl:h-[584px] xl:w-[1204px]">
      <div className="w-[300px] rounded-20 bg-customGray p-2 sm:w-[600px] xl:w-[1200px]">
        <h1 className="ml-2 text-xl font-bold xl:text-2xl">{project.title}</h1>
        <div className="ml-2">{`Publicado: ${dayjs(project.createdAt).format(
          'D[ de ]MMMM[, ]YYYY',
        )}`}</div>
        <div className="mt-2 flex w-full flex-col items-center justify-center xl:flex-row">
          <Image
            src={project.projectImage}
            alt="project"
            width={1916}
            height={974}
            className="aspect-video h-[200px] rounded-20 sm:h-[500px] xl:w-1/2"
            quality={100}
          />
          <div className="relative ml-3 flex h-[500px] flex-col pt-3 xl:w-1/2">
            <h3 className="pt-3 text-lg font-bold">Descrição</h3>
            <span className="pt-3 text-sm sm:text-base">
              {project.projectDescription}
            </span>
            <span className="pt-3 text-sm sm:text-base">{`Linguagem mais usada: ${project.mainLanguage}`}</span>
            <a
              href={project.repositoryLink}
              target="_blank"
              rel="noreferrer"
              className="text-gradient hover:text-gradient mt-2 pt-1 text-sm sm:text-base"
            >
              Link para o repositorio
            </a>
            {project.deployLink && (
              <a
                href={project.deployLink}
                target="_blank"
                rel="noreferrer"
                className="text-gradient hover:text-gradient mt-2 pt-1 text-sm sm:text-base"
              >
                Link para o Deploy
              </a>
            )}

            <div className="absolute bottom-1 right-1">
              <StarIcon
                color="yellow"
                fill={project.isFavorite ? 'yellow' : 'default'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
