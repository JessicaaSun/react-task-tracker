import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, name}) => {
  const onClick = () => {
    console.log('click')
  }
  return (
    <header className='header'>
        <h1>{title} {name}</h1> 
        <Button color='green' btnName='Add' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker' //can use Header = (props) (line 4) & {props.title} (line 7)
}

Header.propTypes = {
    title: PropTypes.string.isRequired, // take in ony string type
}
/*
// use this type when you're doing dynamic styling (CSS in JS)
const HeaderStyle = {
    color: 'red',
    backgroundColor: 'black' // not working properly
}
*/


export default Header

