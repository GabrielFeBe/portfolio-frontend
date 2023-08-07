import React from 'react'
import LinkGit from './LinkGit'

export default function AboutMe() {
  return (
    <div className="relative lg:h-4/6 xl:h-3/6">
      <h3 className="mb-2  flex h-[63px] w-[134px] items-center justify-center rounded-custom bg-gradient-to-r from-customOrange to-customRed">
        Prazer eu sou
      </h3>
      <div className="mb-12 flex flex-col sm:flex-row">
        <h1 className="mr-4 text-3xl font-bold  leading-tight sm:text-4xl xl:text-5xl">
          Gabriel Fernandes
        </h1>
        <LinkGit />
      </div>
      <h2 className="text-xl font-bold leading-tight sm:text-2xl xl:text-3xl">
        Programador Full Stack
      </h2>
      <p className="text-xs leading-relaxed lg:text-sm">
        Desenvolvedor full stack com foco principal em JavaScript, ansioso para
        embarcar em uma carreira empolgante na área. Sem experiência
        profissional, mas motivado a aprimorar minhas habilidades em um ambiente
        colaborativo e aprender com uma equipe experiente e dedicada
      </p>
    </div>
  )
}
