import React from 'react'
import PrimeiraColuna from './PrimeiraColuna'
import SegundaColuna from './SegundaColuna'

export default function Stacks() {
  return (
    <div className="mt-10 flex w-5/6 flex-1 flex-col justify-center pl-20 sm:m-0">
      <div className="flex flex-col lg:h-4/6 xl:h-3/6">
        <h1 className="mb-10 mr-4 text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl">
          Tecnologias Principais
        </h1>
        <div className="flex flex-grow flex-col justify-between">
          <PrimeiraColuna />
          <SegundaColuna />
        </div>
      </div>
    </div>
  )
}
