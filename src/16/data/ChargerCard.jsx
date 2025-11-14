import React from 'react'

export default function ChargerCard({color, title, num}) {
    const bgColor = {
        "blue" : "bg-blue-100",
        "orange" : "bg-orange-100"
    }
  return (
    <div className={`w-40 h-25 ${bgColor[color]} flex flex-col justify-center items-center m-5`}>
        <span>{title}</span>
        <span className='font-bold text-3xl'>{num}</span>
    </div>
  )
}
