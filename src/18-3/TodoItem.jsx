import TailButton from "../components/TailButton";
import { useState, useEffect } from "react";
import { supabase } from "../supabase/client"

export default function TodoItem({ todo, getTodo }) {
    const [isEdit, setIsEdit] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleToggle = async () => {
        const { error } = await supabase
            .from('todos')
            .update({ completed: !todo.completed })
            .eq('id', todo.id);
        if (error) {
            console.error('Error toggling todo:', error);
        } else {
            getTodo();
        }
    }

    const handleEdit = () => {
        setIsEdit(true)
    }

    const handleDelete = async () => {
        const { error } = await supabase
            .from('todos')
            .delete()
            .eq('id', todo.id);
        if (error) {
            console.error('Error deleting todo:', error);
        } else {
            getTodo();
        }
    }

    const handleSave = async () => {
        const { error } = await supabase
            .from('todos')
            .update({ text: editText })
            .eq('id', todo.id);
        if (error) {
            console.error('Error toggling todo:', error);
        } else {
            getTodo();
        }
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
