import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  /* object destructure - the todos in the array above represent every state, the setTodos is the function that updates those todos */
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos((prevTodos) => [...prevTodos, ...storedTodos]);
  }, []);
  //? this useEffect hook is to load todo items and it only needs to be fired once when the component mount since the empty [] never changes; and it will only fire if there is storedTodos.

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  //? any time the todos array changes, we want save the todos with the useEffect hook the the anonymous function written inside

  function toggleTodo(id) {
    const newTodos = [...todos];
    // newTodos is a copy of the original todos, so we don't directly change our original todos
    //! in React, never directly modify a state variable

    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    /* if user types in an empty string, no adding it to the todo list */
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
      /* need a library to automatically generate a random id for every new todo item added by user, npm i uuid */
    });
    todoNameRef.current.value = null;
    /* this line of code clear out the input field after the user input todo is added to the page */
  }

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Task</button>
      <button onClick={handleClearTodos}>Clear Finished Task</button>
      <div>{todos.filter((todo) => !todo.complete).length} left todo</div>
    </>
  );
}

export default App;
