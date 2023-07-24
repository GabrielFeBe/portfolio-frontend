import LinkGit from './components/LinkGit'

export default function Home() {
  return (
    <main className="grid min-h-4/6-screen grid-cols-2">
      {/* right side */}
      <div className="flex w-5/6 flex-1 flex-col justify-center pl-20">
        <div className="flex">
          <h1 className="leading-tight, mr-4 text-5xl font-bold">
            Gabriel Fernandes
          </h1>
          <LinkGit />
        </div>
        <h2 className="leading-tight, text-3xl font-bold">
          Programador Full Stack
        </h2>
        <p className="text-sm leading-relaxed">
          Desenvolvedor full stack com foco principal em JavaScript, ansioso
          para embarcar em uma carreira empolgante na área. Sem experiência
          profissional, mas motivado a aprimorar minhas habilidades em um
          ambiente colaborativo e aprender com uma equipe experiente e dedicada
        </p>
      </div>

      {/* Linkeding GitHub  */}
    </main>
  )
}
