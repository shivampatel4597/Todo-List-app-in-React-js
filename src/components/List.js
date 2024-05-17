import React from 'react'

function List({ todoItem }) {
    return (
        <>
            <ul className='list-disc flex flex-col items-center justify-center  bg-pink-600'>
                {

                    todoItem.map((todo, index) => (

                        <li className='w-[80%] text-lg  px-4 py-1 my-2 bg-white' key={index}><span>{todo}</span> <input type='checkbox'/></li>  
                    ))
                }
            </ul>

        </>
    )
}

export default List