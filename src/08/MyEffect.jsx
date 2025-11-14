import { useState, useEffect } from "react"
import TailButton from "../components/TailButton";
import MyClock from "../02/MyClock";

export default function MyEffect() {
  const [tag, setTag] = useState(false);

  const handleClick = () => {
    setTag(!tag);
  }

  useEffect(()=>{
    console.log('create component');
  }, []); //useEffect는 어떤 함수를 무조건 실행시킨다. []에 있는 실행조건에 맞춰서.

    useEffect(()=>{
    console.log('create component');
  }, [tag]);

    return (
    <div className='w-full h-full flex justify-center items-center'>
      {tag ? 
      <TailButton color="blue" text="blue" onHandle={handleClick} />
    : <TailButton color="lime" text="lime" onHandle={handleClick} />}
      <MyClock/>
    </div>
  )
}
