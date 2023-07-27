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
      className="ml-20 mt-10 flex h-[446px] w-[433px] flex-col items-center justify-between"
    >
      <div className="flex w-full justify-between">
        <input
          type="hidden"
          name="accessKey"
          value="2d4c6379-7cc0-4bcd-bcfe-1dec43f65a72"
        />
        <label
          htmlFor="name"
          className="border-gradient flex h-[57px] w-[202px] items-center justify-center rounded-full bg-gradient-to-r from-customOrange to-customRed "
        >
          <input
            type="text"
            id="name"
            name="name"
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
            name="name"
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
          type="text"
          id="email"
          name="email"
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
          name="message"
          spellCheck={false}
          className=" h-[188px] w-[431px] resize-none rounded-20 border bg-customGray pl-4 pt-2  text-lg leading-relaxed outline-none placeholder:text-gray-400"
          placeholder="Mensagem"
        />
      </label>
      {/* <input type="submit" value="Submit" /> */}
      <input type="hidden" name="redirectTo" value={`${location}/sucess`} />

      <button
        className="hover:mix-blend inline-block h-[49px] w-[167px] rounded-full bg-gradient-to-r from-customOrange to-customRed text-center text-sm leading-none transition duration-300 hover:opacity-70"
        type="submit"
      >
        Enviar
      </button>
    </form>
  )
}
