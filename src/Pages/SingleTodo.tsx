import React, { useState } from 'react'
import { Todo } from '../model';
import { MdOutlineDone,MdModeEdit,MdDelete } from "react-icons/md";

type Props = {
todo:Todo;
todos:Todo[];
setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo:React.FC<Props>= ({todo,todos,setTodos}) => {
    
    const [edit,setedit]= useState<boolean>(false);
    const [edittodo,setEditTodo]= useState<string>(todo.todo);


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

  return (
    <form className='flex border p-2 mt-5 w-96 justify-between shadow-custom hover:cursor-pointer text-2xl' >
       
        {
            todo.isDone?(
                <s className=''>{todo.todo}</s>
            ): (
                <span className="">{todo.todo}</span>
            )
        }
        <div className='flex gap-2 items-center'>
            <span className="icon" onClick={()=>handelDone(todo.id)}> <MdOutlineDone /> </span>
            <span className="icon" > <MdModeEdit /> </span>
            <span className="icon" onClick={()=>handelDelete(todo.id)}> <MdDelete   /> </span>
        </div>
    </form>
  )
}

export default SingleTodo