import { FaTimes } from 'react-icons/fa'

const Task = ({taskS, onDelete, onToggle}) => {
  return (
    <div className={` ${taskS.reminder ? 'taskCss-reminder' : 'taskCss'}`} 
    onDoubleClick={() => onToggle(taskS.id)}>
      <h3>
        {taskS.text} 
        <FaTimes className='delete'
        onClick={() => onDelete(taskS.id)}/>
      </h3>
      <p>{taskS.day}</p>

    </div>
  )
}

export default Task

