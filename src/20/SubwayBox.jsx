import scode from '../19/scode.json'

export default function SubwayBox({time,data}) {
    const tags = Object.keys(scode).map(item=>{
    return(
    <div key={item} className='h-25 w-40 border-1 my-2'>
      <div className='flex flex-col bg-green-800 text-white h-7/10 text-center'>
        {scode[item].name}
      </div>
      <div className='h-3/10 border-t-1 text-center'>
        {data && data[item]} {scode[item].unit}
      </div>
    </div>)
    })

  return (
    <div>
        시각 : {time}
    <div className='flex flex-row border-1 border-gray-300 my-10 p-5'>
        {tags}
    </div>
    </div>
  )
}
