import React from 'react'
import Button from './Button'

const Todo = ({task , onDelete}) => {
  return (
    <div className="w-[75vw] mr-4 md:w-[600px] rounded-lg border-2 border-solid border-violet-500 bg-violet-50 ml-4 mb-2 px-3">
        <div className="flex justify-between">
            <span className="text-lg text-violet-800 font-semibold">{task.text}</span> <br />
            <Button text="X" clr="red" onClick={() => onDelete(task.id)}/>
        </div>
        <span className="text-sm text-violet-500">{task.date}</span>
    </div>
  )
}

export default Todo