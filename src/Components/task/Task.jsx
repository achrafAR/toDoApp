import React, { useState } from "react";
import "./task.css";

function Task({ description, date }) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div
      className="container_tasks"
      onClick={handleClick}
      style={{ backgroundColor: click ? "red" : "white" }}
    >
      <div>{description}</div>
      <div>{date}</div>
      <input type="checkbox"/>
    </div>
  );
}

export default Task;
