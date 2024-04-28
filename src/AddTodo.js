import React, { useState } from "react";

function AddTodo({addTodo}) {
    const [content, setContent] = useState("");

    const handleContent = (event) => {
        setContent(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        if (content.trim() === "") {
          return; // Do not add empty todos
        }
    
        const newTodo = {
          id: Math.random(), // Generate a unique ID (can be improved)
          content: content.trim()
        };

        addTodo(newTodo);

       setContent('')
      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
               <label>Add new Todo:</label>
               <input type="text" value={content} onChange={handleContent}></input>
            </form>
        </div>
    )
}

export default AddTodo;