
const Button = ({color, btnName, onClick}) => {

  return (
      <button onClick={onClick} style={{backgroundColor: color}}
       className='btn'>{btnName}
      </button>
  )
}

Button.defaultProps = {
    color: 'green',
    btnName: 'Add',
}

export default Button
