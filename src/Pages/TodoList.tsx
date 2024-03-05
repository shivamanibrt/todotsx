import React from 'react'
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className='text-white flex flex-wrap justify-evenly items-center '>
        {todos.map((todo,index)=>(
            <SingleTodo 
            todo={todo} 
            key={todo.id} 
            todos={todos}
            setTodos={setTodos}/>
        ))}
    </div>
  )
}

export default TodoList;