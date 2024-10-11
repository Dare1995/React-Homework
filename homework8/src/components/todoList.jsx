import React, { useContext } from "react";
import { TodoContext } from "../context/todoContext";

const TodoList = () => {
  const { todos, deleteTodo, editTodo, toggleComplete } = useContext(TodoContext);

  if (todos.length === 0) {
    return <p>Add some items to the list</p>;
  }

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>
          <button onClick={() => toggleComplete(todo.id)}>
            {todo.isCompleted ? "Undo" : "Complete"}
          </button>
          <span>{todo.text}</span>
          <button onClick={() => editTodo(todo.id, prompt("Edit Todo", todo.text))}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;