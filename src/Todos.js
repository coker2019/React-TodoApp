import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="item-collection" key={todo.id}>
          <span>{todo.content}</span>
          <button  className="btn waves-effect waves-light padding-btn" onClick={() => {deleteTodo(todo.id)}}>Delete</button>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todos lef!</p>
  );
  
  return (
    <div className="todos collection">
      {todoList}
    </div>
  );
}

export default Todos;
