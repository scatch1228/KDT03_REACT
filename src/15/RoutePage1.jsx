import { useParams } from "react-router-dom"

export default function RoutePage1() {
  const {item1, item2} = useParams();
  return (
    <div>
      p1
      {item1}{item2}
    </div>
  )
}
