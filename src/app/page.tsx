import AboutMe from './components/aboutme/AboutMe'
import { api } from '@/lib/api'
import Project from '@/types/Projects'
import Stacks from './components/aboutme/Stacks'
import ProjectsHome from './components/ProjectsHome'
import StatementBall from './components/StatementBall'

export default async function Home() {
  const response = await api.get('/favorites')

  const data: Project[] = response.data

  return (
    <main>
      <div className="grid h-[578px] grid-cols-2 bg-customGray">
        {/* right side */}
        <div className="flex w-5/6 flex-1 flex-col justify-center pl-20">
          <AboutMe />
        </div>
        {/* left side */}

        <Stacks />
      </div>
      {/* down side */}
      <div className="bg-customSlate pt-10">
        <StatementBall orange="P" rest="rojetos" bgColor="bg-customSlate" />
      </div>
      <ProjectsHome projects={data} />
    </main>
  )
}
