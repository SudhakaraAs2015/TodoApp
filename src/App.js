import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import { useEffect, useState } from 'react';

function App() {
  const [inputText,setInputText]=useState("")
  const[todos, setTodos]=useState([])
  const[status,setStatus]=useState("all")
  const [filtertodos,setFilterTodos]=useState([])
  

    useEffect(()=>{
      filterTodoHandler()
    },[todos,status])

  const filterTodoHandler=()=>{
    switch(status){
      case "completed":
      setFilterTodos(todos.filter(todo=>todo.completed===true))
      break;
      case "uncompleted":
      setFilterTodos(todos.filter(todo=>todo.completed===false))
      break;
      default:
        setFilterTodos(todos)
        break;
    }
  }


  return (
    <div className="App">
      <header className="App-header">
      <h1> Todo App</h1>
      </header>

      <Form 
      inputText={inputText} 
      setInputText={setInputText} 
      todos={todos} 
      setTodos={setTodos}
      setStatus={setStatus}
      />
      <TodoList  todos={todos} 
      setTodos={setTodos}
      filtertodos={filtertodos}
      />

    </div>
  );
}

export default App;
