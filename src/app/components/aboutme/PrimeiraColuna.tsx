import React from 'react'

export default function PrimeiraColuna() {
  return (
    <div className="flex flex-wrap justify-between sm:flex-nowrap">
      <div className="flex w-20 transform-gpu flex-col items-center justify-center rounded-lg from-customOrange to-customRed p-2 text-gray-500 transition-transform hover:scale-hover-grow hover:bg-gradient-to-r">
        <div className="h-10 w-10  bg-[url('../assets/js.svg')] bg-cover" />
        Js
      </div>
      <div className="flex w-20 transform-gpu flex-col items-center justify-center rounded-lg from-customOrange to-customRed p-2 text-gray-500 transition-transform hover:scale-hover-grow hover:bg-gradient-to-r">
        <div className="h-10 w-10  bg-[url('../assets/ts.svg')] bg-cover" />
        Ts
      </div>
      <div className="flex w-20 transform-gpu flex-col items-center justify-center rounded-lg from-customOrange to-customRed p-2 text-gray-500 transition-transform hover:scale-hover-grow hover:bg-gradient-to-r">
        <div className="h-10 w-10  bg-[url('../assets/react.svg')] bg-cover" />
        React
      </div>
      <div className="flex w-20 transform-gpu flex-col items-center justify-center rounded-lg from-customOrange to-customRed p-2 text-gray-500 transition-transform hover:scale-hover-grow hover:bg-gradient-to-r">
        <div className="h-10 w-10  bg-[url('../assets/sequelize.svg')] bg-cover" />
        Sequelize
      </div>
      <div className="flex w-20 transform-gpu flex-col items-center justify-center rounded-lg from-customOrange to-customRed p-2 text-gray-500 transition-transform hover:scale-hover-grow hover:bg-gradient-to-r">
        <div className="h-10 w-10  bg-[url('https://prismalens.vercel.app/header/logo-dark.svg')] bg-cover" />
        Prisma
      </div>
    </div>
  )
}
