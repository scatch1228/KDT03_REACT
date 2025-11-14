import React from 'react'

export default function BoxOfficeCard({ item, onHandle }) {
    return (
        <tr className='m-2 hover:cursor-pointer' onClick={() => onHandle}>
            <td className='p-1 m-2 border-1 text-center'>{item.rank}</td>
            <td className='p-1 m-2 border-1'>{item.movieNm}</td>
            <td className='p-1 m-2 border-1'>{parseInt(item.salesAmt).toLocaleString()}</td>
            <td className='p-1 m-2 border-1'>{parseInt(item.audiCnt).toLocaleString()}</td>
            <td className='p-1 m-2 border-1'>{parseInt(item.salesAcc).toLocaleString()}</td>
            <td className='p-1 m-2 border-1'>{parseInt(item.audiAcc).toLocaleString()}</td>
            <td className='p-1 m-2 border-1 text-center'>{
            item.rankInten == 0 ? `-` 
            : item.rankInten > 0 ?  `▲` + item.rankInten
            : item.rankInten.replaceAll(`-`, `▼`)
            }</td>
        </tr>
    )
}
