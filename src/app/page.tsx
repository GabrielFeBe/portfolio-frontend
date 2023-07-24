import AboutMe from './components/AboutMe'
import PrimeiraColuna from './components/PrimeiraColuna'
import SegundaColuna from './components/SegundaColuna'

export default function Home() {
  return (
    <main className="grid min-h-4/6-screen grid-cols-2">
      {/* right side */}
      <div className="flex w-5/6 flex-1 flex-col justify-center pl-20">
        <AboutMe />
      </div>
      {/* left side */}
      <div className="flex w-5/6 flex-1 flex-col justify-center pl-20">
        <div className="flex h-3/6 flex-col">
          <h1 className="mb-10 mr-4 text-5xl font-bold leading-tight">
            Tecnologias Principais
          </h1>
          <div className="flex flex-grow flex-col justify-between">
            <PrimeiraColuna />
            <SegundaColuna />
          </div>
        </div>
      </div>
    </main>
  )
}
