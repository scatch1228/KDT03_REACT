import TailButton from "../components/TailButton"
import { useNavigate } from "react-router-dom"

export default function RouteHome() {
  const nav = useNavigate();

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className="flex">
        <TailButton color="blue" text="Page1 대길동/소길동" onHandle={()=>nav('/p1/대길동/소길동')} />
        <TailButton color="blue" text="Page2 좌길동/우길동" onHandle={()=>nav('/p2?item1=좌길동&item2=우길동')} />
      </div>
    </div>
  )
}
