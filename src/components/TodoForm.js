import React from 'react'
import {connect} from 'react-redux'
import {updateCurrent} from '../reducers/todo'

const TodoForm = (props) => {
  const {currentTodo, updateCurrent} = props
  const handleInputChange = (event) => {
    const val = event.target.value
    updateCurrent(val)
  }
  return (
    <form>
      <input type="text" 
        value={currentTodo}
        onChange={handleInputChange}
      />
    </form>
  )
}

const mapStateToProps = (state) => ({currentTodo: state.currentTodo})
const mapDispatchToProps = {updateCurrent}
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)