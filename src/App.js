import { useState } from "react"
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";

// import './App.css';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasksState, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 7th at 6:00am',
        reminder: false,
    }
])

// delete task
const deleteTask = (id) => {
  setTasks(tasksState.filter((task) => task.id !== id))
}

//reminder
const toggleReminder = (id) => {
  setTasks(
    tasksState.map((task) => 
      task.id === id ? { ...task, reminder: !task.reminder } : task )
    )
 }
   
// Add Task
const addTask = (tasks)=> {
 
  const id = Math.floor(Math.random() * 10000) + 1 

  const newTask = { id, ...tasks }

  console.log(id, newTask)
  setTasks([...tasksState , newTask])
} 

  return (

    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}/>

      {showAddTask && <AddTask onAdd={addTask}/>} 
      {/* is showAddTask true it run AddTask */}
      {tasksState.length > 0 ? 
      <Tasks tasks={tasksState} onDeleteH={deleteTask}  onToggle={toggleReminder}/>
      : 'No Tasks Left' }
    </div>
  
  );
}

export default App;
