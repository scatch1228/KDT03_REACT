import { useRef } from 'react'
import TailButton from '../components/TailButton'

export default function TodoInput() {
    const toAdd = useRef();
    const handleAdd = () => {
        if (toAdd.current.value==""){
            alert("할 일을 입력하세요?!");
            toAdd.current.focus();
        }

        const item = {id: Date.now(), text:toAdd.current.value, completed: false};
        //
        console.log('item to add = ', item);
        
        toAdd.current.value="";
        toAdd.current.focus();
    }

  return (
    <div className='flex flex-row items-center justify-between'>
      <input type='text' className='border-1 border-gray-600 w-8/10' ref={toAdd}/>
      <TailButton color='blue' text='추가' onHandle={handleAdd}/>
    </div>
  )
}
