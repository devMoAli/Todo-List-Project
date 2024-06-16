import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faCheckCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, toggleComplete, deleteToDo, editToDo }) => {
  const handleClick = () => {
    toggleComplete(task.id);
  };
  return (
    <div className={`Todo ${task.completed ? "completed" : ""}`}>
      <p onClick={handleClick} className="taskText">
        {task.completed && (
          <FontAwesomeIcon icon={faCheckCircle} className="completed-icon" />
        )}
        <span className="taskContent">{task.task}</span>
      </p>
      <div>
        <abbr title="Edit">
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="fa-iconEdit"
            onClick={() => editToDo(task.id)}
          />
        </abbr>
        <abbr title="Delete">
          <FontAwesomeIcon
            icon={faTrash}
            className="fa-icon fa-iconDelete"
            onClick={() => deleteToDo(task.id)}
          />
        </abbr>
      </div>
    </div>
  );
};
