import { useState,useRef } from "react";

export default function MyRef() {
    //component variable
    let cnt = 0;
    const handleCnt = ()=>{
        cnt++;
        console.log(cnt);
    };
    //state variable
    const [sCnt, setSCnt] = useState(0);
    const handleSCnt = ()=>{
        setSCnt(sCnt+1);
        console.log(sCnt);
    };
    //ref varibale (스테이트 변수가 바뀔때 화면에 반영된다.)
    const rCnt=useRef(0);
    const handleRCnt = () => {
        rCnt.current = rCnt.current+1;
        console.log(rCnt);
    };

  return (
    <div className='w-full h-full text-xl font-bold flex justify-center items-center space-x-10'>
      <div>
        <div className="p-2 border-1 cursor-pointer" onClick={handleCnt}>Component Variable</div>
        <div className='text-center'>{cnt}</div>
      </div>
      <div>
        <div className="p-2 border-1 cursor-pointer" onClick={handleSCnt}>State Variable</div>
        <div className='text-center'>{sCnt}</div>
      </div>
      <div>
        <div className="p-2 border-1 cursor-pointer" onClick={handleRCnt}>Ref Variable</div>
        <div className='text-center'>{rCnt.current}</div>
      </div>
    </div>
  )
}
