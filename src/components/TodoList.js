import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTodos, toggleTodo, deleteTodo, getVisableTodos} from '../reducers/todo'

const TodoItem = ({id, name, isComplete, toggleTodo, deleteTodo}) => (
  <li>
    <span className="delete-item">
      <button onClick={() => deleteTodo(id)}>X</button>
    </span>
    <input 
      type="checkbox"
      checked={isComplete}
      onChange={() => toggleTodo(id)}
    />
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
            <TodoItem
              key={todo.id}
              toggleTodo={this.props.toggleTodo}
              deleteTodo={this.props.deleteTodo}
              {...todo} 
            />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({todos: getVisableTodos(state.todo.todos, ownProps.filter)})
const mapDispatchToProps = {fetchTodos, toggleTodo, deleteTodo}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)