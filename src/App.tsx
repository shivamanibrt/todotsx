import React, { useState } from 'react';
import './App.css';
import Hero from './Pages/Hero';
import InputField from './Pages/InputField';
import { Todo } from './model';
import TodoList from './Pages/TodoList';


const App:React.FC =()=> {
  const [todo,setTodo]= useState<string>("")
  const [todos,setTodos] = useState<Todo[]>([])
  
  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo(""); 
    }
  };
  console.log(todos)

  return (
    <div className="min-h-screen bg-customBlue">
     <Hero />
     <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
     <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
