import AboutMe from './components/AboutMe'
import { api } from '@/lib/api'
import Project from '@/types/Projects'
import Stacks from './components/Stacks'
import ProjectsHome from './components/ProjectsHome'

export default async function Home() {
  const response = await api.get('/favorites')

  const data: Project[] = response.data

  return (
    <main>
      <div className="grid min-h-4/6-screen grid-cols-2 bg-customGray">
        {/* right side */}
        <div className="flex w-5/6 flex-1 flex-col justify-center pl-20">
          <AboutMe />
        </div>
        {/* left side */}

        <Stacks />
      </div>
      {/* down side */}
      <h2 className="flex h-[60px] w-full items-center justify-center bg-customSlate text-5xl">
        <div className="flex h-[55px] w-[55px] flex-shrink-0 items-center justify-end rounded-full bg-gradient-to-r from-customOrange to-customRed">
          P
        </div>
        rojetos
      </h2>
      <ProjectsHome projects={data} />
    </main>
  )
}
