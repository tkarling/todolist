import React, { Component } from 'react'
import AddTodo from './AddTodo'
import Todos from '../components/Todos'

interface Todo {
  id: string
  title: string
  completed: boolean
}

let id = 0
const getId = () => ++id + ''

export default class TodoList extends Component {
  state: { todos: Todo[] } = {
    todos: [
      { id: getId(), title: 'hello', completed: false },
      { id: getId(), title: 'moi', completed: true }
    ]
  }

  onAdd = (title: String) => {
    const { todos } = this.state
    this.setState({
      todos: [{ id: getId(), title, completed: false }, ...todos]
    })
  }

  onDelete = (todoToDelete: Todo) => {
    const { todos } = this.state
    this.setState({ todos: todos.filter(todo => todo.id !== todoToDelete.id) })
  }

  onToggle = (todoToToggle: Todo) => {
    const { todos } = this.state
    this.setState({
      todos: todos.map(todo =>
        todo.id !== todoToToggle.id
          ? todo
          : { ...todo, completed: !todo.completed }
      )
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <AddTodo onAdd={this.onAdd} />
        <Todos
          todos={todos}
          onDelete={this.onDelete}
          onToggle={this.onToggle}
        />
      </div>
    )
  }
}
