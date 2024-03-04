import React, { useState } from 'react'

interface Props{
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField:React.FC<Props> = ({todo,setTodo}) => {

  return (
    <form className='flex gap-2 justify-center mx-auto text-3xl'>
        <input type='input' placeholder='Enter a task' className='rounded shadow-lg text-center w-[300px] outline-none' onChange={(e)=>setTodo(e.target.value)}/>
      <button className='border p-1 text-white shadow-lg rounded text-' type='submit'>Create</button>
    </form>
  )
}

export default InputField