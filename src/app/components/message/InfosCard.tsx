import React from 'react'
import { LocateFixed, Mail, Smartphone } from 'lucide-react'

export default function InfosCard() {
  return (
    <div className="ml-20 mt-10 flex h-[446px] w-[404px] flex-col justify-between rounded-lg bg-gradient-to-r from-customOrange to-customRed text-lg font-bold">
      <h3 className="pl-10 pr-5 pt-10 font-bold">Informação para contato</h3>
      <p className="pl-10 pr-5 text-left">
        Vamos falar sobre negocios, eu adoraria ouvir qualquer proposta.
      </p>
      <div className="flex pl-3">
        <LocateFixed />
        <span className="pl-1">Address: Rua peritiba 2770 Natal/Rn</span>
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
