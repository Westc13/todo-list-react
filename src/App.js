import React from "react";
import TodoList from "./TodoList";
function App() {
  return (
    <>
      <TodoList />
      <input type="text" />
      <button>Add Task</button>
      <button>Clear Finished Task</button>
      <div>0 left todo</div>
    </>
  );
}

export default App;
