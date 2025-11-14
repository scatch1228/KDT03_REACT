import { Link } from "react-router-dom"

export default function RouteNav() {
    return (
        <div className='w-full h-40 flex justify-center items-center'>
            <div className='py-1 px-2 mx-2 
      border border-amber-200 rounded-sm 
      items-center
      hover:bg-amber-200 hover:cursor-pointer'>
                <Link to="/">Home</Link>
            </div>
            <div className='py-1 px-2 mx-2 
      border border-amber-200 rounded-sm 
      items-center
      hover:bg-amber-200 hover:cursor-pointer'>
                <Link to="/p1/사과/바나나">Page1</Link>
            </div>
            <div className='py-1 px-2 mx-2 
      border border-amber-200 rounded-sm 
      items-center
      hover:bg-amber-200 hover:cursor-pointer'>
                <Link to="/p2">Page2</Link>
            </div>
        </div>
    )
}
