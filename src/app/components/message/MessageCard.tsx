import React from 'react'
import SendMessage from './SendMessage'
import StatementBall from '../StatementBall'
import InfosCard from './InfosCard'

export default function MessageCard() {
  return (
    <div className="mt-10">
      <StatementBall orange="C" rest="ontate-me" bgColor="bg-customGray" />
      <div className="grid grid-cols-1 sm:min-h-4/6-screen lg:grid-cols-2">
        <div className="flex w-5/6 items-center justify-center sm:mb-10">
          <SendMessage />
        </div>
        <div className="flex w-5/6 items-center justify-center">
          <InfosCard />
        </div>
      </div>
    </div>
  )
}
