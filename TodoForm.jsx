import React, { useState } from "react";

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setValue(""); // to clear the input after submit
    }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" placeholder="Today Task..." value={value}
      onChange={(e)=> setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
