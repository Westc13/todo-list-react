import React from "react";
import Todo from "./Todo";

function TodoList({ todos }) {
  return todos.map((todo) => {
    return <Todo key={todo.id} todo={todo} />;
    /* the unique key allows React to only re-render the items in the array that is changed instead of re-render the whole array all over again every single time */
  });
}
export default TodoList;
