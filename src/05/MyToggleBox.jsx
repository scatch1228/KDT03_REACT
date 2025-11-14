import TailButton from "../components/TailButton"
import { useState } from "react";

const Divstyle = {
  blue: {
    on: "bg-blue-300",
    off: "bg-blue-100"
  },
  orange: {
    on: "bg-orange-400",
    off: "bg-orange-200"
  },
  lime: {
    on: "bg-lime-300",
    off: "bg-lime-100"
  }
}

export default function MyToggleBox({ color, onAct }) {
  const [isActive, setIsActive] = useState(false);

  const divstyle1 = Divstyle[color];

  const passColor = () => {
    onAct(color);
  }

  const handleClick = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  }

  return (
    <div className={`${isActive ? divstyle1.on : divstyle1.off} p-5 m-5 flex flex-col items-center`}>
      <h1>{color} 토글박스</h1>
      <p>현재상태: {isActive ? 'on' : 'off'}</p>
      <TailButton text={`${color}`} color={`${color}`} onHandle={passColor}/>
      <TailButton text={`${color} Toggle`} color={`${color}`}  onHandle={handleClick} />
    </div>
  )
}
