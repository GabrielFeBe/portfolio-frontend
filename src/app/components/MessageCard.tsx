import React from 'react'
import StatementBall from './StatementBall'

export default function MessageCard() {
  return (
    <>
      <StatementBall orange="C" rest="ontate-me" bgColor="bg-customGray" />
      <div className="grid min-h-4/6-screen grid-cols-2">
        <div className="ml-20 mt-3 flex h-[446px] w-[433px] flex-col items-center justify-between">
          <div className="flex w-full justify-between">
            <label
              htmlFor="name"
              className="border-gradient flex h-[57px] w-[202px] items-center justify-center rounded-full bg-gradient-to-r from-customOrange to-customRed "
            >
              <input
                type="text"
                id="name"
                className="h-[55px] w-[200px] rounded-full bg-customGray pl-4 outline-none"
                placeholder="Nome"
                autoComplete="off"
              />
            </label>
            <label
              htmlFor="sobrenome"
              className="border-gradient flex h-[57px] w-[202px] items-center justify-center rounded-full bg-gradient-to-r from-customOrange to-customRed"
            >
              <input
                type="text"
                id="sobrenome"
                className="h-[55px] w-[200px] rounded-full bg-customGray pl-4 outline-none"
                placeholder="Sobrenome"
                autoComplete="off"
              />
            </label>
          </div>
          <label
            htmlFor="email"
            className="border-gradient flex h-[57px] w-[433px] items-center justify-center rounded-full bg-gradient-to-r from-customOrange to-customRed"
          >
            <input
              type="email"
              id="email"
              className="h-[55px] w-[431px] rounded-full bg-customGray pl-4 outline-none"
              placeholder="Email"
              autoComplete="off"
            />
          </label>

          <label
            htmlFor="email"
            className="border-gradient flex h-[190px] w-[433px] items-center justify-center rounded-20 bg-gradient-to-r from-customOrange to-customRed"
          >
            <textarea
              name="content"
              spellCheck={false}
              className=" h-[188px] w-[431px] resize-none rounded-20 border bg-customGray pl-4 pt-2  text-lg leading-relaxed outline-none placeholder:text-gray-400"
              placeholder="Mensagem"
            />
          </label>
          <button className="hover:mix-blend inline-block h-[49px] w-[167px] rounded-full bg-gradient-to-r from-customOrange to-customRed text-center text-sm leading-none transition duration-300 hover:opacity-70">
            Enviar
          </button>
        </div>
      </div>
    </>
  )
}
