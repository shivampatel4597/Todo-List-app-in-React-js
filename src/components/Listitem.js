import React from 'react'
import List from './List'
import { Search } from './Search'
import { useState } from 'react'
export const Listitem = () => {
  let [todoItem, setTodoItem] = useState([])

  function addTodo(text){
    setTodoItem([...todoItem,text])
    console.log(todoItem)
  }
  return (
    <>
    <div className=''>
     <Search addTodo={addTodo}/>
    <div className='py-6  px-10 '>
   <List todoItem={todoItem}/>
   
   </div>

    </div>
    </>
  )
}
