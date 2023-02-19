import React from 'react'
import "./box.css"
import Task from '../task/Task'

export default function Box() {
  return (
    <div className='box'>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
    </div>
  )
}
