import React, { useState } from "react";
import "./task.css";

function Task({ task, onDelete }) {
  return (
    <div onDoubleClick={() => onDelete(task.id)} className="container_tasks">
      <div>{task.description}</div>
      <div>{task.date}</div>
      <input type="checkbox" />
    </div>
  );
}

export default Task;
