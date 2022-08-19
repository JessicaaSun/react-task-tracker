import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

// import './App.css';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasksState, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasksState')
    const data = await res.json()
    
    console.log(data)
    return data
  }
  
  // Fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasksState/${id}`)
    const data = await res.json()
    
    console.log(data)
    return data
  }

// delete task
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasksState/${id}`, {
    method: 'DELETE'
  })

  setTasks(tasksState.filter((task) => task.id !== id))
}

//reminder
const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id)
  const updTask = {...taskToToggle,
  reminder: !taskToToggle.reminder }
  
  const res = await fetch(`http://localhost:5000/tasksState/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updTask)
  })
  
const data = await res.json()

  setTasks(
    tasksState.map((task) => 
      task.id === id ? { ...task, reminder: data.reminder } : task )
    )
 }
   
// Add Task
const addTask = async (tasks)=> {
  const res = await fetch('http://localhost:5000/tasksState', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(tasks)
  })

  const data = await res.json()
  setTasks([...tasksState, data])
 
  // const id = Math.floor(Math.random() * 10000) + 1 
  // const newTask = { id, ...tasks }
  // console.log(id, newTask)
  // setTasks([...tasksState , newTask])
} 

  return (
    <BrowserRouter>
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}/>
      
      <Routes>
      <Route
        path='/'
        element={
          <>
          {showAddTask && <AddTask onAdd={addTask}/>} 
          {/* If showAddTask is true, it runs AddTask */}
          {tasksState.length > 0 ? 
          <Tasks tasks={tasksState} onDeleteH={deleteTask}  onToggle={toggleReminder}/>
          : 'No Tasks Left' }
          </>
        }/>
      
      <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>

    </BrowserRouter>
  );
}

export default App;
