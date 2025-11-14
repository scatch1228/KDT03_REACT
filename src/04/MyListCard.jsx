import { useState } from "react";

export default function MyListCard({ title, imgUrl, content }) {
    let [count, setCount] = useState(0);
    let [double, setDouble] = useState(0);
    const handleClick1 = () => {
        console.log(`${title} click`);
        setCount(count + 1);
        console.log("count=", count);
    }
    const handleClick2 = () => {
        console.log(`${title} click`);
        setDouble(double + 1);
        console.log("double=", double);
    }
    return (
        <div className='flex flex-row items-start border-2
        w-100% h-70 m-1 p-5 relative
        '>
            <img src={imgUrl} alt={imgUrl} />
            <div className='flex flex-col justify-start items-start w-8/10 h-95/100 relative'>
                <h1 className='m-3 text-3xl font-bold'>{title}</h1>
                <p className='m-3 text-gray-800'>{content}</p>

            </div>
            <div className='border-1 rounded-lg absolute bottom-5 right-31
                cursor-pointer hover:text-red-500 p-1
                ' onClick={handleClick1}>
                좋와요💖 {count}
            </div>
            <div className='border-1 rounded-lg absolute bottom-5 right-4
                cursor-pointer hover:text-blue-500 p-1
                ' onClick={handleClick2}>
                싢러요👎 {double}
            </div>
        </div>
    )
}
