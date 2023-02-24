import React, { useState } from "react";
import "./AddTask.css";

function AddTask({ onSubmit }) {
  const [form, setForm] = useState({ description: "", date: "" });
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
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          className="inputtask"
          type="date"
          id="date"
          name="date"
          placeholder="Date"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <button
          type="button"
          onClick={() => {
            onSubmit(form);
          }}
        >
          Add!
        </button>
      </form>
    </div>
  );
}

export default AddTask;
