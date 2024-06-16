import React, { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

export const TodoWrapper = () => {
  //   const [todos, setTodos] = useState([]);
  const localStorageKey = "todos";
  const [todos, setTodos] = useState(() => {
    // Fetch todos from local storage on initial load
    const storedTodos = localStorage.getItem(localStorageKey);
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    // Update local storage whenever todos change
    localStorage.setItem(localStorageKey, JSON.stringify(todos));
  }, [todos]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteToDo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editToDo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className="TodoWrapper">
      <h1 className="taskTitle">Get Tasks Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteToDo={deleteToDo}
            editToDo={editToDo}
          />
        )
      )}
    </div>
  );
};
