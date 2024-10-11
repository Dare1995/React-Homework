import React, { useState, useContext } from "react";
import { TodoContext } from "../context/todoContext";

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo"
      />
      <button type="submit" disabled={!text.trim()}>
        Add
      </button>
    </form>
  );
};

export default AddTodo;