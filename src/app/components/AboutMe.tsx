import React from 'react'
import LinkGit from './LinkGit'

export default function AboutMe() {
  return (
    <div className="relative h-3/6">
      <div className="mb-12 flex">
        <h1 className="leading-tight, mr-4 text-5xl font-bold">
          Gabriel Fernandes
        </h1>
        <LinkGit />
      </div>
      <h2 className="text-3xl font-bold leading-tight">
        Programador Full Stack
      </h2>
      <p className="absolute bottom-0 text-base leading-relaxed">
        Desenvolvedor full stack com foco principal em JavaScript, ansioso para
        embarcar em uma carreira empolgante na área. Sem experiência
        profissional, mas motivado a aprimorar minhas habilidades em um ambiente
        colaborativo e aprender com uma equipe experiente e dedicada
      </p>
    </div>
  )
}
