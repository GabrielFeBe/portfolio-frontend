import React from 'react'

export default function SegundaColuna() {
  return (
    <div className="flex flex-wrap justify-between sm:flex-nowrap">
      <div className="flex w-20 transform-gpu flex-col items-center justify-center rounded-lg from-customOrange to-customRed p-2 transition-transform hover:scale-hover-grow hover:bg-gradient-to-r">
        <div className="h-10 w-10  bg-[url('../assets/jest.svg')] bg-cover" />
        Jest
      </div>
      <div className="flex w-20 transform-gpu flex-col items-center justify-center rounded-lg from-customOrange to-customRed p-2 transition-transform hover:scale-hover-grow hover:bg-gradient-to-r">
        <div className="h-10 w-10  bg-[url('../assets/mocha.svg')] bg-cover" />
        Mocha
      </div>
      <div className="flex w-20 transform-gpu flex-col items-center justify-center rounded-lg from-customOrange to-customRed p-2 transition-transform hover:scale-hover-grow hover:bg-gradient-to-r">
        <div className="h-10 w-10  bg-[url('../assets/nextjs.svg')] bg-cover" />
        Next
      </div>
      <div className="flex w-20 transform-gpu flex-col items-center justify-center rounded-lg from-customOrange to-customRed p-2 transition-transform hover:scale-hover-grow hover:bg-gradient-to-r">
        <div className="h-10 w-10  bg-[url('../assets/docker.svg')] bg-cover" />
        Docker
      </div>
      <div className="flex w-20 transform-gpu flex-col items-center justify-center rounded-lg from-customOrange to-customRed p-2 transition-transform hover:scale-hover-grow hover:bg-gradient-to-r">
        <div className="h-10 w-10  bg-[url('../assets/nodejs.svg')] bg-cover" />
        Node.js
      </div>
      {/* <div className="h-10 w-10 transform-gpu rounded-lg bg-[url('../assets/mocha.svg')] bg-cover p-2 transition-transform hover:scale-hover-grow" />
      <div className="h-10 w-10 transform-gpu rounded-lg bg-[url('../assets/nextjs.svg')] bg-cover p-2 transition-transform hover:scale-hover-grow" />
      <div className="h-10 w-10 transform-gpu rounded-lg bg-[url('../assets/docker.svg')] bg-cover p-2 transition-transform hover:scale-hover-grow" />
      <div className="h-10 w-10 transform-gpu rounded-lg bg-[url('../assets/nodejs.svg')] bg-cover p-2 transition-transform hover:scale-hover-grow" /> */}
    </div>
  )
}
