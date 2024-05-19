import React from 'react'

function List({ todoItem, removeTodo }) {
    return (
        <>
            <ul className='list-disc flex flex-col items-center justify-center   bg-pink-600 rounded-md'>
                {

                    todoItem.map((todo, index) => (

                        <li className='w-[90%] lg:w-[90%] flex items-center     justify-between text-lg  px-4 py-1 my-2 bg-white' key={index}><span>{todo.item}</span> <input onChange={removeTodo} type='checkbox' className='form-checkbox hover:bg-red-600 h-5 w-5'/></li>  
                    ))
                }
            </ul>

        </>
    )
}

export default List