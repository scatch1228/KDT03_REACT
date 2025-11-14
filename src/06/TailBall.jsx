import React from 'react'

export default function TailBall(number) {
    //const n = JSON.stringify(number) ;
    const n = number.number;
    const ballcolor = [
      "bg-red-500",
      "bg-yellow-500",
      "bg-green-500",
      "bg-blue-500",
      "bg-purple-500",
    ]

    return (
    <div className={`flex flex-col justify-center items-center
    rounded-3xl text-white w-15 h-15 m-5
    ${ballcolor[Math.floor(n/10)]}`}>
      {n}
    </div>
  )
}
