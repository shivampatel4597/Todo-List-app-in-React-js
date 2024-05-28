import React from 'react';
import EditIcon from '@mui/icons-material/Edit';

function List({ todoItem, setCurrentTodo,setEditIndex, removeTodo }) {
    return (
        <>
            <ul className='list-disc flex flex-col items-center rounded-md w-full  '>
                {todoItem.map((todo, index) => (
                    <li
                        className='w-[100%] lg:w-[100%] my-2 bg-purple-600 text-white flex flex-col justify-between text-xl  px-4 py-2 rounded-md'
                        key={index}
                    >
                        <span className='w-full break-words'>{todo.item}</span>
                        <div className='flex items-center justify-end gap-6 mt-2'>
                            <span onClick={() =>{ setEditIndex(index)
                            setCurrentTodo(todo.item)

                            }} className='hover:text-black hover:cursor-pointer'>
                                <EditIcon />
                            </span>
                            <input
                                onClick={() => removeTodo(index)}
                                type='checkbox'
                                className='form-checkbox hover:bg-red-600 h-5 w-5'
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default List;
