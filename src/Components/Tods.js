import React from 'react'

const Tods = ({text,setTodos,todos,todo}) => {
  const completeHandler=()=>{
    setTodos(todos.map((item)=>{
      if(item.id===todo.id){
        return{
          ...item,
          completed:!item.completed
        }
      }
      return  item;
    }))
  }
  const deleteHandler=()=>{
    setTodos(todos.filter((elemt)=>elemt.id!==todo.id))
   
  }
  return (
    <div className='todo'>
      <li className={`todo-item ${todo.completed? "completed":""}`}>{text}</li>
        <button onClick={completeHandler} className='complete-button'>
        <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className='trash-button'>
        <i className="fas fa-trash"></i>
        </button>
   
    </div>
  )
}

export default Tods;