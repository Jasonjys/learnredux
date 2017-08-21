import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTodos} from '../reducers/todo'

const TodoItem = ({name, isComplete}) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete}/>
    {name}
  </li>
)

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }
  render () {
    return (
      <div className="Todo-list">
        <ul>
          {this.props.todos.map(todo => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({todos: state.todos})
const mapDispatchToProps = {fetchTodos}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)