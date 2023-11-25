import React from 'react'
import Tods from './Tods';

const TodoList = ({todos, setTodos,filtertodos}) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
    {
      filtertodos.map((todo)=>(
        <Tods 
        setTodos={setTodos}
        key={todo.id}
        text={todo.text}
        todos={todos}
        todo={todo}
      
        />
      ))
    }
      </ul>
    </div>
  )
}

export default TodoList;