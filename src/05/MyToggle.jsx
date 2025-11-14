import MyToggleBox from "./MyToggleBox"
import { useState } from "react"

export default function MyToggle() {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']

  const [toggleColor, setToggleColor] = useState('');
  const handleAct = (data) => {
    setToggleColor(`bg-${data}-200`);
  }

  return (
    <div className="flex flex-col items-center">
      <h1>MyToggle</h1>
      <p>현재상태: {toggleColor}</p>
      <div className={`w-8/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${toggleColor}`}>
        <MyToggleBox color='blue' onAct={handleAct} />
        <MyToggleBox color='orange' onAct={handleAct} />
        <MyToggleBox color='lime' onAct={handleAct} />
      </div>
    </div>
  )
}
