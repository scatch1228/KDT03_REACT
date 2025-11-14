import TailButton from "../components/TailButton";
import { useState, useEffect } from "react";

export default function TodoItem({ todo }) {
    const [isEdit, setIsEdit] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleToggle = ()=>{
        // setTodos(
        //     todos => todos.map(t=>t.id == todo.id ? {...t, completed : !todo.completed} : t)
        // )
    }

    const handleEdit = () => {
        setIsEdit(true)
    }

    const handleDelete = () => {
        // setTodos(
        //     todos => todos.filter(t=>t.id != todo.id)
        // );
    }

    const handleSave = () => {
        // setTodos(
        //     todos => todos.map(t=>t.id == todo.id ? {...t, text:editText} : t)
        // );
        setIsEdit(false);
    }

    const handleCancel = () => {
        //setTodos(todos);
        setIsEdit(false);
    }

    return (
        <div className="flex flex-row border-1 border-gray-300 items-center justify-between">
            <div className="w-8/10 flex flex-row">
                <input type="checkbox" checked={todo.completed} onChange={handleToggle} className="mx-5" />
                {
                    isEdit ? <input
                        type="text"
                        className="border border-gray-600 p-2 flex-1"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />

                        : <span>{todo.text}</span>
                }
            </div>
            <div className="flex flex-row">
                {isEdit ? <>
                    <TailButton text='저장' color='lime' onHandle={handleSave} />
                    <TailButton text='취소' color='orange' onHandle={handleCancel} />
                </>
                    : <>
                        <TailButton text='수정' color='lime' onHandle={handleEdit} />
                        <TailButton text='삭제' color='orange' onHandle={handleDelete} />
                    </>}

            </div>
        </div>
    )
}
