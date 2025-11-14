import TailButton from "../components/TailButton";
import { useAtom } from "jotai";
import { todoAtom } from "./atomTodo";
import { useState, useEffect } from "react";

export default function TodoItem_copy({todo}) {
    const [todos, setTodos] = useAtom(todoAtom);
    const [isEdit, setIsEdit] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleToggle = ()=>{
        setTodos(
            todos => todos.map(t=>t.id == todo.id ? {...t, completed : !todo.completed} : t)
        )
    }

    const handleDelete = ()=>{
        console.log("delete")
    }

    const handleEdit = () => {
        console.log("edit")
        setIsEdit(true) 
    }
    useEffect(()=>{
        console.log("edit mode = ",isEdit)
    },[isEdit])

  return (
    <div className="flex flex-row border-1 border-gray-300 items-center justify-between">
        <div className="flex flex-row">
        <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      { 
        isEdit ? <input 
                type="text" 
                value={editText} 
                onChange={(e)=>setEditText(e.target.value)}/>

                : <span>{todo.text}</span>
        }
      </div>
      <div className="flex flex-row">
        {isEdit ? <>
                <TailButton text='저장' color='lime' onHandle={()=>{}}/>
                <TailButton text='취소' color='orange' onHandle={()=>{}}/>
                </>
                : <>
                <TailButton text='수정' color='lime' onHandle={handleEdit}/>
                <TailButton text='삭제' color='orange' onHandle={handleDelete}/>
                </>}
 
      </div>
    </div>
  )
}
