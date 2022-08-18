import { useState } from "react"
import Header from './components/Header';
import Tasks from './components/Tasks';

// import './App.css';

const App = () => {
  // const name = 'Jess'
  // const x = false;
  const [tasks, setTasks] = useState([
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
  console.log('delete', id);
}

  return (

    <div className="container">
      {/* <h1>hello {name} {x ? 'yes' : 'no'}</h1> */}
      <Header name="jessica"/>
      <Tasks tasks={tasks} onDeleteH={deleteTask}/>
    </div>
  
  );
}

export default App;
