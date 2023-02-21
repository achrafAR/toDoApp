import React, { useState } from "react";
import "./AddTask.css";
const AddTask = () => {
  const [form, setForm] = useState({ description: "", date: "" });

  return (
    <div className="add-task">
      <h3>Add Task</h3>
      <form>
        <input
          placeholder="Description"
          onChange={(e) => {
            setForm({ ...form, description: e.target.value });
          }}
        ></input>
        <input
          placeholder="Date"
          onChange={(e) => {
            setForm({ ...form, date: e.target.value });
          }}
        ></input>
        <button type="button" onClick={() => {}}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
