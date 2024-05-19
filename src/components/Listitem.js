import React from 'react'
import List from './List'
import { Search } from './Search'
import { useState } from 'react'
export const Listitem = () => {
  let [todoItem, setTodoItem] = useState([])

  function addTodo(text){
    setTodoItem([...todoItem,{item:text, completed:false}])
    console.log(todoItem)
  }

  function removeTodo(index){
    setTimeout(()=>{
      const newTodo = [...todoItem];
      newTodo.splice(index,1)
      setTodoItem(newTodo);
    },1000/2)
  
  }
  return (
    <>
    <div className=''>
     <Search addTodo={addTodo}/>
    <div className='py-6  px-10 '>
   <List todoItem={todoItem} removeTodo={removeTodo}/>
   
   </div>

    </div>
    </>
  )
}
