import React from "react";
import "./AddTask.css";

function AddTask() {
  return (
    <div className="addtask">
      <h4>AddTask</h4>
      <form className="formtask">
        <input
          className="inputtask"
          type="description"
          id="des"
          name="description"
          placeholder="Description"
        />
        <input
          className="inputtask"
          type="date"
          id="date"
          name="date"
          placeholder="Date"
        />
      </form>
    </div>
  );
}

export default AddTask;
