'use client'
import React, { useEffect, useState } from 'react'

export default function SendMessage() {
  const [location, setLocation] = useState('teste')

  useEffect(() => {
    const locationTrue = window.location.href
    setLocation(locationTrue)
  }, [])

  return (
    <form
      action="https://api.staticforms.xyz/submit"
      method="post"
      className="ml-20 mt-10 flex flex-col items-center justify-between sm:h-[446px] sm:w-[433px]"
    >
      <div className="flex h-[60px] w-full flex-col justify-between sm:h-auto sm:flex-row">
        <input
          type="hidden"
          name="accessKey"
          value="2d4c6379-7cc0-4bcd-bcfe-1dec43f65a72"
        />
        <label
          htmlFor="name"
          className="flex h-[25px] w-[126px] items-center justify-center rounded-full bg-gradient-to-r from-customOrange to-customRed sm:h-[57px] sm:w-[202px]"
        >
          <input
            type="text"
            id="name"
            name="name"
            className="h-[23px] w-[124px] rounded-full bg-customGray pl-4 outline-none sm:h-[55px] sm:w-[200px]"
            placeholder="Nome"
            autoComplete="off"
          />
        </label>
        <label
          htmlFor="sobrenome"
          className="flex h-[25px] w-[126px] items-center justify-center rounded-full bg-gradient-to-r from-customOrange to-customRed sm:h-[57px] sm:w-[202px]"
        >
          <input
            type="text"
            id="sobrenome"
            name="name"
            className="h-[23px] w-[124px] rounded-full bg-customGray pl-4 outline-none sm:h-[55px] sm:w-[200px]"
            placeholder="Sobrenome"
            autoComplete="off"
          />
        </label>
      </div>
      <label
        htmlFor="email"
        className="mt-3 flex h-[25px] w-[268px] items-center justify-center rounded-full bg-gradient-to-r from-customOrange to-customRed sm:mt-0 sm:h-[57px] sm:w-[433px]"
      >
        <input
          type="text"
          id="email"
          name="email"
          className="h-[23px] w-[266px] rounded-full bg-customGray pl-4 outline-none sm:h-[55px] sm:w-[431px]"
          placeholder="Email"
          autoComplete="off"
        />
      </label>

      <label
        htmlFor="email"
        className="border-gradient mt-3 flex h-[92px] w-[268px] items-center justify-center rounded-20 bg-gradient-to-r from-customOrange to-customRed sm:mt-0 sm:h-[190px] sm:w-[433px]"
      >
        <textarea
          name="message"
          spellCheck={false}
          className="h-[90px] w-[266px] resize-none rounded-20 border bg-customGray pl-4 pt-2 text-xs leading-relaxed outline-none placeholder:text-gray-400  sm:h-[188px] sm:w-[431px] sm:text-lg"
          placeholder="Mensagem"
        />
      </label>
      {/* <input type="submit" value="Submit" /> */}
      <input type="hidden" name="redirectTo" value={`${location}/sucess`} />

      <button
        className="hover:mix-blend mt-3 inline-block h-[30px] w-[80px] rounded-full bg-gradient-to-r from-customOrange to-customRed text-center text-sm leading-none transition duration-300 hover:opacity-70 sm:h-[49px] sm:w-[167px]"
        type="submit"
      >
        Enviar
      </button>
    </form>
  )
}
