import Task from "./Task"

const Tasks = ({tasks, onDeleteH}) => {

  return (
    <>
      {tasks.map((taskJ) => ( // when we use.map to output jsx, it's called a list and it should have its own unique key on each child
        <Task key={taskJ.id} taskS={taskJ} // display text in tasks
        onDelete={onDeleteH}/> 
      ))}
    </>
  )
}

export default Tasks
