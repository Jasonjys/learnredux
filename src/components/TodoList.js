import React from 'react'
import {connect} from 'react-redux'

const TodoItem = ({name, isCompelete}) => (
  <li>
    <input type="checkbox" defaultChecked={isCompelete}/>
    {name}
  </li>
)

const TodoList = (props) => (
  <div className="Todo-list">
    <ul>
      {props.todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  </div>
)

const mapStateToProps = (state) => ({todos: state.todos})
export default connect(mapStateToProps)(TodoList)