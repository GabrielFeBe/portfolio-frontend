import AboutMe from './components/AboutMe'
import { api } from '@/lib/api'
import Project from '@/types/Projects'
import Stacks from './components/Stacks'
import ProjectsHome from './components/ProjectsHome'
import StatementBall from './components/StatementBall'

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
      <StatementBall orange="P" rest="rojetos" bgColor="bg-customSlate" />
      <ProjectsHome projects={data} />

      {/* Footer */}
      <footer className="min-h-4/6-screen bg-customGray">
        <StatementBall orange="C" rest="ontate-me" bgColor="bg-customGray" />
        <div className="grid min-h-4/6-screen grid-cols-2">
          <div className="mt-3 pl-20">
            <input
              type="text"
              className="border-gradient border bg-customGray"
              placeholder="Nome"
            />
            <input
              type="text"
              className="border-gradient border bg-customGray"
              placeholder="Sobrenome"
            />
            <input
              type="email"
              className="border-gradient border bg-customGray"
            />
          </div>
        </div>
      </footer>
    </main>
  )
}
