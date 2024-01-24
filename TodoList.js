import React from 'react'
import Todo from './Todo';


const TodoList = ({tasks, onDelete}) => {
    return (
        <div>
          <h2 className="font-semibold text-xl text-violet-600 ml-4 my-4">Todo List</h2>
            {tasks.map(task => (
                <Todo task={task} key={task.id} onDelete={onDelete}/>
            ))}
        </div>
      );
}

export default TodoList