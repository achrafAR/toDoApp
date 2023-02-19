import React, { useState } from 'react'
import "./task.css"

function Task() {
  const tasks = {
    description : 'first Task',
    date : "20-02-2022",
  }
  const [click , setClick] = useState(false);

  const handleClick = () =>{
    setClick(!click);
  }
  return (
      <div className='container_tasks' 
      onClick={handleClick}
      style={{backgroundColor : click ? "red" : "white"}}
      >
        <div>{tasks.description}</div>
        <div>{tasks.date}</div>
      </div>
  )
}

export default Task