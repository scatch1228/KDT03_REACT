import JotaiCntBt from "./JotaiCntBt"
import { useAtomValue } from "jotai"
import { cntAtom,dbCntAtom } from "./atoms";
//import { useState, useEffect } from "react"

export default function JotaiCnt() {
    const cnt = useAtomValue(cntAtom);
    const dbcnt = useAtomValue(dbCntAtom)
    //const [cnt,setCnt] = useState(0);
    //const [dbcnt,setDbcnt] = useState(0);
    /*
    useEffect(()=>{
        setDbcnt(cnt*2);
    },[cnt])*/

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold py-10">Jotai 전역 상태관리</h1>
        <div className='w-6/10 h-3/10 flex flex-col text-xl items-center'>
            <span>count : {cnt}</span>
            <span>double count : {dbcnt}</span>
        </div>
        <JotaiCntBt/>
    </div>
  )
}
