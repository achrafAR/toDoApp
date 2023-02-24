import React from "react";
import "./task.css";

function Task({ task, onDelete, onDeleteDescription }) {
  return (
    <div className="container_tasks">
      <img
        onClick={() => onDeleteDescription(task.id)}
        src="/pictures/deletered.png"
        alt="delete"
      />

      <div>{task.description}</div>
      <div>{task.date}</div>
      <div>{task.id}</div>
      <img
        onClick={() => onDelete(task.id)}
        src="/pictures/delete.png"
        alt="delete"
      />
    </div>
  );
}

export default Task;
