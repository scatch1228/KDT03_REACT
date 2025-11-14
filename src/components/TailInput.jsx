export default function TailInput({type, name, ref}) {
  return (
    <div>
      <input type={type} name={name} ref={ref} className='w-8/10 p-2 border-1' />
    </div>
  )
}
