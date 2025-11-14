import TailButton from "../components/TailButton"
import { useState } from "react"

export default function TrafficNav( {catSize, catName, selectC, setSelectC}) {
    //const[tags, setTags] = useState([]);

  return (
    <div className="w-full h-24 flex justify-between items-center">
      {catSize}분류
      {catName.map( (item, idx) => <TailButton key={idx} text={item} 
      color={selectC==item ? "orange" : "blue"} 
      onHandle={() => setSelectC(item)}/>)}
    </div>
  )
}
