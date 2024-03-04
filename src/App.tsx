import React, { useState } from 'react';
import './App.css';
import Hero from './Pages/Hero';
import InputField from './Pages/InputField';

const App:React.FC =()=> {
  const [todo,setTodo]= useState<string>("")

  return (
    <div className="min-h-[90vh] bg-customBlue">
     <Hero />
     <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
