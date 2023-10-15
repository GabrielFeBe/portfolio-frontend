import AboutMe from './components/aboutme/AboutMe'
import { api } from '@/lib/api'
import Project from '@/types/Projects'
import Stacks from './components/aboutme/Stacks'
import ProjectsHome from './components/ProjectsHome'
import StatementBall from './components/StatementBall'

export default async function Home() {
  let data: Project[] = []
  let error = false
  try {
    const response = await api.get('/favorites')

    data = response.data
  } catch (err) {
    error = true
  }

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
      {error ? (
        <h1 className="h-[500px] bg-customGray text-2xl font-bold">
          Erro Com o Servidor
        </h1>
      ) : (
        <ProjectsHome projects={data} />
      )}
    </main>
  )
}
