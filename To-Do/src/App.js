import './index.css';
import React, {useState} from 'react'
import ToDo from './components/ToDo'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [newTodo, setNewToDo] = useState("")
  const [todos, setTodos] = useState([])

  const handleNewTodoSubmit = (event) =>{
    event.preventDefault();
    if(newTodo.length === 0){
      return;
    }
    const todoItem = {
      text : newTodo,
      complete: false
    }

    setTodos([...todos, todoItem]);
    setNewToDo("");
  }
  const handleToDoDelete = (deleteIdx) => {
    const filteredTodos = todos.filter((todo, i) =>{
      return i!==deleteIdx;
    }
    )
    setTodos(filteredTodos)
  }

  const handleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => { 
      if(idx===i){
        todo.complete = !todo.complete
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
        <form onSubmit ={(event) =>{
          handleNewTodoSubmit(event)
        }}>
          <h2>Add an Item</h2>
          <div>
        <input onChange={(event)=> {
        setNewToDo(event.target.value)}} type="text" value={newTodo}/>
          <button className="btn btn-outline-info">Add</button>
        </div>
          </form>
          
          <div className='items'>
          {todos.map((todo, i)=>{
            return <ToDo todo={todo} key={i} i={i} handleComplete={handleComplete} handleToDoDelete={handleToDoDelete} />
          })}
          </div>
          </div>
  )
        }

export default App;


