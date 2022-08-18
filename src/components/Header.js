import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

  return (
    <header className='header'>
        <h1>{title}</h1> 
        <Button color={showAdd ? 'black' : 'green'} btnName={showAdd ? 'Close' : 'Add' } onClick={onAdd} />
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

