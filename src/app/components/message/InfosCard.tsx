import React from 'react'
import { LocateFixed, Mail, Smartphone } from 'lucide-react'

export default function InfosCard() {
  return (
    <div className="mb-5 ml-20 mt-10 flex h-[446px] w-[404px] flex-col justify-between rounded-lg bg-gradient-to-r from-customOrange to-customRed text-lg font-bold sm:mb-0 lg:mt-0">
      <h3 className="pl-10 pr-5 pt-10 font-bold">Informação para contato</h3>
      <p className="pl-10 pr-5 text-left">
        Vamos falar sobre negócios, eu adoraria ouvir qualquer proposta.
      </p>
      <div className="flex pl-3 text-black hover:text-gray-800">
        <LocateFixed />
        <a
          download={'CV-Document'}
          target="_blank"
          href="/curriculo.pdf"
          className="pl-1"
          rel="noreferrer"
        >
          Baixe aqui meu CV
        </a>
      </div>
      <div className="flex pl-3">
        <Mail />
        <span className="pl-1">
          Email: gabrielferdev@gmail.com
          <br />
          hu3master.zord1@gmail.com
        </span>
      </div>
      <div className="flex pl-3">
        <Smartphone />
        <span className="pl-1">Telefone: +55 84 8831-5196</span>
      </div>
      <div className="flex pb-10 pl-3">
        <div className="h-[24px] w-[24px] bg-[url('../assets/discord.svg')] bg-cover" />
        <span className="pl-1">Discord: 叶修#9594</span>
      </div>
    </div>
  )
}
