import React from "react";
import "./box.css";
import Task from "../task/Task";

export default function Box() {
  const tasks = [
    {
      description: "first Task",
      date: "20-02-2022",
    },
    {
      description: "second Task",
      date: "20-03-2022",
    },
    {
      description: "third Task",
      date: "20-04-2022",
    },
    {
      description: "fourth Task",
      date: "20-05-2022",
    },
    {
      description: "fifth Task",
      date: "20-06-2022",
    },
  ];
  return (
    <div className="box">
      {tasks.map((task) => (
        <Task description={task.description} date={task.date} />
      ))}
    </div>
  );
}
