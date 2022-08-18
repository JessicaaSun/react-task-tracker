import { FaTimes } from 'react-icons/fa'

const Task = ({taskS, onDelete}) => {
  return (
    <div className="taskCss">
      <h3>
        {taskS.text} <FaTimes className='delete'
        onClick={() => onDelete(taskS.id)}/>
      </h3>
      <p>{taskS.day}</p>

    </div>
  )
}

export default Task

