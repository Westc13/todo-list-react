import React from "react";

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        {todo.name}
      </label>
    </div>
  );
}

//? Every time we click on the input, the onChange function is called and it calls the toggleTodo function with the id of the todo inside; the id then gets passed up through TodoList into App which calls this toggleTodo function which resets our todos variable to the newTodos with the todo checked that we clicked on
