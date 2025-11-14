import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
import { todoAtom,completedAtom } from "./atomTodo"
import { useAtomValue } from "jotai";

export default function TodoList() {
    const todo = useAtomValue(todoAtom);
    const comp = useAtomValue(completedAtom);
    
    const items = todo.map(item=><TodoItem key={item.id} todo={item}/>)

  return (
    <div className="m-5">
        <span className="m-5 text-3xl font-bold">전체: {todo.length}개</span>
        <span className="m-5 text-3xl font-bold">완료: {comp.length ? comp.length : 0}개</span>
        <span className="m-5 text-3xl font-bold">잔여: {comp.length ? todo.length - comp.length : todo.length}개</span>
      <TodoInput/>
      {items}
    </div>
  )
}
