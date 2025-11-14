import { useEffect, useState } from "react";
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"

export default function TodoList2() {
    const [todo, setTodo] = useState([]);
    const [items, setItems] = useState([]);
    const [comp, setComp] = useState([]);

    useEffect(()=>{
      const localTodo = JSON.parse(localStorage.getItem('todo'));
      // localStorage.setItem('todo' , JSON.stringify([{id: 34, text:'create React project', completed: false}]) );
      console.log('localTodo = ',localTodo);
      setTodo(localTodo);
      setComp(localTodo.filter(item=>item.completed == true));
    },[])

    useEffect(()=>{
      if (!todo) return ;
      console.log('state todo = ',todo);
      setItems(todo.map(item=><TodoItem key={item.id} todo={item}/>));
    },[todo])

  return (
    <div className="m-5">
      2호
        <span className="m-5 text-3xl font-bold">전체: {todo.length}개</span>
        <span className="m-5 text-3xl font-bold">완료: {comp.length ? comp.length : 0}개</span>
        <span className="m-5 text-3xl font-bold">잔여: {comp.length ? todo.length - comp.length : todo.length}개</span>
      <TodoInput/>
      {items}
    </div>
  )
}
