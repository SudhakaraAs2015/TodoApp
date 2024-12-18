import React from 'react'

const Form = ({inputText,setInputText, todos,setTodos,setStatus}) => {
  const inputHandler=(e)=>{
    setInputText(e.target.value)
  }

const submitHandler=(e)=>{
  e.preventDefault();
  setTodos([
    ...todos,
    {text:inputText,completed:false,id:Math.random()*10}
  ])
  setInputText(" ")
}

const statusHandler=(e)=>{
  setStatus(e.target.value)
}
  return (
    <div>
      <form>
        <input onChange={inputHandler} value={inputText} type="text" className='todo-input'/>
        <button onClick={submitHandler} className='todo-button' type='submit'>
        <i className="fa-solid fa-plus"></i>
        </button>
        <div className='select'>
          <select onChange={statusHandler} className='filter-todo'name='todos'>
          <option vlaue="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Form;
