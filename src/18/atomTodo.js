import { atom } from "jotai";

export const todoAtom = atom ([
    {id: 1, text:'learn jotai', completed: false, text:'learn jotai2'},
    {id: 2, text:'create React project', completed: false},
])

export const completedAtom = atom((get)=>{
    const todos = get(todoAtom);
    console.log('todoAtom before filter = ',todos);
    return todos.filter(todo => todo.completed);
})