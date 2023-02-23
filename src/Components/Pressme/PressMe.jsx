import React, { useState } from "react";
import "./pressme.css";
import Box from "../Box/Box";
import AddTask from "../AddTask/AddTask";

function PressMe() {

  
  const [showForm, setShowForm] = useState(false);

  const handleShowFormButtonClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <button className="add_description" onClick={handleShowFormButtonClick}>
      <h3>Add Task</h3>
      </button>
    </div>
  );
}

export default PressMe;
