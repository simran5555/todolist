import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './index.css'
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {
      id : 1,
      text : "react project",
      date : "dec27"
    },
    {
      id : 2,
      text : "check mails",
      date : "dec29"
    },
    {
      id : 3,
      text : "productivity",
      date : "dec28"
    }
  ])

  const addTask = (task) => {
    console.log(task)
    const id = Math.floor(Math.random()*10000 + 1)
    const newTask = {id, ...task}
    setTasks ([...tasks, newTask])
  }

  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => id !== task.id))
  }

  return (
    <div className="App w-5/6 md:w-1/2 mx-auto mt-6 md:mt-5 lg:mt-10">
      <h1 className="text-center text-pretty font-bold text-xl py-8 text-violet-600">TASK TRACKER</h1>
      <AddTodo onAdd={addTask} />
      <TodoList tasks = {tasks} onDelete = {deleteTask}/>
    </div>
  );
}

export default App;
