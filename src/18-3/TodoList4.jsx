import { useEffect, useState } from "react";
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
import {supabase} from "../supabase/client"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export default function TodoList3() {
  const [todo, setTodo] = useState([]);
  const [items, setItems] = useState([]);
  const [comp, setComp] = useState([]);

  //============= GET METHOD================
  const getTodo = async () => {
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .order('id', { ascending: false });
    if (error) {
      console.error('Error fetching todos:', error);
    } else {
      setTodo(data);
    }
  }
  //============= GET METHOD END=============


  //=============useEffects=============
  useEffect(() => {
    getTodo();
  }, [])

  useEffect(() => {
    setItems(todo.map(d => <TodoItem key={d.id} todo={d} getTodo={getTodo}/>))
  }, [todo])

  useEffect(()=>{
    console.log('items = ',items);
  },[items])
  //=============useEffects END==========

  return (
    <div className="m-5">
      Supabase Client lib 사용!
      <span className="m-5 text-3xl font-bold">전체: {todo.length}개</span>
      <span className="m-5 text-3xl font-bold">완료: {comp.length ? comp.length : 0}개</span>
      <span className="m-5 text-3xl font-bold">잔여: {comp.length ? todo.length - comp.length : todo.length}개</span>
      <TodoInput getTodo={getTodo}/>
      {items}
    </div>
  )
}
