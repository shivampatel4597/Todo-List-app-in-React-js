import React, { useState } from 'react'

export const Search = ({addTodo}) => {

  const [inputvalue, setInputvalue]  = useState('')

  function handleChange(e){
    let input = e.target.value;
    setInputvalue(input);
    
  }

  function addList(){
    addTodo(inputvalue)
  // console.log(inputvalue);
  setInputvalue('');
  
  }
  return (
    
    
<div className=' p-6 bg-green-500 flex items-center justify-center rounded-[10px]'>
  <div className='w-[80%]  flex  items-center justify-around gap-10'>
  <input onChange={handleChange} value={inputvalue} type='text' placeholder='Add list here' className='h-10 w-[80%] px-8  bg-gray-100 rounded-[20px] outline-none'/>
<button onClick={addList} className='text-white text-2xl  px-5 py- bg-black font-bold hover:bg-white hover:text-black rounded-md'>ADD</button> 
  </div>

</div>

  )
}
