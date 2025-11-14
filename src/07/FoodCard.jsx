import './fooddata.json'
import busan from '../assets/busan.png'
import bank from '../assets/bank.png'
import market from '../assets/market.png'
import { useState } from 'react'

export default function FoodCard({ data }) {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(prev => !prev);
    }

    let imgUrl = data["구분"] == "기초푸드뱅크" ? bank
        : data["구분"] == "기초푸드마켓" ? market
            : busan;
        return (
            <div className='flex flex-row items-start border-2
        w-100% h-70 m-1 p-5 relative
        '>
                <img src={imgUrl} alt={imgUrl} />
                <div className='flex flex-col justify-start items-start w-8/10 h-95/100 relative'>
                    <h1 className='m-3 text-3xl font-bold'>{data["사업장명"]}</h1>
                    <h2 className='m-3 text-xl font-bold'>{data['운영주체명']}</h2>
                    <p className='m-3 text-gray-800'>{data['사업장 소재지']}</p>
                </div>
                <div className='cursor-pointer bg-blue-500' onClick={handleClick}>
                    {isActive &&
                        <ul>
                            <li>hello</li>
                        </ul>}
                </div>
            </div>
        )
}
