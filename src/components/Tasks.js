import Task from "./Task"

const Tasks = ({tasks, onDeleteH, onToggle}) => {

  return (
    <>
      {tasks.map((taskJ, index) => ( // when we use.map to output jsx, it's called a list and it should have its own unique key on each child
        <Task key={index} taskS={taskJ} // display text in tasks
        onDelete={onDeleteH} onToggle={onToggle} /> 
      ))}
    </>
  )
}

export default Tasks
