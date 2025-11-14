import { useState, useEffect } from "react"

export default function MyClockTime() {
    const [currentTime, setCurrentTime]=useState(new Date());

    useEffect(()=>{
        let timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return ()=> clearInterval(timer); //useEffect가 끝날때 return에 있는 액션을 취함. 지금 경우에는 창을 닫았을 때.
    }, [])
     
    const divStyle = {
        padding : "10px",
    }
    return (
        <div className="
        flex justify-center w-3/4 
        border-5 border-dotted border-black-500 rounded-b-3xl
        text-[30px] text-shadow-md opacity-50
        " 
        style={divStyle}>  
            <span style={{fontWeight : "bold"}}>
                현재시각 : {currentTime.toLocaleTimeString()}
            </span>
        </div>
    )
}