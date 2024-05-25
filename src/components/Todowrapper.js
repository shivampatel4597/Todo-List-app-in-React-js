import React from 'react'
import List from './List'
import { Search } from './Search'
import { useState } from 'react'
export const Todowrapper = () => {
  let [todoItem, setTodoItem] = useState([])

  function addTodo(text){
    setTodoItem([...todoItem,{item:text, completed:false}])
    console.log(todoItem)
  }
  const editTodo = (index) => {
    const newItem = prompt('Edit your todo item:',);
    if (newItem) {
      const newTodos = [...todoItem];
      newTodos[index].item = newItem;
      setTodoItem(newTodos);
    }
  };

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
    <div className='py-6 h-[530px]  px-10 bg-[#141437] overflow-y-auto'>
   <List  todoItem={todoItem} editTodo={editTodo} removeTodo={removeTodo} />
   
   </div>

    </div>
    </>
  )
}
