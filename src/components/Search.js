import React, { useState } from 'react'

export const Search = ({addTodo}) => {

  const [inputvalue, setInputvalue]  = useState('')

  function handleChange(e){
    let input = e.target.value;
    setInputvalue(input);
    
  }

  function addList(){
    if(inputvalue.trim()!==''){
      addTodo(inputvalue)
      // console.log(inputvalue);
      setInputvalue('');
    }
    else{
      alert("Add something in list item")
    }

  
  }

  function handleKeyPress(e){
    if(e.key === "enter"){
      addList()
    }
  }
  return (
    
    
<div className=' p-6 bg-gray-500 flex items-center justify-center rounded-[10px]'>
  <div className='w-[80%]  flex flex-col lg:flex-row items-center justify-around gap-3 lg:gap-10'>
  <input onChange={handleChange}  onKeypress={handleKeyPress} value={inputvalue} type='text' placeholder='Add list here' className='h-10 w-[100%] lg:w-[80%] px-8  bg-gray-100 rounded-[20px] outline-none'/>
<button onClick={addList}  className='text-white text-lg lg:text-2xl  px-5 py- bg-red-400 font-bold hover:bg-white hover:text-black rounded-md'>Add</button> 
  </div>

</div>

  )
}
