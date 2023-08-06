import React from 'react'

interface Props {
  orange: string
  rest: string
  bgColor: string
}

export default function StatementBall({ orange, rest, bgColor }: Props) {
  return (
    <h2
      className={`flex h-[60px] w-full items-center ${bgColor} justify-start pl-20 text-5xl`}
    >
      <div className="flex h-[55px] w-[55px] flex-shrink-0 items-center justify-end rounded-full bg-gradient-to-r from-customOrange to-customRed">
        {orange}
      </div>
      {rest}
    </h2>
  )
}
