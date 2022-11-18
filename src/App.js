import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
function App() {
  const [todos, setTodos] = useState([]);
  /* object destructure - the todos in the array above represent every state, the setTodos is the function that updates those todos */
  const todoNameRef = useRef();
  function handleAddTodo(e) {
    todoNameRef.current;
  }
  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Task</button>
      <button>Clear Finished Task</button>
      <div>0 left todo</div>
    </>
  );
}

export default App;
