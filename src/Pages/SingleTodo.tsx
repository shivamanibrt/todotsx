import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model';
import { MdOutlineDone,MdModeEdit,MdDelete } from "react-icons/md";

type Props = {
todo:Todo;
todos:Todo[];
setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo:React.FC<Props>= ({todo,todos,setTodos}) => {
    
    const [edit,setEdit]= useState<boolean>(false);
    const [editTodo,setEditTodo]= useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null)


    const handelDone =(id:number)=>{
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
          ));        
    }

    const handelDelete =(id:number)=>{
        setTodos(todos.filter(todo =>
            todo.id !== id 
          ));        
    }
    
 
    const handleEdit = (e: React.FormEvent) => {
        e.preventDefault();

        setTodos(todos.map((item) =>
            item.id === todo.id ? { ...item, todo: editTodo } : item
        ));
        setEdit(false);
    };

    useEffect(()=>{
        inputRef.current?.focus()
    },[edit])
    

  return (
    <form className='flex border p-2 mt-5 w-96 justify-between shadow-custom hover:cursor-pointer text-2xl text-customWhite' onSubmit={handleEdit}>
       
       {
                edit ? (
                    <input className='outline-none' value={editTodo} onChange={(e) => setEditTodo(e.target.value)} 
                    ref={inputRef}/>
                ) : (
                    todo.isDone ? (
                        <s className=''>{todo.todo}</s>
                    ) : (
                        <span className="">{todo.todo}</span>
                    )
                )
            }


        <div className='flex gap-2 items-center'>
            <span className="icon" onClick={()=>handelDone(todo.id)}> <MdOutlineDone /> </span>
            <span className="icon" onClick={()=>{if(!edit && !todo.isDone){
                setEdit(!edit)
            }}} > <MdModeEdit /> 
            </span>
            <span className="icon" onClick={()=>handelDelete(todo.id)}> <MdDelete   /> </span>
        </div>
    </form>
  )
}

export default SingleTodo