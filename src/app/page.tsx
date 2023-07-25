import AboutMe from './components/AboutMe'

import { api } from '@/lib/api'
import Project from '@/types/Projects'
import Stacks from './components/Stacks'

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
      <div className="flex flex-1">
        {data.map((project) => (
          <div key={project.projectImage}>
            <p>{project.projectDescription}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
