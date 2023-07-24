import React from 'react'

export default function PrimeiraColuna() {
  return (
    <div className="flex justify-between">
      <div className="flex w-20 transform-gpu flex-col items-center justify-center rounded-lg p-2 text-gray-500 transition-transform hover:scale-hover-grow hover:bg-slate-800">
        <div className="h-10 w-10  bg-[url('../assets/js.svg')] bg-cover" />
        Js
      </div>
      <div className="flex w-20 transform-gpu flex-col items-center justify-center rounded-lg p-2 text-gray-500 transition-transform hover:scale-hover-grow hover:bg-slate-800">
        <div className="h-10 w-10  bg-[url('../assets/ts.svg')] bg-cover" />
        TS
      </div>
      <div className="flex w-20 transform-gpu flex-col items-center justify-center rounded-lg p-2 text-gray-500 transition-transform hover:scale-hover-grow hover:bg-slate-800">
        <div className="h-10 w-10  bg-[url('../assets/react.svg')] bg-cover" />
        React
      </div>
      <div className="flex w-20 transform-gpu flex-col items-center justify-center rounded-lg p-2 text-gray-500 transition-transform hover:scale-hover-grow hover:bg-slate-800">
        <div className="h-10 w-10  bg-[url('../assets/sequelize.svg')] bg-cover" />
        Sequelize
      </div>
      <div className="flex w-20 transform-gpu flex-col items-center justify-center rounded-lg p-2 text-gray-500 transition-transform hover:scale-hover-grow hover:bg-slate-800">
        <div className="h-10 w-10  bg-[url('https://prismalens.vercel.app/header/logo-dark.svg')] bg-cover" />
        Prisma
      </div>

      {/* <div className="h-10 w-10 transform-gpu rounded-lg bg-[url('../assets/js.svg')] bg-cover p-2 transition-transform hover:scale-hover-grow" />
      <div className="h-10 w-10 transform-gpu rounded-lg bg-[url('../assets/ts.svg')] bg-cover p-2 transition-transform hover:scale-hover-grow" />
      <div className="h-10 w-10 transform-gpu rounded-lg bg-[url('../assets/react.svg')] bg-cover p-2 transition-transform hover:scale-hover-grow" />
      <div className="h-10 w-10 transform-gpu rounded-lg bg-[url('../assets/sequelize.svg')] bg-cover p-2 transition-transform hover:scale-hover-grow" />
      <div className="h-10 w-10 transform-gpu rounded-lg bg-[url('https://prismalens.vercel.app/header/logo-dark.svg')] bg-cover p-2 transition-transform hover:scale-hover-grow" /> */}
    </div>
  )
}
