import { useEffect, useState } from "react";
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY ;
export default function TodoList3() {
    const [todo, setTodo] = useState([]);
    const [items, setItems] = useState([]);
    const [comp, setComp] = useState([]);

    //============= GET METHOD================
    const getTodo = async ()=>{
      const resp = await fetch(`${supabaseUrl}/rest/v1/todos?select=*&order=id.desc`,{
        method: 'GET',
        headers: {
          'apiKey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
        }
      })//define response

      if(resp.ok) {
        const data = await resp.json();
        setTodo(data);
      }
      else {
        console.error('error fetching todos:', resp.statusText);
        setTodo([]);
      }//process response
    }
    //============= GET METHOD END=============


    //=============useEffects=============
    useEffect(()=>{
      getTodo();
    },[])

    useEffect(()=>{
      setItems(todo.map(d=><TodoItem key={d.id} todo={d}/>))
    },[todo])
    //=============useEffects END==========

  return (
    <div className="m-5">
      Supabase사용!
        <span className="m-5 text-3xl font-bold">전체: {todo.length}개</span>
        <span className="m-5 text-3xl font-bold">완료: {comp.length ? comp.length : 0}개</span>
        <span className="m-5 text-3xl font-bold">잔여: {comp.length ? todo.length - comp.length : todo.length}개</span>
      <TodoInput/>
      {items}
    </div>
  )
}
