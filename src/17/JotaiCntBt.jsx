import TailButton from "../components/TailButton"
import { useAtom } from "jotai"
import {cntAtom} from "./atoms"

export default function JotaiCntBt() {
    const[cnt,setCnt] = useAtom(cntAtom);
  return (
    <div className="flex flex-row">
      <TailButton text="증가" color="blue" onHandle={()=>setCnt(cnt+1)}/>
    <TailButton text="감소" color="orange" onHandle={()=>setCnt(cnt-1)}/>
    </div>
  )
}
