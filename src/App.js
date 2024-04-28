import React, { useState } from "react";
import Todos from './Todos';
import AddTodo  from "./AddTodo";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: 'clean the sitting room' },
    { id: 2, content: 'play video games'}
  ]);

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const addTodo = (newTodo) => {
      // Generate a unique id for the newTodo
      newTodo.id = Math.random(); // Example of generating random unique id
    setTodos([...todos, newTodo]);

  }

  return (
    <div className='App'>
      <h1 className='center blue-text'>My Todo's</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo}/>
    </div>
  );
}

export default App;
