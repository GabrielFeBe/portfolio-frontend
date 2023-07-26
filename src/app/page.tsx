import AboutMe from './components/AboutMe'
import Link from 'next/link'
import { api } from '@/lib/api'
import Project from '@/types/Projects'
import Stacks from './components/Stacks'
import Image from 'next/image'

export default async function Home() {
  const response = await api.get('/favorites')

  const data: Project[] = response.data

  return (
    <main>
      <div className="grid min-h-4/6-screen grid-cols-2">
        {/* right side */}
        <div className="flex w-5/6 flex-1 flex-col justify-center pl-20">
          <AboutMe />
        </div>
        {/* left side */}
        <Stacks />
      </div>
      {/* down side */}
      <div className="grid min-h-4/6-screen grid-cols-2">
        {data.map((project) => (
          <div
            key={project.projectImage}
            className="flex w-5/6 flex-1 flex-col pl-20"
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
              <div className="absolute left-0 top-0 h-full w-full bg-purple-950 opacity-50" />
            </Link>
            <span className="h-1/3 max-w-screen-sm">
              {project.projectDescription}
            </span>
          </div>
        ))}
      </div>
    </main>
  )
}
