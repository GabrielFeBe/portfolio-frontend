import Link from 'next/link'
import LinkGit from './components/LinkGit'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Nav Bar */}
      <Link
        href="/adding"
        className="inline-block w-44 self-center rounded-full bg-green-500 px-5 py-3 text-center text-sm leading-none text-black hover:bg-green-600"
      >
        Add New Project
      </Link>
      <Link
        href="/login"
        className="inline-block w-44 self-center rounded-full bg-green-500 px-5 py-3 text-center text-sm leading-none text-black hover:bg-green-600"
      >
        Login
      </Link>
      {/*  */}
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
        Desenvolvedor full stack com foco principal em JavaScript, ansioso para
        embarcar em uma carreira empolgante na área. Sem experiência
        profissional, mas motivado a aprimorar minhas habilidades em um ambiente
        colaborativo e aprender com uma equipe experiente e dedicada
      </p>
      {/* Linkeding GitHub  */}
    </main>
  )
}
