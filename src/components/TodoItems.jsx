import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'
import edit from '../assets/edit.png'



const TodoItems = ({text, id, isComplete, editTodo, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={() => {toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? tick : not_tick} alt="" className='w-7'/>
            <p className={`text-slate-900 ml-4 text-[20px] decoration-orange-500 ${isComplete ? "line-through" : ""}`}>{text}</p>
        </div>
            <img onClick={() => {editTodo(id)}} src={edit} alt="" className='w-5 cursor-pointer'/>

            <img onClick={() => {deleteTodo(id)}} src={delete_icon} alt="" className='w-5 cursor-pointer'/>
        
    </div>
  )
}

export default TodoItems