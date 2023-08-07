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
      <div className="grid bg-customGray sm:h-[1000px] sm:grid-cols-1 lg:h-[578px] lg:grid-cols-2">
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
