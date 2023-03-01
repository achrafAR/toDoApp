import React, { useState } from "react";
import "./box.css";
import Task from "../task/Task";
import AddTask from "../AddTask/AddTask";

export default function Box({ clicked }) {
  const [tasks, setTasks] = useState([
    {
      description: "first Task",
      date: "20-02-2022",
      id: 1,
    },
    {
      description: "second Task",
      date: "20-03-2022",
      id: 2,
    },
    {
      description: "third Task",
      date: "20-04-2022",
      id: 3,
    },
    {
      description: "fourth Task",
      date: "20-05-2022",
      id: 4,
    },
    {
      description: "fifth Task",
      date: "20-06-2022",
      id: 5,
    },
  ]);

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const addTask = (task) => {
    const newTask = {
      id: tasks.length + 1,
      ...task,
    };
    setTasks([...tasks, newTask]);
  };

  const RemoveDescription = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, description: "" };
        } else {
          return task;
        }
      })
    );
  };

  // const [showTask, setShowTask] = useState(false);

  // const handleAddTaskButtonClick = () => {
  //   setShowTask(!showTask);
  // };

  return (
    <div className="box">
      {/* <button className="press_me" onClick={handleAddTaskButtonClick}>
        <h3>Press Me</h3>
      </button> */}
      {clicked ? <AddTask onSubmit={addTask} /> : ""}
      {tasks.map((task, i) => (
        <Task
          onDeleteDescription={RemoveDescription}
          onDelete={deleteTask}
          task={task}
          key={i}
        />
      ))}
    </div>
  );
}
