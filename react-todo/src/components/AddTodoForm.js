import { useState } from "react";

export default function AddTodoForm({ onAddTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onAddTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} data-testid="add-form">
      <input
        type="text"
        placeholder="Add todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        data-testid="todo-input"
      />
      <button type="submit" data-testid="add-btn">Add</button>
    </form>
  );
}
