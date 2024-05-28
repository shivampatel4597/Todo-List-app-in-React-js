import React from 'react'
import List from './List'
import { Search } from './Search'
import { useState } from 'react'
export const Todowrapper = () => {
  let [todoItem, setTodoItem] = useState([])
  let [currentTodo, setCurrentTodo] = useState('')
  let [editIndex, setEditIndex] = useState(null);

  function addTodo(text){
    setTodoItem([...todoItem,{item:text, completed:false}])
    console.log(todoItem)
  }

  const editTodo = (text, index) => {
    const updatedTodos = todoItem.map((item, idx) =>
      index === idx ? { ...item, item: text } : item
    );
    setTodoItem(updatedTodos);
    setEditIndex(null);
    setCurrentTodo('');
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
     <Search addTodo={addTodo} editTodo={editTodo} editIndex={editIndex} currentTodo={currentTodo}/>
    <div className='py-6 h-[530px] px-5 lg:px-10 bg-[#141437] overflow-y-auto'>
   <List  todoItem={todoItem} setEditIndex={setEditIndex}  setCurrentTodo={setCurrentTodo} removeTodo={removeTodo} />
   
   </div>

    </div>
    </>
  )
}
